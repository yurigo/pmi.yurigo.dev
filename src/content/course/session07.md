---
title: "Sesión 07 - CSS: border-radius, box-shadow y height"
section: "CSS"
order: 7
description: "Esquinas redondeadas, sombras y unidades de altura"
---

# Sesión 07 - CSS: border-radius, box-shadow y height

**Fecha:** 24 de Febrero de 2026

## Contenidos de la Sesión

### 1. Repaso del Box Model

```css
.caja {
  width: 200px;
  height: 200px;
  background-color: salmon;
  margin-inline: 10px;
  border: 10px solid green;
}
```

> Recuerda: **margin → border → padding → content**

### 2. `border-radius` — Esquinas Redondeadas

```css
/* Un valor: todas las esquinas iguales */
.caja { border-radius: 10px; }

/* Cuatro valores: top-left | top-right | bottom-right | bottom-left */
.caja { border-radius: 150px 25px 100px 10px; }
```

#### Crear un Círculo

```css
.circle {
  width: 200px;
  height: 200px;
  background-color: blue;
  border-radius: 100%; /* o 50% */
}
```

#### Crear una Píldora (Pill)

```css
.pill {
  width: 200px;
  height: 100px;
  background-color: red;
  border-radius: 50px; /* = height / 2 */
}
```

#### Crear un Triángulo con CSS

```css
.triangle {
  width: 0;
  height: 0;
  background-color: transparent;
  border: 100px solid transparent;
  border-top: 0 solid transparent;
  border-bottom: 170px solid red;
}
```

#### Ejemplo Completo

```css
.figure {
  height: 200px;
  width: 200px;
  background-color: red;
  display: inline-block;
  border: 10px solid green;
  margin-inline: 10px;
}
.circle { background-color: blue; border-radius: 100%; }
.pill { height: 100px; border-radius: 50px; }
.engendro {
  background-color: violet;
  border-color: aqua;
  border-radius: 150px 25px 100px 10px;
}
```

### 3. `box-shadow` — Sombras de Caja

```css
selector {
  box-shadow: offset-x offset-y blur spread color;
}
```

| Parámetro | Descripción | Ejemplo |
| --- | --- | --- |
| `offset-x` | Desplazamiento horizontal | `10px` |
| `offset-y` | Desplazamiento vertical | `10px` |
| `blur` | Radio de difuminado | `10px` |
| `spread` | Expansión de la sombra | `-10px` |
| `color` | Color de la sombra | `black` |
| `inset` | Sombra interior | `inset` |

#### Ejemplos

```css
/* Sombra simple */
.caja { box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3); }

/* Sin desplazamiento: difuminada alrededor */
.caja { box-shadow: 0px 0px 15px black; }

/* Sombra interior */
.caja { box-shadow: 0px 0px 10px 0px black inset; }

/* Múltiples sombras */
.caja {
  box-shadow:
    10px 10px 10px -10px rgb(128, 5, 243),
    -10px -10px 10px -10px rgb(49, 192, 27),
    0px 0px 10px 0px black inset;
}
```

#### Casos de uso comunes

```css
/* Tarjeta elevada */
.card { box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
.card:hover { box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); }

/* Efecto glow */
.glow { box-shadow: 0 0 20px rgba(66, 135, 245, 0.8); }

/* Botón 3D */
.boton { box-shadow: 0 4px 0 #1a56db; }
.boton:active { box-shadow: none; transform: translateY(4px); }
```

### 4. `height: 100vh` vs `height: 100%` vs `height: 100dvh`

#### `height: 100%` — Relativo al padre

```css
/* Para que 100% funcione, todos los padres deben tener altura */
html, body, main, section { height: 100%; }
```

#### `height: 100vh` — Viewport Height

```css
/* Ocupa toda la pantalla independientemente del padre */
.hero { height: 100vh; }
```

#### `height: 100dvh` — Dynamic Viewport Height

Resuelve el problema de las barras de dirección en móviles que aparecen/desaparecen.

| Unidad | Descripción |
| --- | --- |
| `vh` | Alto del viewport (puede incluir la barra de URL) |
| `dvh` | Alto dinámico del viewport (se adapta a la barra de URL) |
| `svh` | Alto más pequeño del viewport (con barra visible) |
| `lvh` | Alto más grande del viewport (con barra oculta) |

```css
/* Recomendado para pantallas completas */
.hero {
  height: 100vh;
  height: 100dvh; /* sobreescribe si el navegador lo soporta */
}
```

### 5. `cursor` — Control del Cursor del Ratón

```css
selector {
  cursor: tipo-de-cursor;
}
```

**Valores más comunes:**

| Valor | Descripción |
| --- | --- |
| `default` | Cursor por defecto (flecha) |
| `pointer` | Mano con dedo índice (elemento clickable) |
| `text` | Cursor de texto (I-beam) |
| `crosshair` | Cruz |
| `move` | Cruz con flechas (indica que se puede mover) |
| `grab` / `grabbing` | Mano abierta / cerrada |
| `not-allowed` | Círculo con barra (acción no permitida) |
| `wait` | Reloj o spinner (indica carga) |
| `none` | Cursor invisible |

```css
button, a { cursor: pointer; }

.deshabilitado {
  cursor: not-allowed;
  opacity: 0.5;
}

.arrastrable { cursor: grab; }
.arrastrable:active { cursor: grabbing; }
```

#### Cursor personalizado con imagen

```css
.seccion-especial {
  cursor: url("./ufo.svg") 10 10, pointer;
}
```

> **Importante:** Incluye siempre un cursor de fallback (`pointer`, `default`, etc.) después de la URL por si la imagen no carga.
