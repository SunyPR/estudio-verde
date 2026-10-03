# Reporte — Estudio Verde

Fecha: 2 de octubre de 2026.

Este es el único informe del proyecto. Resume el estado actual, el problema que cubre la web, el stack y cómo está el sitio hoy. Reemplaza a `Reporte-cambios.md` y `Reporte-verificacion.md`, que describían una versión anterior (sin fotos publicadas, con un WhatsApp de México y con el mail como camino principal).

---

## 1. En una frase

Estudio Verde es un **trabajo práctico**: un sitio estático de presentación para un estudio ficticio de arquitectura y paisajismo en Rosario. Muestra el trabajo con fotos y deja la consulta en el WhatsApp del estudio, con el mail como respaldo.

Paula Sánchez, Martín Sánchez, las ocho obras y el número de WhatsApp son de ficción. Se mantienen el mail `estudio.verde@gmail.com` y el Instagram `@estudio.verde` del ejercicio. No hay precios ni dirección exacta.

---

## 2. Qué problema resuelve

El brief pide que las consultas dejen de perderse entre el mail, Instagram y el teléfono de Martín. La web es la puerta pública del estudio.

Quien entra entiende tres cosas antes de escribir:

1. Es un estudio chico, de arquitectura y paisajismo, que acompaña el proyecto de la charla a la obra.
2. Diseñan con conciencia ambiental: materiales, luz y ventilación, y el verde desde el plano.
3. El trabajo se ve. Las fotos son la evidencia.

Después, la consulta sale por un solo canal principal: el WhatsApp del estudio (`+54 9 341 555-1234`). Si la persona no usa WhatsApp, escribe a `estudio.verde@gmail.com` con el asunto «Cita desde la web». El mensaje ya viene escrito: pide coordinar una cita.

La web no guarda esos mensajes ni tiene panel. «Un solo lugar» es el WhatsApp del estudio, no una bandeja dentro del sitio. Instagram queda para mirar el día a día (banda del inicio y pie). No es canal de consultas.

Tampoco reserva la cita sola. Dice «Zona Centro, Rosario» y «Coordinamos la cita por mensaje». La calle no se publica.

---

## 3. Estado del proyecto

| | |
|---|---|
| Tipo | Trabajo práctico de portafolio. Sitio estático, sin CMS y sin backend. |
| App | Carpeta `Frontend/`. Dos rutas: `/` y `/proyectos`. |
| Contenido | Textos y contacto en `Frontend/src/data/` (`site.ts`, `services.ts`, `projects.ts`). |
| Fotos | 16 WebP publicadas en `Frontend/public/images/`. El HTML ya las incluye. Los JPG de `Imágenes/originales/` no se publican. |
| Deploy | Pensado para Vercel, con `Frontend/vercel.json` (Root Directory = `Frontend`, build `npm run build`, salida `dist`). Sin dominio propio. |
| Demo publicada | `https://estudio-verde-qtgbyie2r-sunypr.vercel.app/` responde, pero pide inicio de sesión de Vercel. Hoy no está abierta al público. |
| Local | El 2 de octubre de 2026, `http://localhost:4321/` y `/proyectos` respondieron 200. |

El pie dice «Rosario, Santa Fe, Argentina». El resto del sitio dice «Zona Centro, Rosario».

---

## 4. Stack

| Pieza | Versión / uso |
|---|---|
| Node.js | `>= 22.12.0` |
| Astro | `^7.3.5`. Genera HTML estático. Las páginas viven en `Frontend/src/pages/`. |
| Tailwind CSS | `^4.3.3`, como plugin de Vite. Estilos en `Frontend/src/styles/global.css`. |
| TypeScript | En los datos y en los scripts de la página (filtro, menú, capa de la foto). |
| Tipografías | Fraunces (logo y títulos) y Work Sans (texto), desde Google Fonts. Si no cargan, el navegador usa Georgia y Helvetica. |
| Deploy | Vercel, sitio estático. |

No hay base de datos, formulario, tests ni linter. Los comandos se corren desde `Frontend/`:

- `npm run dev` — sitio local en `http://localhost:4321`
- `npm run build` — genera `Frontend/dist/`
- `npm run preview` — mira esa carpeta ya compilada
- `npm run astro check` — revisión de tipos (hoy falla; el build igual termina)

---

## 5. Cómo está la web hoy

Paleta natural: verde bosque, oliva, terracota, arena y crema. El logo es el nombre «Estudio Verde» en Fraunces. El tono es cercano y profesional.

### Inicio (`/`)

Una sola página, en este orden:

1. **Portada.** Fondo verde. En la computadora, el texto queda a la izquierda y la foto a la derecha. En el teléfono, la foto va arriba. El único botón es «Ver proyectos».
2. **Quiénes somos.** Paula Sánchez (arquitectura) y Martín Sánchez (paisajismo), con tres fotos: Paula en obra, Martín en el jardín y el equipo.
3. **Nuestra mirada.** Tres ideas: materiales conscientes, luz y ventilación natural, y el verde desde el diseño.
4. **Lo que ofrecemos.** Cuatro oficios, cada uno con foto y un enlace a esa categoría:
   - Casas → `/proyectos?categoria=casas`
   - Remodelaciones → `?categoria=remodelaciones`
   - Locales comerciales → `?categoria=locales`
   - Jardines, terrazas y patios → `?categoria=jardines`
5. **Cómo trabajan.** Cuatro pasos: charla, diseño, obra, entrega.
6. **Proyectos.** Cuatro obras destacadas (las dos casas y las dos remodelaciones). «Ver todos los proyectos» lleva a la otra página.
7. **Instagram.** Banda hacia `@estudio.verde`.
8. **Contacto.** WhatsApp lleno, mail en contorno, zona y la nota de que la cita se coordina por mensaje.

Al bajar, el menú se achica. Mirada, servicios y proceso entran con un fundido corto. Si el sistema pide menos movimiento, o si no hay JavaScript, esas piezas se ven igual, quietas.

### Proyectos (`/proyectos`)

Las ocho obras, con filtro: Todos, Casas, Remodelaciones, Locales comerciales, Jardines y exteriores. Hay dos obras por categoría. Si se llega desde un servicio (`?categoria=casas`, etc.), ese filtro queda activo.

Tocar una obra abre una capa con la foto completa, el lugar y el texto. Se cierra con «Cerrar», con Escape o tocando afuera. Al final de la página vuelven los botones de contacto.

### Menú

Inicio, Nosotros, Servicios, Cómo trabajamos, Proyectos y «Contactanos» (va a la sección de contacto). En el celular el menú se abre con un botón y se cierra al elegir un enlace.

### Las 16 fotos

Están en el HTML. En esta revisión no apareció el recuadro de color («Foto próximamente»). Si un archivo faltara al compilar, `Photo.astro` mostraría ese recuadro.

| Carpeta | Archivos |
|---|---|
| `public/images/estudio/` | `hero.webp`, `paula-obra.webp`, `martin-jardin.webp`, `equipo.webp` |
| `public/images/servicios/` | `servicio-casas.webp`, `servicio-remodelaciones.webp`, `servicio-locales.webp`, `servicio-jardines.webp` |
| `public/images/proyectos/` | `casa-arboles.webp`, `casa-patio-interior.webp`, `reforma-balcarce.webp`, `cocina-living.webp`, `local-cafeteria.webp`, `showroom-diseno.webp`, `jardin-casa-sur.webp`, `terraza-urbana.webp` |

La grilla recorta la foto. La capa muestra el encuadre entero.

Peso del conjunto: **16 archivos, 4,98 MB**. Varias pesan más de lo previsto (80–150 KB; el hero, hasta unos 200 KB):

| Archivo | Peso aprox. |
|---|---|
| `servicio-jardines.webp` | 980 KB |
| `servicio-casas.webp` | 655 KB |
| `servicio-locales.webp` | 519 KB |
| `martin-jardin.webp` | 512 KB |
| `paula-obra.webp` | 401 KB |
| `servicio-remodelaciones.webp` | 442 KB |
| `hero.webp` | 269 KB |

En el inicio, las cuatro destacadas son solo casas y remodelaciones. Locales y jardines se ven en las tarjetas de servicios y en `/proyectos`. El texto de esa sección igual habla de «casas, remodelaciones, locales y jardines».

### Qué la web no incluye, a propósito

Sin formulario, sin precios, sin calle, sin mapa, sin testimonios, sin preguntas frecuentes, sin video y sin un proceso de seis pasos. La consulta no se guarda en el sitio.

---

## 6. Qué queda pendiente

1. **La demo de Vercel no es pública.** El enlace redirige al login de Vercel. Para abrirla hay que sacar la protección del deployment o publicar una URL de producción.
2. **Comprimir las WebP pesadas** si el celular se siente lento. No hace falta tocar los JPG de `Imágenes/originales/`.
3. **Falta `og:image`.** Al compartir el enlace no hay foto de vista previa. El título y la descripción de Open Graph sí están.
4. **`npm run astro check` falla** con errores de tipos (`node:` / `process` en `Photo.astro` y el `<dialog>`). `npm run build` termina igual.
5. No hay tests automáticos.

---

## 7. Cómo se revisó

Se levantó el sitio local (`npm run dev` en `Frontend/`) y se leyó el HTML de `/` y de `/proyectos`:

- Las dos rutas respondieron 200.
- Las 16 fotos aparecen como `<img>`. Tres de ellas (`hero`, jardines y terraza) también respondieron 200 al pedir el archivo.
- WhatsApp apunta a `wa.me/5493415551234` con el texto de la cita. El mail abre `estudio.verde@gmail.com` con el asunto «Cita desde la web».
- No quedó ningún «Foto próximamente».
- El enlace de Vercel respondió 302 hacia el login de Vercel (`x-robots-tag: noindex`).

No hay herramientas de navegador en esta sesión, así que no se recorrió el clic del filtro, el menú del celular ni la capa de la foto en pantalla. Eso sigue definido en el código de `proyectos.astro`, `Header.astro` y `ProjectDialog.astro`.
