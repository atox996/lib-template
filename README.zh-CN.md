# lib-template

[English README | 英文文档](./README.md)

> 一个现代化的 TypeScript 库模板，配备完整工具链，支持迁移为 Monorepo 项目。

---

## 🚀 技术栈

- **TypeScript** – 类型安全与现代 JavaScript 特性
- **tsdown** – 高效的 TypeScript 库构建工具
- **ESLint** + **Prettier** – 代码检查与格式化
- **simple-git-hooks** + **lint-staged** + **commitlint** – Git 钩子与提交规范
- **pnpm** – 快速且节省磁盘空间的包管理器

---

## 📁 项目结构

```bash
.
├── src/                # 源代码目录
├── eslint.config.js    # ESLint 配置
├── prettier.config.js  # Prettier 配置
├── tsconfig.json       # TypeScript 配置
└── tsdown.config.ts    # tsdown 构建配置
```

---

## 🛠️ 快速开始

### 1. 安装依赖

```bash
pnpm install
```

### 2. 启动开发模式

```bash
pnpm dev
```

> 使用 `tsdown --watch`，文件变更时自动编译

### 3. 构建生产版本

```bash
pnpm build
```

> 构建产物输出到 `dist/`

### 4. 检查与格式化代码

```bash
pnpm lint
```

> 依次运行 ESLint、Prettier、类型检查

### 5. Git 提交规范

- 提交前钩子会通过 `lint-staged` 检查代码质量
- 提交信息需遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范

---

## 🧱 迁移为 Monorepo（多包仓库）

支持使用 `pnpm` + `tsdown` 构建 Monorepo 架构：

1. **删除 `src/` 目录**
   ```bash
   rm -rf src/
   ```
2. **创建 `packages/` 目录**
   ```bash
   mkdir -p packages/pkg1/src
   ```
3. **每个子包添加最小 package.json**
   ```json
   {
     "name": "@my/pkg1",
     "version": "0.0.1",
     "type": "module",
     "main": "./dist/index.js",
     "types": "./dist/index.d.ts"
   }
   ```
4. **配置 `pnpm-workspace.yaml`**
   ```yaml
   packages:
     - "packages/*"
   ```
5. **在 `tsdown.config.ts` 启用 workspace 构建**
   ```ts
   export default defineConfig(() => ({
     // 其他配置...
     workspace: true,
   }));
   ```

---

## ✅ 环境要求

- Node.js ≥ 18
- [pnpm](https://pnpm.io/)（安装时强制校验）

---

## 📦 发布（可选）

如需发布至 npm：

```bash
npm login
pnpm build
npm publish --access public
```

---

## 📜 许可证

[MIT](./LICENSE)
