import { createFileRoute, Link } from "@tanstack/react-router";
import { HER_NAME, HER_AGE } from "@/data/gifts";
import mammoth from "@/assets/mammoth.png";

const things = [
  "You hype up your people louder than anyone.",
  "Your laugh arrives before you do.",
  "You notice tiny flowers other people walk past.",
  "Group photos are unusable without your chaos.",
  "You remember things people mention only once.",
  "Every fun plan somehow starts in your chat.",
  "Camel keychain: iconic accessory choice.",
  "You do scary things quietly, then shrug.",
  "Your saree game is unreasonably strong.",
  "You make ordinary evenings feel gentle.",
  "You're the reason our inside jokes exist.",
  "You show up, even when it's inconvenient.",
  "Soft on the outside, unstoppable underneath.",
  "You can cross any desert of a semester smiling.",
  "You give the best unsolicited pep talks.",
  "You never let anyone sit alone.",
  "Your excitement is contagious and loud.",
  "You take care of people quietly.",
  "You're funnier than you give yourself credit for.",
  "You keep growing without losing your softness.",
  `And 21: the world is better with ${HER_NAME} in it.`,
];

export const Route = createFileRoute("/twenty-one")({
  head: () => ({
    meta: [
      { title: `21 Things We Love About ${HER_NAME}` },
      {
        name: "description",
        content: `A list of 21 reasons ${HER_NAME} is the caravan's favourite person, one for every year of her ${HER_AGE}st birthday.`,
      },
      { property: "og:title", content: `21 Things We Love About ${HER_NAME}` },
      {
        property: "og:description",
        content: `One reason for every year — ${HER_NAME} turns ${HER_AGE}.`,
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TwentyOnePage,
});

function TwentyOnePage() {
  return (
    <main className="relative mx-auto max-w-2xl px-5 py-14">
      <Link to="/" className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
        ← back to the presents
      </Link>
      <h1 className="mt-6 text-4xl font-bold text-foreground sm:text-5xl">
        21 things about <span className="text-primary">{HER_NAME}</span>
      </h1>
      <p className="mt-3 text-base text-muted-foreground">
        One for every year. Twenty-one looks very good on you.
      </p>

      <ol className="mt-10 grid gap-4">
        {things.map((t, i) => (
          <li
            key={t}
            className="flex items-start gap-4 rounded-3xl border border-border bg-card p-4 shadow-soft"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full ribbon-surface text-sm font-bold text-primary-foreground">
              {i + 1}
            </span>
            <span className="text-base leading-relaxed text-card-foreground">{t}</span>
          </li>
        ))}
      </ol>

      <img
        src={mammoth}
        alt="Woolly mammoth friend"
        width={768}
        height={768}
        loading="lazy"
        className="mx-auto mt-12 h-40 w-40 animate-float-soft object-contain"
      />
    </main>
  );
}
