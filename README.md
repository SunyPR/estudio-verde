# Estudio Verde

Sitio de presentación de un estudio de arquitectura y paisajismo en Rosario. Es un **trabajo práctico**: Paula Sánchez, Martín Sánchez, las obras y el WhatsApp son ficticios. El mail y el Instagram del ejercicio se mantienen.

La web muestra el trabajo con fotos y deja la consulta en un solo lugar: el WhatsApp del estudio. El mail queda como respaldo. Instagram se ve, pero no es el canal para escribir.

## Qué resuelve

En el brief, las consultas se perdían entre el mail, Instagram y el teléfono de Martín. Quien entra a esta web entiende que el estudio diseña con conciencia ambiental, ve casas, remodelaciones, locales y jardines, y coordina una cita por mensaje. No hay precios ni dirección exacta: la zona es Centro, Rosario.

## Qué incluye

- **Inicio:** portada, quiénes somos, mirada ambiental, cuatro oficios, cómo trabajan, cuatro obras, Instagram y contacto.
- **Proyectos:** ocho obras, filtro por categoría y la foto ampliada al tocar una ficha.

No hay formulario ni panel. El sitio no guarda los mensajes.

## Stack

Astro, Tailwind CSS y TypeScript. Es un sitio estático, sin backend. La app está en `Frontend/` y el deploy está pensado para Vercel.

```bash
cd Frontend
npm install
npm run dev
```

El sitio local queda en `http://localhost:4321`.

El detalle del estado actual está en [Reporte.md](Reporte.md).
