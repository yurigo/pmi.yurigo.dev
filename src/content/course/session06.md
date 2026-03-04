---
title: "Sesión 06 - CSS Box Model y Reset CSS"
section: "CSS"
order: 6
description: "CSS Reset, box-sizing y el modelo de caja"
---

# Sesión 06 - CSS Box Model y Reset CSS

**Fecha:** 18 de Febrero de 2026

## Contenidos de la Sesión

### 1. CSS Reset

Los navegadores aplican estilos por defecto que varían entre ellos. Un **CSS Reset** elimina o normaliza estos estilos para un punto de partida consistente.

#### Meyer's CSS Reset

```css
html, body, div, span, h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, em, img, ins, kbd, q, s, samp, small, strike, strong,
dl, dt, dd, ol, ul, li, fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figure, figcaption, footer,
header, menu, nav, output, section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
body { line-height: 1; }
ol, ul { list-style: none; }
table { border-collapse: collapse; border-spacing: 0; }
```

#### Josh Comeau's Modern CSS Reset

```css
/* 1. Box-sizing */
*, *::before, *::after {
  box-sizing: border-box;
}

/* 2. Remove default margin */
*:not(dialog) {
  margin: 0;
}

/* 3. Animations */
@media (prefers-reduced-motion: no-preference) {
  html {
    interpolate-size: allow-keywords;
  }
}

body {
  line-height: 1.5;                  /* 4. Accessible line-height */
  -webkit-font-smoothing: antialiased; /* 5. Improve text rendering */
}

/* 6. Improve media defaults */
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

/* 7. Inherit fonts for form controls */
input, button, textarea, select {
  font: inherit;
}

/* 8. Avoid text overflows */
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

/* 9. Improve line wrapping */
p { text-wrap: pretty; }
h1, h2, h3, h4, h5, h6 { text-wrap: balance; }

/* 10. Root stacking context */
#root, #__next {
  isolation: isolate;
}
```

### 2. `box-sizing: border-box` — La Regla Más Importante

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

**Siempre** usa `box-sizing: border-box` en todos tus proyectos.

### 3. El Box Model en Detalle

```css
.caja {
  /* Contenido */
  width: 300px;
  height: 200px;

  /* Padding: espacio interno */
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
  /* Shorthand: */
  padding: 10px 20px; /* arriba/abajo | izquierda/derecha */

  /* Border */
  border-width: 2px;
  border-style: solid;
  border-color: black;
  /* Shorthand: */
  border: 2px solid black;

  /* Margin: espacio externo */
  margin-top: 10px;
  margin: 0 auto; /* centrar horizontalmente */
}
```

### 4. Propiedades Lógicas CSS

Las propiedades lógicas son independientes del idioma (LTR/RTL):

```css
.elemento {
  /* En lugar de margin-left y margin-right: */
  margin-inline: 10px;

  /* En lugar de margin-top y margin-bottom: */
  margin-block: 20px;

  /* En lugar de padding-left: */
  padding-inline-start: 15px;

  /* En lugar de border-top: */
  border-block-start: 1px solid black;
}
```

### 5. Propiedades de Visualización

```css
.elemento {
  display: block;        /* bloque (por defecto en div, p, h1...) */
  display: inline;       /* en línea (por defecto en span, a, img...) */
  display: inline-block; /* en línea pero acepta width/height */
  display: none;         /* oculta el elemento completamente */
}
```

### 6. Overflow

```css
.contenedor {
  width: 200px;
  height: 100px;
  overflow: visible; /* por defecto: el contenido desborda */
  overflow: hidden;  /* recorta el contenido que desborda */
  overflow: scroll;  /* siempre muestra barras de scroll */
  overflow: auto;    /* muestra scroll solo si es necesario */
}
```

### 7. Especificidad CSS

La especificidad determina qué estilos tienen prioridad:

| Selector | Especificidad |
| --- | --- |
| Elemento (`p`) | 0-0-1 |
| Clase (`.clase`) | 0-1-0 |
| ID (`#id`) | 1-0-0 |
| Inline style | máxima |
| `!important` | anula todo |

```css
/* Más específico tiene prioridad */
p { color: blue; }         /* especificidad: 0-0-1 */
.texto { color: red; }     /* especificidad: 0-1-0 → gana */
#principal { color: green; } /* especificidad: 1-0-0 → gana */
```
