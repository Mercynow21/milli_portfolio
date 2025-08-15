export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10 mt-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-sm">
        <p className="text-black/60 dark:text-white/60">
          © {new Date().getFullYear()} Mercy Abdissa
        </p>
        <p className="text-black/60 dark:text-white/60">
          Built with Next.js + Tailwind · Deploy on Vercel
        </p>
      </div>
    </footer>
  );
}


