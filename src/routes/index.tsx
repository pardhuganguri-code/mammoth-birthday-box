import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PresentStep } from "@/components/PresentStep";
import { gifts, HER_NAME, HER_AGE } from "@/data/gifts";
import mammoth from "@/assets/mammoth.png";
import camel from "@/assets/camel.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `Happy ${HER_AGE}st Birthday, ${HER_NAME}! 🎁` },
      {
        name: "description",
        content: `${HER_AGE} wrapped presents, photos and notes — a cosy woolly mammoth and camel ${HER_AGE}st birthday surprise for ${HER_NAME}.`,
      },
      { property: "og:title", content: `Happy ${HER_AGE}st Birthday, ${HER_NAME}! 🎁` },
      {
        property: "og:description",
        content: `Unwrap ${HER_AGE} little presents for ${HER_NAME}'s ${HER_AGE}st birthday.`,
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BirthdayPage,
});

function BirthdayPage() {
  const [step, setStep] = useState<number | null>(null);

  return (
    <main className="relative min-h-screen overflow-hidden px-5 py-12">
      <img
        src={mammoth}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={768}
        height={768}
        className="pointer-events-none absolute -left-10 bottom-6 h-40 w-40 animate-float-soft object-contain opacity-40 sm:h-56 sm:w-56"
      />
      <img
        src={camel}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={768}
        height={768}
        className="pointer-events-none absolute -right-8 top-24 h-36 w-36 animate-float-soft object-contain opacity-40 sm:h-52 sm:w-52"
      />

      <div className="relative mx-auto flex max-w-xl flex-col items-center">
        {step === null ? (
          <section className="flex flex-col items-center text-center">
            <span className="rounded-full bg-card px-4 py-1 text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground shadow-soft">
              a tiny caravan of {HER_AGE} gifts
            </span>
            <h1 className="mt-6 text-5xl font-bold leading-tight text-foreground sm:text-6xl">
              Happy {HER_AGE}st Birthday,
              <span className="block text-primary">{HER_NAME}</span>
            </h1>
            <p className="mt-4 flex items-baseline justify-center gap-3">
              <span className="font-display text-7xl font-bold text-primary sm:text-8xl">
                {HER_AGE}
              </span>
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground">
                years
                <br />
                of you
              </span>
            </p>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-muted-foreground">
              {gifts.length} presents waiting — one for every year. Open one, and the next one
              appears: woolly mammoths and party camels included.
            </p>
            <img
              src={camel}
              alt="Cute camel wearing a party hat"
              width={768}
              height={768}
              className="mt-8 h-48 w-48 animate-float-soft object-contain"
            />
            <button
              onClick={() => setStep(0)}
              className="mt-8 rounded-full ribbon-surface px-10 py-4 text-lg font-bold text-primary-foreground shadow-lift transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/50"
            >
              Open the first present 🎁
            </button>
            <nav className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/twenty-one"
                className="rounded-full bg-card px-5 py-2 text-sm font-bold text-card-foreground shadow-soft"
              >
                21 things about you ✨
              </Link>
              <Link
                to="/wishes"
                className="rounded-full bg-card px-5 py-2 text-sm font-bold text-card-foreground shadow-soft"
              >
                Birthday letter 💌
              </Link>
              <Link
                to="/gallery"
                className="rounded-full bg-card px-5 py-2 text-sm font-bold text-card-foreground shadow-soft"
              >
                Photo caravan 📸
              </Link>
            </nav>
          </section>
        ) : (
          <PresentStep
            key={step}
            gift={gifts[step]!}
            index={step}
            total={gifts.length}
            isLast={step === gifts.length - 1}
            onNext={() => setStep(step === gifts.length - 1 ? null : step + 1)}
          />
        )}
      </div>
    </main>
  );
}
