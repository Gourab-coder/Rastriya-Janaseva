export const navigation = [
  { id: "home", label: "Home" },
  { id: "activities", label: "Activities" },
  { id: "team", label: "Our team" },
  { id: "services", label: "Our services" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
  { id: "join", label: "Join us", cta: true },
];

export const navigationSectionIds = navigation.map(({ id }) => id);

export const activityAreas = [
  {
    number: "01",
    title: "Partnerships & forums",
    text: "Connecting institutions, industry leaders and community voices through shared dialogue.",
    icon: "↗",
  },
  {
    number: "02",
    title: "Culture & tourism",
    text: "Making space for conversations around heritage, destinations and hospitality.",
    icon: "⌂",
  },
  {
    number: "03",
    title: "Enterprise & livelihoods",
    text: "Exploring opportunities for MSMEs, artisans and local enterprise networks.",
    icon: "✳",
  },
  {
    number: "04",
    title: "Sustainable development",
    text: "Encouraging responsible ideas across energy, water, technology and waste.",
    icon: "⌁",
  },
];

export const services = [
  {
    title: "Stakeholder coordination",
    text: "Bringing institutions, enterprises and community groups into the same conversation.",
    icon: "◌",
  },
  {
    title: "Events & knowledge sharing",
    text: "Supporting forums, delegations and opportunities to exchange ideas.",
    icon: "▤",
  },
  {
    title: "Culture & tourism",
    text: "Helping shine a light on destinations, heritage and artisan traditions.",
    icon: "⌂",
  },
  {
    title: "Enterprise connections",
    text: "Connecting local businesses and makers with relevant networks and opportunities.",
    icon: "↗",
  },
  {
    title: "Sustainability dialogue",
    text: "Encouraging collaboration around practical, responsible development.",
    icon: "✳",
  },
  {
    title: "Information & referrals",
    text: "Pointing people towards relevant programmes, partners or official resources.",
    icon: "＋",
  },
];

export const waysToJoin = [
  "Volunteer for approved programmes and events",
  "Share professional skills or subject expertise",
  "Explore a community or institutional partnership",
  "Support verified initiatives and outreach",
];
