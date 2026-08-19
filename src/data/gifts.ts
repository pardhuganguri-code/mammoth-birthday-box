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
export const HER_AGE = 21;

export const gifts: Gift[] = [
  {
    tag: "No. 1",
    title: "Happy 21st, Jasmine!",
    note: "Twenty-one little presents — one for every year of you making the herd better.",
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
    title: "Peace sign, always",
    note: "Wherever you go, you leave people laughing and posing with you.",
    photo: j9.url,
  },
  {
    tag: "No. 10",
    title: "21 reasons, starting here",
    note: "Reason one: nobody hypes up their people the way you do.",
    photo: null,
  },
  {
    tag: "No. 11",
    title: "Halfway through the caravan",
    note: "Reason two: your laugh arrives before you do and fixes everyone's mood.",
    photo: null,
  },
  {
    tag: "No. 12",
    title: "Woolly mammoth energy",
    note: "Reason three: soft on the outside, unstoppable underneath. Warm and mighty.",
    photo: null,
  },
  {
    tag: "No. 13",
    title: "Party camel energy",
    note: "Reason four: you can cross any desert of a semester and still show up smiling.",
    photo: null,
  },
  {
    tag: "No. 14",
    title: "The good listener",
    note: "Reason five: you remember the little things people mention only once.",
    photo: null,
  },
  {
    tag: "No. 15",
    title: "Chaos coordinator",
    note: "Reason six: every fun plan somehow starts in your chat.",
    photo: null,
  },
  {
    tag: "No. 16",
    title: "Twenty-one and glowing",
    note: "Reason seven: you keep growing without losing an ounce of your softness.",
    photo: null,
  },
  {
    tag: "No. 17",
    title: "Brave in small ways",
    note: "Reason eight: you do the scary things quietly and then act like it was nothing.",
    photo: null,
  },
  {
    tag: "No. 18",
    title: "Keeper of inside jokes",
    note: "Reason nine: our nonsense vocabulary exists because of you.",
    photo: null,
  },
  {
    tag: "No. 19",
    title: "Camel keychain club",
    note: "Reason ten: even your bag has personality. Iconic.",
    photo: null,
  },
  {
    tag: "No. 20",
    title: "Here's to year 21",
    note: "Reason eleven: whatever this year brings, you'll make it look easy and fun.",
    photo: null,
  },
  {
    tag: "No. 21",
    title: "One last wish 🎂",
    note: "Happy 21st birthday, Jasmine. Go be the whole caravan's favourite person again.",
    photo: j9.url,
  },
];
