# Prompts Nano Banana Pro — Estudio Verde

Prompts en inglés para Google AI Studio (Nano Banana Pro).

Hay **tres grupos**:

1. **Proyectos** (8) — la evidencia de la obra. Una foto por proyecto.
2. **Servicios** (4) — la foto de cada oficio en el inicio. No repiten un proyecto puntual.
3. **Estudio** (4) — las que no son de un proyecto puntual: inicio + quiénes somos.

Todo es ficticio (ejercicio del curso). Las fotos tienen que verse como **obra terminada de un estudio chico y serio**: profesional, cálido, con conciencia ambiental. No corporativo frío, no lujo de revista de Dubai, no verde flúor.

En las fotos de personas: **nada de retratos de frente ni caras nítidas**. El estudio se siente humano por el gesto (espalda, manos, mesa de trabajo), no por inventar a Paula y Martín.

---

## Cómo usarlo

1. Abrí [Google AI Studio](https://aistudio.google.com) y elegí **Nano Banana Pro**.
2. Pegá primero el **bloque de estilo** (abajo). Después pegá el prompt del proyecto, **entero**.
3. Generá **una imagen por prompt**. Si no convence, regenerá sin cambiar el prompt; si sigue fallando, ajustá solo el sujeto, no el estilo.
4. Relación de aspecto:
   - Proyectos: **4:5**. En el inicio se ven 4:5; en Proyectos la grilla recorta a 4:3 con `object-cover`. Al abrir la foto se muestra el encuadre completo. Dejá el sujeto en el centro y no apoyes nada importante en los bordes.
   - Servicios: **4:3**. La tarjeta usa ese mismo recorte, así que el sujeto tiene que entrar entero.
   - Inicio / hero: **16:9**. Es una foto enmarcada al lado del texto (arriba, en el celular), sobre el fondo verde. No hace falta dejar un hueco vacío para el título.
   - Paula en obra: **16:10**.
   - Martín en jardín y Equipo: **1:1**.
5. Guardá el original (PNG/JPG que baja AI Studio) en `Imágenes/originales/`. **No lo subas al sitio.**
6. Pasalo a **WebP comprimido** y copialo a:
   - `Frontend/public/images/proyectos/` — los 8 proyectos
   - `Frontend/public/images/servicios/` — las 4 fotos de oficios
   - `Frontend/public/images/estudio/` — hero, Paula, Martín, equipo

No pidas texto, logos, watermarks ni caras nítidas mirando a cámara.

---

## Bloque de estilo (pegar siempre)

Copiá este bloque **arriba de cada prompt** (proyectos y estudio):

```
Shared style for Estudio Verde architectural photography.

Photorealistic editorial architecture photograph, as if shot on location for a small architecture and landscape studio in Rosario, Argentina (Río de la Plata / Santa Fe region). Professional quality, warm and close — never cold, never corporate, never flashy.

Light: late-afternoon natural light, golden but not sunset-orange. Soft shadows. Cross-ventilation suggested by open openings, sheer curtains, or moving leaves. No studio flash, no HDR, no neon.

Palette: forest olive, raw wood, terracotta, lime plaster, sand, warm brick, cream. Plants are native or well-adapted, matte green — never fluorescent, never tropical jungle, never plastic-looking turf.

Materials that signal environmental care without slogans: reclaimed or honest brick, untreated or lightly oiled wood, lime or clay plaster, ceramic tile, stone, linen, rattan. Visible craft, not luxury staging.

Camera: full-frame, 35mm or 50mm, eye-level or slightly low, shallow-to-medium depth of field. Shot on a real construction/finished-work visit, not a CGI render. Subtle film grain. Straight verticals.

Mood: a finished project a client would trust. Quiet, livable, designed with the climate. Empty of people, or at most a distant unrecognizable figure with back turned.

Strictly avoid: text, typography, logos, watermarks, captions, floor plans, before/after split, prices, UI, CGI look, oversaturated greens, marble palaces, glass skyscraper houses, American suburb McMansions, Scandinavian all-white interiors, cyberpunk, drones with distorted wide-angle, people facing the camera, celebrity houses.
```

---

# Proyectos

Destino: `Frontend/public/images/proyectos/`.

---

## 1. Casa Entre Árboles

- **Archivo (en el sitio):** `casa-arboles.webp`
- **Categoría:** Casas · Rosario
- **Qué tiene que transmitir:** vivienda nueva de dos plantas, luz y viento como parte del diseño, materiales de bajo impacto, el bosque/el lote como aliado.

```
Subject: “Casa Entre Árboles” — a two-storey family house in a leafy Rosario neighborhood, designed around existing mature trees rather than against them.

Exterior, slightly three-quarter view from the garden. The house sits among large plane trees and native canopy; trunks and foliage frame the architecture. Two floors, compact and human-scaled. Large openings aligned for cross-ventilation: ground-floor doors open to a shaded terrace; upper windows catch the breeze. Deep eaves or a light pergola for summer shade. Facade in warm brick and lime plaster with visible timber structure or sunshades — honest, low-impact materials, not luxury cladding.

A rain garden or permeable gravel path instead of a wide concrete driveway. A few native shrubs and a dry-climate understory. Interior glimpsed through open doors: wood floors, white-cream walls, a shaft of afternoon light crossing the room.

Composition: trees occupy at least a third of the frame. Architecture is clear but not isolated on a lawn. No pool as the hero. No cars in the foreground.

Message: professional environmental design — light, air, shade, and existing landscape doing the work.
```

---

## 2. Casa Patio Interior

- **Archivo (en el sitio):** `casa-patio-interior.webp`
- **Categoría:** Casas · Funes
- **Qué tiene que transmitir:** el patio no es un adorno: organiza la casa. Arquitectura y paisajismo juntos (la mirada de Martín).

```
Subject: “Casa Patio Interior” — a single-family house in Funes (greater Rosario) organized around a planted central courtyard.

Photograph from inside the courtyard looking toward the living spaces, or from a covered gallery looking into the patio. The patio is the heart: a square or slightly rectangular open-air room with a young tree, native grasses, a water basin or clay pot, and brick or stone paving with joints that let rain through. Rooms open onto this patio on at least two sides — living, dining, or a studio — so every main space connects to green.

Architecture: lime-washed walls in warm off-white and sand, timber lintels, ceramic floor continuing from inside to outside with only a thin threshold. Light bouncing off the patio walls into the interiors. Landscaping feels designed, not leftover: layered planting, shade and sun pockets, a place to sit.

No swimming pool dominating the frame. No Mediterranean villa clichés (no Tuscan columns). This is Río de la Plata domestic architecture: patio as climate device and daily landscape.

Message: house and garden designed as one project; environmental comfort through the courtyard.
```

---

## 3. Reforma Balcarce

- **Archivo (en el sitio):** `reforma-balcarce.webp`
- **Categoría:** Remodelaciones · Rosario
- **Qué tiene que transmitir:** respeto por una casa de principios de siglo + mejora energética contemporánea, sin borrar la identidad.

```
Subject: “Reforma Balcarce” — a carefully restored early-20th-century house in Rosario (aljibe / conventillo-adjacent neighborhood fabric, not a palace). Original identity kept; energy performance quietly upgraded.

Exterior three-quarter view of the street facade and a glimpse of a rear addition. Original features readable: molded cornice, tall wooden windows with working shutters, solid brick, a modest front garden behind an iron fence typical of Rosario. New work is honest and recessed: a lightweight timber-and-glass volume at the back, or new insulated openings with slim frames, solar shading, and a green roof edge barely visible — contemporary but humble.

Materials: restored brick, oiled original woodwork, lime plaster repairs, new thermally broken frames in dark bronze or timber. A climbing native vine, not fake ivy wallpaper. Afternoon light grazing the old brick so craft and age show.

Do not make it a French chateau, a colonial museum, or a gutted white loft. The story is continuity: the house still looks like itself, now more comfortable and efficient.

Message: professional heritage remodeling with environmental conscience — keep, repair, then add performance.
```

---

## 4. Integración Cocina–Living

- **Archivo (en el sitio):** `cocina-living.webp`
- **Categoría:** Remodelaciones · Rosario
- **Qué tiene que transmitir:** planta baja abierta, más luz, continuidad social. Reforma interior de calidad, no “cocina de catálogo”.

```
Subject: “Integración Cocina–Living” — a ground-floor renovation in a Rosario house that opened kitchen, dining and living into one continuous social space.

Interior photograph, eye-level, from the living area looking toward the kitchen (or vice versa) so the eye travels in one unbroken plane. Former partition gone; a wide structural opening remains as a timber or plastered beam, not a trendy black steel cliché unless very quiet. Continuous wood or terracotta tile floor. Large rear opening to a small patio or garden — that is the main light source. Sheer linen curtains, cross-breeze suggested.

Kitchen: solid wood or wood-and-stone, not high-gloss white lacquer. Open shelves with ceramics, a simple island people can actually cook at. Living: a low sofa, a reading chair, a plant in a clay pot. Palette cream, olive, terracotta, raw wood. Nothing staged with champagne or luxury brands.

Show daylight reaching the deepest part of the old plan — that is the environmental win: less artificial light, more life in the social rooms.

Message: thoughtful remodeling that improves how the house is lived, with natural light as the main luxury.
```

---

## 5. Cafetería de Barrio

- **Archivo (en el sitio):** `local-cafeteria.webp`
- **Categoría:** Locales comerciales · Rosario
- **Qué tiene que transmitir:** local cálido y funcional, identidad propia, materiales nobles. Un negocio de barrio, no una cadena.

```
Subject: “Cafetería de Barrio” — a small neighborhood café in Rosario designed as a complete commercial interior: warm, functional, with a clear identity and noble materials.

Interior view from the entrance toward the bar, or from a window table toward the street. Generous natural light from a large storefront. Counter in solid wood and terracotta tile, linen or cotton upholstery, ceramic cups, a simple pastry display — not a luxury hotel lounge. Seating mix of wood chairs and a built-in bench. Plants in clay pots, not hanging plastic vines. Wall in lime plaster or warm brick; a discreet mural-scale texture, no readable text, no fake brand names.

Materials feel chosen for durability and touch: wood, ceramic, linen, brass or blackened steel used sparingly. Floor in hydraulic-inspired tile or worn wood. Street visible through the glass: a Rosario sidewalk, trees, ordinary city — grounds the project.

No neon signs, no Starbucks look, no industrial Edison-bulb overload. Professional hospitality design that still feels close and local.

Message: commercial architecture with the same environmental and material honesty as the houses.
```

---

## 6. Showroom de Diseño

- **Archivo (en el sitio):** `showroom-diseno.webp`
- **Categoría:** Locales comerciales · Rosario
- **Qué tiene que transmitir:** el producto es protagonista; paleta sobria; mucha luz natural. Serio, no showroom de shopping.

```
Subject: “Showroom de Diseño” — a small design showroom in Rosario where objects (furniture, ceramics, textiles) are the protagonists. Sober palette, abundant natural light.

Interior, wide but not empty. High windows or a north-facing glazed wall washing the space with even daylight. Floors in pale wood or polished concrete with a warm tone. Walls cream and olive-grey. Products arranged with museum-like calm: a timber table, a ceramic series, stacked linen — no logos, no price tags, no readable labels. A few large indoor plants in simple pots, used as spatial punctuation, not decoration overload.

Architecture does the quiet work: deep window reveals, a light timber ceiling or exposed beams, a long display plinth in lime plaster. Reflections controlled; no glossy CGI. Feels like a place to look slowly.

Avoid luxury fashion boutique tropes, marble, gold, and dark “exclusive” lighting. This is a daylight-first commercial space aligned with Estudio Verde’s environmental stance.

Message: professional commercial design — light and material, not spectacle.
```

---

## 7. Jardín Casa Sur

- **Archivo (en el sitio):** `jardin-casa-sur.webp`
- **Categoría:** Jardines y exteriores · Rosario
- **Qué tiene que transmitir:** paisajismo de Martín; especies nativas, bajo mantenimiento, habitable todo el año. El verde es diseño, no relleno.

```
Subject: “Jardín Casa Sur” — a residential garden in southern Rosario designed with native and climate-adapted species, low maintenance, meant to be used in every season.

Photograph from a covered gallery or the back of the house looking into the garden, late afternoon. Layered planting: native grasses, a ceibo or tipa or similar regional tree (not palm trees, not tropical bananas), shrubs with matte foliage, a gravel or brick path that absorbs rain. A simple sitting corner in timber and brick. No emerald English lawn as the hero; meadows and mulch are welcome. A water-wise logic is visible: grouping of plants, shade, permeable ground.

The house edge is present but secondary — lime wall, a window, a timber bench — so it reads as architecture + landscape together. Seasonal feeling: late summer / early autumn in the Pampas, dry-warm light, not a rainforest.

No plastic playgrounds, no oversized infinity pools, no golf-course turf. This is serious landscape architecture at domestic scale.

Message: environmental design through plants, water, and daily use — not ornament.
```

---

## 8. Terraza Urbana Verde

- **Archivo (en el sitio):** `terraza-urbana.webp`
- **Categoría:** Jardines y exteriores · Rosario
- **Qué tiene que transmitir:** una terraza de ciudad convertida en espacio habitable: huerta + estar al aire libre. Paisajismo urbano, no rooftop de hotel.

```
Subject: “Terraza Urbana Verde” — a city rooftop or upper terrace transformed into a livable outdoor room: a small kitchen garden plus a place to sit, in Rosario (urban rooftops, water tanks and neighboring brick houses in the background, softly out of focus).

Foreground: timber deck or ceramic tiles with planters. Raised beds with herbs, tomatoes, leafy greens — a real productive huerta, not only flowers. A compact outdoor table for two or four, linen or canvas chairs. Climbers on a simple timber trellis providing shade. Irrigation discreet (clay pots, drip, a watering can), not a fountain show.

Background: ordinary Argentine city roofs, a water tank, a tree poking up from the block — enough to say “urban” without a skyline of skyscrapers. Golden-hour light, breeze suggested by leaves.

Keep the terrace human-scaled and slightly imperfect (handmade carpentry). Not a Dubai pool deck, not a New York penthouse, not a jungle that would collapse the slab.

Message: environmental design in the city — grow food, sit outside, cool the roof with plants.
```

---

# Estudio (no son proyectos)

Estas fotos van en **Quiénes somos** y, si más adelante se suma imagen al hero, en el **inicio**. Mismo bloque de estilo. Destino: `Frontend/public/images/estudio/`.

Regla para personas: de espaldas, de costado, desenfocadas o solo manos. Sin selfie, sin headshot, sin “stock smile”. Planos y libretas **sin texto legible**.

---

## 9. Hero — atmósfera del inicio

- **Archivo (en el sitio):** `hero.webp`
- **Dónde:** inicio. En la computadora, foto enmarcada a la derecha del texto. En el celular, arriba del título. El fondo de la sección sigue siendo verde: la foto no es un fondo a pantalla completa.
- **Aspecto:** 16:9
- **Qué tiene que transmitir:** en tres segundos, arquitectura + verde + Rosario + calidez profesional. Sin gente. Encuadre completo, sin zona vacía reservada para texto.

```
Subject: framed hero photograph for Estudio Verde’s homepage — architecture and landscape as one, Rosario, Argentina. The picture sits beside the headline on a forest-green field (above the headline on a phone). It is a complete photograph, not a background plate with empty space for type.

Wide 16:9 frame, late afternoon. A modest two-storey brick-and-lime house half-hidden by mature trees and a designed native garden in the foreground (grasses, a young tree, a brick path). The house is real and livable, not a mansion. Deep eaves, open timber doors, warm interior light just starting to glow. A patio or gallery connecting indoor and outdoor. City trees (plane trees) and a quiet residential street barely hinted at the edge — Río de la Plata suburb, not countryside ranch, not tropical resort.

No people, no cars as the subject, no swimming pool as the hero, no skyline of towers. Fill the frame: house, garden and sky are all part of the subject. Do not leave a large empty area for typography.

Message: professional environmental design you can trust at first glance — house, garden, climate, craft.
```

---

## 10. Paula en obra

- **Archivo (en el sitio):** `paula-obra.webp`
- **Dónde:** Quiénes somos (foto ancha, 16:10)
- **Qué tiene que transmitir:** Paula dirige arquitectura y obra. Cercana, seria, en el terreno — no en un escritorio corporativo.

```
Subject: “Paula en obra” — an architect on a small construction site in Rosario, suggesting Paula Sánchez without inventing a recognizable face.

16:10 documentary photograph. A woman seen from behind or three-quarter back, unrecognizable: dark hair in a low bun or under a simple sun hat, linen or cotton work shirt in sand or olive, practical trousers, boots. She stands on a brick-and-timber residential job, looking toward an opening being framed. One hand holds a roll of tracing paper or a simple wooden scale (no readable notes, no logos on the hard hat). Afternoon light, dust in the air, a young tree protected on the lot.

The architecture is domestic and honest: lime plaster, brick, timber lintels — Estudio Verde’s language. Not a skyscraper site, not a glossy hard-hat campaign, not a posed portrait.

Message: she designs and she is there until the work is built.
```

---

## 11. Martín en jardín

- **Archivo (en el sitio):** `martin-jardin.webp`
- **Dónde:** Quiénes somos (cuadrada, 1:1)
- **Qué tiene que transmitir:** Martín es paisajismo. Manos en la tierra, especies nativas, no “el de las plantas” de vivero de shopping.

```
Subject: “Martín en jardín” — a landscaper at work in a residential garden in Rosario, suggesting Martín without a recognizable face.

Square 1:1 photograph, close-to-medium. A man seen from behind or cropped at the shoulders: sun-browned forearms, rolled sleeves, hands setting a native grass or checking soil in a clay pot. Around him: matte olive foliage, mulch, a brick edge, a timber bench out of focus. No palm trees, no tropical leaves, no fluorescent green turf.

Soft late-afternoon light through leaves. Face not visible, or fully out of focus if turned. Feels like a working garden, not a catalog pose with a smile and a trowel brand.

Message: landscape architecture as craft — plants, soil, climate.
```

---

## 12. Equipo

- **Archivo (en el sitio):** `equipo.webp`
- **Dónde:** Quiénes somos (cuadrada, 1:1)
- **Qué tiene que transmitir:** son dos, trabajan juntos, uno a uno con el proyecto. Estudio chico, no oficina corporativa.

```
Subject: “Equipo” — two siblings working together at Estudio Verde, architecture and landscape at the same table.

Square 1:1 photograph from slightly above or from behind. Two people seated at a large timber table in a simple Rosario studio: lime walls, a window with plants, a clay pot, natural light. On the table: blank tracing paper, wood pencils, a material sample of brick and timber, a few leaves or a small plant — no readable writing, no computer logos, no brand names. One person points at the paper, the other holds a sample. Faces turned down or away; they are not the portrait, the shared work is.

Mood: quiet, close, professional. A small practice, not an open-plan coworking space, not a boardroom.

Message: architecture and landscaping designed together, from the first conversation.
```

---

# Servicios (no son un proyecto puntual)

Estas fotos van en las cuatro tarjetas de **Lo que ofrecemos**. Mismo bloque de estilo. Destino: `Frontend/public/images/servicios/`.

Cada una es el oficio, no una obra de la grilla. No repitas Casa Entre Árboles, Casa Patio Interior, Reforma Balcarce, Integración Cocina–Living, Cafetería de Barrio, Showroom de Diseño, Jardín Casa Sur ni Terraza Urbana Verde.

Relación **4:3**. El sujeto entra entero en el recuadro: la tarjeta no recorta de más. Sin gente de frente, sin texto, sin logos.

---

## 13. Casas

- **Archivo (en el sitio):** `servicio-casas.webp`
- **Dónde:** tarjeta «Casas». El enlace lleva al filtro de casas.
- **Aspecto:** 4:3
- **Qué tiene que transmitir:** una vivienda nueva, a escala humana, con galería y jardín. No es la casa entre árboles ni la casa patio.

```
Subject: service photograph for “Casas” — a single-storey family house in a Rosario neighborhood, seen as the idea of the service, not as one of the named projects.

4:3 exterior, three-quarter view from the front garden. One floor, human scale, a deep covered gallery along the facade, timber eaves for summer shade, warm brick and lime plaster. A native garden in the foreground: grasses, a young tree, a brick path to the door. Openings aligned so the interior reads as bright and cross-ventilated. No second storey, no courtyard as the subject, no pool, no car.

This must not look like “Casa Entre Árboles” (that one is two storeys among large plane trees) or “Casa Patio Interior” (that one is photographed from inside a courtyard).

Message: a house designed to be lived in, with climate and garden from the start.
```

---

## 14. Remodelaciones

- **Archivo (en el sitio):** `servicio-remodelaciones.webp`
- **Dónde:** tarjeta «Remodelaciones». El enlace lleva al filtro de remodelaciones.
- **Aspecto:** 4:3
- **Qué tiene que transmitir:** un ambiente que ya existía y ahora tiene más luz, sin borrar el ladrillo original. No es la fachada de Balcarce ni la cocina–living.

```
Subject: service photograph for “Remodelaciones” — an existing Rosario room carefully opened to light, keeping the old material.

4:3 interior, eye level. A former bedroom or side room, not a kitchen and not a street facade. Original exposed brick on one wall, lime plaster on the others, a new wide opening (timber lintel, no black steel cliché) toward a small planted patio. Afternoon light reaching the back wall. Worn original floorboards or terracotta tile, a simple chair, a linen curtain. The old house is still recognizable; the change is light and air.

Do not show a heritage street front (that is “Reforma Balcarce”) and do not show an open kitchen-living (that is “Integración Cocina–Living”). No before/after split.

Message: remodeling that keeps the house and makes it easier to live in.
```

---

## 15. Locales comerciales

- **Archivo (en el sitio):** `servicio-locales.webp`
- **Dónde:** tarjeta «Locales comerciales». El enlace lleva al filtro de locales.
- **Aspecto:** 4:3
- **Qué tiene que transmitir:** un negocio de barrio visto desde la vereda. No es la cafetería por dentro ni el showroom.

```
Subject: service photograph for “Locales comerciales” — a small neighborhood shop in Rosario, photographed from the sidewalk so the storefront is the subject.

4:3, late afternoon. A single modest shopfront on a tree-lined street: large glass, a timber or dark-bronze frame, warm light inside, a display of ceramics or folded linen with no readable labels, no logos, no prices. Lime-plaster or warm-brick pier. One clay pot with a matte-green plant on the sidewalk. Ordinary Rosario street: plane tree, a bit of sidewalk, a neighboring facade out of focus. Noble materials, not a chain and not a mall.

Do not photograph a café counter (that is “Cafetería de Barrio”) and do not photograph a furniture showroom interior (that is “Showroom de Diseño”).

Message: a commercial space with the same material honesty as the houses.
```

---

## 16. Jardines, terrazas y patios

- **Archivo (en el sitio):** `servicio-jardines.webp`
- **Dónde:** tarjeta «Jardines, terrazas y patios». El enlace lleva al filtro de jardines.
- **Aspecto:** 4:3
- **Qué tiene que transmitir:** un patio entre medianeras, habitable, con especies nativas. No es el jardín de fondo de casa ni la terraza en la azotea.

```
Subject: service photograph for “Jardines, terrazas y patios” — a ground-level patio between two party walls in Rosario, designed as a daily outdoor room.

4:3, from one end of the patio looking along its length. Two lime or brick side walls, a strip of sky. Permeable brick or gravel floor, native grasses, a small tree or large shrub, a timber bench, a clay pot. Shade and sun in pockets. No lawn as the hero, no pool, no tropical leaves, no palm trees. The house is only an edge: a door or a window. This is landscape architecture at the scale of a patio, not a park.

Do not show a back garden opening from a covered gallery (that is “Jardín Casa Sur”) and do not show a rooftop with water tanks and a kitchen garden (that is “Terraza Urbana Verde”).

Message: the green is designed with the architecture, even in a small patio.
```

---

## Orden sugerido de generación

**Proyectos (definen la paleta):**

1. Casa Entre Árboles  
2. Casa Patio Interior  
3. Jardín Casa Sur  
4. Terraza Urbana Verde  
5. Reforma Balcarce  
6. Integración Cocina–Living  
7. Cafetería de Barrio  
8. Showroom de Diseño  

**Servicios** (en el documento son las secciones 13 a 16; no copies la foto del proyecto):

9. Casas  
10. Remodelaciones  
11. Locales comerciales  
12. Jardines, terrazas y patios  

**Estudio** (en el documento son las secciones 9 a 12; van al final para seguir la misma luz):

13. Hero — atmósfera del inicio  
14. Paula en obra  
15. Martín en jardín  
16. Equipo  

Empezá por casas y jardines: definen el lenguaje visual. Los locales, los servicios y las fotos del estudio tienen que **seguir** esa misma luz y paleta, no inventar otra marca. El número de esta lista es el orden para generar. El número del título (## 9, ## 13, …) es el del prompt en el documento.

---

## Optimización: WebP (no subas el PNG de AI Studio)

Nano Banana baja PNG o JPG pesados (a menudo 2–8 MB cada uno). Dieciséis fotos así pueden sumar **40–70 MB** y la home se siente lenta, sobre todo en el celular. En el sitio van **solo WebP**, ya redimensionados.

En proyectos, una sola foto sirve para el inicio (recorte 4:5), la grilla de `/proyectos` (recorte 4:3) y la foto ampliada (encuadre completo). El CSS recorta las grillas con `object-cover`.

### Qué dejar en cada carpeta

| Dónde | Qué | Por qué |
|---|---|---|
| `Imágenes/originales/` | PNG/JPG tal cual salió de AI Studio | Backup para re-comprimir. No viaja con el deploy. |
| `Frontend/public/images/proyectos/` | 8 `.webp` de proyectos | Lo que descarga el visitante en el portfolio. |
| `Frontend/public/images/servicios/` | `servicio-casas.webp`, `servicio-remodelaciones.webp`, `servicio-locales.webp`, `servicio-jardines.webp` | Las cuatro tarjetas de oficios. 4:3, 1200 px. |
| `Frontend/public/images/estudio/` | `hero.webp`, `paula-obra.webp`, `martin-jardin.webp`, `equipo.webp` | Inicio y quiénes somos. |

### Tamaño objetivo

- **Proyectos, servicios, Martín, equipo:** ancho máximo **1200 px**.
- **Hero y Paula (más anchas):** ancho máximo **1600 px** (16:9 / 16:10).
- **Peso: 80–150 KB** por foto de proyecto, servicio o retrato de sección. Hero puede llegar a **200 KB**.
- **16 fotos × ~120 KB ≈ 1,9 MB** en total. Eso está bien para un portfolio.

### Herramienta recomendada: [squoosh.app](https://squoosh.app)

Es la mejor para este caso: son 8 fotos, ves el before/after y no instalás nada. Todo corre en el navegador (los archivos no se suben a un servidor de Google).

Por cada imagen:

1. Abrí [squoosh.app](https://squoosh.app) y arrastrá el original.
2. **Resize** (panel izquierdo):
   - Width: `1200`
   - Maintain aspect ratio: on
   - Method: `Lanczos3`
3. **Compress** (panel derecho): codec **WebP** (no MozJPEG, no AVIF todavía — WebP tiene soporte universal).
   - Quality: **75**
   - Effort: **4** (más effort = más lento y un poco más chico; 4 es un buen medio)
   - Si la foto queda > 180 KB, bajá quality a **70**. Si se ve pasta, subí a **80**.
4. Mirá el peso abajo a la derecha. El original suele ser varios MB; el WebP tiene que quedar en torno a 100 KB.
5. Download y guardalo con el nombre de cada prompt (`.webp`) en `proyectos/` o `estudio/`.

Son 16 fotos. En Squoosh no hay lote nativo: es una por una. El hero y Paula: width `1600` en vez de `1200`. Las de servicios: width `1200`, igual que los proyectos.

### Alternativa por lote (si no querés hacerlas a mano)

Los servicios no van en la carpeta de proyectos. Si usás el lote, separá `servicio-*.webp` a `Frontend/public/images/servicios/`. El hero, Paula, Martín y el equipo van a `Frontend/public/images/estudio/`.

Si preferís terminal, **cwebp** (libwebp de Google) es el mismo algoritmo, sin interfaz:

```bash
# Debian/Ubuntu: sudo apt install webp
# Después, desde Imágenes/originales/:
mkdir -p "../Frontend/public/images/proyectos"
for f in *.png *.jpg *.jpeg; do
  [ -f "$f" ] || continue
  name="${f%.*}"
  cwebp -q 75 -resize 1200 0 "$f" -o "../Frontend/public/images/proyectos/${name}.webp"
done
```

`-resize 1200 0` fija el ancho en 1200 y calcula el alto. `-q 75` es el equivalente al Quality 75 de Squoosh.

Otras opciones (no hacen falta para este proyecto):

- **AVIF**: comprime un poco más, peor en Safari viejo y más lento de encodear. WebP alcanza.
- **Sharp / Astro `<Image />`**: útil si más adelante las imágenes entran al repo en bruto y el build las comprime. Hoy es más simple comprimir una vez en Squoosh y commitear el `.webp`.

---

## Checklist rápido antes de guardar

- [ ] Se ve fotografía, no render 3D brillante  
- [ ] Verdes mate / oliva, nunca flúor  
- [ ] Se entiende conciencia ambiental **sin carteles** (luz, patio, nativas, materiales honestos)  
- [ ] No hay texto, logo ni marca de agua  
- [ ] Podría ser un estudio de Rosario, no un resort  
- [ ] Original pesado en `Imágenes/originales/` (no en el sitio)  
- [ ] En el sitio: `.webp`, ~1200 px de ancho, **80–150 KB**  
- [ ] Nombre de archivo = el indicado en cada prompt  
- [ ] Fotos de estudio: sin caras de frente / sin texto en planos
