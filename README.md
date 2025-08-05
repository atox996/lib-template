# lib-template

[中文文档 | Chinese README](./README.zh-CN.md)

> A modern TypeScript library template with full tooling support, ready for monorepo migration.

---

## 🚀 Tech Stack

- **TypeScript** – Type safety and modern JS features
- **tsdown** – Fast build tool for TypeScript libraries
- **ESLint** + **Prettier** – Linting & formatting
- **simple-git-hooks** + **lint-staged** + **commitlint** – Git hook integration & Conventional Commits
- **pnpm** – Fast, disk-efficient package manager

---

## 📁 Project Structure

```bash
.
├── src/                # Source code
├── eslint.config.js    # ESLint config
├── prettier.config.js  # Prettier config
├── tsconfig.json       # TypeScript config
└── tsdown.config.ts    # tsdown build config
```

---

## 🛠️ Getting Started

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Start Development

```bash
pnpm dev
```

> Uses `tsdown --watch` to auto-compile files on change

### 3. Build for Production

```bash
pnpm build
```

> Outputs to `dist/`

### 4. Lint & Format

```bash
pnpm lint
```

> Runs ESLint, Prettier, and TypeScript type checking

### 5. Git Commit Standards

- Pre-commit hooks check code quality via `lint-staged`
- Commit messages must follow [Conventional Commits](https://www.conventionalcommits.org/)

---

## 🧱 Monorepo Migration

Support for monorepo with `pnpm` + `tsdown`:

1. **Remove `src/`**
   ```bash
   rm -rf src/
   ```
2. **Create `packages/`**
   ```bash
   mkdir -p packages/pkg1/src
   ```
3. **Add minimal `package.json` to each subpackage**
   ```json
   {
     "name": "@my/pkg1",
     "version": "0.0.1",
     "type": "module",
     "main": "./dist/index.js",
     "types": "./dist/index.d.ts"
   }
   ```
4. **Update `pnpm-workspace.yaml`**
   ```yaml
   packages:
     - "packages/*"
   ```
5. **Enable workspace build in `tsdown.config.ts`**
   ```ts
   export default defineConfig(() => ({
     // other config...
     workspace: true,
   }));
   ```

---

## ✅ Requirements

- Node.js ≥ 18
- [pnpm](https://pnpm.io/) (enforced on install)

---

## 📦 Publishing (Optional)

To publish the library to npm:

```bash
npm login
pnpm build
npm publish --access public
```

---

## 📜 License

[MIT](./LICENSE)
