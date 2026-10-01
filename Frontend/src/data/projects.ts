// ---------------------------------------------------------------------------
// Proyectos del ejercicio (obras y textos ficticios).
// ---------------------------------------------------------------------------

export type ProjectCategoryId = "casas" | "remodelaciones" | "locales" | "jardines";

export const CATEGORIES: { id: "todos" | ProjectCategoryId; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "casas", label: "Casas" },
  { id: "remodelaciones", label: "Remodelaciones" },
  { id: "locales", label: "Locales comerciales" },
  { id: "jardines", label: "Jardines y exteriores" },
];

export interface Project {
  id: string;
  title: string;
  category: ProjectCategoryId;
  location: string;
  description: string;
  /** Ruta en public/. Si el archivo no está, la tarjeta muestra el recuadro de color. */
  image: string;
}

export const PROJECTS: Project[] = [
  {
    id: "casa-arboles",
    title: "Casa Entre Árboles",
    category: "casas",
    location: "Rosario",
    description:
      "Vivienda de dos plantas pensada para aprovechar la luz natural y la ventilación cruzada, con materiales de bajo impacto ambiental.",
    image: "/images/proyectos/casa-arboles.webp",
  },
  {
    id: "casa-patio-interior",
    title: "Casa Patio Interior",
    category: "casas",
    location: "Funes",
    description:
      "Un patio central organiza toda la vivienda y conecta cada ambiente con el verde, de la mano del paisajismo de Martín.",
    image: "/images/proyectos/casa-patio-interior.webp",
  },
  {
    id: "reforma-balcarce",
    title: "Reforma Balcarce",
    category: "remodelaciones",
    location: "Rosario",
    description:
      "Ampliación y puesta en valor de una casa de principios de siglo, conservando su identidad original y sumando eficiencia energética.",
    image: "/images/proyectos/reforma-balcarce.webp",
  },
  {
    id: "cocina-living",
    title: "Integración Cocina–Living",
    category: "remodelaciones",
    location: "Rosario",
    description:
      "Rediseño integral de la planta baja para ganar luminosidad y continuidad entre los ambientes sociales de la casa.",
    image: "/images/proyectos/cocina-living.webp",
  },
  {
    id: "local-cafeteria",
    title: "Cafetería de Barrio",
    category: "locales",
    location: "Rosario",
    description:
      "Diseño de un local comercial cálido y funcional, con identidad propia y materiales nobles que acompañan la marca.",
    image: "/images/proyectos/local-cafeteria.webp",
  },
  {
    id: "showroom-diseno",
    title: "Showroom de Diseño",
    category: "locales",
    location: "Rosario",
    description:
      "Un espacio comercial pensado para que el producto sea protagonista, con una paleta sobria y mucha luz natural.",
    image: "/images/proyectos/showroom-diseno.webp",
  },
  {
    id: "jardin-casa-sur",
    title: "Jardín Casa Sur",
    category: "jardines",
    location: "Rosario",
    description:
      "Diseño de paisajismo con especies nativas de bajo mantenimiento, pensado para disfrutarse en todas las estaciones.",
    image: "/images/proyectos/jardin-casa-sur.webp",
  },
  {
    id: "terraza-urbana",
    title: "Terraza Urbana Verde",
    category: "jardines",
    location: "Rosario",
    description:
      "Transformamos una terraza de Rosario en un espacio verde habitable, con huerta propia y zona de estar al aire libre.",
    image: "/images/proyectos/terraza-urbana.webp",
  },
];
