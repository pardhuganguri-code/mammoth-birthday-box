import { useState } from "react";
import mammoth from "@/assets/mammoth.png";
import camel from "@/assets/camel.png";
import type { Gift } from "@/data/gifts";

type Props = {
  gift: Gift;
  index: number;
  total: number;
  onNext: () => void;
  isLast: boolean;
};

export function PresentStep({ gift, index, total, onNext, isLast }: Props) {
  const [open, setOpen] = useState(false);
  const buddy = index % 2 === 0 ? mammoth : camel;
  const buddyName = index % 2 === 0 ? "Woolly mammoth friend" : "Party camel friend";

  return (
    <div className="flex w-full max-w-xl flex-col items-center gap-8">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
        Present {index + 1} of {total}
      </p>

      {!open ? (
        <button
          onClick={() => setOpen(true)}
          aria-label={`Open present ${index + 1}`}
          className="group relative aspect-square w-72 rounded-3xl ribbon-surface shadow-lift transition-transform duration-300 hover:-translate-y-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/50 sm:w-80"
        >
          <span className="absolute inset-0 rounded-3xl wool-dots opacity-40" />
          <span className="absolute inset-y-0 left-1/2 w-8 -translate-x-1/2 bg-wool/80" />
          <span className="absolute inset-x-0 top-1/2 h-8 -translate-y-1/2 bg-wool/80" />
          <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-wool text-3xl shadow-soft transition-transform duration-300 group-hover:rotate-12">
            🎀
          </span>
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-card/90 px-4 py-1 text-xs font-bold uppercase tracking-widest text-card-foreground">
            {gift.tag} · tap to open
          </span>
        </button>
      ) : (
        <article className="w-full animate-reveal-in rounded-4xl border border-border bg-card p-5 shadow-lift sm:p-7">
          <div className="relative overflow-hidden rounded-3xl bg-wool">
            {gift.photo ? (
              <img
                src={gift.photo}
                alt={gift.title}
                loading="lazy"
                className="h-80 w-full object-cover sm:h-96"
              />
            ) : (
              <div className="flex h-80 w-full flex-col items-center justify-center gap-3 wool-dots sm:h-96">
                <img
                  src={buddy}
                  alt={buddyName}
                  loading="lazy"
                  width={768}
                  height={768}
                  className="h-40 w-40 animate-float-soft object-contain"
                />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wool-foreground/70">
                  Jasmine's photo goes here
                </p>
              </div>
            )}
          </div>

          <h2 className="mt-6 text-3xl font-bold text-foreground">{gift.title}</h2>
          <p className="mt-2 text-base leading-relaxed text-muted-foreground">{gift.note}</p>

          <button
            onClick={onNext}
            className="mt-6 w-full rounded-full ribbon-surface px-6 py-4 text-base font-bold text-primary-foreground shadow-soft transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/50"
          >
            {isLast ? "Start the caravan again 🐘" : "Next present 🎁"}
          </button>
        </article>
      )}

      <div className="flex flex-wrap items-center justify-center gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            className={
              i <= index
                ? "h-2.5 w-2.5 rounded-full bg-primary"
                : "h-2.5 w-2.5 rounded-full bg-border"
            }
          />
        ))}
      </div>
    </div>
  );
}
