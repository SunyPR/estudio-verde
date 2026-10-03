# MEMORY.md — Estudio Verde

Última actualización: 2026-10-02. Detalle que no entra en `AGENTS.md`. Si algo deja de servir, resumirlo o borrarlo.

## Estado actual
- Informe único: `Reporte.md`. El README raíz presenta el trabajo práctico (qué resuelve y el stack). Se borraron `Reporte-cambios.md`, `Reporte-verificacion.md` y el README genérico de Astro en `Frontend/`.
- La URL de Vercel (`https://estudio-verde-qtgbyie2r-sunypr.vercel.app/`) redirige al login de Vercel. No está abierta al público.
- Sitio estático en `Frontend/`: inicio (`/`) y `/proyectos`. Ejercicio de portafolio: Paula, las obras y el WhatsApp son ficticios. Mail `estudio.verde@gmail.com` e Instagram `@estudio.verde` se quedan. WhatsApp genérico Rosario: `+54 9 341 555-1234` (`wa.me/5493415551234`).
- Las 16 `.webp` de `Imágenes/` están en `public/images/` y el `astro build` las pone en el HTML (`Photo.astro` busca en `process.cwd()/public`). Los JPG de `Imágenes/originales/` no se publican.
- Deploy previsto en Vercel: `Frontend/vercel.json` (Root Directory = `Frontend`). Sin dominio propio.
- Orden del inicio: portada, quiénes somos, mirada, servicios, cómo trabajan, cuatro obras, banda de Instagram, contacto. Logo tipografiado (Fraunces + Work Sans).
- WhatsApp es el botón lleno; el mail es respaldo (asunto «Cita desde la web»). La portada solo dice «Ver proyectos».
- Referencias ya comparadas: foto, filtro `?categoria=` y capa al tocar una obra. Sin formulario, testimonios, mapa, FAQ, video ni proceso de seis pasos.

## Aprendizajes y errores a evitar
- No reabrir esas secciones descartadas ni un formulario: la consulta sale por WhatsApp o mail.
- Instagram no es canal de consultas. Sale en su banda y en el pie. La ficha «Un solo lugar, sin perder nada» ya no está en contacto.
- `Context.md` escribe «Martón»; en el sitio es Martín Sánchez.
- Al regenerar el hero, usar el prompt de `Imágenes/PROMPTS-NANO-BANANA.md`. Las fotos de servicios no deben copiar una obra de la grilla. Sujeto al centro: la grilla recorta; la capa muestra el encuadre entero.
- `import.meta.url` + `../../public` falla en `astro build` (el módulo compilado no está en `src/`). Usar `process.cwd()/public`.
- El pie dice «Rosario, Santa Fe, Argentina». El resto usa «Zona Centro, Rosario». No poner calle.

## Próximos pasos
- Abrir la demo: la URL actual pide login de Vercel. Root Directory `Frontend`, build `npm run build`, salida `dist`.
- Comprimir WebP pesadas si el celular se siente lento (jardines, casas, locales, Martín, Paula).
- Falta `og:image` al compartir el enlace.
- `npm run astro check` sigue con errores de tipos (`@types/node` y el `<dialog>`).
