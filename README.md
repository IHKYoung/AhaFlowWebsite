# AhaFlow Website

AhaFlow 产品官网，使用 Next.js App Router 构建，面向 Vercel 独立部署。

## 本地开发

```bash
cd website
npm install
npm run dev
```

## 验证

```bash
npm run lint
npm run build
```

## Vercel 部署

- Project Root Directory: `.`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output: 由 Next.js / Vercel 自动管理

可选环境变量：

- `NEXT_PUBLIC_SITE_URL`：正式站点地址，用于 `metadataBase`、`robots.txt` 和 `sitemap.xml`。
- `MACOS_DOWNLOAD_URL`：覆盖 `/download/macos` 的跳转目标。默认指向公开官网仓库 `IHKYoung/AhaFlowWebsite` 最新 Release 的 `AhaFlow-macOS-universal.dmg`。

当前站点不包含表单提交、登录、下载计数或远端数据写入；macOS 下载按钮通过
`/download/macos` 跳转到最新 GitHub Release 资产。
