# Reporte de verificación — Estudio Verde

Fecha: 30 de septiembre de 2026.

Este reporte describe el sitio **tal como está en la carpeta del proyecto ahora**. Lo revisé leyendo el código. No volví a abrir el sitio en el navegador para esta revisión, así que la parte de “qué probar vos” es la que cierra esa duda.

---

## 1. Qué hace exactamente lo que está construido

Es un sitio web estático de presentación para **Estudio Verde** (Paula Sánchez, arquitectura, y Martín, paisajismo), en Rosario.

Tiene dos páginas:

1. **Inicio** (`/`) — una sola página larga, en este orden:
   - Portada con el mensaje del estudio y dos botones: WhatsApp y email.
   - Quiénes somos (Paula y Martín).
   - Nuestra mirada (materiales, luz y ventilación, verde desde el diseño).
   - Lo que ofrecen: casas, remodelaciones, locales comerciales, jardines / terrazas / patios.
   - Cómo trabajan: charla, diseño, obra, entrega.
   - Cuatro proyectos destacados.
   - Una banda que lleva a Instagram.
   - Contacto, con la ciudad y la nota de cita previa. Sin calle.
2. **Proyectos** (`/proyectos`) — los ocho proyectos, con un filtro por categoría (Todos, Casas, Remodelaciones, Locales, Jardines) y, al final, los mismos botones de contacto.

El diseño usa verde bosque, oliva, terracota, arena y crema. El nombre “Estudio Verde” funciona como logo, en una tipografía serif. No hay precios. No hay dirección exacta.

**Cómo se contacta a Paula desde la web:** no hay formulario ni agenda. Cada botón de WhatsApp abre un chat con un mensaje ya escrito. Cada botón de email abre el correo del visitante con el asunto “Consulta desde la web”, dirigido a `estudio.verde@gmail.com`.

Eso es todo lo que hace el sitio. No guarda mensajes, no tiene panel de administración y no reserva citas por sí solo. La frase de la página (“un solo lugar, sin perder nada”) es un texto de presentación: las consultas siguen viviendo en WhatsApp y en el mail, por separado.

Los ocho proyectos, las fotos y el Instagram son de relleno para el ejercicio del curso. El mail del estudio sí es el que figura en las notas.

---

## 2. Archivos y para qué sirve cada uno

### El sitio (lo que ve el visitante)

| Archivo | Para qué está |
|---|---|
| `Frontend/src/pages/index.astro` | Arma la página de inicio, una sección debajo de la otra. |
| `Frontend/src/pages/proyectos.astro` | Página de proyectos, filtro por categoría y cierre de contacto. El filtro es el único JavaScript de esa página. |
| `Frontend/src/layouts/Layout.astro` | El marco de todas las páginas: título, descripción, tipografías, menú y pie. |
| `Frontend/src/styles/global.css` | Colores, tipografías, botones, textura de papel y el estilo del filtro. |
| `Frontend/src/data/site.ts` | Datos que se repiten: nombre, mail, WhatsApp, Instagram, ciudad, Paula y Martín, enlaces del menú. |
| `Frontend/src/data/projects.ts` | Los ocho proyectos de muestra: título, categoría, lugar y texto. |
| `Frontend/src/components/Header.astro` | Menú superior. En el celular se abre y se cierra con un botón. |
| `Frontend/src/components/Footer.astro` | Pie con navegación, WhatsApp, mail, Instagram y “Rosario, con cita previa”. |
| `Frontend/src/components/ContactButtons.astro` | Los dos botones (WhatsApp y email). Se usan en la portada, en contacto y al final de proyectos. |
| `Frontend/src/components/Icon.astro` | Íconos dibujados a línea (casa, hoja, WhatsApp, menú, etc.). |
| `Frontend/src/components/PlaceholderPhoto.astro` | El recuadro de color que ocupa el lugar de una foto que todavía no está. |
| `Frontend/src/components/ProjectCard.astro` | Tarjeta de un proyecto en la página de proyectos. |
| `Frontend/src/components/sections/Hero.astro` | Portada. |
| `Frontend/src/components/sections/QuienesSomos.astro` | Quiénes somos. |
| `Frontend/src/components/sections/NuestraMirada.astro` | Mirada ambiental. |
| `Frontend/src/components/sections/Servicios.astro` | Los cuatro servicios. |
| `Frontend/src/components/sections/ComoTrabajamos.astro` | Los cuatro pasos. |
| `Frontend/src/components/sections/ProyectosPreview.astro` | Los cuatro proyectos que se ven en el inicio. |
| `Frontend/src/components/sections/InstagramCTA.astro` | Banda de Instagram. |
| `Frontend/src/components/sections/Contacto.astro` | Bloque de contacto. |
| `Frontend/public/favicon.svg` | Ícono de la pestaña del navegador. |
| `Frontend/astro.config.mjs` | Configuración de Astro y de Tailwind. |
| `Frontend/package.json` | Dependencias y comandos: `npm run dev`, `npm run build`, `npm run preview`. |

### Fotos: carpetas listas, fotos todavía no conectadas

| Archivo | Para qué está |
|---|---|
| `Frontend/public/images/proyectos/README.md` | Indica cómo nombrar y comprimir las fotos de obra. La carpeta está vacía de imágenes. |
| `Frontend/public/images/estudio/README.md` | Igual, para la portada y las fotos de Paula, Martín y el equipo. También vacía de imágenes. |
| `Imágenes/PROMPTS-NANO-BANANA.md` | Textos en inglés para generar esas fotos en Google AI Studio (8 de proyectos + 4 del estudio) y cómo pasarlas a WebP. |
| `Imágenes/originales/README.md` | Dónde guardar los originales pesados. Esos archivos no deben ir al sitio. |

**Hueco importante:** si copiás un `.webp` a esas carpetas, la página no lo muestra. Los componentes siguen usando el recuadro de color. Para que una foto aparezca hay que cambiar el componente y poner una etiqueta de imagen. Eso quedó escrito como paso siguiente, y no está hecho.

### Documentos de contexto (no forman parte del sitio)

| Archivo | Para qué está |
|---|---|
| `Context.md` | Brief del estudio. |
| `Notas.md` | Notas de la llamada con Paula. El sitio sigue estas notas (nombres, mail, Rosario, sin precios, sin dirección). |
| `Comparacion-referencias.md` | Comparación con otras dos versiones publicadas del ejercicio. No cambia el sitio. |
| `Frontend/README.md` | Sigue siendo el texto genérico de la plantilla de Astro. No explica este proyecto. |

`Frontend/dist/` es una copia ya compilada del sitio. Si editás el código y no volvés a correr `npm run build`, esa carpeta queda vieja. Para mirar el sitio mientras trabajás, el comando correcto es `npm run dev` dentro de `Frontend`.

---

## 3. Qué puede fallar y qué conviene que pruebes vos

### Lo que está a medias o es dudoso

1. **No hay fotos.** La página entra por texto, íconos y bloques de color. Para el pedido de Paula (“la web tiene que entrar por los ojos”) esto es lo más flojo. Los prompts están escritos; las imágenes no están generadas ni enganchadas al código.
2. **El WhatsApp es un número inventado de México:** `+52 55 1234 5678`. El estudio está en Rosario. Si lo tocás, WhatsApp abre un chat con ese número de prueba, no con Paula. En `site.ts` está marcado como placeholder.
3. **Instagram es de prueba:** `@estudio.verde` → `https://instagram.com/estudio.verde`. No confirmé si esa cuenta existe, si es de otra persona o si da error. No lo uses como si fuera el del estudio.
4. **Un texto se contradice.** El proyecto “Terraza Urbana Verde” dice que está en Rosario y, en la misma ficha, habla de una “terraza porteña”. Eso hay que corregirlo antes de mostrarlo.
5. **No hay bandeja única de consultas.** El dolor de Paula era que los mensajes se pierden entre mail, Instagram y el teléfono de Martín. Esta web ofrece dos puertas (WhatsApp y mail). No ordena esos mensajes en un solo lugar.
6. **No hay reserva de cita.** Solo dice “Atención con cita previa”. La persona escribe y Paula coordina por afuera.
7. **Al compartir el enlace** (WhatsApp, Instagram, etc.) no hay imagen de vista previa. Falta `og:image`.
8. **Las tipografías salen de Google Fonts.** Con internet se ven Fraunces y Work Sans. Si esa carga falla, el navegador usa Georgia y Helvetica. El sitio sigue leyéndose; se ve un poco distinto.
9. **No hay tests automáticos** de este proyecto. Que compile no garantiza que el menú del celular o el filtro se sientan bien al usarlos.

### Lo que sí está alineado con las notas

- Cuatro servicios, en el orden pedido.
- Proceso en cuatro pasos: charla, diseño, obra, entrega.
- Mail real del estudio.
- Sin precios.
- Sin dirección exacta: solo Rosario, Santa Fe, y cita previa.
- Logo tipografiado.
- Paleta cálida, sin verde flúor.
- Enlace a Instagram (aunque la cuenta sea de relleno).

### Probá esto vos, en el navegador

Desde la carpeta `Frontend`, con `npm run dev`, abrí la dirección que te muestre la terminal (suele ser `http://localhost:4321`).

En la computadora:

- Recorré el inicio de arriba abajo y fijate si el orden se entiende sin explicar nada.
- Tocá “Escribinos por WhatsApp” y “Enviar un email”. El primero tiene que abrir WhatsApp con el texto preparado. El segundo tiene que abrir tu programa de correo hacia `estudio.verde@gmail.com`. En Linux, el mail a veces no abre nada si no hay un programa asociado: si pasa, el enlace igual está bien armado.
- Entrá a Proyectos y tocá cada filtro. Tienen que quedar visibles: 2 casas, 2 remodelaciones, 2 locales, 2 jardines. “Todos” vuelve a mostrar los ocho.
- Tocá “Ver todos los proyectos” desde el inicio, y “Inicio” para volver.

En el celular, o con la ventana bien angosta:

- Abrí el menú (las tres rayas), entrá a una sección y comprobá que el menú se cierre solo.
- Mirá que los botones no se salgan de la pantalla y que el texto no quede cortado.
- Volvé a probar WhatsApp desde ahí: es el camino que más va a usar un cliente real.

Si el filtro no cambia nada, o el menú del celular no abre, avisame: esas dos cosas dependen de un poco de JavaScript y son las que más pueden fallar sin que el resto de la página se vea rota.
