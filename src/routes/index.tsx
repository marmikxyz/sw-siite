import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Users, Clock, Send, MessageCircle, ChevronRight } from "lucide-react";
import { courses } from "@/data/courses";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return courses;
    return courses.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        c.facultyName.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Selection Way</h1>
            <p className="mt-2 text-sm font-medium text-primary">AG DEV ♥ JOD</p>
          </div>
          <div className="relative w-full md:w-96">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search batches..."
              className="w-full rounded-full border border-border bg-card/60 py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </header>

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          <a
            href="https://t.me/Ag_Maxx"
            target="_blank"
            rel="noreferrer"
            className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-border p-6 transition hover:border-primary/60"
            style={{ background: "linear-gradient(135deg, oklch(0.35 0.2 260), oklch(0.15 0.05 260))" }}
          >
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-white/10 p-3">
                <Send className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Telegram Channel</h3>
                <p className="text-sm text-white/70">Join for latest updates & materials</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground">
              VIEW <ChevronRight className="h-3 w-3" />
            </span>
          </a>
          <a
            href="https://whatsapp.com/channel/0029Va9A060J93wOVmvS1t0f"
            target="_blank"
            rel="noreferrer"
            className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-border p-6 transition hover:border-primary/60"
            style={{ background: "linear-gradient(135deg, oklch(0.4 0.15 160), oklch(0.15 0.05 160))" }}
          >
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-white/10 p-3">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">WhatsApp Community</h3>
                <p className="text-sm text-white/70">Connect with other students</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground">
              VIEW <ChevronRight className="h-3 w-3" />
            </span>
          </a>
        </section>

        <section className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <article
              key={c.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary/60 hover:shadow-[0_0_0_1px_var(--color-primary)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
                {c.banner ? (
                  <img
                    src={c.banner}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-muted-foreground text-sm">
                    {c.title}
                  </div>
                )}
                <span className="absolute left-3 top-3 rounded-full bg-background/80 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
                  {c.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold leading-snug">{c.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{c.description}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Users className="h-3.5 w-3.5 text-primary" /> {c.students}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-primary" /> {c.duration}
                  </span>
                </div>
                <div className="mt-5 flex items-end justify-between border-t border-border pt-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold">{c.price}</span>
                    {c.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">{c.originalPrice}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src={c.facultyImage}
                      alt={c.facultyName}
                      loading="lazy"
                      className="h-8 w-8 rounded-full border border-border object-cover"
                    />
                    <span className="text-xs font-medium text-muted-foreground">{c.facultyName}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {filtered.length === 0 && (
          <div className="mt-16 text-center text-muted-foreground">No batches match "{query}".</div>
        )}

        <footer className="mt-16 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Selection Way
        </footer>
      </div>
    </div>
  );
}
