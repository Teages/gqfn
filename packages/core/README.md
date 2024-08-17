# @gqfn/core

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]

<!-- [![bundle][bundle-src]][bundle-href] -->
<!-- [![Codecov][codecov-src]][codecov-href] -->

GQFn provides a *typed* way to write GraphQL queries with the help of TypeScript.

<!-- - ✨ [Stackblitz Playground](#) TODO: new playground -->
- 📖 [Documentation](https://gqfn.teages.xyz)

## Usage

Install package:

```sh
# ✨ Auto-detect
npx nypm i @gqfn/core

# npm
npm install @gqfn/core

# yarn
yarn add @gqfn/core

# pnpm
pnpm install @gqfn/core

# bun
bun install @gqfn/core
```

Import:

```js
// ESM
import { useSchema } from '@gqfn/core'
```

```js
// CommonJS
const { useSchema } = require('@gqfn/core')
```

## Development

- Clone this repository
- Install latest LTS version of [Node.js](https://nodejs.org/en/)
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Run interactive tests using `pnpm dev`

## License

Published under [MIT License](./LICENSE).

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@gqfn/core?style=flat&color=blue
[npm-version-href]: https://npmjs.com/package/@gqfn/core
[npm-downloads-src]: https://img.shields.io/npm/dm/@gqfn/core?style=flat&color=blue
[npm-downloads-href]: https://npmjs.com/package/@gqfn/core

<!-- [codecov-src]: https://img.shields.io/codecov/c/gh/Teages/gqfn/main?style=flat&color=blue
[codecov-href]: https://codecov.io/gh/Teages/gqfn

[bundle-src]: https://img.shields.io/bundlephobia/minzip/@gqfn/core?style=flat&color=blue
[bundle-href]: https://bundlephobia.com/result?p=@gqfn/core -->
