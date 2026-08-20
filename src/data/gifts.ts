import j1 from "@/assets/jasmine-1.jpeg.asset.json";
import j2 from "@/assets/jasmine-2.jpeg.asset.json";
import j3 from "@/assets/jasmine-3.jpeg.asset.json";
import j4 from "@/assets/jasmine-4.jpeg.asset.json";
import j5 from "@/assets/jasmine-5.jpeg.asset.json";
import j6 from "@/assets/jasmine-6.jpeg.asset.json";
import j7 from "@/assets/jasmine-7.jpeg.asset.json";
import j8 from "@/assets/jasmine-8.jpeg.asset.json";
import j9 from "@/assets/jasmine-9.jpeg.asset.json";

export type Gift = {
  /** Ribbon label on the wrapped present */
  tag: string;
  /** Headline shown once the present is opened */
  title: string;
  /** Custom note for this photo */
  note: string;
  /** Photo URL, or null for the mammoth/camel placeholder frame */
  photo: string | null;
};

export const HER_NAME = "Jasmine";

export const gifts: Gift[] = [
  {
    tag: "No. 1",
    title: "Happy birthday, Jasmine!",
    note: "Nine little presents, one for every reason you make the herd better.",
    photo: j8.url,
  },
  {
    tag: "No. 2",
    title: "That flower-holding softness",
    note: "Only you could hold one tiny flower and make the whole evening feel gentler.",
    photo: j1.url,
  },
  {
    tag: "No. 3",
    title: "Golden hour glance",
    note: "Certified main character energy, and you weren't even trying.",
    photo: j2.url,
  },
  {
    tag: "No. 4",
    title: "The tiniest gift",
    note: "You notice small beautiful things nobody else stops for. Never lose that.",
    photo: j3.url,
  },
  {
    tag: "No. 5",
    title: "Off in your own world",
    note: "Phone in hand, plotting something wonderful. As always.",
    photo: j4.url,
  },
  {
    tag: "No. 6",
    title: "Research park legend",
    note: "Lanyard on, camel keychain swinging, ready to conquer the day.",
    photo: j5.url,
  },
  {
    tag: "No. 7",
    title: "Loudest cheerleader",
    note: "Hand in the air, mouth wide open — the best kind of chaos in every group photo.",
    photo: j6.url,
  },
  {
    tag: "No. 8",
    title: "Full pose mode",
    note: "Effortlessly cool, absurdly cute, and absolutely aware of it.",
    photo: j7.url,
  },
  {
    tag: "No. 9",
    title: "One last wish",
    note: "Happy birthday, Jasmine. Go be the whole caravan's favourite person again.",
    photo: j9.url,
  },
];
