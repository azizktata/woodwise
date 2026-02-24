import type { WPPostResponse, AboutUsACF } from "@/lib/wp-types";

export const aboutUsMock: WPPostResponse<AboutUsACF> = {
  id: 0,
  slug: "about-us",
  title: { rendered: "About us" },
  acf: {
    banner: undefined,
    aboutussection_fr: {
      subtitle: "Qui sommes-nous",
      title: "WoodWise est une entreprise engagée dans la fabrication de produits en bois moulé.",
      description:
        "WoodWise Une entreprise spécialisée dans la fabrication des produits durables dans un matériau composite de bois recyclé, réduisant le CO2 de la planète. Depuis notre création, nous travaillons à développer une nouvelle approche de la construction et du design : moins de gaspillage, plus d'impact positif.",
      contactus: "Contactez-nous",
      services: {
        service1: {
          title: "Circularité",
          description: "Rien ne se perd. Le bois usagé devient matière première pour bâtir l'avenir.",
        },
        service2: {
          title: "Innovation",
          description: "Nous développons des matériaux performants, biosourcés et à faible impact.",
        },
        service3: {
          title: "Partenariat",
          description:
            "Avec les acteurs publics, privés ou associatifs, nous co-construisons des solutions sur mesure.",
        },
        service4: {
          title: "Responsabilité",
          description:
            "De la matière première à la livraison, nous garantissons une démarche éthique et transparente.",
        },
      },
    },
    aboutussection_en: {
      subtitle: "Who we are",
      title: "WoodWise is a company committed to the manufacture of molded wood products.",
      description:
        "WoodWise A company specialized in manufacturing sustainable products in a recycled wood composite material, reducing the planet's CO2. Since our inception, we have been working to develop a new approach to construction and design: less waste, more positive impact.",
      contactus: "Contact us",
      services: {
        service1: {
          title: "Circularity",
          description: "Nothing is wasted. Used wood becomes raw material to build the future.",
        },
        service2: {
          title: "Innovation",
          description: "We develop high-performance, bio-based materials with low impact.",
        },
        service3: {
          title: "Partnership",
          description:
            "With public, private, or associative stakeholders, we co-construct tailored solutions.",
        },
        service4: {
          title: "Responsibility",
          description:
            "From raw material to delivery, we ensure an ethical and transparent approach.",
        },
      },
    },

    team_fr: {
      title: "Rencontrez l'équipe",
      members: {
        member1: { name: "Lotfi Dogui", position: "CEO", image: "/lotfi-dogi.png" },
        member2: { name: "Denis Mary", position: "Inventeur & Fondateur", image: "/Denis-Mary.jpg" },
      },
    },
    team_en: {
      title: "Our Team",
      members: {
        member1: { name: "Lotfi Dogui", position: "CEO", image: "/lotfi-dogi.png" },
        member2: { name: "Denis Mary", position: "Inventor & Founder", image: "/Denis-Mary.jpg" },
      },
    },
  },
};
