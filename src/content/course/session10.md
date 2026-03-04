---
title: "Sesión 10 - Corrección de la Actividad MWC"
section: "CSS"
order: 10
description: "position: fixed, variables CSS, pseudo-clases y backdrop-filter"
---

# Sesión 10 - Corrección de la Actividad MWC

**Fecha:** 4 de Marzo de 2026

## Contenidos de la Sesión

Revisión de la actividad MWC con temas: **Flexbox**, **Box Model**, **`position: fixed`**, **variables CSS** y pseudo-clases `:nth-child()`, `:first-child`, `:last-child`.

### 1. `position: fixed` — Cabecera fija

```css
header {
  position: fixed;
  top: 0;
  width: 100%;
}
```

> **Importante:** Al fijar el `header`, este deja de ocupar espacio en el flujo. Añade margen al contenido siguiente:

```css
main {
  margin-block: 100px; /* compensa la altura del header fijo */
}
```

| Valor | Descripción |
| --- | --- |
| `static` | Posicionamiento normal (por defecto) |
| `relative` | Se desplaza relativo a su posición original |
| `absolute` | Relativo al ancestro posicionado más cercano |
| `fixed` | Relativo a la ventana; no se mueve con el scroll |
| `sticky` | Como `relative` hasta un umbral, luego fija |

Propiedades que trabajan con `position`:
- `top`, `right`, `bottom`, `left`
- `z-index` — capas de apilamiento

### 2. Variables CSS (Custom Properties)

```css
:root {
  --color-primario: rgba(44, 44, 45, 0.252);
  --color-de-fondo: rgb(243, 243, 243);
  --fuente-principal: 'Inter', sans-serif;
}

body { background-color: var(--color-de-fondo); }
header { background-color: var(--color-primario); }
button { background-color: var(--color-primario); }
```

**Ventajas:**
- Cambiar la variable actualiza todos los usos
- Facilita temas (modo oscuro/claro)
- Mejora la legibilidad del código

> Las variables CSS son sensibles a mayúsculas: `--Color-Primario` y `--color-primario` son diferentes.

### 3. `backdrop-filter` — Efecto cristal esmerilado

```css
header {
  position: fixed;
  background-color: rgba(44, 44, 45, 0.252); /* fondo semitransparente */
  backdrop-filter: blur(25px);               /* desenfoca lo que hay detrás */
}
```

> Para que `backdrop-filter` sea visible, el fondo debe ser **semitransparente** (usar `rgba` con opacidad < 1).

### 4. Pseudo-clases estructurales

#### `:first-child` y `:last-child`

```css
li:first-child { border-top: none; }
li:last-child { border-bottom: none; }
```

#### `:nth-child(n)`

| Expresión | Selecciona |
| --- | --- |
| `:nth-child(1)` | El primer elemento |
| `:nth-child(2n)` | Los elementos pares (2, 4, 6…) |
| `:nth-child(2n+1)` | Los elementos impares (1, 3, 5…) |
| `:nth-child(odd)` | Los impares |
| `:nth-child(even)` | Los pares |
| `:nth-child(-n+3)` | Los tres primeros |

```css
/* Filas de tabla alternadas */
tr:nth-child(2n) {
  background-color: rgb(219, 219, 219);
}

/* Destacar las dos primeras tarjetas */
.gente > div:nth-child(1),
.gente > div:nth-child(2) {
  border: 2px solid gold;
  background-color: rgb(251, 248, 225);
  outline: 4px dashed gold;
  outline-offset: 5px;
  box-shadow: 0 0 30px -5px gold;
}
```

### 5. `outline` y `outline-offset`

`outline` es similar a `border` pero **no ocupa espacio** en el box model.

```css
.destacado {
  outline: 4px dashed gold;
  outline-offset: 5px;
}
```

### 6. `object-position` — Controlar el recorte de imágenes

```css
.gente img {
  width: 100%;
  height: 234px;
  object-fit: cover;
  object-position: top; /* muestra la parte superior */
}
```

| Valor | Descripción |
| --- | --- |
| `center` | Centra la imagen (defecto) |
| `top` | Muestra la parte superior |
| `bottom` | Muestra la parte inferior |
| `50% 20%` | Posición exacta en X e Y |

### 7. `overflow: hidden`

Oculta contenido que desborda. Útil para que las imágenes respeten el `border-radius`:

```css
.gente > div {
  border-radius: 6px;
  overflow: hidden; /* la imagen no sobresale de las esquinas */
}
```

### 8. Repaso de Flexbox Avanzado

```css
/* Layout completo con Flexbox */
body {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
}

header {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-primario);
  backdrop-filter: blur(25px);
}

main {
  flex: 1;
  margin-top: 80px; /* altura del header */
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
}

.card {
  flex: 1 1 200px;
  border-radius: 6px;
  overflow: hidden;
}
```
