export function generateFilenameFromUrl(input: string) {
  if (!URL.canParse(input)) {
    return murmurHash(input)
  }

  const url = new URL(input)
  return `${url.hostname}_${murmurHash(url.href)}`
}

function murmurHash(input: string, seed = 0) {
  const key = new TextEncoder().encode(input)
  let i = 0
  let h1 = seed
  let k1
  let h1b

  const remainder = key.length & 3 // key.length % 4
  const bytes = key.length - remainder
  const c1 = 0xCC_9E_2D_51
  const c2 = 0x1B_87_35_93

  while (i < bytes) {
    k1
      = (key[i] & 0xFF)
        | ((key[++i] & 0xFF) << 8)
        | ((key[++i] & 0xFF) << 16)
        | ((key[++i] & 0xFF) << 24)
    ++i

    k1
      = ((k1 & 0xFF_FF) * c1 + ((((k1 >>> 16) * c1) & 0xFF_FF) << 16))
        & 0xFF_FF_FF_FF
    k1 = (k1 << 15) | (k1 >>> 17)
    k1
      = ((k1 & 0xFF_FF) * c2 + ((((k1 >>> 16) * c2) & 0xFF_FF) << 16))
        & 0xFF_FF_FF_FF

    h1 ^= k1
    h1 = (h1 << 13) | (h1 >>> 19)
    h1b
      = ((h1 & 0xFF_FF) * 5 + ((((h1 >>> 16) * 5) & 0xFF_FF) << 16))
        & 0xFF_FF_FF_FF
    h1
      = (h1b & 0xFF_FF) + 0x6B_64 + ((((h1b >>> 16) + 0xE6_54) & 0xFF_FF) << 16)
  }

  k1 = 0

  switch (remainder) {
    case 3: {
      k1 ^= (key[i + 2] & 0xFF) << 16
      /* falls through */
    }
    case 2: {
      k1 ^= (key[i + 1] & 0xFF) << 8
      /* falls through */
    }
    case 1: {
      k1 ^= key[i] & 0xFF
      k1
        = ((k1 & 0xFF_FF) * c1 + ((((k1 >>> 16) * c1) & 0xFF_FF) << 16))
          & 0xFF_FF_FF_FF
      k1 = (k1 << 15) | (k1 >>> 17)
      k1
        = ((k1 & 0xFF_FF) * c2 + ((((k1 >>> 16) * c2) & 0xFF_FF) << 16))
          & 0xFF_FF_FF_FF
      h1 ^= k1
    }
  }

  h1 ^= key.length

  h1 ^= h1 >>> 16
  h1
    = ((h1 & 0xFF_FF) * 0x85_EB_CA_6B
      + ((((h1 >>> 16) * 0x85_EB_CA_6B) & 0xFF_FF) << 16))
    & 0xFF_FF_FF_FF
  h1 ^= h1 >>> 13
  h1
    = ((h1 & 0xFF_FF) * 0xC2_B2_AE_35
      + ((((h1 >>> 16) * 0xC2_B2_AE_35) & 0xFF_FF) << 16))
    & 0xFF_FF_FF_FF
  h1 ^= h1 >>> 16

  return (h1 >>> 0).toString(32)
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest

  test('generateFilenameFromUrl', () => {
    expect(generateFilenameFromUrl('https://example.com/graphql'))
      .toMatchInlineSnapshot(`"example.com_3l2npcd"`)
    expect(generateFilenameFromUrl('https://a.example.com/graphql'))
      .toMatchInlineSnapshot(`"a.example.com_1eksdur"`)
    expect(generateFilenameFromUrl('https://idk.com/graphql'))
      .toMatchInlineSnapshot(`"idk.com_d2a894"`)
    expect(generateFilenameFromUrl('https://example.com/graphql?mode=admin'))
      .toMatchInlineSnapshot(`"example.com_135us4r"`)
    expect(generateFilenameFromUrl('https://example.com/graphql#somehash'))
      .toMatchInlineSnapshot(`"example.com_qngsra"`)
    expect(generateFilenameFromUrl('/graphql'))
      .toMatchInlineSnapshot(`"38oqs8a"`)
  })
}
