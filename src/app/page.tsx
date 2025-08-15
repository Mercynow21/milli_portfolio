import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="py-10">
      {/* Hero */}
      <section id="hero" className="pt-6 pb-16">
        <p className="text-sm text-black/60 dark:text-white/60">Junior AI Developer & Prompt Engineer</p>
        <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Bridging Human Intelligence & AI Innovation
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-black/70 dark:text-white/70">
          I craft accessible, human-centered AI solutions with large language models and practical prompt engineering.
        </p>
        <div className="mt-6">
          <a
            href="#contact"
            aria-label="Contact Me"
            className="inline-flex items-center rounded-full bg-foreground text-background px-5 py-2 text-sm font-semibold hover:opacity-90"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-12 border-t border-black/5 dark:border-white/10">
        <h2 className="text-2xl font-semibold tracking-tight">About Me</h2>
        <div className="mt-4 space-y-4 text-black/80 dark:text-white/80">
          <p>
            Entry‑level AI developer focused on LLMs and human‑centered AI. Built an AI content assistant that cut
            creation time by 60% and processed 1,000+ requests during beta.
          </p>
          <p>
            Tech I use: Python, Next.js (App Router), TypeScript, Tailwind, OpenAI APIs, Supabase (Postgres + RLS).
            I enjoy turning prompts into usable products with clear docs and measurable outcomes.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-12 border-t border-black/5 dark:border-white/10">
        <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-medium">Hard Skills</h3>
            <ul className="mt-3 space-y-2 list-disc list-inside text-black/80 dark:text-white/80">
              <li>Prompt Engineering — shipped reusable prompt templates for a content assistant</li>
              <li>LLM Integration — wired OpenAI API with typed request/response guards</li>
              <li>AI Application Development — built Next.js app with server + client components</li>
              <li>Basic ML — simple scoring heuristics and evaluation loops</li>
              <li>Python — backend scripts, data prep, evaluation</li>
              <li>API Integration — REST endpoints and fetch clients with error handling</li>
              <li>Git/GitHub — conventional commits, feature branches, PRs</li>
              <li>OpenAI, LangChain, Jupyter — prototyping and iteration</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Soft Skills</h3>
            <ul className="mt-3 space-y-2 list-disc list-inside text-black/80 dark:text-white/80">
              <li>Clear Technical Communication</li>
              <li>Problem-Solving Mindset</li>
              <li>Quick Learning Ability</li>
              <li>Project Documentation</li>
              <li>Team Collaboration</li>
              <li>User-Centric Thinking</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-12 border-t border-black/5 dark:border-white/10">
        <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
        <div className="mt-6 space-y-8">
          <article className="rounded-lg border border-black/5 dark:border-white/10 p-6">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h3 className="text-xl font-semibold">AI-Powered Content Assistant</h3>
                <p className="text-sm text-black/60 dark:text-white/60">Role: Solo Developer · Duration: 6 weeks</p>
              </div>
            </div>
            <div className="mt-4">
              <img src="/projects/content-assistant.svg" alt="Screenshot placeholder of the AI Content Assistant UI" className="w-full max-w-3xl rounded-md border border-black/5 dark:border-white/10" />
            </div>
            <p className="mt-4 text-black/80 dark:text-white/80">
              A smart content generation and optimization tool that helps content creators streamline their workflow.
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium">Key Features</h4>
                <ul className="mt-2 space-y-1 list-disc list-inside text-sm">
                  <li>Implemented OpenAI’s GPT API for dynamic content generation</li>
                  <li>Built a user-friendly interface for prompt customization</li>
                  <li>Developed content quality scoring algorithms</li>
                  <li>Integrated SEO optimization suggestions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium">Technical Highlights</h4>
                <ul className="mt-2 space-y-1 list-disc list-inside text-sm">
                  <li>Python backend with REST endpoints</li>
                  <li>Modular, maintainable code structure</li>
                  <li>LLM integration and prompt templates</li>
                  <li>Beta tested with 90% user satisfaction</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium">Impact</h4>
                <ul className="mt-2 space-y-1 list-disc list-inside text-sm">
                  <li>Reduced content creation time by 60%</li>
                  <li>Improved content quality scores by 40%</li>
                  <li>Processed 1000+ content requests</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <a href="#" className="underline underline-offset-4" aria-label="Live demo coming soon">Live Demo (soon)</a>
              <a href="https://github.com/Mercynow21/milli_portfolio" target="_blank" rel="noreferrer" className="underline underline-offset-4">GitHub Repo</a>
            </div>
          </article>

          
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 border-t border-black/5 dark:border-white/10">
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-4 text-black/80 dark:text-white/80">Ready to contribute to your team’s AI initiatives. Reach me at <a href="mailto:mercyabdi7@gmail.com" className="underline underline-offset-4">mercyabdi7@gmail.com</a>. Connect on <a href="https://www.linkedin.com/in/mehiret-abdissa21" target="_blank" rel="noreferrer" className="underline underline-offset-4">LinkedIn</a> or see my <a href="https://github.com/Mercynow21" target="_blank" rel="noreferrer" className="underline underline-offset-4">GitHub</a>.</p>
        <div className="mt-4">
          <p className="text-sm text-black/60 dark:text-white/60">Prefer leaving a message here?</p>
          <div className="mt-2">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
