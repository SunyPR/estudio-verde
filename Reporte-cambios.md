# Reporte de cambios — Estudio Verde

Fecha: 30 de septiembre de 2026.

Este reporte describe lo que cambió en el sitio a partir de `Comparacion-referencias.md`: la sección «Lo que tu página puede tomar, sin cambiar el diseño de base» y la sección «Qué deberías mantener». También cubre el ajuste para celular.

Las fotos todavía no están generadas. El sitio ya apunta a los archivos. Mientras el `.webp` no exista, se sigue viendo el recuadro de color.

---

## 1. Qué se mantuvo

No se tocó el diseño de base:

- Paleta (verde bosque, oliva, terracota, arena, crema) y tipografías Fraunces y Work Sans.
- Orden de las secciones: quiénes somos, mirada, servicios, cómo trabajan, proyectos, Instagram, contacto.
- La mirada ambiental como sección propia, con las tres ideas (materiales, luz y ventilación, verde desde el plano).
- Los cuatro oficios por separado, y la frase de que no son solo paisajismo ni solo obra.
- El proceso de cuatro pasos: charla, diseño, obra, entrega. Sigue en el bloque verde.
- El tono cercano.
- WhatsApp y mail a la vista, con `estudio.verde@gmail.com`. No hay formulario.
- Sin precios y sin calle. Sigue «Rosario, Santa Fe» y «atención con cita previa».
- La página `/proyectos`, con filtro y una descripción por obra.
- La banda de Instagram.
- El logo tipografiado.

No se sumaron testimonios, mapa, seis pasos, preguntas frecuentes ni video.

---

## 2. Qué cambió en la página

### Portada

El fondo sigue siendo verde. En la computadora el texto queda a la izquierda y la foto a la derecha. En el teléfono la foto va arriba, a todo el ancho, en 16:9, y debajo el título y los botones.

Los dos caminos quedan a la vista: «Ver proyectos», y escribir (WhatsApp y mail). En el celular esos botones ocupan el ancho de la pantalla y el texto puede partirse en dos líneas.

La foto esperada es `Frontend/public/images/estudio/hero.webp`. Si no está, se ve el recuadro de color.

### Entrada al hacer scroll

Las tres tarjetas de la mirada, los cuatro servicios y los cuatro pasos entran con un fundido y un desplazamiento corto de 12 px, una después de la otra (90 ms entre cada una).

Si el sistema pide menos movimiento, aparecen quietas. Si no hay JavaScript, también se ven: el ocultamiento solo corre cuando el script de la página está activo.

### Servicios

Cada oficio es una tarjeta con foto arriba, el ícono chico al lado del título, el texto corto y un enlace:

- Casas → `/proyectos?categoria=casas` («Ver casas»)
- Remodelaciones → `?categoria=remodelaciones`
- Locales comerciales → `?categoria=locales` («Ver locales»)
- Jardines, terrazas y patios → `?categoria=jardines` («Ver jardines»)

Al pasar el mouse en una computadora, la foto crece un poco (cerca del 4 %). En el teléfono no hay zoom.

Las fotos nuevas van en `Frontend/public/images/servicios/`:

- `servicio-casas.webp`
- `servicio-remodelaciones.webp`
- `servicio-locales.webp`
- `servicio-jardines.webp`

### Proyectos

En el inicio y en `/proyectos`, tocar la tarjeta abre una capa con esa única foto, el lugar y el texto. Se cierra con el botón «Cerrar», tocando afuera (en la computadora) o con Escape.

En el teléfono la capa ocupa la pantalla, la foto usa todo el ancho y el botón de cerrar queda arriba, fijo, de 44 px de alto.

La grilla del inicio muestra cuatro obras en 4:5, con título y categoría. La página de proyectos muestra las ocho en 4:3, con la descripción. La foto ampliada muestra el encuadre completo, sin el recorte de la grilla.

Quiénes somos también quedó conectado a sus fotos (`paula-obra.webp`, `martin-jardin.webp`, `equipo.webp`), con el mismo reemplazo por el recuadro de color si el archivo no está.

### Header

Al bajar más de 12 px, la barra se achica (menos padding y, en pantallas anchas, el nombre un poco más chico) y el borde se marca con una sombra corta. El menú del celular no cambia de uso.

### Un texto

«Terraza Urbana Verde» ya no dice «terraza porteña». Ahora dice que es una terraza de Rosario.

### Celular

Revisado en anchos de 320, 390, 768, 1024 y 1280 px:

- La página no genera scroll horizontal.
- Botones, filtros, enlaces del menú, el logo y los contactos del pie tienen al menos 44 px de alto.
- Los párrafos de lectura están en 16 px. Las etiquetas en mayúscula (cejas) quedaron en 14 px, antes 12 px, para que se lean sin agrandar.
- Las imágenes ocupan el ancho de su contenedor. En la capa del proyecto, la foto se ajusta al ancho útil del teléfono.
- Al saltar a una sección desde el menú, el título no queda escondido detrás del encabezado.
- El filtro que llega desde un servicio (`?categoria=casas`, etc.) deja activa esa categoría. Probado con casas (2 obras) y con jardines.

---

## 3. Refactorizaciones

No cambia lo que ve la persona; ordena el código para no repetir la misma pieza.

| Qué | Para qué |
|---|---|
| `Photo.astro` | Una sola pieza decide si muestra el `.webp` o el recuadro de color. Mira si el archivo existe en `public/` al compilar. |
| `ProjectCard.astro` | La misma tarjeta sirve en el inicio (4:5, sin el párrafo) y en Proyectos (4:3, con la descripción). |
| `ProjectDialog.astro` | La capa de la foto está una vez por página. El inicio le pasa las cuatro destacadas; Proyectos, las ocho. |
| `src/data/services.ts` | Título, texto, foto y enlace de cada oficio viven en datos, no mezclados con el marcado. |
| `Reveal.astro` | El fundido al hacer scroll es un solo script, incluido en el marco de todas las páginas. Solo anima lo que tiene `data-reveal`. |
| `ContactButtons.astro` | En el teléfono los dos botones se apilan a ancho completo. En la computadora quedan en fila. |

`PlaceholderPhoto.astro` sigue existiendo. Ahora lo usa `Photo` cuando falta el archivo, en vez de estar puesto a mano en cada sección.

---

## 4. Prompts de imágenes

Archivo: `Imágenes/PROMPTS-NANO-BANANA.md`.

### Los que no se reescribieron

Los ocho de proyectos y los tres de quiénes somos (Paula, Martín, equipo) quedaron igual. El bloque de estilo tampoco cambió.

### El que sí se actualizó

**Hero** (`hero.webp`, 16:9). Antes pedía cielo y follaje vacíos a la izquierda para apoyar el título encima. Ahora la foto es un encuadre completo, enmarcado al lado del texto (arriba, en el celular), sobre el fondo verde. Hay que regenerar esa imagen si ya se había generado con el prompt viejo.

### Los cuatro nuevos

Secciones 13 a 16 del documento. Relación 4:3, ancho 1200 px, mismo bloque de estilo. No deben copiar una obra de la grilla.

| Sección | Archivo | Qué muestra |
|---|---|---|
| 13. Casas | `servicio-casas.webp` | Casa de una planta con galería, aleros y jardín nativo. |
| 14. Remodelaciones | `servicio-remodelaciones.webp` | Un ambiente reformado: ladrillo original y más luz hacia un patio. |
| 15. Locales comerciales | `servicio-locales.webp` | Un local de barrio visto desde la vereda. |
| 16. Jardines | `servicio-jardines.webp` | Un patio entre medianeras, con especies nativas y un lugar para sentarse. |

También se actualizó la guía de uso: ahora son **16 fotos** (antes 12), con la carpeta `Frontend/public/images/servicios/`, el peso aproximado (cerca de 1,9 MB en WebP) y el orden de generación. Ese orden no coincide con el número del título: primero los 8 proyectos, después los servicios (secciones 13–16) y al final el estudio (secciones 9–12), para que todo siga la misma luz.

En proyectos, la guía ahora aclara que la grilla recorta (4:5 en el inicio, 4:3 en Proyectos) y que al abrir la foto se ve el encuadre entero. Conviene dejar el sujeto en el centro.

---

## 5. Archivos

### Nuevos

- `Frontend/src/components/Photo.astro`
- `Frontend/src/components/ProjectDialog.astro`
- `Frontend/src/components/Reveal.astro`
- `Frontend/src/data/services.ts`
- `Frontend/public/images/servicios/README.md`

### Modificados

- `Frontend/src/pages/proyectos.astro` — lee `?categoria=` y abre la capa.
- `Frontend/src/pages/index.astro` — no cambió de estructura; las secciones nuevas viven en sus componentes.
- `Frontend/src/layouts/Layout.astro` — marca la página como con JavaScript y carga la entrada al scroll.
- `Frontend/src/styles/global.css` — botones, filtros, header compacto, capa, zoom y fundido.
- `Frontend/src/components/Header.astro`
- `Frontend/src/components/Footer.astro`
- `Frontend/src/components/ContactButtons.astro`
- `Frontend/src/components/ProjectCard.astro`
- `Frontend/src/components/PlaceholderPhoto.astro`
- `Frontend/src/components/sections/Hero.astro`
- `Frontend/src/components/sections/Servicios.astro`
- `Frontend/src/components/sections/NuestraMirada.astro`
- `Frontend/src/components/sections/ComoTrabajamos.astro`
- `Frontend/src/components/sections/ProyectosPreview.astro`
- `Frontend/src/components/sections/QuienesSomos.astro`
- `Frontend/src/components/sections/Contacto.astro`
- `Frontend/src/components/sections/InstagramCTA.astro`
- `Frontend/src/data/projects.ts`
- `Imágenes/PROMPTS-NANO-BANANA.md`

No se cambiaron el número de WhatsApp ni el Instagram de prueba. Siguen marcados como placeholder en `site.ts`.

---

## 6. Cómo probarlo

Desde `Frontend`, con `npm run dev`:

1. En la computadora, la portada tiene texto a la izquierda y foto a la derecha. Al bajar, el header se achica.
2. Al llegar a mirada, servicios y proceso, las tarjetas entran de a una.
3. «Ver casas» (y el resto) abre Proyectos con ese filtro ya puesto.
4. Tocar una obra abre la foto. «Cerrar», Escape o un clic afuera la cierra.
5. En una ventana de unos 390 px de ancho: el menú abre y cierra, los botones se pueden tocar, no hay que mover la página de costado, y la foto de una obra ocupa el ancho.

Cuando estén los `.webp`, hay que volver a cargar el sitio (o correr de nuevo `npm run build`). Recién ahí la foto reemplaza al recuadro de color.
