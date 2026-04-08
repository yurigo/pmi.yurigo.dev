---
title: "Sesión 11 - Introducción a CSS Grid"
section: "CSS"
order: 11
description: "Sistema de maquetación bidimensional con CSS Grid Layout"
---

# Sesión 11 - Introducción a CSS Grid

**Fecha:** 10 de Marzo de 2026

## Contenidos de la Sesión

En esta sesión se ha introducido **CSS Grid Layout**, el sistema de maquetación bidimensional de CSS. A diferencia de Flexbox (que trabaja en un solo eje a la vez), Grid permite controlar simultáneamente filas y columnas.

Se ha visto únicamente la **declaración imperativa** de la grid: definir explícitamente columnas y filas y posicionar los elementos con `grid-column-start/end` y `grid-row-start/end`.

> [!NOTE]
> En la próxima sesión se verá la **declaración declarativa**: `grid-template-areas` y `grid-area` con nombres de área.

Los ejemplos comentados en clase se encuentran en la carpeta [`grid-examples/`](./grid-examples/).

---

### 1. `display: grid` — Activar el modelo Grid

Aplicar `display: grid` a un contenedor convierte a todos sus hijos directos en **grid items**. El contenedor pasa a llamarse **grid container**.

```css
.contenedor {
  display: grid;
}
```

Por defecto, sin ninguna otra propiedad, los items se colocan uno debajo del otro en una sola columna (igual que el flujo normal de bloque).

---

### 2. `grid-template-columns` — Definir las columnas

`grid-template-columns` define el número y el tamaño de las **columnas** de la grid. Cada valor corresponde a una columna.

```css
.contenedor {
  display: grid;
  grid-template-columns: 200px 200px 200px; /* 3 columnas de 200px */
}
```

#### La unidad `fr` (fracción)

La unidad `fr` representa una **fracción del espacio disponible** en el contenedor. Es la unidad más habitual en Grid porque crea layouts flexibles.

```css
.contenedor {
  grid-template-columns: 1fr 1fr 1fr; /* 3 columnas iguales */
}

.contenedor-mixto {
  grid-template-columns: 1fr 3fr; /* col 1 ocupa 1/4, col 2 ocupa 3/4 */
}
```

#### La función `repeat()`

`repeat()` evita repetir el mismo valor varias veces.

```css
/* estas dos declaraciones son equivalentes */
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-columns: repeat(4, 1fr);
```

`repeat()` también acepta un **patrón** como segundo argumento:

```css
/* repite el patrón "1fr 3fr" dos veces: 1fr 3fr 1fr 3fr */
grid-template-columns: repeat(2, 1fr 3fr);

/* patrón complejo del ejemplo de clase */
grid-template-columns: repeat(2, 1fr 3fr) 0.5fr 1fr;
/* resultado: 1fr 3fr 1fr 3fr 0.5fr 1fr  → 6 columnas */
```

---

### 3. `grid-template-rows` — Definir las filas

`grid-template-rows` funciona igual que `grid-template-columns` pero para las **filas**.

```css
body {
  display: grid;
  grid-template-columns: 6fr 1fr;
  grid-template-rows: 60px 1fr 60px; /* header 60px, main flexible, footer 60px */
}
```

> [!TIP]
> Combinando `grid-template-columns` y `grid-template-rows` con valores en `fr` y `px` se puede crear el layout clásico de página (header, main + sidebar, footer) con muy pocas líneas de CSS.

---

### 4. `grid-auto-rows` — Altura de las filas implícitas

Cuando hay más items de los que caben en las filas definidas con `grid-template-rows`, Grid crea filas **implícitas** automáticamente. `grid-auto-rows` controla el tamaño de esas filas.

```css
section {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px; /* todas las filas implícitas tendrán 200px de alto */
}
```

---

### 5. `gap` — Espaciado entre celdas

`gap` (antes llamado `grid-gap`) define el espacio entre filas y columnas de la grid. Funciona igual que en Flexbox.

```css
.contenedor {
  gap: 1em; /* mismo espacio en filas y columnas */
  gap: 1em 2em; /* row-gap: 1em, column-gap: 2em */
  row-gap: 1em;
  column-gap: 2em;
}
```

---

### 6. `place-items` — Alineación de los items en sus celdas

`place-items` es la propiedad shorthand que combina `align-items` (eje de bloque/vertical) y `justify-items` (eje en línea/horizontal).

```css
.contenedor {
  place-items: center; /* centra en ambos ejes */
  place-items: stretch; /* estira para ocupar toda la celda (valor por defecto) */
  place-items: start end; /* align-items: start, justify-items: end */
}
```

| Valor     | Descripción                                     |
| --------- | ----------------------------------------------- |
| `stretch` | El item ocupa toda la celda (valor por defecto) |
| `start`   | El item se alinea al inicio de la celda         |
| `end`     | El item se alinea al final de la celda          |
| `center`  | El item se centra en la celda                   |

---

### 7. Posicionamiento de items: `grid-column-start` / `grid-column-end`

Por defecto cada item ocupa una sola celda. Para que un item ocupe **varias columnas** se usan `grid-column-start` y `grid-column-end`. Los valores son **números de línea** (no de columna).

> [!IMPORTANT]
> Las líneas de la grid empiezan en **1** (no en 0). Una grid de 4 columnas tiene 5 líneas verticales (1 al 5).

```css
/* ocupa desde la línea 1 hasta la línea 3 → 2 columnas */
.item {
  grid-column-start: 1;
  grid-column-end: 3;
}
```

**Ejemplo del ejemplo de clase — imagen que ocupa las dos primeras columnas:**

```css
section img {
  grid-column-start: 1;
  grid-column-end: 3;
}
```

#### Valores negativos

El valor `-1` hace referencia a la **última línea** de la grid (sea cual sea el número de columnas). Es muy útil para que un elemento ocupe toda la anchura.

```css
header {
  grid-column-start: 1;
  grid-column-end: -1; /* llega hasta el final, sin importar cuántas columnas haya */
}
```

---

### 8. Posicionamiento de items: `grid-row-start` / `grid-row-end`

Funcionan igual que sus equivalentes de columna, pero para las **filas**.

```css
.card.important {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 5;
  grid-row-end: 7;
}
```

---

### 9. La palabra clave `span`

En lugar de indicar la línea de fin, se puede usar `span N` para indicar cuántas **pistas** (columnas o filas) debe abarcar el item.

```css
/* estas dos declaraciones son equivalentes */
.item {
  grid-column-start: 4;
  grid-column-end: 6;
}

.item {
  grid-column-start: 4;
  grid-column-end: span 2; /* abarca 2 columnas a partir de la línea 4 */
}
```

---

### 10. Shorthand `grid-column` y `grid-row`

Las propiedades `start` y `end` se pueden escribir de forma abreviada con una barra `/`:

```css
/* longhand */
.item {
  grid-column-start: 4;
  grid-column-end: span 2;
}

/* shorthand equivalente */
.item {
  grid-column: 4 / span 2;
}
```

```css
/* otros ejemplos de shorthand */
header {
  grid-column: 1 / -1; /* de la primera a la última línea */
}

footer {
  grid-column: 1 / -1;
}
```

---

### 11. Shorthand `grid-area` (4 valores)

`grid-area` con 4 valores es la forma más compacta de posicionar un item. El orden es:

```
grid-area: row-start / column-start / row-end / column-end;
```

```css
/* longhand */
.item {
  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-column-end: -1;
}

/* shorthand equivalente */
.item {
  grid-area: 1 / 1 / 2 / -1;
}
```

> [!NOTE]
> En la próxima sesión veremos otro uso de `grid-area`: asignar un **nombre** a un elemento para colocarlo en un área definida con `grid-template-areas`.

---

### 12. Ejemplo: layout de página completa con Grid

El archivo [`pagina2.html`](./grid-examples/pagina2.html) muestra cómo usar Grid para el layout clásico de una página (header, main, aside, footer):

```css
body {
  height: 100vh;
  display: grid;
  grid-template-columns: 6fr 1fr; /* main ocupa 6 partes, aside 1 parte */
  grid-template-rows: 60px 1fr 60px; /* header, contenido, footer */
}

header {
  grid-column-start: 1;
  grid-column-end: -1; /* el header ocupa toda la anchura */
}

footer {
  grid-column-start: 1;
  grid-column-end: -1; /* el footer también ocupa toda la anchura */
}
```

**Resultado visual:**

```
┌─────────────────────────────────────┐  ← header (full width)
├──────────────────────────┬──────────┤
│          main (6fr)      │ aside(1fr)│  ← fila central (1fr)
├──────────────────────────┴──────────┤
│          footer (full width)        │  ← footer (full width)
└─────────────────────────────────────┘
```

---

### 13. Estructura de los ejemplos de la sesión

```
grid-examples/
├── index.html    — Grid con múltiples columnas, posicionamiento y span
├── style.css     — Estilos del ejemplo principal
├── pagina2.html  — Layout de página completa con Grid
├── style2.css    — Estilos del layout de página
└── reset.css     — Reset CSS compartido
```

---

## Resumen

En esta sesión hemos introducido:

- ✅ `display: grid` para activar el modelo Grid en un contenedor
- ✅ `grid-template-columns` para definir el número y tamaño de columnas
- ✅ La unidad `fr` (fracción del espacio disponible)
- ✅ La función `repeat()` para definir patrones de columnas de forma compacta
- ✅ `grid-template-rows` para definir filas de altura fija o flexible
- ✅ `grid-auto-rows` para controlar el tamaño de las filas implícitas
- ✅ `gap` para el espaciado entre celdas de la grid
- ✅ `place-items` para alinear los items dentro de sus celdas
- ✅ `grid-column-start` / `grid-column-end` para posicionar items en columnas
- ✅ `grid-row-start` / `grid-row-end` para posicionar items en filas
- ✅ La palabra clave `span` para indicar cuántas pistas debe abarcar un item
- ✅ Los shorthands `grid-column`, `grid-row` y `grid-area` (4 valores)
- ✅ Valores negativos de línea (`-1` = última línea)

**Lo más importante:**

> [!IMPORTANT]
>
> - Los números de línea en Grid empiezan en **1**, y el valor **-1** representa la última línea
> - La unidad `fr` reparte el espacio disponible de forma proporcional, como `flex-grow`
> - `span N` indica cuántas columnas/filas abarca el item, sin necesidad de conocer la línea de fin
> - `grid-area: rs / cs / re / ce` es el shorthand de 4 valores para posicionar un item completamente
> - Con Grid se puede maquetar el layout completo de una página (header, main, sidebar, footer) con muy pocas líneas

## Recursos Adicionales

- [MDN - CSS Grid Layout](https://developer.mozilla.org/es/docs/Web/CSS/CSS_grid_layout)
- [MDN - grid-template-columns](https://developer.mozilla.org/es/docs/Web/CSS/grid-template-columns)
- [MDN - grid-template-rows](https://developer.mozilla.org/es/docs/Web/CSS/grid-template-rows)
- [MDN - grid-column](https://developer.mozilla.org/es/docs/Web/CSS/grid-column)
- [MDN - grid-row](https://developer.mozilla.org/es/docs/Web/CSS/grid-row)
- [MDN - grid-area](https://developer.mozilla.org/es/docs/Web/CSS/grid-area)
- [CSS Tricks - A Complete Guide to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Josh Comeau - An Interactive Guide to CSS Grid](https://www.joshwcomeau.com/css/interactive-guide-to-grid/)
- [Grid Garden](https://cssgridgarden.com/#es) — Juego para practicar CSS Grid
- [layoutit](https://grid.layoutit.com/) — Herramienta visual para diseñar grids
