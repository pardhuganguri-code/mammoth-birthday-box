import { createFileRoute, Link } from "@tanstack/react-router";
import { HER_NAME, HER_AGE } from "@/data/gifts";
import camel from "@/assets/camel.png";

export const Route = createFileRoute("/wishes")({
  head: () => ({
    meta: [
      { title: `A ${HER_AGE}st Birthday Letter for ${HER_NAME}` },
      {
        name: "description",
        content: `A handwritten-style birthday letter wishing ${HER_NAME} the happiest ${HER_AGE}st birthday, from her woolly mammoth and party camel caravan.`,
      },
      { property: "og:title", content: `A ${HER_AGE}st Birthday Letter for ${HER_NAME}` },
      {
        property: "og:description",
        content: `Turning ${HER_AGE} deserves more than a text — here's the whole letter.`,
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WishesPage,
});

function WishesPage() {
  return (
    <main className="relative mx-auto max-w-2xl px-5 py-14">
      <Link to="/" className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
        ← back to the presents
      </Link>

      <article className="mt-6 rounded-4xl border border-border bg-card p-7 shadow-lift sm:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
          {HER_AGE}st birthday · letter
        </p>
        <h1 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl">
          Dear {HER_NAME},
        </h1>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-card-foreground">
          <p>
            Twenty-one. Somehow you made it here while making everyone around you feel looked after
            on the way. That's not a small thing, even if you'd shrug about it.
          </p>
          <p>
            Twenty-one is the year of tiny flowers held up to the light, of loud hands in the air in
            group photos, of lanyards and camel keychains and plans that start in your chat at
            midnight. It suits you.
          </p>
          <p>
            I hope this year is soft where you need softness and ridiculous where you need to laugh.
            I hope you keep noticing the small beautiful things. I hope the herd never runs out of
            inside jokes.
          </p>
          <p className="font-semibold text-foreground">
            Happy {HER_AGE}st birthday. Go be the caravan's favourite person again.
          </p>
        </div>

        <img
          src={camel}
          alt="Party camel holding a birthday balloon"
          width={768}
          height={768}
          loading="lazy"
          className="mx-auto mt-10 h-40 w-40 animate-float-soft object-contain"
        />
      </article>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          to="/twenty-one"
          className="rounded-full bg-card px-5 py-2 text-sm font-bold text-card-foreground shadow-soft"
        >
          21 things about you ✨
        </Link>
        <Link
          to="/gallery"
          className="rounded-full bg-card px-5 py-2 text-sm font-bold text-card-foreground shadow-soft"
        >
          Photo caravan 📸
        </Link>
      </div>
    </main>
  );
}
