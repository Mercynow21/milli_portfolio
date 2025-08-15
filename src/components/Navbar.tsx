import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-black/5 dark:border-white/10">
      <nav className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link href="#hero" className="font-semibold tracking-tight">
          Mercy Abdissa
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <a href="#about" className="hover:underline underline-offset-4">
            About
          </a>
          <a href="#skills" className="hover:underline underline-offset-4">
            Skills
          </a>
          <a href="#projects" className="hover:underline underline-offset-4">
            Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-foreground text-background px-3 py-1.5 text-xs font-medium hover:opacity-90"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}


