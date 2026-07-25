# Vanora Dynamo 文档站

基于 [VitePress](https://vitepress.dev/) 构建的 **Vanora Dynamo** 基岩版 Minecraft 服务器文档站点。

> 核邪铀碍的小团体，不止于MC！

## 技术栈

- **框架**: VitePress `^1.6.4`
- **运行时**: Vue `^3.5.28`
- **包管理**: pnpm `^10.29.2`

## 目录结构

```
VDServer-home/
├── docs/                # 文档源文件
│   ├── .vitepress/      # VitePress 配置（主题、插件等）
│   ├── guide/           # 指南文档
│   │   ├── index.md     # 入服指南
│   │   ├── meme.md      # 服务器梗
│   │   └── media/       # 图片资源
│   ├── public/          # 静态资源
│   │   └── logo.ico     # 站点图标
│   └── index.md         # 首页
├── package.json
├── pnpm-lock.yaml
└── README.md
```

## 本地开发

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm docs:dev
```

开发服务器默认运行在 `http://localhost:5173`，支持热更新。

### 构建生产版本

```bash
pnpm docs:build
```

构建产物输出到 `docs/.vitepress/dist` 目录。

### 预览构建结果

```bash
pnpm docs:preview
```

## 许可证

ISC
