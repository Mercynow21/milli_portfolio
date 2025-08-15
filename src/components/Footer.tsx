export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10 mt-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-sm">
        <p className="text-black/60 dark:text-white/60">
          © {new Date().getFullYear()} Mehiret Abdissa
        </p>
        <div className="flex items-center gap-3 text-black/60 dark:text-white/60">
          <span>Built with Next.js + Tailwind</span>
          <span>·</span>
          <a
            href="https://github.com/Mercynow21"
            target="_blank"
            rel="noreferrer"
            className="hover:underline underline-offset-4"
          >
            GitHub
          </a>
          <span>·</span>
          <a
            href="https://www.linkedin.com/in/mehiret-abdissa21"
            target="_blank"
            rel="noreferrer"
            className="hover:underline underline-offset-4"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}


