# Introduction

GQFn provides a *type-safe* way to create GraphQL queries using TypeScript. It offers compile-time type checking and automatic type inference for your GraphQL operations.

> Want to try GQFn first? Skip to [Installation](./installation.md)

## Why GQFn?

The development of GQFn was driven by my real-world challenges encountered while migrating Cytoid.io from a JavaScript project using GraphQL Codegen on Nuxt 3 application.

Initially, we used GraphQL Codegen for type safety. It works well, but it introduced significant development friction:
- Type generation took approximately 2 seconds per project scan
- Nuxt's virtual file system (VFS) doesn't support HMR for generated files. (it is fixed now)

These limitations significantly impacted development workflow and productivity

---

GQFn was created to address these challenges while maintaining excellent performance characteristics:

- **Bundle Size**: Maintains minimal size with syntax similar to original GraphQL queries

- **Development Experience**:
  - Zero impact on HMR performance
  - Real-time TypeScript type checking
  - No need to wait for type generation

- **Performance**:
  - Direct AST output without string parsing
  - Benefits directly from scenarios requiring AST analysis (e.g. caching, verify query)
