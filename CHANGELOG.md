# Changelog

Todos los cambios notables de este proyecto se documentan en este archivo.

El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/),
y el proyecto usa [versionado semántico](https://semver.org/lang/es/).

## [Unreleased]

### Added

- Las 16 fotos WebP de `Imágenes/` quedan servidas por el sitio. Los JPG de `Imágenes/originales/` no se publican.

  Estudio (`Frontend/public/images/estudio/`):

  - `hero.webp` (portada), desde `hero.webp`.
  - `paula-obra.webp`, desde `paula.webp`.
  - `martin-jardin.webp`, desde `martín.webp`.
  - `equipo.webp`, desde `equipoi.webp`.

  Servicios (`Frontend/public/images/servicios/`):

  - `servicio-casas.webp`, desde `servicio_1.webp`.
  - `servicio-remodelaciones.webp`, desde `servicio_2.webp`.
  - `servicio-locales.webp`, desde `servicio_3.webp`.
  - `servicio-jardines.webp`, desde `servicio_4.webp`.

  Proyectos (`Frontend/public/images/proyectos/`), en el orden de los prompts 1 a 8:

  - `casa-arboles.webp`, desde `proyecto_1.webp`.
  - `casa-patio-interior.webp`, desde `proyecto_2.webp`.
  - `reforma-balcarce.webp`, desde `proyecto_3.webp`.
  - `cocina-living.webp`, desde `proyecto_4.webp`.
  - `local-cafeteria.webp`, desde `proyecto_5.webp`.
  - `showroom-diseno.webp`, desde `proyecto_6.webp`.
  - `jardin-casa-sur.webp`, desde `proyecto_7.webp`.
  - `terraza-urbana.webp`, desde `proyecto_8.webp`.

### Changed

- La portada, Quiénes somos, las cuatro tarjetas de oficios y las fichas de proyectos muestran esas fotos. El recuadro de color queda solo si el archivo no está.
- WhatsApp es el medio principal para coordinar una cita. El mail queda como respaldo, con el asunto «Cita desde la web» y el mismo texto del chat. El botón «Contactanos» del menú sigue yendo a la sección de contacto.
- En la portada el botón de WhatsApp va lleno (crema sobre el fondo verde) y el de mail queda en contorno. En contacto y al final de proyectos, WhatsApp va lleno en verde y el mail en contorno, con la línea «Si no tenés WhatsApp, escribinos por mail».
- El bloque de contacto y el pie muestran «Zona Centro, Rosario» y «Coordinamos la cita por mensaje.». Rosario sigue en la portada, en quiénes somos, en proyectos y en el título.
- El recuadro «Un solo lugar, sin perder nada» señala el WhatsApp del estudio. Instagram sale de esa lista y queda en su banda y en el pie.
- La portada queda solo con «Ver proyectos». WhatsApp y el mail salen de ahí y siguen en la sección de contacto y al final de proyectos. Se elimina el estilo de esos botones para fondo oscuro, que ya no se usa.
- WhatsApp genérico de Rosario (`+54 9 341 555-1234`). Mail e Instagram del ejercicio se mantienen.

### Fixed

- `Photo.astro` busca las WebP en `process.cwd()/public`. El `astro build` ya emite `<img>` (en el HTML de producción no quedaban las fotos).

### Added

- `Frontend/vercel.json` para un deploy estático en Vercel (Root Directory = `Frontend`).

### Known issues

- Varias WebP siguen por encima del peso previsto (unos 80–150 KB; el hero, hasta unos 200 KB). El conjunto publicado pesa cerca de 5,2 MB. Lo más pesado: jardines (~980 KB), casas (~655 KB), locales (~519 KB), Martín (~512 KB) y Paula (~400 KB). Si la página se siente lenta en el celular, conviene volver a comprimir esas cinco sin tocar los JPG originales.
- `npm run astro check` falla con 8 errores de tipos (`node:` / `process` en `Photo.astro` y el `<dialog>`). El build igual termina.
- Falta `og:image`. En Vercel hay que poner Root Directory `Frontend`.


## [0.1.0] — 2026-09-30

Sitio estático de presentación de **Estudio Verde** (Paula Sánchez, arquitectura; Martín, paisajismo), en Rosario. Primera versión verificada contra el código del proyecto. No hay formulario, panel de administración ni reserva de citas: las consultas salen por WhatsApp o por correo.

### Added

- Página de inicio (`/`) en una sola vista larga, en este orden:
  - Portada con el mensaje del estudio y botones de WhatsApp y email.
  - Quiénes somos (Paula y Martín).
  - Nuestra mirada (materiales, luz y ventilación, verde desde el diseño).
  - Lo que ofrecen: casas, remodelaciones, locales comerciales, jardines / terrazas / patios.
  - Cómo trabajan: charla, diseño, obra, entrega.
  - Cuatro proyectos destacados.
  - Banda hacia Instagram.
  - Contacto con ciudad y cita previa, sin calle.
- Página de proyectos (`/proyectos`) con los ocho proyectos de muestra y filtro por categoría: Todos, Casas, Remodelaciones, Locales, Jardines. El filtro es el único JavaScript de esa página. Al final, los mismos botones de contacto.
- Marco común de páginas: título, descripción, tipografías, menú y pie (`Layout.astro`).
- Paleta verde bosque, oliva, terracota, arena y crema. Logo tipografiado «Estudio Verde» (serif). Sin precios y sin dirección exacta.
- Datos compartidos: nombre, mail, WhatsApp, Instagram, ciudad, Paula y Martín, enlaces del menú (`site.ts`).
- Ocho proyectos de muestra: título, categoría, lugar y texto (`projects.ts`).
- Componentes: menú (incluye apertura y cierre en celular), pie, botones de contacto, íconos a línea, recuadro de color para fotos pendientes y tarjeta de proyecto.
- Contacto por WhatsApp (chat con mensaje ya escrito) y por email (asunto «Consulta desde la web», destino `estudio.verde@gmail.com`). El sitio no guarda mensajes.
- Carpetas listas para fotos de obra y del estudio, todavía sin imágenes conectadas al código. Los componentes siguen mostrando el recuadro de color hasta que se enganche cada `.webp`.
- Prompts para generar 8 fotos de proyectos y 4 del estudio, más guía para pasarlas a WebP.

### Known issues

- Las fotos no están generadas ni ligadas a los componentes; copiar un `.webp` a `public/images/` no alcanza para mostrarlo.
- WhatsApp usa un número de prueba de México (`+52 55 1234 5678`), no el de Paula.
- Instagram `@estudio.verde` es de prueba.
- El proyecto «Terraza Urbana Verde» dice Rosario y, en la misma ficha, «terraza porteña».
- No hay bandeja única de consultas ni reserva de cita en el sitio.
- Falta imagen de vista previa al compartir el enlace (`og:image`).
- Las tipografías Fraunces y Work Sans salen de Google Fonts; si esa carga falla, el navegador usa Georgia y Helvetica.
- No hay tests automáticos.
- Los ocho proyectos, las fotos y el Instagram son de relleno para el ejercicio del curso. El mail del estudio es el que figura en las notas.
