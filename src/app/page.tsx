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
            className="inline-flex items-center rounded-full bg-foreground text-background px-5 py-2 text-sm font-medium hover:opacity-90"
          >
            Let’s Build Something Together
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-12 border-t border-black/5 dark:border-white/10">
        <h2 className="text-2xl font-semibold tracking-tight">About Me</h2>
        <div className="mt-4 space-y-4 text-black/80 dark:text-white/80">
          <p>
            As an emerging AI developer, I bring fresh perspectives and cutting-edge knowledge to the rapidly
            evolving field of artificial intelligence. My journey began with a fascination for how AI can enhance
            human capabilities, leading me to specialize in prompt engineering and AI application development. I’m
            particularly excited about creating intuitive AI solutions that solve real-world problems.
          </p>
          <p>
            What sets me apart is my commitment to responsible AI development and my ability to translate complex
            technical concepts into user-friendly applications. I’m currently seeking opportunities to contribute to
            innovative AI projects while growing alongside experienced professionals in a collaborative environment.
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
              <li>Prompt Engineering</li>
              <li>LLM Integration</li>
              <li>AI Application Development</li>
              <li>Basic ML Model Implementation</li>
              <li>Python</li>
              <li>API Integration</li>
              <li>Version Control (Git)</li>
              <li>Basic Web Development</li>
              <li>OpenAI API, LangChain, Jupyter</li>
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
          </article>

          <article className="rounded-lg border border-dashed border-black/10 dark:border-white/15 p-6">
            <h3 className="text-lg font-medium">[Future Project]</h3>
            <p className="mt-2 text-black/70 dark:text-white/70">
              Coming Soon: An exciting AI project focusing on natural language processing and user interaction.
            </p>
          </article>

          <article className="rounded-lg border border-dashed border-black/10 dark:border-white/15 p-6">
            <h3 className="text-lg font-medium">[Future Project]</h3>
            <p className="mt-2 text-black/70 dark:text-white/70">
              Coming Soon: A collaborative AI tool that demonstrates advanced prompt engineering techniques.
            </p>
          </article>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 border-t border-black/5 dark:border-white/10">
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-4 text-black/80 dark:text-white/80">
          Ready to contribute to your team’s AI initiatives! Reach out at
          {" "}
          <a
            href="mailto:your.email@example.com"
            className="underline underline-offset-4"
          >
            your.email@example.com
          </a>
          {" "}
          or connect on
          {" "}
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            LinkedIn
          </a>
          .
        </p>
      </section>
    </div>
  );
}
