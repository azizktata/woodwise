import type { WPPostResponse, ProjetsACF } from "@/lib/wp-types";

export const projetsMock: WPPostResponse<ProjetsACF> = {
  id: 0,
  slug: "projets",
  title: { rendered: "Projets" },
  acf: {
    banner: undefined,  
    projectsection_fr: {
      subtitle: "Regarder la vidéo",
      title: "Construction d'une maison individuelle en panneaux de bois recyclé MBio7",
      description: "Une maison test de 10 m² a été construite en 2017 à Sospel avec 160 panneaux (≈ 1 450 kg).",
      image: undefined,
      videolink: "https://www.youtube.com/watch?v=S7VjzBBewY8",
    },
    projectsection_en: {
      subtitle: "Watch the video",
      title: "Construction of a single-family house with recycled wood panels MBio7",
      description: "A test house of 10 m² was built in 2017 in Sospel with 160 panels (≈ 1,450 kg).",
      image: undefined,
      videolink: "https://www.youtube.com/watch?v=S7VjzBBewY8",
    },
  },
};
