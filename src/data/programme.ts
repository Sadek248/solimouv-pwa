export type ProgrammeItem = {
    id: number;
    title: string;
    time: string;
    location: string;
    audience: string;
    partner: string;
    description: string;
};

export const programme: ProgrammeItem[] = [
    {
        id: 1,
        title: "Football inclusif",
        time: "10:00",
        location: "Terrain A",
        audience: "Tout public",
        partner: "Up Sport!",
        description:
            "Une initiation collective ouverte à toutes et tous pour découvrir une pratique sportive conviviale et accessible.",
    },
    {
        id: 2,
        title: "Yoga adapté",
        time: "11:30",
        location: "Salle B",
        audience: "Seniors / mobilité réduite",
        partner: "Association partenaire 1",
        description:
            "Un temps de bien-être pensé pour différents niveaux de mobilité, dans une approche inclusive et progressive.",
    },
    {
        id: 3,
        title: "Atelier sensibilisation",
        time: "14:00",
        location: "Espace central",
        audience: "Tout public",
        partner: "Association partenaire 2",
        description:
            "Un échange autour du sport inclusif, de l’égalité d’accès à la pratique et des enjeux de solidarité.",
    },
    {
        id: 4,
        title: "Premiers secours",
        time: "16:00",
        location: "Stand prévention",
        audience: "Jeunes et adultes",
        partner: "Association partenaire 3",
        description:
            "Une initiation accessible aux gestes essentiels de premiers secours, utile dans la vie quotidienne.",
    },
];