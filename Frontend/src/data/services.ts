import type { ProjectCategoryId } from "./projects";

export interface Service {
  id: ProjectCategoryId;
  icon: "house" | "remodel" | "store" | "leaf";
  tone: "forest" | "terracotta" | "olive" | "sand";
  title: string;
  text: string;
  href: string;
  linkLabel: string;
  image: string;
  imageAlt: string;
}

export const SERVICES: Service[] = [
  {
    id: "casas",
    icon: "house",
    tone: "forest",
    title: "Casas",
    text: "Diseño y construcción de viviendas pensadas para cómo vivís, con materiales conscientes y mucha luz natural.",
    href: "/proyectos?categoria=casas",
    linkLabel: "Ver casas",
    image: "/images/servicios/servicio-casas.webp",
    imageAlt: "Casa de una planta con galería, aleros y jardín nativo",
  },
  {
    id: "remodelaciones",
    icon: "remodel",
    tone: "terracotta",
    title: "Remodelaciones",
    text: "Transformamos espacios existentes sin perder su esencia, sumando funcionalidad y eficiencia.",
    href: "/proyectos?categoria=remodelaciones",
    linkLabel: "Ver remodelaciones",
    image: "/images/servicios/servicio-remodelaciones.webp",
    imageAlt: "Ambiente reformado con ladrillo original y una abertura hacia el patio",
  },
  {
    id: "locales",
    icon: "store",
    tone: "olive",
    title: "Locales comerciales",
    text: "Espacios que proyectan la identidad de tu marca, con una mirada sustentable en cada decisión.",
    href: "/proyectos?categoria=locales",
    linkLabel: "Ver locales",
    image: "/images/servicios/servicio-locales.webp",
    imageAlt: "Local de barrio con vidriera, materiales nobles y una planta en la vereda",
  },
  {
    id: "jardines",
    icon: "leaf",
    tone: "sand",
    title: "Jardines, terrazas y patios",
    text: "Paisajismo a cargo de Martín: diseño de verde para que cada rincón exterior cobre vida.",
    href: "/proyectos?categoria=jardines",
    linkLabel: "Ver jardines",
    image: "/images/servicios/servicio-jardines.webp",
    imageAlt: "Patio entre medianeras con especies nativas y un lugar para sentarse",
  },
];
