import { createFileRoute, Link } from "@tanstack/react-router";
import { gifts, HER_NAME, HER_AGE } from "@/data/gifts";

const photos = gifts.filter((g) => g.photo);

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: `${HER_NAME}'s Photo Caravan — ${HER_AGE}st Birthday` },
      {
        name: "description",
        content: `Every photo from ${HER_NAME}'s ${HER_AGE}st birthday surprise, in one cosy scrapbook gallery with its own little note.`,
      },
      { property: "og:title", content: `${HER_NAME}'s Photo Caravan` },
      {
        property: "og:description",
        content: `All the photos and notes from ${HER_NAME}'s ${HER_AGE}st birthday page.`,
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: photos[0]?.photo ?? "" },
      { name: "twitter:image", content: photos[0]?.photo ?? "" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <main className="relative mx-auto max-w-4xl px-5 py-14">
      <Link to="/" className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
        ← back to the presents
      </Link>
      <h1 className="mt-6 text-4xl font-bold text-foreground sm:text-5xl">
        The photo <span className="text-primary">caravan</span>
      </h1>
      <p className="mt-3 text-base text-muted-foreground">
        Every picture from the {HER_AGE} presents, all in one place.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {photos.map((g) => (
          <figure
            key={g.tag}
            className="overflow-hidden rounded-4xl border border-border bg-card shadow-soft"
          >
            <img
              src={g.photo!}
              alt={g.title}
              loading="lazy"
              className="h-80 w-full object-cover"
            />
            <figcaption className="p-5">
              <h2 className="text-xl font-bold text-card-foreground">{g.title}</h2>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{g.note}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </main>
  );
}
