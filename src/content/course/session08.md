---
title: "Sesión 08 - CSS Flexbox"
section: "CSS"
order: 8
description: "Modelo de diseño flexible para layouts modernos"
---

# Sesión 08 - CSS Flexbox

**Fecha:** 25 de Febrero de 2026

## Contenidos de la Sesión

### 1. Introducción a Flexbox

**Flexbox** (Flexible Box Layout) distribuye y alinea elementos dentro de un contenedor de forma eficiente.

```css
.contenedor {
  display: flex;
}
```

**Recursos:**
- [CSS Tricks - CSS Flexbox Layout Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Josh Comeau - An Interactive Guide to Flexbox](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/)
- Practica con: [Flexbox Froggy](https://flexboxfroggy.com/#es)

### 2. Flex Container y Flex Items

```html
<section class="contenedor">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</section>
```

```css
.contenedor { display: flex; }
```

Los hijos directos se convierten en **flex items** y se colocan en fila horizontal por defecto.

### 3. `flex-direction` — Dirección del eje principal

| Valor | Descripción |
| --- | --- |
| `row` | Fila horizontal de izquierda a derecha (defecto) |
| `row-reverse` | Fila horizontal de derecha a izquierda |
| `column` | Columna vertical de arriba a abajo |
| `column-reverse` | Columna vertical de abajo a arriba |

```css
.contenedor { flex-direction: row; }        /* horizontal */
.contenedor { flex-direction: column; }     /* vertical */
```

### 4. `flex-wrap` — Envolver elementos

```css
.contenedor { flex-wrap: nowrap; }   /* una sola línea (defecto) */
.contenedor { flex-wrap: wrap; }     /* envuelve hacia abajo */
.contenedor { flex-wrap: wrap-reverse; } /* envuelve hacia arriba */
```

```css
section.pokedex {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
```

### 5. `justify-content` — Alineación en el eje principal

| Valor | Descripción |
| --- | --- |
| `flex-start` | Agrupados al inicio (defecto) |
| `flex-end` | Agrupados al final |
| `center` | Centrados |
| `space-between` | Espacio igual entre items |
| `space-around` | Espacio igual alrededor de cada item |
| `space-evenly` | Espacio idéntico entre items y extremos |

```css
header { display: flex; justify-content: space-between; }
section { display: flex; justify-content: center; }
```

### 6. `align-items` — Alineación en el eje secundario

| Valor | Descripción |
| --- | --- |
| `stretch` | Se estiran para ocupar todo el eje (defecto) |
| `flex-start` | Alineados al inicio |
| `flex-end` | Alineados al final |
| `center` | Centrados |
| `baseline` | Alineados según línea base de texto |

```css
header { display: flex; align-items: center; }
.cachito { display: flex; flex-direction: column; align-items: center; }
```

### 7. `align-content` — Alineación de las líneas

Solo tiene efecto con `flex-wrap: wrap` y más de una línea.

```css
.contenedor {
  flex-wrap: wrap;
  align-content: center;
}
```

### 8. `gap` — Espacio entre elementos

```css
.contenedor {
  display: flex;
  gap: 10px;         /* igual en filas y columnas */
  row-gap: 10px;     /* solo entre filas */
  column-gap: 20px;  /* solo entre columnas */
}
```

### 9. `order` — Orden visual de los elementos

```css
.item { order: 0; }  /* valor por defecto */
.item-a { order: 1; }  /* va después */
.item-b { order: -1; } /* va antes */
```

### 10. `align-self` — Alineación individual

Sobreescribe `align-items` para un flex item concreto.

```css
.item-especial { align-self: flex-end; }
```

### 11. Ejemplo Completo: Pokédex

```html
<header>
  <img src="054.png" alt="best pokemon ever" />
  <h1>pokedex</h1>
  <div class="cachito">
    <h2>Catch 'em all</h2>
    <h3>pokemon</h3>
  </div>
</header>
<main>
  <section class="pokedex">
    <div class="card pokemon"><!-- pokemon --></div>
    <div class="card pokemon superrebelde"><!-- Psyduck --></div>
  </section>
</main>
```

```css
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 2em;
}

.cachito {
  display: flex;
  flex-direction: column;
  align-items: center;
}

section.pokedex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-start;
  align-items: flex-end;
}

.pokedex > .pokemon {
  width: 177px;
  padding: 0.5em;
  order: 40;
}

.pokemon.superrebelde {
  order: 35; /* Psyduck aparece antes que los demás */
}
```
