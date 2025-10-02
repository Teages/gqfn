# Changelog


## v0.7.0

[compare changes](https://github.com/Teages/gqfn/compare/v0.6.0...v0.7.0)

### 🚀 Enhancements

- **cli:** ⚠️  Split cli to standalone package ([288b5af](https://github.com/Teages/gqfn/commit/288b5af))
- ⚠️  Split cli to standalone package ([#9](https://github.com/Teages/gqfn/pull/9))
- ⚠️  Refactor type system ([#10](https://github.com/Teages/gqfn/pull/10))
- ⚠️  Move variables into vars field ([#13](https://github.com/Teages/gqfn/pull/13))

### 🩹 Fixes

- Release command not work on unix ([5a0a3e2](https://github.com/Teages/gqfn/commit/5a0a3e2))
- Add missing license files and tsconfig ([7573d4f](https://github.com/Teages/gqfn/commit/7573d4f))
- Replace `@gqfn/core/cli` with `@gqfn/cli` ([0e19735](https://github.com/Teages/gqfn/commit/0e19735))
- Update postinstall script to build cli package ([aea35d6](https://github.com/Teages/gqfn/commit/aea35d6))
- Add @gqfn/cli as a devDependency of docs ([71605be](https://github.com/Teages/gqfn/commit/71605be))

### 📖 Documentation

- Update docs for 0.7.0 ([#12](https://github.com/Teages/gqfn/pull/12))
- Update documentation ([#14](https://github.com/Teages/gqfn/pull/14))

### 🏡 Chore

- Update dependence ([#11](https://github.com/Teages/gqfn/pull/11))
- **ci:** Add release ci ([0380df8](https://github.com/Teages/gqfn/commit/0380df8))
- **ci:** Improve release workflow ([b3a516d](https://github.com/Teages/gqfn/commit/b3a516d))
- **lint:** Apply automatic fix ([796b07d](https://github.com/Teages/gqfn/commit/796b07d))

### ✅ Tests

- **cli:** Update snapshot ([dd4e544](https://github.com/Teages/gqfn/commit/dd4e544))

#### ⚠️ Breaking Changes

- **cli:** ⚠️  Split cli to standalone package ([288b5af](https://github.com/Teages/gqfn/commit/288b5af))
- ⚠️  Split cli to standalone package ([#9](https://github.com/Teages/gqfn/pull/9))
- ⚠️  Refactor type system ([#10](https://github.com/Teages/gqfn/pull/10))
- ⚠️  Move variables into vars field ([#13](https://github.com/Teages/gqfn/pull/13))

### ❤️ Contributors

- Teages ([@Teages](https://github.com/Teages))

## v0.6.0

[compare changes](https://github.com/Teages/gqfn/compare/v0.5.1...v0.6.0)

### 🚀 Enhancements

- **types:** Expand output types for partical ([4942338](https://github.com/Teages/gqfn/commit/4942338))

### 🩹 Fixes

- Nitro utils import alias ([d1d66f2](https://github.com/Teages/gqfn/commit/d1d66f2))
- **ci:** Command not work on unix ([b878f9e](https://github.com/Teages/gqfn/commit/b878f9e))
- **types:** Accept input variable for input argument ([#8](https://github.com/Teages/gqfn/pull/8))

### 🏡 Chore

- **lint:** Apply automated fixes ([f9b6d72](https://github.com/Teages/gqfn/commit/f9b6d72))
- ⚠️  Remove client utils from package ([#7](https://github.com/Teages/gqfn/pull/7))
- **nuxt:** Mark gqfn/core as peer dependency ([acf2dbf](https://github.com/Teages/gqfn/commit/acf2dbf))
- **ci:** Upgrade node version ([47e8f15](https://github.com/Teages/gqfn/commit/47e8f15))

### ✅ Tests

- Add test for partical with array select ([d1a777f](https://github.com/Teages/gqfn/commit/d1a777f))
- Update cli snapshots ([b9884db](https://github.com/Teages/gqfn/commit/b9884db))

#### ⚠️ Breaking Changes

- ⚠️  Remove client utils from package ([#7](https://github.com/Teages/gqfn/pull/7))

### ❤️ Contributors

- Teages ([@Teages](https://github.com/Teages))

## v0.5.1

[compare changes](https://github.com/Teages/gqfn/compare/v0.5.0...v0.5.1)

### 🚀 Enhancements

- **types:** Expand output types ([02dfc1a](https://github.com/Teages/gqfn/commit/02dfc1a))

### 🏡 Chore

- Fix playground types ([51e9154](https://github.com/Teages/gqfn/commit/51e9154))

### ❤️ Contributors

- Teages ([@Teages](http://github.com/Teages))

## v0.5.0

[compare changes](https://github.com/Teages/gqfn/compare/v0.4.1...v0.5.0)

### 🩹 Fixes

- **ci:** Fix autofix ([0a2cc04](https://github.com/Teages/gqfn/commit/0a2cc04))
- Type object should not be simply selected ([9ad631e](https://github.com/Teages/gqfn/commit/9ad631e))

### 🏡 Chore

- Upgrade node to 22 ([eefd61a](https://github.com/Teages/gqfn/commit/eefd61a))
- **lint:** Apply lint fix ([3d8b12f](https://github.com/Teages/gqfn/commit/3d8b12f))
- ⚠️  Drop cjs support ([b1e7318](https://github.com/Teages/gqfn/commit/b1e7318))

### ✅ Tests

- Add test for PrepareField ([a54086f](https://github.com/Teages/gqfn/commit/a54086f))

#### ⚠️ Breaking Changes

- ⚠️  Drop cjs support ([b1e7318](https://github.com/Teages/gqfn/commit/b1e7318))

### ❤️ Contributors

- Teages ([@Teages](http://github.com/Teages))

## v0.4.1

[compare changes](https://github.com/Teages/gqfn/compare/v0.4.0...v0.4.1)

### 🏡 Chore

- **core:** Disallow directives input in simply params ([2c5d8ff](https://github.com/Teages/gqfn/commit/2c5d8ff))

### ❤️ Contributors

- Teages ([@Teages](http://github.com/Teages))

## v0.4.0

[compare changes](https://github.com/Teages/gqfn/compare/v0.3.0...v0.4.0)

### 🚀 Enhancements

- ⚠️  Refactor to support graphql fragment ([fb60031](https://github.com/Teages/gqfn/commit/fb60031))

### 🩹 Fixes

- **docs:** Fix twoslash types ([ab704b2](https://github.com/Teages/gqfn/commit/ab704b2))

### 💅 Refactors

- **core:** Clean up ([f8e6302](https://github.com/Teages/gqfn/commit/f8e6302))

### 🏡 Chore

- **docs:** Fix cloudflare build ([219c79d](https://github.com/Teages/gqfn/commit/219c79d))
- **nuxt:** Move to nuxt 4 directory structure ([401c4f2](https://github.com/Teages/gqfn/commit/401c4f2))
- **core:** Remove global context ([1278757](https://github.com/Teages/gqfn/commit/1278757))
- **lint:** Apply lint fix ([c5ae498](https://github.com/Teages/gqfn/commit/c5ae498))
- Upgrade dependence ([2dad13a](https://github.com/Teages/gqfn/commit/2dad13a))
- **nuxt:** Use vue-tsc 3fb59af ([022bc4c](https://github.com/Teages/gqfn/commit/022bc4c))
- **nuxt:** Downgrade typescript ([5ac60ee](https://github.com/Teages/gqfn/commit/5ac60ee))

#### ⚠️ Breaking Changes

- ⚠️  Refactor to support graphql fragment ([fb60031](https://github.com/Teages/gqfn/commit/fb60031))

### ❤️ Contributors

- Teages ([@Teages](http://github.com/Teages))

## v0.3.0

[compare changes](https://github.com/Teages/gqfn/compare/v0.2.1...v0.3.0)

### 🚀 Enhancements

- **cli:** Support import schema from ts file ([7205ab1](https://github.com/Teages/gqfn/commit/7205ab1))
- Merge nuxt module ([07feb8c](https://github.com/Teages/gqfn/commit/07feb8c))

### 🩹 Fixes

- **cli:** SchemaConfig.export is not followed ([3f7f305](https://github.com/Teages/gqfn/commit/3f7f305))
- **nuxt:** Apply import changes to nuxt module ([56c22d6](https://github.com/Teages/gqfn/commit/56c22d6))
- **docs:** Fix the wrong import path ([d0afb45](https://github.com/Teages/gqfn/commit/d0afb45))

### 📖 Documentation

- **nuxt:** Add docs for nuxt module ([ef6ae89](https://github.com/Teages/gqfn/commit/ef6ae89))

### 🏡 Chore

- Clean up types ([76a6e15](https://github.com/Teages/gqfn/commit/76a6e15))
- **release:** V0.2.1 ([6d26c38](https://github.com/Teages/gqfn/commit/6d26c38))
- Clean up playground and test ([2a54933](https://github.com/Teages/gqfn/commit/2a54933))
- Add wip warning ([a3a9196](https://github.com/Teages/gqfn/commit/a3a9196))
- Apply automated fixes ([1307655](https://github.com/Teages/gqfn/commit/1307655))
- **lint:** Apply lint fix ([d1b7070](https://github.com/Teages/gqfn/commit/d1b7070))
- ⚠️  Rename export ([45a3611](https://github.com/Teages/gqfn/commit/45a3611))
- Back to jiti and remove tsx ([686d3e7](https://github.com/Teages/gqfn/commit/686d3e7))
- Use importx to import schema modules ([5eaa3ed](https://github.com/Teages/gqfn/commit/5eaa3ed))
- Using monorepo ([3241d42](https://github.com/Teages/gqfn/commit/3241d42))
- Fix global build script ([05c1f34](https://github.com/Teages/gqfn/commit/05c1f34))
- Add README.md for monorepo ([ce632cd](https://github.com/Teages/gqfn/commit/ce632cd))
- ⚠️  Rename package ([fb02d54](https://github.com/Teages/gqfn/commit/fb02d54))
- **nuxt:** Disable schema check ([fd7c8bc](https://github.com/Teages/gqfn/commit/fd7c8bc))
- ⚠️  Limit the effect scope of node api ([eb5a7a1](https://github.com/Teages/gqfn/commit/eb5a7a1))
- Move doc to single package ([8dc2258](https://github.com/Teages/gqfn/commit/8dc2258))
- **docs:** Add tsconfig for document ([2838ca5](https://github.com/Teages/gqfn/commit/2838ca5))
- **core:** ⚠️  Clean up file tree ([dc71c6f](https://github.com/Teages/gqfn/commit/dc71c6f))
- Clean up lint config and package.json ([4846f34](https://github.com/Teages/gqfn/commit/4846f34))
- **nuxt:** Clean up deprecated ([5ef3362](https://github.com/Teages/gqfn/commit/5ef3362))
- Update ci ([39c2fd8](https://github.com/Teages/gqfn/commit/39c2fd8))
- Update README ([893c2d1](https://github.com/Teages/gqfn/commit/893c2d1))
- Release utils ([d69dcc3](https://github.com/Teages/gqfn/commit/d69dcc3))

### ✅ Tests

- **typed:** Add type test for typed ([aea29e8](https://github.com/Teages/gqfn/commit/aea29e8))
- **core:** Clean up coverage ([db3f833](https://github.com/Teages/gqfn/commit/db3f833))

#### ⚠️ Breaking Changes

- ⚠️  Rename export ([45a3611](https://github.com/Teages/gqfn/commit/45a3611))
- ⚠️  Rename package ([fb02d54](https://github.com/Teages/gqfn/commit/fb02d54))
- ⚠️  Limit the effect scope of node api ([eb5a7a1](https://github.com/Teages/gqfn/commit/eb5a7a1))
- **core:** ⚠️  Clean up file tree ([dc71c6f](https://github.com/Teages/gqfn/commit/dc71c6f))

### ❤️ Contributors

- Teages ([@Teages](http://github.com/Teages))

## v0.2.1

[compare changes](https://github.com/Teages/gqfn/compare/v0.2.0...v0.2.1)

### 🩹 Fixes

- **typed:** Nullable or array output parser ([cb1ae43](https://github.com/Teages/gqfn/commit/cb1ae43))

### 🏡 Chore

- Clean up types ([76a6e15](https://github.com/Teages/gqfn/commit/76a6e15))

### ❤️ Contributors

- Teages ([@Teages](http://github.com/Teages))

## v0.2.0

[compare changes](https://github.com/Teages/gqfn/compare/v0.1.1...v0.2.0)

### 🩹 Fixes

- **docs:** Remove dead link ([3951997](https://github.com/Teages/gqfn/commit/3951997))
- **cli:** Silent not work ([c967436](https://github.com/Teages/gqfn/commit/c967436))

### 📖 Documentation

- **cli:** Update type ([8c52c6e](https://github.com/Teages/gqfn/commit/8c52c6e))

### 🏡 Chore

- Update playground link ([48fa538](https://github.com/Teages/gqfn/commit/48fa538))
- **typed:** Export typed node ([679170e](https://github.com/Teages/gqfn/commit/679170e))
- **cli:** Improve type export ([c164a5b](https://github.com/Teages/gqfn/commit/c164a5b))
- ⚠️  Improve config file ([21f9453](https://github.com/Teages/gqfn/commit/21f9453))

### ✅ Tests

- Improve test coverage ([9f53e34](https://github.com/Teages/gqfn/commit/9f53e34))

#### ⚠️ Breaking Changes

- ⚠️  Improve config file ([21f9453](https://github.com/Teages/gqfn/commit/21f9453))

### ❤️ Contributors

- Teages ([@Teages](http://github.com/Teages))

## v0.1.1

[compare changes](https://github.com/Teages/gqfn/compare/v0.1.0...v0.1.1)

### 🩹 Fixes

- **cli:** Remove crlf line ([37ffa1e](https://github.com/Teages/gqfn/commit/37ffa1e))

### 🏡 Chore

- **release:** V0.1.0 ([b5b4af0](https://github.com/Teages/gqfn/commit/b5b4af0))

### ❤️ Contributors

- Teages ([@Teages](http://github.com/Teages))

## v0.1.0

[compare changes](https://github.com/Teages/gqfn/compare/v0.0.1...v0.1.0)

### 🩹 Fixes

- **cli:** Exec format error ([df8ffb6](https://github.com/Teages/gqfn/commit/df8ffb6))

### 🏡 Chore

- Fix typo ([e646f28](https://github.com/Teages/gqfn/commit/e646f28))
- Clean up package.json ([e1f003d](https://github.com/Teages/gqfn/commit/e1f003d))
- **cli:** ⚠️  Improve cli ([9537b65](https://github.com/Teages/gqfn/commit/9537b65))
- Apply automated fixes ([1352ece](https://github.com/Teages/gqfn/commit/1352ece))

#### ⚠️ Breaking Changes

- **cli:** ⚠️  Improve cli ([9537b65](https://github.com/Teages/gqfn/commit/9537b65))

### ❤️ Contributors

- --set <--set>
- Teages ([@Teages](http://github.com/Teages))

## v0.0.1


### 🏡 Chore

- Public repo ([21b85b6](https://github.com/Teages/gqfn/commit/21b85b6))
- **docs:** Clean up document ([2f3c95a](https://github.com/Teages/gqfn/commit/2f3c95a))
- Clean up playground ([50eae68](https://github.com/Teages/gqfn/commit/50eae68))

### ❤️ Contributors

- Teages ([@Teages](http://github.com/Teages))

