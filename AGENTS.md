# AGENTS.md — Estudio Verde

Sitio de Estudio Verde (Paula Sánchez, arquitectura; Martín Sánchez, paisajismo) en Rosario. La web es el único canal de consultas (email y WhatsApp) y debe mostrar el trabajo con conciencia ambiental.

## Stack y estructura

- Node `>=22.12.0`, Astro `^7.3.5`, Tailwind CSS `^4.3.3` (plugin de Vite). Sin CMS ni backend activo.
- `Frontend/`: la app. Datos en `src/data/` (`site.ts` contacto y nav; `services.ts`; `projects.ts`). Páginas en `src/pages/`, secciones en `src/components/sections/`, estilos en `src/styles/global.css`.
- `Imágenes/`: originales. En el sitio van como `.webp` en `Frontend/public/images/{estudio,servicios,proyectos}/`. `Backend/` está vacío, reservado.

## Comandos

Desde `Frontend/`: `npm run dev -- --background` (`npx astro dev stop` para parar) · `npm run astro check` · `npm run build` · `npm run preview`. No hay tests ni lint.

## Convenciones

- Textos de la web en español (Argentina), tono profesional y cálido. Comentarios en español.
- Contenido y contacto solo desde `src/data/*.ts`; los componentes importan esos datos. Si falta una foto, usar `<PlaceholderPhoto />`.

## Reglas de dominio / trampas conocidas

- Sin precios y sin dirección exacta: «Zona Centro, Rosario» y «Coordinamos la cita por mensaje».
- Contacto del ejercicio: `estudio.verde@gmail.com`, Instagram `@estudio.verde` y WhatsApp genérico de Rosario en `site.ts`. Paula y las obras son ficticias; no inventar datos como si fueran de una persona real. Sin dominio propio todavía (el deploy va a Vercel).
- Paleta natural: verdes sin neón, tierra y madera. Brief en `Context.md`.

## Forma de trabajar

- Si el cambio toca varias pantallas o los datos, un plan breve antes de editar. Diffs chicos. Al terminar: qué cambió, cómo se verificó y qué riesgo queda.

## Límites

- ✅ Siempre: editar contenido vía `src/data/`, conservar el tono y verificar la UI en el navegador.
- ✅ Siempre: actualizar `MEMORY.md` al terminar cada tarea.
- ✅ Siempre: actualizar `CHANGELOG.md` al terminar cada tarea.
- ✅ Siempre: actualizar `CHANGELOG.md` al terminar cada tarea.
- ⚠ Pregunta antes: dependencias, archivos nuevos, formato de `src/data/` o rutas públicas.
- 🚫 Nunca: precios, dirección exacta, inventar un contacto real, ni commitear salvo pedido explícito.

## Verificación

- En `Frontend/`: `npm run astro check` y `npm run build`. En la UI, recorrer inicio y `/proyectos` (escritorio y móvil) antes de dar por terminado.

