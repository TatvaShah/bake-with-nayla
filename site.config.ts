import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Bake With Nayla",
  tagline: "Custom desserts for any occasion in Durham, with dessert tables and catering available.",
  category: "Custom desserts and catering",
  schemaType: "Bakery",
  area: "Durham, ON",
  siteUrl: "https://bake-with-nayla.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#9a4454" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Custom desserts in Durham",
    headline: "Desserts made for your occasion",
    subhead: "Custom cakes, cupcakes, macarons, and full dessert tables, made to order. Send a DM with your date and idea to get started.",
    images: [
      { src: "/images/post-3.jpg", alt: "Happy birthday cake with jewel decorations by Bake With Nayla" },
      { src: "/images/post-1.jpg", alt: "Dessert table with cake pops and dipped pretzels" },
      { src: "/images/post-4.jpg", alt: "Pistachio birthday cake" },
    ],
    secondaryCta: { label: "See the desserts", href: "#gallery" },
  },

  highlights: ["Made to order", "Dessert tables for any event", "Catering available", "Orders by Instagram DM"],

  about: {
    title: "Custom desserts for any occasion",
    body: [
      "Bake With Nayla makes custom desserts in Durham, from birthday cakes and cupcakes to macarons and full dessert tables for celebrations of every size.",
      "Catering is available too. Send your date, how many people you are serving, and your design idea, and we will plan something sweet together.",
    ],
    image: { src: "/images/post-6.jpg", alt: "Box of pink custom cupcakes" },
  },

  menu: {
    title: "What we make",
    intro: "Every order is custom. Message us for pricing on your date and design.",
    variant: "list",
    showPrices: false,
    priceNote: "Message us for pricing on your date and guest count.",
    groups: [
      {
        title: "Desserts and catering",
        items: [
          { name: "Custom cakes", description: "Birthday cakes, flavours like pistachio, designed around your idea.", href: "https://www.instagram.com/p/Dd407eiJtud/" },
          { name: "Dessert tables", description: "Styled spreads for birthdays, graduations, holidays, and any event.", href: "https://www.instagram.com/p/DeUcRzwxdgr/" },
          { name: "Cupcakes", description: "Custom cupcakes decorated for your celebration.", href: "https://www.instagram.com/p/Dd1e9xlkU9f/" },
          { name: "Macarons", description: "Custom macarons, like vanilla macarons for a birthday.", href: "https://www.instagram.com/p/DdhQ_8mJcKj/" },
          { name: "Catering desserts", description: "Dessert catering for gatherings and events." },
        ],
      },
    ],
  },

  gallery: {
    title: "A look at our desserts",
    items: [
      { src: "/images/post-1.jpg", width: 894, height: 894, alt: "Thanksgiving dessert table", caption: "Another dessert table", href: "https://www.instagram.com/p/DeUcRzwxdgr/" },
      { src: "/images/post-2.jpg", width: 1050, height: 1400, alt: "Pink fragrance themed birthday cake", caption: "For a fragrance lover", href: "https://www.instagram.com/p/DeUcH00xDIy/" },
      { src: "/images/post-3.jpg", width: 1050, height: 1400, alt: "Jewel decorated birthday cake", caption: "Another day, another cake", href: "https://www.instagram.com/p/Dd7oa9BpJA4/" },
      { src: "/images/post-4.jpg", width: 1067, height: 1400, alt: "Pistachio birthday cake", caption: "Pistachio birthday cake", href: "https://www.instagram.com/p/Dd407eiJtud/" },
      { src: "/images/post-5.jpg", width: 1400, height: 1018, alt: "Box of pink custom cupcakes", caption: "Custom cupcakes", href: "https://www.instagram.com/p/Dd1e9xlkU9f/" },
      { src: "/images/post-6.jpg", width: 903, height: 903, alt: "Graduation dessert table", caption: "Dessert table for any event", href: "https://www.instagram.com/p/DdzutbHn-ki/" },
      { src: "/images/post-7.jpg", width: 1400, height: 1050, alt: "PhD graduation cake", caption: "New PhD graduate", href: "https://www.instagram.com/p/DdznkaGJRCN/" },
      { src: "/images/post-8.jpg", width: 1050, height: 1400, alt: "Custom vanilla macarons", caption: "Vanilla macarons", href: "https://www.instagram.com/p/DdhQ_8mJcKj/" },
    ],
  },

  instagram: {
    handle: "bakewithnayla",
    embeds: ["https://www.instagram.com/p/DeUcRzwxdgr/"],
    embedsTitle: "Fresh from the kitchen",
  },

  order: {
    title: "Order in a quick DM",
    intro: "Orders and inquiries are taken by Instagram DM. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage: "Hi Bake With Nayla! I would love to order a custom dessert.\nDate needed:\nServings or size:\nFlavour:\nDesign idea (I can send an inspo photo):\nPickup or delivery:",
    links: [],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Send a DM on Instagram with your date, servings, flavour, and design idea. We will reply in the chat." },
    { q: "Do you cater events?", a: "Yes, catering is available, including custom dessert tables for any event." },
    { q: "Where are you located?", a: "Bake With Nayla is based in Durham, Ontario." },
  ],

  contact: {
    area: "Durham, Ontario",
    socials: [],
  },

  seo: {
    title: "Bake With Nayla | Custom desserts and catering in Durham",
    description: "Custom cakes, cupcakes, macarons, and dessert tables in Durham, Ontario. Catering available for any occasion. Order by Instagram DM today.",
    keywords: ["custom cakes Durham", "dessert tables Durham", "dessert catering Durham Region", "custom cupcakes Durham"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
