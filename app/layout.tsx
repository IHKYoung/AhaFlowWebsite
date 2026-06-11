import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ahaflow.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AhaFlow - 把想法、行动和沉淀汇入同一个流",
    template: "%s | AhaFlow"
  },
  description:
    "AhaFlow 是 AhaKnow 工具体系里的个人工作流桌面应用，把待办、执行清单、Markdown 沉淀和历史复盘放在同一条创造者工作流里。",
  applicationName: "AhaFlow",
  keywords: [
    "AhaFlow",
    "AhaKnow",
    "ToDone",
    "个人工作流",
    "Markdown 笔记",
    "待办清单",
    "Checklist",
    "复盘"
  ],
  authors: [{ name: "AhaKnow" }],
  creator: "AhaKnow",
  publisher: "AhaKnow",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: siteUrl,
    siteName: "AhaFlow",
    title: "AhaFlow - 把想法、行动和沉淀汇入同一个流",
    description:
      "给独立创造者的桌面工作流入口：ToDone、CheckList、Insights 与 Archive 在同一条流里协作。"
  },
  twitter: {
    card: "summary_large_image",
    title: "AhaFlow - 创造者的个人工作流",
    description:
      "从今日行动到结构化沉淀，把执行、复盘和思考放回同一个桌面工作区。"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/lxgw-wenkai-webfont/1.7.0/style.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
