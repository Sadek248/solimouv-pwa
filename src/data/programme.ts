export type ProgrammeItem = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  time: string;
  location: string;
  audience: string;
  sport: string;
  category: string;
  tags: string[];
  accentColor: "green" | "purple" | "orange";
};

export const programmeData: ProgrammeItem[] = [
  {
    id: "football-inclusif",
    title: "Football inclusif",
    description:
      "Une initiation collective ouverte à toutes et tous pour découvrir une pratique sportive conviviale et accessible.",
    longDescription:
      "Cette activité propose une découverte du football dans un cadre inclusif, bienveillant et progressif. Les exercices sont adaptés aux niveaux des participantes et participants, avec une attention particulière portée à la coopération, à la confiance et au plaisir du jeu.",
    time: "10:00",
    location: "Terrain A · Up Sport!",
    audience: "Tout public",
    sport: "football",
    category: "collectif",
    tags: ["équipe", "ballon", "dynamique"],
    accentColor: "green",
  },
  {
    id: "yoga-adapte",
    title: "Yoga adapté",
    description:
      "Un temps de bien-être pensé pour différents niveaux de mobilité, dans une approche inclusive et progressive.",
    longDescription:
      "Le yoga adapté permet de travailler la respiration, la détente, la mobilité douce et la conscience corporelle. La séance est pensée pour accueillir différents profils, avec plusieurs variantes proposées selon les besoins.",
    time: "11:30",
    location: "Salle B · Association partenaire 1",
    audience: "Seniors / mobilité réduite",
    sport: "yoga",
    category: "bien-être",
    tags: ["zen", "mobilité douce", "calme"],
    accentColor: "purple",
  },
  {
    id: "atelier-sensibilisation",
    title: "Atelier sensibilisation",
    description:
      "Un échange autour du sport inclusif, de l’égalité d’accès à la pratique et des enjeux de solidarité.",
    longDescription:
      "Cet atelier donne des clés pour comprendre les freins d’accès au sport, valorise les initiatives inclusives et ouvre un temps d’échange avec les associations engagées dans le festival.",
    time: "14:00",
    location: "Espace central · Association partenaire 2",
    audience: "Tout public",
    sport: "sensibilisation",
    category: "atelier",
    tags: ["échange", "inclusion", "solidarité"],
    accentColor: "orange",
  },
  {
    id: "premiers-pas-running",
    title: "Premiers pas running",
    description:
      "Une initiation douce à la course à pied pour apprendre à gérer son rythme et retrouver confiance.",
    longDescription:
      "Cette activité aide à découvrir la course à pied sans pression de performance. Le groupe avance progressivement avec des conseils sur le souffle, la posture et la gestion de l’effort.",
    time: "16:00",
    location: "Parc extérieur · Zone départ",
    audience: "Jeunes et adultes",
    sport: "course_a_pied",
    category: "endurance",
    tags: ["vitesse", "défi", "solo"],
    accentColor: "green",
  },
  {
    id: "decouverte-badminton",
    title: "Découverte badminton",
    description:
      "Une activité ludique pour développer coordination, précision et plaisir du jeu en petit groupe.",
    longDescription:
      "Le badminton est ici proposé dans un format accessible et convivial. L’atelier permet d’expérimenter la précision, les échanges et les déplacements selon le niveau de chacun.",
    time: "15:00",
    location: "Gymnase C · Terrain 2",
    audience: "Tout public",
    sport: "badminton",
    category: "raquette",
    tags: ["précision", "duo", "tonique"],
    accentColor: "orange",
  },
  {
    id: "natation-bien-etre",
    title: "Natation bien-être",
    description:
      "Une séance aquatique orientée détente, respiration et mise en mouvement en douceur.",
    longDescription:
      "La natation bien-être est pensée pour les personnes qui recherchent un rapport apaisé à l’eau, au corps et à l’effort. L’encadrement met l’accent sur la sécurité, la fluidité et la confiance.",
    time: "13:00",
    location: "Piscine partenaire · Bassin 1",
    audience: "Adultes",
    sport: "natation",
    category: "eau",
    tags: ["eau", "zen", "mobilité"],
    accentColor: "purple",
  },
  {
    id: "initiation-gateball",
    title: "Initiation gateball",
    description:
      "Une pratique accessible autour de la précision, de la stratégie et du jeu collectif calme.",
    longDescription:
      "Le gateball est une activité idéale pour découvrir une autre manière de jouer ensemble. Accessible, ludique et tactique, elle favorise l’attention, la précision et la convivialité.",
    time: "17:00",
    location: "Zone verte · Terrain découverte",
    audience: "Tout public",
    sport: "gateball",
    category: "précision",
    tags: ["précision", "accessible", "convivial"],
    accentColor: "green",
  },
];