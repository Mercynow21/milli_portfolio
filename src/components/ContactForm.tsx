"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const mailtoHref = `mailto:mercyabdi7@gmail.com?subject=${encodeURIComponent(
    `Portfolio contact from ${name || ""}`
  )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Something went wrong");
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: unknown) {
      setStatus("error");
      const message = err instanceof Error ? err.message : "Unknown error";
      setError(message);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-4 max-w-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <textarea
        placeholder="Your message"
        className="w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2 min-h-32"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center rounded-full bg-foreground text-background px-5 py-2 text-sm font-medium hover:opacity-90 disabled:opacity-60"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
        {status === "success" && (
          <span className="text-green-600">Message sent!</span>
        )}
        {status === "error" && (
          <div className="flex items-center gap-3">
            <span className="text-red-600">{error || "Failed to send"}</span>
            <a
              href={mailtoHref}
              className="inline-flex items-center rounded-full border border-black/10 dark:border-white/20 px-4 py-1.5 text-sm hover:opacity-80"
              aria-label="Email me instead"
            >
              Email me instead
            </a>
          </div>
        )}
      </div>
    </form>
  );
}


