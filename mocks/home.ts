import type { WPPostResponse, HomePageACF } from "@/lib/wp-types";

export const homeMock: WPPostResponse<HomePageACF> = {
  id: 0,
  slug: "home",
  title: { rendered: "Home" },
  acf: {
    herosection_fr: {
      subtitle_1: "Avec",
      subtitle_2: "par WoodWise",
      title_part1: "Construire Mieux",
      title_part2: "ECOLOGIQUEMENT",
      description:
        "WoodWise Une entreprise spécialisée dans la fabrication des produits durables dans un matériau composite de bois recyclé, réduisant le CO2 de la planète.",
      learnmore: "Découvrir plus",
      learnmorelink: "/pages/à-propos",
    },
    herosection_en: {
      subtitle_1: "With",
      subtitle_2: "by WoodWise",
      title_part1: "Create Better",
      title_part2: "ECOLOGICALLY",
      description:
        "WoodWise A company specialized in manufacturing sustainable products in a recycled wood composite material, reducing the planet's CO2.",
      learnmore: "Learn more",
      learnmorelink: "/pages/about",
    },

    aboutsection_fr: {
      title_part1: "  ",
      title_part2: "WoodWise",
      ourvision: {
        title: "Notre Vision",
        description:
          "L'écologie au service de la construction: bâtir un avenir durable avec le bois moulé.",
      },
      ourmission: {
        title: "Notre Mission",
        description:
          "Chez WoodWise, notre mission est de révolutionner l'industrie de la construction en proposant des solutions innovantes et durables à base de bois moulé.",
      },
      services: {
        service1: {
          title: "Le panneau MBio7 : L'efficacité écologique",
          description:
            "Notre panneau breveté MBio7 a été reconnu par le prestigieux label Solar Impulse Efficient Solution, le classant parmi les meilleures innovations mondiales pour la réduction du CO2.",
        },
        service2: {
          title: "Engagement envers l'économie circulaire",
          description:
            "Chez WoodWise, nous transformons les déchets de bois en ressources précieuses, contribuant ainsi à une économie circulaire et à la préservation de nos forêts.",
        },
        service3: {
          title: "Partenariats pour un impact global",
          description:
            "Nous collaborons avec des collectivités locales et des ONG pour maximiser notre impact environnemental et social, en soutenant des projets de construction durable à travers le monde.",
        },
        service4: {
          title: "Une excellence reconnue et primée",
          description:
            "Notre engagement envers une construction durable a été salué par de prestigieuses distinctions, notamment le Label Solar Impulse, la médaille au Concours Lépine Paris 2015, et notre statut de finaliste au CLEAN TECH OPEN France.",
        },
      },
      image: undefined,
    },
    aboutsection_en: {
      title_part1: "About",
      title_part2: "WoodWise",
      ourvision: {
        title: "Our Vision",
        description:
          "Our vision is to become the world leader in CO2-negative construction solutions, making molded wood the material of choice for building a greener future.",
      },
      ourmission: {
        title: "Our Mission",
        description:
          "At WoodWise, our mission is to revolutionize the construction industry by providing sustainable, high-performance molded wood products that reduce environmental impact and promote circular economy practices.",
      },
      services: {
        service1: {
          title: "The MBio7 Panel: Ecological Efficiency",
          description:
            "Our patented MBio7 panel has been recognized by the prestigious Solar Impulse Efficient Solution label, ranking it among the world's best innovations for CO2 reduction.",
        },
        service2: {
          title: "Commitment to the Circular Economy",
          description:
            "At WoodWise, we transform wood waste into valuable resources, contributing to a circular economy and the preservation of our forests.",
        },
        service3: {
          title: "Partnerships for Global Impact",
          description:
            "We collaborate with local communities and NGOs to maximize our environmental and social impact, supporting sustainable construction projects around the world.",
        },
        service4: {
          title: "Recognized and Awarded Excellence",
          description:
            "Our commitment to sustainable construction has been recognized with prestigious awards, including the Solar Impulse Label, a medal at the Concours Lépine Paris 2015, and our status as a finalist at the CLEAN TECH OPEN France.",
        },
      },
      image: undefined,
    },

    impactsection_fr: {
      title_part1: "Notre",
      title_part2: "Impact",
      description:
        "Chaque panneau, chaque projet, chaque kilo de bois détourné des décharges témoigne de notre engagement.",
      stat1: { title: "Part de bois recyclé dans le matériau", value: "95%" },
      stat2: { title: "Kg de CO₂ économisés par panneau", value: "7,66" },
      stat3: {
        title: "Tonnes de CO₂ évité par maison de 120 m²",
        value: "3",
      },
    },
    impactsection_en: {
      title_part1: "Our",
      title_part2: "Impact",
      description:
        "Every panel, every project, every kilo of wood diverted from landfills testifies to our commitment.",
      stat1: { title: "Share of recycled wood in the material", value: "95%" },
      stat2: { title: "Kg of CO₂ saved per panel", value: "7.66" },
      stat3: {
        title: "Tonnes of CO₂ avoided per 120 m² house",
        value: "3",
      },
    },

    mbio7section_fr: {
      title_part1: "MBio7 by",
      title_part2: "WoodWise",
      description:
        "Le panneau nouvelle génération pour une construction durable. Issu de bois recyclé et de résidus forestiers, MBio7 est un panneau de construction unique.",
      learnmore: "Découvrir plus",
      learnmorelink: "/pages/à-propos",
      tags: {
        tag1: "Résistant au feu",
        tag2: "Hydrofuge",
        tag3: "Résistant aux termites",
        tag4: "Léger, modulaire, facile à poser",
        tag5: "Avec une empreinte carbone négative",
      },
      image: undefined,
    },
    mbio7section_en: {
      title_part1: "MBio7 by",
      title_part2: "WoodWise",
      description:
        "The ecological alternative to traditional construction materials, combining performance, sustainability, and ease of use.",
      learnmore: "Learn more",
      learnmorelink: "/pages/about",
      tags: {
        tag1: "Fire-resistant",
        tag2: "Water-repellent",
        tag3: "Termite-resistant",
        tag4: "Lightweight, modular, easy to install",
        tag5: "With a negative carbon footprint",
      },
      image: undefined,
    },

    contactsection_fr: {
      title: "  ",
      description:
        "Vous avez des questions ou souhaitez en savoir plus sur nos produits et services ? N'hésitez pas à nous contacter, nous sommes là pour vous aider.",
      contactinfo: {
        title: "Informations de contact",
        description: "N'hésitez pas à nous contacter pour toute question.",
        phone: "80157 59053",
        mail: "contact@woodwise.fr",
        map: "QUARTIER CUNI, SOSPEL, 06380, FR"
      },
     
    },
    contactsection_en: {
      title: "Contact Us",
      description:
        "If you have any questions or would like to know more about our products and services, please feel free to contact us. We are here to help you.",
      contactinfo: {
        title: "Contact information",
        description: "Feel free to reach out to us with any questions.",
        phone: "80157 59053",
        mail: "contact@woodwise.fr",
        map: "QUARTIER CUNI, SOSPEL, 06380, FR"
      },
     
    },

    blogssection_fr: {
      title_part1: "Dernières Nouvelles",
      title_part2: "et articles",
      description:
        "Restez informé des dernières tendances en matière de construction durable, des innovations dans le secteur du bois moulé, et des initiatives écologiques à travers nos articles de blog.",
      viewmore: "Voir plus",
      blogs: {
        blog1: {
          date: "06 Mars 2019",
    title:
      "Il fabrique des maisons qui résistent à toutes conditions climatiques",
    description:
      "Denis Mary et Dominique Tallarida vont lancer dès la semaine prochaine la production des fameux panneaux MBio7. Ils ont également été repérés par la Croix-Rouge et le Croissant-Rouge.",
    link: " ",
    image: undefined,
        },
        blog2: {
           date: " 1er janvier 2019",
    title: "Libé des solutions : Le bois mis en demeure",
    description:
      "Parmi les inventeurs, il y a les grands rêveurs et les gens carrés. La maison écologique MBio7 est l'alliance des deux. Dominique Tallarida dans le rôle du Géo Trouvetou, Denis Mary dans celui du technicien. Ces habitants de Sospel (Alpes-Maritimes) ont créé des maisons en panneaux de bois recyclé.",
    link: "https://www.liberation.fr/france/2019/01/01/le-bois-mis-en-demeure_1700633/",
    image: undefined,
        },
        blog3: {
          date: "14 Août 2018",
    title: "Une souscription lancée pour des maisons d'urgence",
    description:
      "Lauréats du concours Lépine, le Sospellois Dominique Tallarida et son ami Denis Mary s'apprêtent à commercialiser leur concept d'habitat humanitaire. Ils ont besoin d'un dernier coup de pouce",
    link: "https://www.pressreader.com/monaco/monaco-matin/20180814/281702615548883",
    image: undefined,
      },
    },
      // ViewMoreLink: "/pages/actualités",
    },
    blogssection_en: {
      title_part1: "Latest News",
      title_part2: "and Articles",
      description:
        "Stay informed about the latest trends in sustainable construction, innovations in the molded wood sector, and ecological initiatives through our blog posts.",
      viewmore: "View more",
      blogs: {
        blog1: {
          date: "March 6, 2019",
          title:
            "He builds houses that withstand all weather conditions",
          description:
            "Denis Mary and Dominique Tallarida will start production of the famous MBio7 panels next week. They have also been noticed by the Red Cross and the Red Crescent.",
          link: " ",
          image: undefined,
        },
        blog2: {
          date: "January 1, 2019",
          title: "Libé des solutions: Wood put on notice",
          description:
            "Among the inventors, there are big dreamers and square people. The ecological house MBio7 is the alliance of both. Dominique Tallarida in the role of Géo Trouvetou, Denis Mary in that of the technician. These inhabitants of Sospel (Alpes-Maritimes) created houses made of recycled wood panels.",
          link: "https://www.liberation.fr/france/2019/01/01/le-bois-mis-en-demeure_1700633/",
          image: undefined,
        },
        blog3: {
          date: "August 14, 2018",
          title: "A subscription launched for emergency housing",
          description:
            "Winners of the Lépine competition, Sospellois Dominique Tallarida and his friend Denis Mary are preparing to market their concept of humanitarian habitat. They need one last boost.",
          link: "https://www.pressreader.com/monaco/monaco-matin/20180814/281702615548883",
          image: undefined,
        },
      },
      // ViewMoreLink: "/pages/news",
    },

    reviewssection_fr: {
      title_part1: "Ce que nos",
      title_part2: "clients disent",
      description:
        "Découvrez les témoignages de nos clients satisfaits et comment nos solutions en bois moulé ont transformé leurs projets.",
      reviews: {
        review1: {
          name: "Anonyme",
          stars: "5",
          comment:
            "Les produits en bois moulé de WoodWise sont incroyables ! J'en suis totalement satisfait..",
        },
        review2: {
          name: "Anonyme",
          stars: "4",
          comment:
            "WoodWise offre des produits en bois moulé de haute qualité. Je les recommande vivement !",
        },
      },
    },
    reviewssection_en: {
      title_part1: "What our",
      title_part2: "clients say",
      description:
        "Discover testimonials from our satisfied clients who have transformed their construction projects with our molded wood products.",
      reviews: {
        review1: {
          name: "Anonymous",
          stars: "5",
          comment:
            "WoodWise's molded wood products are amazing! I am completely satisfied.",
        },
        review2: {
          name: "Anonymous",
          stars: "4",
          comment:
            "WoodWise offers high-quality molded wood products. I highly recommend them!",
        },
      },
    },

    faqsection_fr: {
      title_part1: "Questions",
      title_part2: "Fréquentes",
      questions: {
        q1: {
          question: "Qu'est-ce que le panneau MBio7 ?",
          answer:
            "MBio7 est un panneau de construction innovant, fabriqué à plus de 90 % en bois recyclé. Il est léger, modulaire et conçu pour des constructions durables, économiques et rapides.",
        },
        q2: {
          question:
            "Quelle est la performance environnementale du panneau ?",
          answer:
            "Chaque panneau présente un bilan carbone négatif de -7,66 kg CO₂-éq. Une maison de 120 m² en MBio7 permet d'éviter environ 3 tonnes de CO₂.",
        },
        q3: {
          question: "Le panneau est-il résistant ?",
          answer:
            "Oui. Le MBio7 est résistant à l'eau, au feu, aux termites, au gel et aux séismes. C'est un matériau thermo-durcissable qui ne pourrit pas et ne craint pas l'humidité.",
        },
        q4: {
          question: "Est-il conforme aux normes de construction ?",
          answer:
            "Oui. Les constructions en MBio7 respectent la norme RE 2020 si elles sont associées à un isolant adapté.",
        },
        q5: {
          question: "Combien pèse un panneau ?",
          answer:
            "Un panneau MBio7 pèse environ 9 kg, ce qui facilite son transport et sa mise en œuvre.",
        },
        q6: {
          question:
            "Peut-on construire une maison complète avec ce matériau ?",
          answer:
            "Oui. Par exemple, une maison test de 10 m² a été construite en 2017 à Sospel avec 160 panneaux (≈ 1 450 kg). Les panneaux s'assemblent facilement et permettent des projets de toute taille.",
        },
        q7: {
          question: "Quelle est la capacité de production ?",
          answer:
            "Environ 400 panneaux par jour pour l'instant car nous sommes en phase d'extension.",
        },
        q8: {
          question: "À qui s'adresse MBio7 ?",
          answer:
            "Le matériau est idéal pour les ONG (reconstruction d'urgence), les collectivités locales et les particuliers souhaitant des logements écologiques, modulables et économiques.",
        },
      },
    },
    faqsection_en: {
      title_part1: "Frequently Asked",
      title_part2: "Questions",
      questions: {
        q1: {
          question: "What is the MBio7 panel?",
          answer:
            "MBio7 is an innovative construction panel, made of more than 90% recycled wood. It is lightweight, modular, and designed for sustainable, cost-effective, and fast construction.",
        },
        q2: {
          question: "What is the environmental performance of the panel?",
          answer:
            "Each panel has a negative carbon footprint of -7.66 kg CO₂-eq. A 120 m² house built with MBio7 helps avoid around 3 tons of CO₂.",
        },
        q3: {
          question: "Is the panel resistant?",
          answer:
            "Yes. MBio7 is resistant to water, fire, termites, frost, and earthquakes. It is a thermosetting material that does not rot and is unaffected by humidity.",
        },
        q4: {
          question: "Is it compliant with construction standards?",
          answer:
            "Yes. Constructions using MBio7 comply with the RE 2020 standard when combined with suitable insulation.",
        },
        q5: {
          question: "How much does a panel weigh?",
          answer:
            "An MBio7 panel weighs around 9 kg, which makes it easy to transport and install.",
        },
        q6: {
          question: "Can a complete house be built with this material?",
          answer:
            "Yes. For example, a 10 m² test house was built in 2017 in Sospel with 160 panels (≈ 1,450 kg). The panels assemble easily and allow projects of any size.",
        },
        q7: {
          question: "What is the production capacity?",
          answer:
            "About 400 panels per day for now, as we are currently in an expansion phase.",
        },
        q8: {
          question: "Who is MBio7 intended for?",
          answer:
            "The material is ideal for NGOs (emergency reconstruction), local authorities, and individuals seeking ecological, modular, and cost-effective housing.",
        },
      },
    },
  },
};
