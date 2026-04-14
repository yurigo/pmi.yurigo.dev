---
title: "Sesión 06 - CSS Box Model y Reset CSS"
section: "CSS"
order: 6
description: "CSS Reset, box-sizing y el modelo de caja"
duration: 2
objectives:
  - "Comprender el modelo de caja CSS: content, padding, border y margin"
  - "Aplicar box-sizing: border-box para un cálculo de tamaños más predecible"
  - "Entender por qué se usa un CSS Reset y cómo aplicarlo"
  - "Usar las propiedades shorthand de margin y padding correctamente"
  - "Depurar el modelo de caja con las DevTools del navegador"
exercises:
  - title: "Inspeccionar cajas"
    description: "Abre cualquier web en el navegador, activa las DevTools y usa el panel 'Elements' para identificar el padding, border y margin de al menos 5 elementos diferentes."
  - title: "Layout con box model"
    description: "Crea un contenedor con tres tarjetas internas. Aplica padding interno a cada tarjeta, borde visible y margen entre ellas, todo con box-sizing: border-box."
checklist:
  - "Entiendo las cuatro capas del modelo de caja: content, padding, border, margin"
  - "Sé la diferencia entre box-sizing: content-box y box-sizing: border-box"
  - "Puedo aplicar márgenes y paddings con la sintaxis shorthand (arriba derecha abajo izquierda)"
  - "Sé incluir un CSS Reset al inicio de mi hoja de estilos"
  - "Uso las DevTools para inspeccionar el modelo de caja de cualquier elemento"
commonErrors:
  - "No aplicar box-sizing: border-box y luego sorprenderse de que los elementos 'no caben'"
  - "Confundir margin: 10px 20px (arriba-abajo / izquierda-derecha) con margin: 10px 20px 10px 20px"
  - "No resetear los márgenes y paddings por defecto del navegador"
  - "Añadir borde y no contar con su grosor al calcular el tamaño total del elemento"
---

# Sesión 06 - CSS Box Model y Reset CSS

<!-- **Fecha:** 18 de Febrero de 2026 -->

## Contenidos de la Sesión

### 1. CSS Reset

Los navegadores web aplican estilos por defecto a los elementos HTML (conocidos como "user agent stylesheets"). Estos estilos varían entre navegadores, lo que puede causar inconsistencias visuales. Un **CSS Reset** elimina o normaliza estos estilos para lograr un punto de partida consistente.

**¿Por qué usar un CSS Reset?**

- **Consistencia cross-browser**: Los estilos se ven igual en todos los navegadores
- **Control total**: Empiezas desde cero sin estilos inesperados
- **Prevención de bugs**: Evita comportamientos extraños causados por estilos del navegador
- **Mejor punto de partida**: Define tus propios estilos sin tener que sobrescribir defaults

**Ejemplos de estilos por defecto del navegador:**

```css
/* Estilos que los navegadores aplican por defecto */
body {
  margin: 8px; /* Espaciado que no pediste */
}

h1 {
  margin-top: 0.67em;
  margin-bottom: 0.67em;
  font-size: 2em;
  font-weight: bold;
}

ul,
ol {
  margin: 1em 0;
  padding-left: 40px;
}
```

Estos estilos pueden ser diferentes en Chrome, Firefox, Safari, etc.

#### Meyer's CSS Reset

**[Meyer's Reset](https://meyerweb.com/eric/tools/css/reset/)** es uno de los CSS Resets más conocidos y usados históricamente. Fue creado por Eric Meyer.

**Características:**

- Muy agresivo: elimina TODOS los estilos por defecto
- Resetea márgenes y paddings a cero
- Quita decoraciones de listas
- Elimina bordes de imágenes
- Normaliza tamaños de fuente

**Ejemplo de Meyer's Reset (versión simplificada):**

```css
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
```

**Ventajas:**

- ✅ Control total desde cero
- ✅ Comportamiento muy predecible
- ✅ Ligero y simple

**Desventajas:**

- ❌ Demasiado agresivo (elimina estilos útiles)
- ❌ Requiere redefinir muchos estilos básicos
- ❌ No incluye mejoras modernas de accesibilidad
- ❌ No aprovecha características nuevas de CSS

#### Josh Comeau's Modern CSS Reset

**[Josh Comeau's Modern CSS Reset](https://www.joshwcomeau.com/css/custom-css-reset/)** es un reset moderno y más inteligente que aprovecha las mejores prácticas actuales de CSS.

**Características:**

- **Enfoque quirúrgico**: Solo resetea lo necesario
- **Mejora la accesibilidad**: Incluye mejoras de UX
- **Aprovecha CSS moderno**: Usa características nuevas del lenguaje
- **Bien documentado**: Cada regla tiene una explicación clara
- **Optimizado para desarrollo moderno**: Pensado para aplicaciones web actuales

**Josh Comeau's Modern CSS Reset completo:**

```css
/*
  1. Use a more-intuitive box-sizing model.
*/
*,
*::before,
*::after {
  box-sizing: border-box;
}

/*
  2. Remove default margin
*/
*:not(dialog) {
  margin: 0;
}

/*
  3. Enable keyword animations
*/
@media (prefers-reduced-motion: no-preference) {
  html {
    interpolate-size: allow-keywords;
  }
}

body {
  /*
    4. Add accessible line-height
  */
  line-height: 1.5;
  /*
    5. Improve text rendering
  */
  -webkit-font-smoothing: antialiased;
}

/*
  6. Improve media defaults
*/
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

/*
  7. Inherit fonts for form controls
*/
input,
button,
textarea,
select {
  font: inherit;
}

/*
  8. Avoid text overflows
*/
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

/*
  9. Improve line wrapping
*/
p {
  text-wrap: pretty;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  text-wrap: balance;
}

/*
  10. Create a root stacking context
*/
#root,
#__next {
  isolation: isolate;
}
```

**Explicación de cada regla:**

##### 1. `box-sizing: border-box`

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

Esta es **LA REGLA MÁS IMPORTANTE** del reset moderno.

- Cambia el modelo de caja para que `width` y `height` incluyan padding y border
- Sin esto, al añadir padding o border, el elemento crece inesperadamente
- Hace el cálculo de tamaños mucho más intuitivo

**Ejemplo práctico:**

```css
/* Sin box-sizing: border-box */
.box {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  /* Ancho real: 200px + 20px*2 + 5px*2 = 250px ❌ */
}

/* Con box-sizing: border-box */
.box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  /* Ancho real: 200px ✅ */
}
```

> [!IMPORTANT]
> **SIEMPRE** usa `box-sizing: border-box` en todos tus proyectos. Es fundamental para trabajar con el box model de manera intuitiva.

##### 2. Remove default margin

```css
*:not(dialog) {
  margin: 0;
}
```

- Elimina los márgenes por defecto de todos los elementos
- Excepto `<dialog>` que necesita su margen para centrarse correctamente
- Te da control total sobre el espaciado

##### 3. Enable keyword animations

```css
@media (prefers-reduced-motion: no-preference) {
  html {
    interpolate-size: allow-keywords;
  }
}
```

- Permite animar propiedades con valores como `auto`, `min-content`, etc.
- Solo se activa si el usuario no tiene preferencia de movimiento reducido
- Característica CSS moderna para animaciones más fluidas

##### 4. Add accessible line-height

```css
body {
  line-height: 1.5;
}
```

- Mejora la legibilidad del texto
- `1.5` es el estándar recomendado para accesibilidad
- Sin unidad para que escale proporcionalmente con el tamaño de fuente

##### 5. Improve text rendering

```css
body {
  -webkit-font-smoothing: antialiased;
}
```

- Mejora el suavizado de fuentes en navegadores WebKit (Safari, Chrome)
- Hace que el texto se vea más nítido y profesional
- Especialmente visible en pantallas de alta resolución

##### 6. Improve media defaults

```css
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}
```

- `display: block` elimina el espacio extra debajo de las imágenes
- `max-width: 100%` hace las imágenes responsive automáticamente
- Previene que las imágenes desborden su contenedor

**Problema que soluciona:**

```html
<!-- Sin el reset, hay espacio misterioso debajo de la imagen -->
<div>
  <img src="foto.jpg" alt="Foto" />
</div>
```

##### 7. Inherit fonts for form controls

```css
input,
button,
textarea,
select {
  font: inherit;
}
```

- Los elementos de formulario heredan la fuente del documento
- Sin esto, usan la fuente del sistema (inconsistente)
- Ya vimos esto en la Sesión 05 (Reset de font-family)

##### 8. Avoid text overflows

```css
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}
```

- Permite que palabras muy largas se rompan si es necesario
- Evita que el texto desborde horizontalmente
- Útil para URLs, emails o palabras compuestas muy largas

##### 9. Improve line wrapping

```css
p {
  text-wrap: pretty;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  text-wrap: balance;
}
```

- `text-wrap: pretty` mejora la justificación del texto en párrafos
- `text-wrap: balance` balancea las líneas en títulos para mejor apariencia
- Características CSS modernas para tipografía de alta calidad

##### 10. Create a root stacking context

```css
#root,
#__next {
  isolation: isolate;
}
```

- Crea un contexto de apilamiento para frameworks como React o Next.js
- Previene problemas con `z-index` en aplicaciones complejas
- Solo afecta si usas estos contenedores

#### Comparación: Meyer's Reset vs Modern Reset

| Característica               | Meyer's Reset       | Josh Comeau's Modern Reset         |
| ---------------------------- | ------------------- | ---------------------------------- |
| **Filosofía**                | Eliminar todo       | Mejorar selectivamente             |
| **box-sizing**               | No incluido         | ✅ `border-box` en todo            |
| **Accesibilidad**            | No priorizada       | ✅ `line-height`, text rendering   |
| **Responsive**               | No incluido         | ✅ `max-width: 100%` en media      |
| **Formularios**              | No tratado          | ✅ `font: inherit`                 |
| **Características modernas** | No usa              | ✅ `text-wrap`, `interpolate-size` |
| **Tamaño**                   | Más grande          | Más compacto y eficiente           |
| **Mantenimiento**            | Sin actualizaciones | Activamente mejorado               |
| **Casos de uso**             | Proyectos legacy    | Proyectos modernos                 |

#### ¿Cuál usar?

> [!TIP]
> **Para proyectos nuevos**: Usa **Josh Comeau's Modern CSS Reset**
>
> Es más inteligente, incluye mejoras de accesibilidad, y está optimizado para desarrollo web moderno.

**Otros resets populares:**

- **[Normalize.css](https://necolas.github.io/normalize.css/)**: Normaliza estilos en lugar de resetearlos
- **[Modern Normalize](https://github.com/sindresorhus/modern-normalize)**: Versión moderna de Normalize
- **[Tailwind Preflight](https://tailwindcss.com/docs/preflight)**: Reset incluido en Tailwind CSS
- **[Piccalilli Reset](https://piccalil.li/blog/a-more-modern-css-reset/)**: Otra alternativa moderna

**Cómo incluir el reset en tu proyecto:**

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Mi Proyecto</title>

    <!-- Reset CSS PRIMERO -->
    <link rel="stylesheet" href="css/reset.css" />

    <!-- Tus estilos DESPUÉS -->
    <link rel="stylesheet" href="css/styles.css" />
  </head>
  <body>
    <!-- Tu contenido -->
  </body>
</html>
```

> [!IMPORTANT]
> El reset CSS **SIEMPRE** debe cargarse ANTES que tus estilos personalizados.

### 2. El Box Model (Modelo de Caja)

El **Box Model** es uno de los conceptos más fundamentales de CSS. Cada elemento HTML es una caja rectangular compuesta por varias capas.

**Componentes del Box Model:**

```
┌─────────────────────────────────────────┐
│           MARGIN (transparente)          │
│  ┌───────────────────────────────────┐  │
│  │     BORDER (borde visible)        │  │
│  │  ┌─────────────────────────────┐ │  │
│  │  │   PADDING (transparente)    │ │  │
│  │  │  ┌───────────────────────┐  │ │  │
│  │  │  │                       │  │ │  │
│  │  │  │      CONTENT          │  │ │  │
│  │  │  │   (width × height)    │  │ │  │
│  │  │  │                       │  │ │  │
│  │  │  └───────────────────────┘  │ │  │
│  │  └─────────────────────────────┘ │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

**Las 4 capas del Box Model:**

1. **Content (Contenido)**: El área donde va el texto, imágenes, etc.
2. **Padding (Relleno)**: Espacio transparente entre el contenido y el borde
3. **Border (Borde)**: Línea que rodea el padding y el contenido
4. **Margin (Margen)**: Espacio transparente fuera del borde que separa elementos

#### Content (Contenido)

El contenido es el área central donde se muestra el texto, imágenes u otros elementos.

**Propiedades:**

- `width`: Ancho del contenido
- `height`: Altura del contenido

```css
.box {
  width: 300px;
  height: 200px;
  background-color: lightblue;
}
```

#### Padding (Relleno)

El **padding** es el espacio interno entre el contenido y el borde. Es transparente pero toma el color de fondo del elemento.

**Propiedades individuales:**

```css
.box {
  padding-top: 10px; /* Arriba */
  padding-right: 20px; /* Derecha */
  padding-bottom: 10px; /* Abajo */
  padding-left: 20px; /* Izquierda */
}
```

**Propiedades lógicas (modernas):**

```css
.box {
  /* Inline: horizontal (izquierda/derecha en LTR) */
  padding-inline-start: 20px; /* Inicio (izquierda en LTR) */
  padding-inline-end: 20px; /* Final (derecha en LTR) */
  padding-inline: 20px; /* Ambos lados */

  /* Block: vertical (arriba/abajo) */
  padding-block-start: 10px; /* Inicio (arriba) */
  padding-block-end: 10px; /* Final (abajo) */
  padding-block: 10px; /* Ambos lados */
}
```

**Ventajas de las propiedades lógicas:**

- Se adaptan automáticamente a `direction: rtl` (idiomas de derecha a izquierda)
- Más semánticas (inicio/final vs izquierda/derecha)
- Recomendadas para sitios multiidioma

**Propiedad shorthand `padding`:**

```css
/* Un valor: se aplica a los 4 lados */
.box {
  padding: 20px;
  /* = padding: 20px 20px 20px 20px; */
}

/* Dos valores: vertical | horizontal */
.box {
  padding: 10px 20px;
  /* = padding-top: 10px; padding-bottom: 10px;
       padding-left: 20px; padding-right: 20px; */
}

/* Tres valores: top | horizontal | bottom */
.box {
  padding: 10px 20px 30px;
  /* = padding-top: 10px;
       padding-left: 20px; padding-right: 20px;
       padding-bottom: 30px; */
}

/* Cuatro valores: top | right | bottom | left (sentido horario) */
.box {
  padding: 10px 20px 30px 40px;
  /* = padding-top: 10px;
       padding-right: 20px;
       padding-bottom: 30px;
       padding-left: 40px; */
}
```

**Mnemotecnia para recordar el orden:** Piensa en un reloj (sentido horario): **T**op → **R**ight → **B**ottom → **L**eft

**Ejemplo práctico:**

```css
.card {
  width: 300px;
  background-color: white;
  padding: 2rem; /* 32px de espacio interno en todos los lados */
}
```

```html
<div class="card">
  <h2>Título</h2>
  <p>Este contenido tiene espacio alrededor gracias al padding.</p>
</div>
```

#### Border (Borde)

El **border** es una línea visible que rodea el padding y el contenido.

**Propiedades individuales:**

```css
.box {
  border-top-width: 2px;
  border-top-style: solid;
  border-top-color: black;

  border-right-width: 2px;
  border-right-style: solid;
  border-right-color: black;

  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: black;

  border-left-width: 2px;
  border-left-style: solid;
  border-left-color: black;
}
```

**Propiedad shorthand `border`:**

```css
/* Sintaxis: border: ancho estilo color; */
.box {
  border: 2px solid black;
}

/* Bordes individuales */
.box {
  border-top: 3px dashed red;
  border-right: 1px solid blue;
  border-bottom: 3px dashed red;
  border-left: 1px solid blue;
}

/* Solo un lado */
.box {
  border-bottom: 2px solid gray;
}
```

**Estilos de borde (`border-style`):**

- `solid`: Línea sólida (más común)
- `dashed`: Línea discontinua con guiones
- `dotted`: Línea de puntos
- `double`: Doble línea
- `groove`: Borde con efecto 3D hundido
- `ridge`: Borde con efecto 3D elevado
- `inset`: Todo el elemento parece hundido
- `outset`: Todo el elemento parece elevado
- `none`: Sin borde (default)
- `hidden`: Igual que `none` pero con prioridad en conflictos

**Ejemplos:**

```css
.solid-border {
  border: 2px solid black;
}

.dashed-border {
  border: 2px dashed blue;
}

.mixed-borders {
  border-top: 3px solid red;
  border-bottom: 3px solid red;
  border-left: 1px dashed gray;
  border-right: 1px dashed gray;
}
```

#### Margin (Margen)

El **margin** es el espacio transparente fuera del borde que separa un elemento de otros elementos.

**Propiedades individuales:**

```css
.box {
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 10px;
  margin-left: 20px;
}
```

**Propiedades lógicas (modernas):**

```css
.box {
  margin-inline-start: 20px; /* Inicio (izquierda en LTR) */
  margin-inline-end: 20px; /* Final (derecha en LTR) */
  margin-inline: 20px; /* Ambos lados */

  margin-block-start: 10px; /* Inicio (arriba) */
  margin-block-end: 10px; /* Final (abajo) */
  margin-block: 10px; /* Ambos lados */
}
```

**Propiedad shorthand `margin`:**

```css
/* Un valor: se aplica a los 4 lados */
.box {
  margin: 20px;
}

/* Dos valores: vertical | horizontal */
.box {
  margin: 10px 20px;
}

/* Tres valores: top | horizontal | bottom */
.box {
  margin: 10px 20px 30px;
}

/* Cuatro valores: top | right | bottom | left */
.box {
  margin: 10px 20px 30px 40px;
}
```

**Valor especial `auto`:**

```css
/* Centrar un elemento horizontalmente */
.centered {
  width: 600px;
  margin: 0 auto;
  /* margin-top: 0; margin-bottom: 0;
     margin-left: auto; margin-right: auto; */
}
```

**Margin Collapse (Colapso de márgenes):**

Los márgenes verticales de elementos adyacentes a veces se "colapsan" en un solo margen.

```html
<style>
  .box1 {
    margin-bottom: 30px;
  }
  .box2 {
    margin-top: 20px;
  }
</style>

<div class="box1">Caja 1</div>
<div class="box2">Caja 2</div>
<!-- El espacio entre ellas es 30px (no 50px) -->
<!-- Se usa el margen mayor -->
```

> [!NOTE]
> El margin collapse **solo ocurre verticalmente** (top/bottom), nunca horizontalmente.

**Márgenes negativos:**

```css
.overlap {
  margin-top: -20px; /* Mueve el elemento hacia arriba */
}
```

#### Unidades en el Box Model

Puedes usar diferentes unidades para padding, border y margin:

```css
.box {
  /* Píxeles (absoluto) */
  padding: 20px;
  border: 2px solid black;
  margin: 10px;

  /* REM (relativo al root) */
  padding: 1.5rem;
  margin: 2rem;

  /* EM (relativo al font-size del elemento) */
  padding: 1em;
  margin: 2em;

  /* Porcentaje (relativo al ancho del contenedor) */
  padding: 5%;
  margin: 10%;

  /* Auto (solo margin) */
  margin: 0 auto;
}
```

### 3. `box-sizing: border-box`

La propiedad `box-sizing` determina cómo se calcula el tamaño total de un elemento.

**Valores:**

#### `box-sizing: content-box` (Default)

El comportamiento por defecto. `width` y `height` se aplican **solo al contenido**.

```css
.box {
  box-sizing: content-box; /* Valor por defecto */
  width: 200px;
  padding: 20px;
  border: 5px solid black;

  /* Ancho total real:
     200px (content) + 20px*2 (padding) + 5px*2 (border) = 250px
  */
}
```

**Problema:**

```css
.container {
  width: 300px;
}

.child {
  width: 100%; /* 300px */
  padding: 20px;
  border: 2px solid;
  /* Ancho real: 300px + 40px + 4px = 344px
     ¡Desborda el contenedor! ❌ */
}
```

#### `box-sizing: border-box` ✅

`width` y `height` incluyen content, padding y border.

```css
.box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 5px solid black;

  /* Ancho total: 200px
     Content: 200px - 20px*2 - 5px*2 = 150px */
}
```

**Solución al problema anterior:**

```css
.container {
  width: 300px;
}

.child {
  box-sizing: border-box;
  width: 100%; /* 300px total */
  padding: 20px;
  border: 2px solid;
  /* Ancho real: 300px ✅
     Se ajusta automáticamente el content */
}
```

**Visualización comparativa:**

```
content-box (default):
┌────────────────────────────┐
│ width: 200px (solo content)│
│ ┌────────────────────────┐ │
│ │     padding: 20px      │ │
│ │ ┌────────────────────┐ │ │
│ │ │   content: 200px   │ │ │
│ │ └────────────────────┘ │ │
│ └────────────────────────┘ │
│ border: 5px                │
└────────────────────────────┘
Total: 200 + 40 + 10 = 250px


border-box:
┌────────────────────────┐
│  width: 200px (total)  │
│ border: 5px            │
│ ┌────────────────────┐ │
│ │  padding: 20px     │ │
│ │ ┌────────────────┐ │ │
│ │ │ content: 150px │ │ │
│ │ └────────────────┘ │ │
│ └────────────────────┘ │
└────────────────────────┘
Total: 200px
```

> [!IMPORTANT]
> **SIEMPRE** usa `box-sizing: border-box` en todos tus proyectos.
>
> Agrégalo al inicio de tu CSS o en tu reset:
>
> ```css
> *,
> *::before,
> *::after {
>   box-sizing: border-box;
> }
> ```

**Ventajas de `border-box`:**

- ✅ Cálculos de tamaño mucho más intuitivos
- ✅ `width: 100%` funciona como esperas
- ✅ Más fácil crear layouts responsive
- ✅ Menos bugs relacionados con tamaños
- ✅ Estándar en desarrollo web moderno

### 4. Display: block, inline e inline-block

La propiedad `display` determina cómo se comporta un elemento en el flujo del documento.

#### `display: block`

Los elementos **block** ocupan todo el ancho disponible y empiezan en una nueva línea.

**Características:**

- Ocupan todo el ancho disponible (100% del contenedor por defecto)
- Empiezan en una nueva línea
- Respetan `width`, `height`, `margin`, `padding`
- Se apilan verticalmente

**Elementos que son `block` por defecto:**

- `<div>`
- `<p>`
- `<h1>` - `<h6>`
- `<header>`, `<footer>`, `<main>`, `<section>`, `<article>`
- `<ul>`, `<ol>`, `<li>`
- `<form>`

**Ejemplo:**

```html
<style>
  .block-box {
    display: block;
    width: 200px;
    height: 100px;
    background-color: lightblue;
    margin: 10px;
    padding: 20px;
  }
</style>

<div class="block-box">Caja 1</div>
<div class="block-box">Caja 2</div>
<div class="block-box">Caja 3</div>
<!-- Cada una aparece en su propia línea -->
```

#### `display: inline`

Los elementos **inline** solo ocupan el espacio necesario y fluyen con el texto.

**Características:**

- Solo ocupan el espacio de su contenido
- NO empiezan en nueva línea (fluyen horizontalmente)
- NO respetan `width` y `height`
- Respetan `padding` y `margin` horizontal, pero NO vertical
- Fluyen como texto

**Elementos que son `inline` por defecto:**

- `<span>`
- `<a>`
- `<strong>`, `<em>`, `<b>`, `<i>`
- `<img>` (técnicamente es `inline-block`)
- `<label>`

**Ejemplo:**

```html
<style>
  .inline-box {
    display: inline;
    width: 200px; /* ❌ NO tiene efecto */
    height: 100px; /* ❌ NO tiene efecto */
    background-color: yellow;
    padding: 10px; /* ✅ Funciona horizontalmente */
    margin: 20px; /* ⚠️ Solo funciona horizontalmente */
  }
</style>

<span class="inline-box">Texto 1</span>
<span class="inline-box">Texto 2</span>
<span class="inline-box">Texto 3</span>
<!-- Aparecen en la misma línea -->
```

#### `display: inline-block`

**inline-block** es un híbrido que combina lo mejor de ambos mundos.

**Características:**

- Fluyen horizontalmente como `inline`
- Respetan `width`, `height`, `margin` y `padding` como `block`
- Permiten elementos en la misma línea que respetan dimensiones
- Útil para crear grids simples o botones en línea

**Ejemplo:**

```html
<style>
  .inline-block-box {
    display: inline-block;
    width: 150px; /* ✅ Funciona */
    height: 100px; /* ✅ Funciona */
    background-color: lightgreen;
    margin: 10px; /* ✅ Funciona en todas direcciones */
    padding: 15px; /* ✅ Funciona en todas direcciones */
    vertical-align: top; /* Alineación vertical */
  }
</style>

<div class="inline-block-box">Caja 1</div>
<div class="inline-block-box">Caja 2</div>
<div class="inline-block-box">Caja 3</div>
<!-- Aparecen en la misma línea Y respetan width/height -->
```

**Uso común: Cards en línea**

```css
.card {
  display: inline-block;
  width: 200px;
  padding: 1rem;
  margin: 1rem;
  background-color: white;
  border: 1px solid #ddd;
  vertical-align: top; /* Alinear arriba */
}
```

```html
<div class="card">
  <h3>Card 1</h3>
  <p>Contenido</p>
</div>
<div class="card">
  <h3>Card 2</h3>
  <p>Contenido más largo que hace la card más alta</p>
</div>
<div class="card">
  <h3>Card 3</h3>
  <p>Contenido</p>
</div>
```

#### Comparación

| Propiedad            | `block`                 | `inline`               | `inline-block`        |
| -------------------- | ----------------------- | ---------------------- | --------------------- |
| Nueva línea          | ✅ Sí                   | ❌ No                  | ❌ No                 |
| Ancho por defecto    | 100% del contenedor     | Del contenido          | Del contenido         |
| `width`/`height`     | ✅ Respeta              | ❌ Ignora              | ✅ Respeta            |
| `margin` vertical    | ✅ Respeta              | ❌ Ignora              | ✅ Respeta            |
| `margin` horizontal  | ✅ Respeta              | ✅ Respeta             | ✅ Respeta            |
| `padding` vertical   | ✅ Respeta              | ⚠️ Visual, sin espacio | ✅ Respeta            |
| `padding` horizontal | ✅ Respeta              | ✅ Respeta             | ✅ Respeta            |
| Uso común            | Contenedores, secciones | Texto, enlaces         | Cards, botones, grids |

**Cambiar el display de elementos:**

```css
/* Hacer un enlace comportarse como botón de bloque */
a.button {
  display: block;
  width: 200px;
  padding: 10px;
  text-align: center;
}

/* Hacer un div fluir en línea */
.tag {
  display: inline;
}

/* Imágenes en línea con dimensiones */
img.thumbnail {
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: 5px;
}
```

### 5. Width y Height

Las propiedades `width` y `height` controlan las dimensiones de los elementos.

#### Width (Ancho)

```css
.box {
  width: 300px; /* Valor fijo */
  width: 50%; /* Porcentaje del contenedor */
  width: 20rem; /* Unidad relativa */
  width: auto; /* Automático (default) */
  width: fit-content; /* Ajusta al contenido */
  width: min-content; /* Ancho mínimo del contenido */
  width: max-content; /* Ancho máximo del contenido */
}
```

**Propiedades relacionadas:**

```css
.box {
  min-width: 200px; /* Ancho mínimo */
  max-width: 800px; /* Ancho máximo */
  width: 100%; /* Ancho completo */
}
```

**Ejemplo responsive:**

```css
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  /* Se adapta a pantallas pequeñas pero no crece infinitamente */
}
```

#### Height (Altura)

```css
.box {
  height: 200px; /* Valor fijo */
  height: 50vh; /* 50% de la altura del viewport */
  height: auto; /* Automático (default) */
  height: 100%; /* 100% del contenedor padre */
}
```

**Propiedades relacionadas:**

```css
.box {
  min-height: 400px; /* Altura mínima */
  max-height: 600px; /* Altura máxima */
  height: 100%; /* Altura completa */
}
```

**Casos comunes:**

```css
/* Contenedor de altura completa de la ventana */
.full-height {
  height: 100vh;
}

/* Contenedor que crece con el contenido pero tiene un mínimo */
.flexible-height {
  min-height: 300px;
  height: auto;
}

/* Imagen que mantiene proporción */
img {
  width: 100%;
  height: auto;
}
```

> [!WARNING]
> **Problema común con `height: 100%`**
>
> Para que `height: 100%` funcione, el elemento padre debe tener una altura definida:
>
> ```css
> /* ❌ No funciona */
> .parent {
>   /* No tiene altura definida */
> }
> .child {
>   height: 100%; /* No hace nada */
> }
>
> /* ✅ Funciona */
> html,
> body {
>   height: 100%;
> }
> .parent {
>   height: 100%;
> }
> .child {
>   height: 100%; /* Ahora funciona */
> }
> ```

**Uso de `vh` (viewport height):**

```css
/* Altura completa de la ventana */
.hero {
  height: 100vh;
}

/* Mitad de la ventana */
.half-screen {
  height: 50vh;
}
```

## 6. Ejercicio: Mejorando tu CV

**Objetivo:** Aplicar los conceptos de box model, padding, border y margin a tu CV de sesiones anteriores.

### Instrucciones:

1. **Abre tu proyecto CV** (de sesiones anteriores)

2. **Añade el CSS Reset de Josh Comeau** al principio de tu CSS:

```css
/* reset.css */
*,
*::before,
*::after {
  box-sizing: border-box;
}

*:not(dialog) {
  margin: 0;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}
```

3. **Aplica espaciados consistentes:**

```css
/* Espaciado entre secciones */
section {
  margin-bottom: 3rem;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
}

/* Espaciado interno en las tarjetas */
.card {
  padding: 1.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
}

/* Títulos */
h2 {
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #333;
}

/* Párrafos */
p {
  margin-bottom: 1rem;
}

/* Listas */
ul,
ol {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

li {
  margin-bottom: 0.5rem;
}
```

4. **Mejora el contenedor principal:**

```css
body {
  font-family: "Roboto", sans-serif;
  background-color: #f5f5f5;
  padding: 2rem;
}

main {
  max-width: 900px;
  margin: 0 auto;
  background-color: white;
  padding: 3rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
```

5. **Experimenta con diferentes estilos de borde:**

```css
/* Borde sólido */
.experience-item {
  border-left: 4px solid #0066cc;
  padding-left: 1rem;
  margin-bottom: 1.5rem;
}

/* Borde completo */
.skill-card {
  border: 2px solid #e0e0e0;
  border-radius: 4px;
  padding: 1rem;
  display: inline-block;
  margin: 0.5rem;
}

/* Solo borde inferior */
.section-header {
  border-bottom: 3px solid #333;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}
```

6. **Crea cards con inline-block:**

```css
.skill-tag {
  display: inline-block;
  padding: 0.5rem 1rem;
  margin: 0.25rem;
  background-color: #e3f2fd;
  border-radius: 20px;
  border: 1px solid #2196f3;
}
```

### Criterios de evaluación:

- ✅ Has incluido el reset CSS con `box-sizing: border-box`
- ✅ Usas `margin` para separar secciones y elementos
- ✅ Usas `padding` para crear espacio interno en contenedores
- ✅ Has aplicado bordes a al menos 3 elementos diferentes
- ✅ El contenedor principal está centrado con `margin: 0 auto`
- ✅ Has usado al menos un elemento con `display: inline-block`
- ✅ Los espaciados son consistentes y siguen un sistema (múltiplos de 0.5rem o similar)
- ✅ El diseño se ve limpio y profesional

### Bonus (opcional):

- Añade sombras con `box-shadow`
- Experimenta con `border-radius` para esquinas redondeadas
- Crea un sistema de espaciado consistente (ej: 0.5rem, 1rem, 1.5rem, 2rem, 3rem)
- Usa propiedades lógicas (`margin-inline`, `padding-block`)
- Añade hover effects a las cards

## Resumen

En esta sesión hemos aprendido:

- ✅ Qué es un CSS Reset y por qué es importante
- ✅ Diferencias entre Meyer's Reset y Josh Comeau's Modern Reset
- ✅ Las 10 reglas del Modern CSS Reset y su explicación
- ✅ El Box Model: content, padding, border y margin
- ✅ Propiedades individuales y shorthand de padding, border y margin
- ✅ Propiedades lógicas modernas (`margin-inline`, `padding-block`)
- ✅ La importancia crítica de `box-sizing: border-box`
- ✅ Diferencia entre `content-box` y `border-box`
- ✅ Display: `block`, `inline` e `inline-block`
- ✅ Propiedades `width` y `height` y sus variantes
- ✅ Cómo aplicar estos conceptos para mejorar el diseño de un CV

**Lo más importante:**

> [!IMPORTANT]
> **REGLAS FUNDAMENTALES:**
>
> 1. **SIEMPRE** usar `box-sizing: border-box` en todos los proyectos
> 2. **INCLUIR** un CSS Reset (preferiblemente Josh Comeau's Modern Reset)
> 3. **USAR** el shorthand de margin/padding para código más limpio
> 4. **RECORDAR** el orden del shorthand: Top → Right → Bottom → Left (sentido horario)
> 5. **ENTENDER** las diferencias entre block, inline e inline-block
> 6. **APLICAR** espaciados consistentes usando un sistema (0.5rem, 1rem, 1.5rem...)

## Recursos Adicionales

### CSS Reset

- [Josh Comeau's Modern CSS Reset](https://www.joshwcomeau.com/css/custom-css-reset/) ⭐ **Lectura obligatoria**
- [Meyer's Reset CSS](https://meyerweb.com/eric/tools/css/reset/)
- [Normalize.css](https://necolas.github.io/normalize.css/)
- [Modern Normalize](https://github.com/sindresorhus/modern-normalize)
- [Piccalilli Modern CSS Reset](https://piccalil.li/blog/a-more-modern-css-reset/)

### Box Model

- [MDN - The Box Model](https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/The_box_model)
- [MDN - box-sizing](https://developer.mozilla.org/es/docs/Web/CSS/box-sizing)
- [CSS Tricks - Box Sizing](https://css-tricks.com/box-sizing/)
- [Interactive Box Model Demo](https://codepen.io/carolineartz/pen/ogVXZj)

### Display

- [MDN - display](https://developer.mozilla.org/es/docs/Web/CSS/display)
- [CSS Tricks - Display](https://css-tricks.com/almanac/properties/d/display/)

### Spacing

- [Every Layout - The Stack](https://every-layout.dev/layouts/stack/) - Espaciado vertical
- [Spacing in CSS](https://ishadeed.com/article/spacing-in-css/)

### Propiedades Lógicas

- [MDN - CSS Logical Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties)
- [CSS Tricks - Logical Properties](https://css-tricks.com/css-logical-properties-and-values/)

### Herramientas

- [Chrome DevTools - Box Model Inspector](https://developer.chrome.com/docs/devtools/css/box-model/) - Para visualizar el box model
- [Firefox DevTools - Box Model Highlighter](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_the_box_model/index.html)
