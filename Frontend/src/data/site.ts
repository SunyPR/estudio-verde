// ---------------------------------------------------------------------------
// Datos centrales del sitio — Estudio Verde (ejercicio / portafolio).
// Paula, las obras y el WhatsApp son ficticios. El mail e Instagram del
// ejercicio se mantienen. wa.me va sin "+" ni espacios.
// ---------------------------------------------------------------------------

const whatsappNumber = "5493415551234"; // Genérico Rosario (+54 9 341…)

const contactMessage =
  "Hola, vi la web de Estudio Verde. Me gustaría coordinar una cita para contarles sobre mi proyecto.";

export const SITE = {
  name: "Estudio Verde",
  tagline: "Arquitectura y paisajismo con conciencia ambiental",
  description:
    "Estudio Verde diseña y construye casas, remodelaciones, locales comerciales y espacios verdes en Rosario, con conciencia ambiental de principio a fin.",

  email: "estudio.verde@gmail.com",
  mailtoHref: `mailto:estudio.verde@gmail.com?subject=${encodeURIComponent(
    "Cita desde la web"
  )}&body=${encodeURIComponent(contactMessage)}`,

  whatsappDisplay: "+54 9 341 555-1234",
  whatsappHref: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(contactMessage)}`,

  instagramHandle: "@estudio.verde",
  instagramUrl: "https://instagram.com/estudio.verde",

  city: "Zona Centro, Rosario",
  locationNote: "Coordinamos la cita por mensaje.",

  founders: [
    {
      name: "Paula Sánchez",
      role: "Arquitectura y dirección de proyecto",
    },
    {
      name: "Martín Sánchez",
      role: "Paisajismo",
    },
  ],
};

export const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Cómo trabajamos", href: "/#proceso" },
  { label: "Proyectos", href: "/proyectos" },
];
