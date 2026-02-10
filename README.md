# Monorepo Demo

## 项目概述

这是一个基于 `pnpm workspace` 的 Vue monorepo，用于验证多系统整合场景。当前拆分为四个 package：

- `packages/shell`：应用壳（layout、login、404、路由组装、最终 Web 打包），JavaScript。
- `packages/nomad`：Nomad 业务页面组件包，JavaScript，直接输出源码组件。
- `packages/rmax`：RMax 业务页面组件包，TypeScript，先构建到 `dist` 再给壳应用消费。
- `packages/shared`：共享组件与公共代码，JavaScript，直接输出源码。

## 依赖关系

```text
shared(source) ──► nomad(source)
shared(source) ──► rmax(build to dist)
nomad(source) + rmax(dist) ──► shell(router compose + web app)
```

关键约束：

- `rmax` 必须先构建，再由 `shell` 引用 `dist` 产物。
- `nomad` 与 `shared` 不需要 build，壳应用直接引用源码。
- 优先用 Vite 与 pnpm workspace 原生能力完成集成。

## 目录结构

```text
packages/
├── shell/
│   ├── src/layouts
│   ├── src/router
│   ├── src/views
│   └── vite.config.js
├── nomad/
│   └── src/pages
├── rmax/
│   ├── src/views
│   └── vite.config.ts
└── shared/
    ├── components/
    └── index.js
```

## 开发流程

```bash
# 安装依赖
pnpm run init

# 1) 先构建 rmax
# 2) 并行执行：rmax watch build + shell dev
pnpm dev

# 生产构建：rmax -> shell
pnpm build

# 多环境构建
pnpm run build:dev
pnpm run build:stage
pnpm run build:prod

# 壳应用路由组装测试
pnpm run test:shell
```
