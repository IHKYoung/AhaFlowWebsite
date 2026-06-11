import {
  Archive,
  ArrowRight,
  BookOpenText,
  CheckCircle2,
  ClipboardCheck,
  Download,
  FileText,
  ListTodo,
  NotebookPen,
  Palette,
  Search,
  ShieldCheck,
  Sparkles,
  Tag,
  Workflow,
  Zap
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Icon = LucideIcon;

const modules: Array<{
  name: string;
  eyebrow: string;
  description: string;
  icon: Icon;
}> = [
  {
    name: "ToDone",
    eyebrow: "今日行动",
    description: "把今天真正要推进的任务放在一侧，完成、反思和历史自动沉到另一侧。",
    icon: ListTodo
  },
  {
    name: "Insights",
    eyebrow: "即时沉淀",
    description: "Markdown 输入、实时预览、任务提取和类型预设放在同一个写作工作区。",
    icon: NotebookPen
  },
  {
    name: "Archive",
    eyebrow: "知识回看",
    description: "沉淀库独立成为资料入口，搜索、筛选、阅读和回写不打断当前草稿。",
    icon: Archive
  },
  {
    name: "CheckList",
    eyebrow: "流程执行",
    description: "把重复流程变成模板和会话，让检查、归档和复制保持一致。",
    icon: ClipboardCheck
  }
];

const principles = [
  "不是另一个项目管理系统，而是个人执行现场。",
  "先保证输入足够轻，再让保存后的内容足够系统化。",
  "把任务、流程、笔记和复盘之间的切换成本降到最低。"
];

const features: Array<{
  title: string;
  body: string;
  icon: Icon;
}> = [
  {
    title: "左右分栏工作区",
    body: "每个核心模块都沿用可拖拽分栏和专注模式，写作、执行和回看保持同一套肌肉记忆。",
    icon: Workflow
  },
  {
    title: "Markdown 原生沉淀",
    body: "用快捷工具输入 Markdown，右侧实时渲染；ToDo 可以从沉淀里提取并导入当天任务。",
    icon: FileText
  },
  {
    title: "结构化但不笨重",
    body: "主题、标签、优先级、类型预设和历史归档都服务于整理，不把临时想法变成填表负担。",
    icon: Tag
  },
  {
    title: "可调的个人气质",
    body: "字体、强调色、优先级颜色和内容库色彩都可以调整，让工具贴近自己的工作方式。",
    icon: Palette
  },
  {
    title: "本地优先",
    body: "当前桌面应用以本地持久化和备份导入导出为核心，不把个人思考默认交给远端服务。",
    icon: ShieldCheck
  },
  {
    title: "为长期演进留口",
    body: "AhaFlow 是 AhaKnow 工具体系的工作流入口，后续可以继续接入自动化、知识库和发布链路。",
    icon: Sparkles
  }
];

const timeline = [
  {
    step: "Capture",
    title: "先把脑子里的东西倒出来",
    body: "临时任务、开发日志、复盘片段、决策理由，都可以先进入当前工作区。"
  },
  {
    step: "Shape",
    title: "再把内容整理成结构",
    body: "主题、标签、优先级和 Insights 类型帮助你把素材放到正确的位置。"
  },
  {
    step: "Execute",
    title: "把下一步推回行动面板",
    body: "沉淀里的 task list 可以导入 ToDone，Checklist 负责稳定流程。"
  },
  {
    step: "Review",
    title: "完成后回到历史和沉淀",
    body: "今日完成、反思和 Archive 让长期上下文留下可搜索、可复用的痕迹。"
  }
];

function HeroScene() {
  return (
    <div className="hero-scene" aria-hidden="true">
      <div className="app-shell">
        <div className="app-rail">
          <span className="brand-dot" />
          <span>AhaFlow</span>
          <span className="rail-chip">Insights</span>
        </div>
        <div className="workspace">
          <section className="workspace-pane pane-write">
            <div className="pane-title">
              <NotebookPen size={18} />
              <span>需要把 Dom 元素和视觉元素区分清楚</span>
            </div>
            <div className="meta-line">
              <span>已自动保存</span>
              <span>661 字</span>
              <span>开发日志</span>
            </div>
            <div className="tool-row">
              {["H1", "H2", "B", "I", "[]", "#", "@", "⌘"].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="markdown-lines">
              <strong># UI 和 DOM 的边界</strong>
              <span>## 观察</span>
              <p>视觉系统需要服务于工作流，而不是抢走注意力。</p>
              <span>- [ ] 将结构块命名收敛到用户能理解的动作</span>
              <span>- [ ] 把可执行项导入今日 ToDone</span>
            </div>
          </section>
          <section className="workspace-pane pane-preview">
            <div className="tabs">
              <span className="tab-active">预览</span>
              <span>ToDo</span>
            </div>
            <div className="preview-doc">
              <h3>UI 和 DOM 的边界</h3>
              <p>视觉系统需要服务于工作流，而不是抢走注意力。</p>
              <ul>
                <li>结构块命名收敛</li>
                <li>任务导入今日 ToDone</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-nav">
        <a className="nav-brand" href="#top" aria-label="AhaFlow 首页">
          <img className="brand-mark" src="/icon.svg" alt="" aria-hidden="true" />
          <span>AhaFlow</span>
        </a>
        <nav aria-label="主要导航">
          <a href="#flow">工作流</a>
          <a href="#modules">模块</a>
          <a href="#deploy">下载</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <HeroScene />
        <div className="hero-overlay" />
        <div className="hero-copy">
          <p className="eyebrow">AhaKnow 工具体系里的个人工作流入口</p>
          <h1>AhaFlow</h1>
          <p className="hero-lead">
            把想法、行动、检查清单和沉淀笔记放回同一条流里。给独立创造者一个足够轻、也足够系统化的桌面工作现场。
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#deploy">
              获取 AhaFlow
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="secondary-action" href="#modules">
              看核心模块
            </a>
          </div>
        </div>
      </section>

      <section className="belief-band" aria-label="产品原则">
        {principles.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </section>

      <section id="flow" className="section flow-section">
        <div className="section-heading">
          <p className="eyebrow">Workflow</p>
          <h2>从灵感到行动，再回到沉淀</h2>
          <p>
            AhaFlow 不强迫你在任务软件、笔记软件和流程文档之间来回搬运。它把这些动作放在同一条个人工作流里。
          </p>
        </div>
        <div className="timeline">
          {timeline.map((item, index) => (
            <article key={item.step} className="timeline-item">
              <span className="timeline-index">{String(index + 1).padStart(2, "0")}</span>
              <p>{item.step}</p>
              <h3>{item.title}</h3>
              <span>{item.body}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="modules" className="section modules-section">
        <div className="section-heading compact">
          <p className="eyebrow">Modules</p>
          <h2>四个功能区，服务同一个工作节奏</h2>
        </div>
        <div className="module-grid">
          {modules.map(({ name, eyebrow, description, icon: IconComponent }) => (
            <article className="module-card" key={name}>
              <IconComponent size={24} aria-hidden="true" />
              <p>{eyebrow}</p>
              <h3>{name}</h3>
              <span>{description}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section feature-section">
        <div className="section-heading compact">
          <p className="eyebrow">Product Details</p>
          <h2>给长期使用留下细节</h2>
        </div>
        <div className="feature-grid">
          {features.map(({ title, body, icon: IconComponent }) => (
            <article className="feature-card" key={title}>
              <IconComponent size={22} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section proof-section">
        <div className="proof-copy">
          <p className="eyebrow">Built for Flow</p>
          <h2>它不试图替你思考，只减少思考被打断的次数</h2>
          <p>
            输入时保持自由，整理时保持结构，执行时保持聚焦。AhaFlow 的重点不是把每件事都管理起来，而是让每天真正发生的工作更容易留下痕迹。
          </p>
        </div>
        <div className="proof-list">
          <div>
            <Zap size={20} aria-hidden="true" />
            <span>400ms 级自动保存策略，减少手动保存负担</span>
          </div>
          <div>
            <Search size={20} aria-hidden="true" />
            <span>Archive 可搜索、可筛选、可回写当前写作区</span>
          </div>
          <div>
            <BookOpenText size={20} aria-hidden="true" />
            <span>Markdown 是沉淀 source of truth，预览只负责渲染</span>
          </div>
          <div>
            <CheckCircle2 size={20} aria-hidden="true" />
            <span>今日完成、反思和历史归档服务于复盘闭环</span>
          </div>
        </div>
      </section>

      <section id="deploy" className="download-section">
        <div>
          <p className="eyebrow">Download</p>
          <h2>先从 macOS 桌面版开始</h2>
          <p>
            AhaFlow 当前以本地优先的桌面工作流为核心。macOS 下载入口会自动指向 GitHub 最新 Release 的通用 DMG。
          </p>
        </div>
        <div className="download-actions" aria-label="下载 AhaFlow">
          <a className="primary-action download-action" href="/download/macos">
            <Download size={18} aria-hidden="true" />
            下载 macOS 通用版
          </a>
          <a
            className="secondary-action download-action"
            href="https://github.com/IHKYoung/AhaFlowWebsite/releases/latest"
          >
            查看 Release
          </a>
        </div>
      </section>
    </main>
  );
}
