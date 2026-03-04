---
title: "Sesión 04 - Introducción a CSS"
section: "CSS"
order: 4
description: "Selectores, propiedades y formas de incluir CSS"
---

# Sesión 04 - Introducción a CSS

**Fecha:** 11 de Febrero de 2026

## Contenidos de la Sesión

### 1. Introducción a CSS

**CSS (Cascading Style Sheets)** es un lenguaje de hojas de estilo que describe la presentación de documentos HTML.

**¿Por qué usar CSS?**
- Separación de contenido y presentación
- Reutilización de estilos
- Mantenibilidad del sitio
- Consistencia visual
- Responsive design

### 2. Lugares donde Colocar CSS

#### CSS Inline (En línea) — NO RECOMENDADO

```html
<p style="color: red; font-size: 16px;">Párrafo con estilo inline</p>
```

> **Importante:** No usar CSS inline. Dificulta el mantenimiento, mezcla contenido con presentación y no es reutilizable.

#### CSS Internal (Interno) — NO RECOMENDADO

```html
<head>
  <style>
    p { color: blue; font-size: 18px; }
  </style>
</head>
```

> **Importante:** No usar CSS interno. No se puede compartir entre páginas y dificulta el mantenimiento.

#### CSS External (Externo) ✅ RECOMENDADO

```html
<head>
  <link rel="stylesheet" href="styles.css" />
</head>
```

**Ventajas:**
- Reutilizable en múltiples páginas
- Fácil mantenimiento
- Mejor rendimiento (caching)
- Separación clara de responsabilidades

### 3. Selectores CSS

#### Selector de Etiqueta (Tag Selector)

```css
p { color: blue; font-size: 16px; }
h1 { color: darkblue; font-size: 32px; }
a { color: red; text-decoration: none; }
```

#### Selector de Clase (Class Selector)

```css
.destacado {
  background-color: yellow;
  font-weight: bold;
}
.contenedor {
  border: 2px solid black;
  padding: 15px;
}
```

#### Selector de ID (Id Selector)

```css
#header {
  background-color: navy;
  color: white;
  padding: 20px;
}
```

#### Selectores Múltiples

```css
h1, h2, h3 {
  font-family: Arial, sans-serif;
  color: darkblue;
}
```

#### Selectores Anidados

```css
.contenedor p {
  color: purple;
}
```

### 4. Propiedades CSS Fundamentales

#### Color y Fondo

```css
.elemento {
  color: red;                      /* color del texto */
  background-color: #f0f0f0;       /* color de fondo */
  background-color: rgb(255, 0, 0); /* usando RGB */
  background-color: rgba(255, 0, 0, 0.5); /* con transparencia */
}
```

#### Tipografía

```css
.texto {
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;       /* normal, bold, 100-900 */
  font-style: italic;      /* normal, italic, oblique */
  text-align: center;      /* left, right, center, justify */
  text-decoration: none;   /* none, underline, line-through */
  line-height: 1.5;
  letter-spacing: 2px;
  text-transform: uppercase; /* uppercase, lowercase, capitalize */
}
```

#### Dimensiones

```css
.caja {
  width: 300px;
  height: 200px;
  min-width: 100px;
  max-width: 600px;
  min-height: 50px;
  max-height: 400px;
}
```

### 5. El Box Model

Cada elemento HTML es una caja con cuatro áreas:

```
┌─────────────────────────────┐
│           MARGIN            │
│  ┌───────────────────────┐  │
│  │        BORDER         │  │
│  │  ┌─────────────────┐  │  │
│  │  │     PADDING     │  │  │
│  │  │  ┌───────────┐  │  │  │
│  │  │  │  CONTENT  │  │  │  │
│  │  │  └───────────┘  │  │  │
│  │  └─────────────────┘  │  │
│  └───────────────────────┘  │
└─────────────────────────────┘
```

```css
.caja {
  /* Padding: espacio interno */
  padding: 10px;
  padding: 10px 20px;           /* arriba/abajo izquierda/derecha */
  padding: 10px 20px 15px 5px; /* arriba derecha abajo izquierda */

  /* Border: borde del elemento */
  border: 2px solid black;
  border-top: 1px dashed red;

  /* Margin: espacio externo */
  margin: 10px;
  margin: 0 auto;  /* centrar horizontalmente */
}
```

### 6. Unidades de Medida

```css
.elemento {
  /* Absolutas */
  width: 300px;    /* píxeles */
  font-size: 12pt; /* puntos */

  /* Relativas */
  font-size: 1em;    /* relativo al elemento padre */
  font-size: 1rem;   /* relativo al elemento raíz (html) */
  width: 50%;        /* porcentaje del contenedor */
  width: 50vw;       /* 50% del ancho de la ventana */
  height: 50vh;      /* 50% del alto de la ventana */
}
```
