export type Gift = {
  /** Ribbon label on the wrapped present */
  tag: string;
  /** Headline shown once the present is opened */
  title: string;
  /** Custom note for this photo */
  note: string;
  /**
   * Drop her photo in `src/assets/` and import it here, e.g.
   *   import jasmine1 from "@/assets/jasmine-1.jpg";
   *   photo: jasmine1,
   * Leave as null to show the cute mammoth/camel placeholder frame.
   */
  photo: string | null;
};

export const HER_NAME = "Jasmine";

export const gifts: Gift[] = [
  {
    tag: "No. 1",
    title: "Happy birthday, Jasmine!",
    note: "Twelve little presents, one for every reason you make the herd better.",
    photo: null,
  },
  {
    tag: "No. 2",
    title: "That smile",
    note: "Certified warmer than a woolly coat in a snowstorm.",
    photo: null,
  },
  {
    tag: "No. 3",
    title: "Desert wanderer",
    note: "You could cross a whole dune sea and still find a reason to laugh halfway.",
    photo: null,
  },
  {
    tag: "No. 4",
    title: "Cosiest human alive",
    note: "Being around you feels like wool socks and warm chai at the same time.",
    photo: null,
  },
  {
    tag: "No. 5",
    title: "Our best mischief",
    note: "Half our stories start with you saying: okay hear me out.",
    photo: null,
  },
  {
    tag: "No. 6",
    title: "Snack partner for life",
    note: "Two humps worth of snacks and you'd still share the last bite.",
    photo: null,
  },
  {
    tag: "No. 7",
    title: "Loudest cheerleader",
    note: "You believe in people before they believe in themselves. Wild superpower.",
    photo: null,
  },
  {
    tag: "No. 8",
    title: "Softest heart",
    note: "Big mammoth energy: gentle giant, tiny tusks, huge feelings.",
    photo: null,
  },
  {
    tag: "No. 9",
    title: "Chaos, but make it cute",
    note: "Never once boring. Not for a single day of knowing you.",
    photo: null,
  },
  {
    tag: "No. 10",
    title: "Through every season",
    note: "Ice ages and heatwaves, you're the constant in the story.",
    photo: null,
  },
  {
    tag: "No. 11",
    title: "This year on you",
    note: "May it be full of sunlight, soft landings and absurdly good news.",
    photo: null,
  },
  {
    tag: "No. 12",
    title: "One last wish",
    note: "Happy birthday, Jasmine. Go be the whole caravan's favourite person again.",
    photo: null,
  },
];
