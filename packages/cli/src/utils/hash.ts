export function generateFilenameFromUrl(input: string) {
  if (!URL.canParse(input)) {
    return murmurHash(input)
  }

  const url = new URL(input)
  return `${url.hostname}_${murmurHash(url.href)}`
}

function murmurHash(input: string, seed = 0) {
  const key = new TextEncoder().encode(input)
  let i = 0;
  let h1 = seed;
  let k1;
  let h1b;

  const remainder = key.length & 3; // key.length % 4
  const bytes = key.length - remainder;
  const c1 = 0xcc_9e_2d_51;
  const c2 = 0x1b_87_35_93;

  while (i < bytes) {
    k1 =
      (key[i] & 0xff) |
      ((key[++i] & 0xff) << 8) |
      ((key[++i] & 0xff) << 16) |
      ((key[++i] & 0xff) << 24);
    ++i;

    k1 =
      ((k1 & 0xff_ff) * c1 + ((((k1 >>> 16) * c1) & 0xff_ff) << 16)) &
      0xff_ff_ff_ff;
    k1 = (k1 << 15) | (k1 >>> 17);
    k1 =
      ((k1 & 0xff_ff) * c2 + ((((k1 >>> 16) * c2) & 0xff_ff) << 16)) &
      0xff_ff_ff_ff;

    h1 ^= k1;
    h1 = (h1 << 13) | (h1 >>> 19);
    h1b =
      ((h1 & 0xff_ff) * 5 + ((((h1 >>> 16) * 5) & 0xff_ff) << 16)) &
      0xff_ff_ff_ff;
    h1 =
      (h1b & 0xff_ff) + 0x6b_64 + ((((h1b >>> 16) + 0xe6_54) & 0xff_ff) << 16);
  }

  k1 = 0;

  switch (remainder) {
    case 3: {
      k1 ^= (key[i + 2] & 0xff) << 16;
      /* falls through */
    }
    case 2: {
      k1 ^= (key[i + 1] & 0xff) << 8;
      /* falls through */
    }
    case 1: {
      k1 ^= key[i] & 0xff;
      k1 =
        ((k1 & 0xff_ff) * c1 + ((((k1 >>> 16) * c1) & 0xff_ff) << 16)) &
        0xff_ff_ff_ff;
      k1 = (k1 << 15) | (k1 >>> 17);
      k1 =
        ((k1 & 0xff_ff) * c2 + ((((k1 >>> 16) * c2) & 0xff_ff) << 16)) &
        0xff_ff_ff_ff;
      h1 ^= k1;
    }
  }

  h1 ^= key.length;

  h1 ^= h1 >>> 16;
  h1 =
    ((h1 & 0xff_ff) * 0x85_eb_ca_6b +
      ((((h1 >>> 16) * 0x85_eb_ca_6b) & 0xff_ff) << 16)) &
    0xff_ff_ff_ff;
  h1 ^= h1 >>> 13;
  h1 =
    ((h1 & 0xff_ff) * 0xc2_b2_ae_35 +
      ((((h1 >>> 16) * 0xc2_b2_ae_35) & 0xff_ff) << 16)) &
    0xff_ff_ff_ff;
  h1 ^= h1 >>> 16;

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

