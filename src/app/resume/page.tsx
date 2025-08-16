import PrintButton from "@/components/PrintButton";
export const metadata = {
  title: "Resume — Mehiret Abdissa",
  description: "Junior AI Developer & Prompt Engineer — Resume",
};

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
      <header className="text-center">
        <h1 className="text-3xl font-bold tracking-tight">Mehiret Abdissa</h1>
        <p className="mt-2 text-black/70 dark:text-white/70">Junior AI Developer & Prompt Engineer</p>
        <p className="mt-1 text-sm text-black/60 dark:text-white/60">
          <a href="mailto:mercyabdi7@gmail.com" className="underline underline-offset-4">mercyabdi7@gmail.com</a>
          {" • "}
          <a href="https://github.com/Mercynow21" target="_blank" rel="noreferrer" className="underline underline-offset-4">github.com/Mercynow21</a>
          {" • "}
          <a href="https://www.linkedin.com/in/mehiret-abdissa21" target="_blank" rel="noreferrer" className="underline underline-offset-4">linkedin.com/in/mehiret-abdissa21</a>
        </p>
        <div className="mt-4 print:hidden">
          <PrintButton />
        </div>
      </header>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Summary</h2>
        <p className="mt-3 text-black/80 dark:text-white/80">
          Entry‑level AI developer focused on LLM integration, prompt engineering, and shipping clean, accessible web
          apps. Comfortable taking projects from idea to deployment using Next.js, TypeScript, Tailwind CSS, Supabase,
          and Vercel.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Skills</h2>
        <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-black/80 dark:text-white/80">
          <li>TypeScript, JavaScript, Python</li>
          <li>React, Next.js (App Router), Tailwind CSS</li>
          <li>Prompt Engineering, OpenAI API</li>
          <li>Supabase (Postgres, RLS), API Routes</li>
          <li>Playwright (e2e), ESLint, Git/GitHub</li>
          <li>Vercel, Cursor, ChatGPT, Copilot</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Projects</h2>
        <div className="mt-4 space-y-6">
          <div>
            <h3 className="font-medium">AI‑Powered Portfolio Generator</h3>
            <p className="text-sm text-black/70 dark:text-white/70">Build professional portfolios in minutes</p>
            <ul className="mt-2 list-disc list-inside text-sm text-black/80 dark:text-white/80">
              <li>Personalized About/Skills using structured prompts and AI iteration.</li>
              <li>Python scripts for text processing; deployed on Vercel.</li>
              <li>~60% faster content creation vs manual writing.</li>
            </ul>
            <p className="mt-1 text-sm"><strong>Tech:</strong> Cursor, ChatGPT, Python, Vercel, GitHub</p>
            <p className="text-sm"><strong>Live:</strong> <a className="underline" href="https://milli-portfolio-5s47.vercel.app" target="_blank" rel="noreferrer">milli-portfolio-5s47.vercel.app</a> {" | "}
              <strong>Repo:</strong> <a className="underline" href="https://github.com/Mercynow21" target="_blank" rel="noreferrer">github.com/Mercynow21</a></p>
          </div>

          <div>
            <h3 className="font-medium">AI Chatbot Knowledge Assistant</h3>
            <p className="text-sm text-black/70 dark:text-white/70">Get instant answers from your own data</p>
            <ul className="mt-2 list-disc list-inside text-sm text-black/80 dark:text-white/80">
              <li>Vector search over documents with retrieval and summarization prompts.</li>
              <li>Responsive Next.js UI; Supabase storage; Vercel deploy.</li>
              <li>~50% reduction in research time for testers.</li>
            </ul>
            <p className="mt-1 text-sm"><strong>Tech:</strong> OpenAI API, Supabase, Next.js, Vercel, GitHub</p>
            <p className="text-sm"><strong>Live:</strong> (add) {" | "} <strong>Repo:</strong> (add)</p>
          </div>

          <div>
            <h3 className="font-medium">AI Blog Post Generator</h3>
            <p className="text-sm text-black/70 dark:text-white/70">Turn topics into publish‑ready articles</p>
            <ul className="mt-2 list-disc list-inside text-sm text-black/80 dark:text-white/80">
              <li>Few‑shot prompts; server route orchestration; Markdown export.</li>
              <li>From ~3 hours to &lt;15 minutes per article.</li>
            </ul>
            <p className="mt-1 text-sm"><strong>Tech:</strong> Python, ChatGPT API, Tailwind CSS, Vercel, Copilot</p>
            <p className="text-sm"><strong>Live:</strong> (add) {" | "} <strong>Repo:</strong> (add)</p>
          </div>

          <div>
            <h3 className="font-medium">Flashcard Learning Tool</h3>
            <ul className="mt-2 list-disc list-inside text-sm text-black/80 dark:text-white/80">
              <li>Educational flashcards with instant feedback and mobile‑first UI.</li>
            </ul>
            <p className="mt-1 text-sm"><strong>Tech:</strong> TypeScript, React, Vite, Tailwind CSS, shadcn‑ui</p>
            <p className="text-sm"><strong>Live:</strong> <a className="underline" href="https://flashcard-taupe-gamma.vercel.app" target="_blank" rel="noreferrer">flashcard-taupe-gamma.vercel.app</a> {" | "}
              <strong>Repo:</strong> <a className="underline" href="https://github.com/Mercynow21/flashcard" target="_blank" rel="noreferrer">github.com/Mercynow21/flashcard</a></p>
          </div>

          <div>
            <h3 className="font-medium">Board Snap Flow</h3>
            <ul className="mt-2 list-disc list-inside text-sm text-black/80 dark:text-white/80">
              <li>Lightweight Kanban with drag‑and‑drop and responsive design.</li>
            </ul>
            <p className="mt-1 text-sm"><strong>Tech:</strong> React, TypeScript, Vite, Tailwind CSS, Lovable</p>
            <p className="text-sm"><strong>Live:</strong> (add) {" | "} <strong>Repo:</strong> <a className="underline" href="https://github.com/Mercynow21/board-snap-flow" target="_blank" rel="noreferrer">github.com/Mercynow21/board-snap-flow</a></p>
          </div>

          <div>
            <h3 className="font-medium">Blog UI Template</h3>
            <ul className="mt-2 list-disc list-inside text-sm text-black/80 dark:text-white/80">
              <li>Clean blog template with dark/light mode, search, and progress indicator.</li>
            </ul>
            <p className="mt-1 text-sm"><strong>Tech:</strong> HTML5, CSS3, JavaScript, Windsurf</p>
            <p className="text-sm"><strong>Live:</strong> (add) {" | "} <strong>Repo:</strong> <a className="underline" href="https://github.com/Mercynow21/Blog_UI_Template" target="_blank" rel="noreferrer">github.com/Mercynow21/Blog_UI_Template</a></p>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Education</h2>
        <p className="mt-2 text-black/80 dark:text-white/80">Self‑directed learning in AI, LLMs, and modern web frameworks.</p>
      </section>
    </main>
  );
}


