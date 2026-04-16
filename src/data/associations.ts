export type AssociationItem = {
    id: number;
    name: string;
    category: string;
    website: string;
    description: string;
};

export const associations: AssociationItem[] = [
    {
        id: 1,
        name: "Up Sport!",
        category: "Sport inclusif",
        website: "https://www.unispourlesport.paris/",
        description:
            "Association engagée pour rendre le sport accessible à toutes et tous, notamment aux publics en situation de vulnérabilité sociale.",
    },
    {
        id: 2,
        name: "Association partenaire 1",
        category: "Partenaire",
        website: "#",
        description:
            "Association mobilisée autour de la découverte sportive et de l’inclusion.",
    },
    {
        id: 3,
        name: "Association partenaire 2",
        category: "Partenaire",
        website: "#",
        description:
            "Acteur engagé dans la promotion du lien social par l’activité physique.",
    },
];