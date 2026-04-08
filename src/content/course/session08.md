---
title: "Sesión 08 - CSS Flexbox"
section: "CSS"
order: 8
description: "Modelo de diseño flexible para layouts modernos"
---

# Sesión 08 - CSS Flexbox

<!-- **Fecha:** 25 de Febrero de 2026 -->

## Contenidos de la Sesión

### 1. Introducción a Flexbox

**Flexbox** (Flexible Box Layout) es un modelo de diseño CSS que permite distribuir y alinear elementos dentro de un contenedor de forma eficiente, incluso cuando su tamaño es desconocido o dinámico.

Para activar Flexbox en un contenedor basta con añadir:

```css
.contenedor {
  display: flex;
}
```

A partir de ese momento, los **hijos directos** del contenedor pasan a ser **flex items** y se organizan según las propiedades del contenedor.

> [!IMPORTANT]
>
> - [CSS Tricks - CSS Flexbox Layout Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
> - [Josh Comeau - An Interactive Guide to Flexbox](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/)
> - Practica con el juego: [Flexbox Froggy](https://flexboxfroggy.com/#es)

---

### 2. Conceptos básicos: Flex Container y Flex Items

Cuando aplicas `display: flex` a un elemento:

- El elemento en sí se convierte en el **flex container** (contenedor).
- Sus hijos directos se convierten en **flex items** (elementos flex).

```html
<section class="contenedor">
  <!-- estos son los flex items -->
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</section>
```

```css
.contenedor {
  display: flex; /* activa flexbox */
}
```

Por defecto, los flex items se colocan en una fila horizontal (`flex-direction: row`) y no se envuelven a la siguiente línea.

---

### 3. `flex-direction` - Dirección del eje principal

La propiedad `flex-direction` define en qué dirección se colocan los flex items.

```css
.contenedor {
  flex-direction: row; /* valor por defecto */
}
```

| Valor            | Descripción                                      |
| ---------------- | ------------------------------------------------ |
| `row`            | Fila horizontal de izquierda a derecha (defecto) |
| `row-reverse`    | Fila horizontal de derecha a izquierda           |
| `column`         | Columna vertical de arriba a abajo               |
| `column-reverse` | Columna vertical de abajo a arriba               |

**Ejemplo del ejercicio de la sesión:**

```css
/* header con ítems en fila */
header {
  display: flex;
  flex-direction: row; /* valor por defecto */
}

/* .cachito con ítems en columna */
.cachito {
  display: flex;
  flex-direction: column;
  align-items: center;
}
```

---

### 4. `flex-wrap` - Envolver elementos

Por defecto, Flexbox intenta meter todos los flex items en una sola línea. Con `flex-wrap` podemos permitir que se envuelvan a la siguiente línea.

```css
.contenedor {
  flex-wrap: nowrap; /* valor por defecto: no envuelve */
  /* flex-wrap: wrap;         envuelve hacia abajo */
  /* flex-wrap: wrap-reverse; envuelve hacia arriba */
}
```

| Valor          | Descripción                                     |
| -------------- | ----------------------------------------------- |
| `nowrap`       | Todos los items en una sola línea (defecto)     |
| `wrap`         | Los items se envuelven hacia la siguiente línea |
| `wrap-reverse` | Los items se envuelven hacia la línea anterior  |

**Ejemplo del ejercicio (pokedex):**

```css
section.pokedex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; /* las tarjetas se envuelven a la siguiente línea */
  gap: 10px;
}
```

---

### 5. `justify-content` - Alineación en el eje principal

`justify-content` controla cómo se distribuyen los flex items a lo largo del **eje principal** (horizontal si `flex-direction: row`, vertical si `flex-direction: column`).

```css
.contenedor {
  justify-content: flex-start; /* valor por defecto */
}
```

| Valor           | Descripción                                            |
| --------------- | ------------------------------------------------------ |
| `flex-start`    | Los items se agrupan al inicio (defecto)               |
| `flex-end`      | Los items se agrupan al final                          |
| `center`        | Los items se centran                                   |
| `space-between` | Espacio igual entre items, sin espacio en los extremos |
| `space-around`  | Espacio igual alrededor de cada item                   |
| `space-evenly`  | Espacio idéntico entre items y en los extremos         |

**Ejemplo del ejercicio de la sesión:**

```css
/* pokedex: items al inicio */
section.pokedex {
  display: flex;
  justify-content: flex-start;
}

/* header: items separados con espacio entre ellos */
header {
  display: flex;
  justify-content: space-between;
}
```

---

### 6. `align-items` - Alineación en el eje secundario

`align-items` controla cómo se alinean los flex items a lo largo del **eje secundario** (perpendicular al eje principal).

```css
.contenedor {
  align-items: stretch; /* valor por defecto */
}
```

| Valor        | Descripción                                            |
| ------------ | ------------------------------------------------------ |
| `stretch`    | Los items se estiran para ocupar todo el eje (defecto) |
| `flex-start` | Los items se alinean al inicio del eje secundario      |
| `flex-end`   | Los items se alinean al final del eje secundario       |
| `center`     | Los items se centran en el eje secundario              |
| `baseline`   | Los items se alinean según su línea base de texto      |

**Ejemplo del ejercicio de la sesión:**

```css
/* pokedex: items alineados al final del eje secundario */
section.pokedex {
  display: flex;
  align-items: flex-end;
}

/* header y .cachito: items centrados */
header {
  display: flex;
  align-items: center;
}

.cachito {
  display: flex;
  flex-direction: column;
  align-items: center;
}
```

---

### 7. `align-content` - Alineación de las líneas

Cuando hay varias líneas (con `flex-wrap: wrap`), `align-content` controla cómo se distribuyen esas líneas en el eje secundario.

> [!NOTE]
> `align-content` solo tiene efecto cuando hay **más de una línea** de flex items (es decir, cuando se usa `flex-wrap: wrap` o `wrap-reverse`).

```css
.contenedor {
  flex-wrap: wrap;
  align-content: center; /* centra las líneas en el eje secundario */
}
```

| Valor           | Descripción                                             |
| --------------- | ------------------------------------------------------- |
| `normal`        | Valor por defecto                                       |
| `flex-start`    | Las líneas se agrupan al inicio                         |
| `flex-end`      | Las líneas se agrupan al final                          |
| `center`        | Las líneas se centran                                   |
| `stretch`       | Las líneas se estiran para ocupar todo el espacio       |
| `space-between` | Espacio igual entre líneas, sin espacio en los extremos |
| `space-around`  | Espacio igual alrededor de cada línea                   |
| `space-evenly`  | Espacio idéntico entre líneas y en los extremos         |

---

### 8. `gap` - Espacio entre elementos

La propiedad `gap` añade espacio entre los flex items **sin afectar a los bordes del contenedor**.

```css
.contenedor {
  display: flex;
  gap: 10px; /* espacio igual en filas y columnas */

  /* o de forma individual: */
  row-gap: 10px; /* espacio entre filas */
  column-gap: 20px; /* espacio entre columnas */
}
```

> [!TIP]
> `gap` es más cómodo que usar `margin` en los items porque no genera espacio extra en los bordes.

**Ejemplo del ejercicio de la sesión:**

```css
section.pokedex {
  display: flex;
  flex-wrap: wrap;
  gap: 10px; /* espacio entre tarjetas */
}
```

---

### 9. `order` - Orden de los elementos

La propiedad `order` permite cambiar el orden visual de un flex item sin modificar el HTML. El valor por defecto es `0`; valores más bajos aparecen antes.

```css
.item-a {
  order: 2; /* aparece después */
}

.item-b {
  order: 1; /* aparece antes que item-a */
}
```

**Ejemplo del ejercicio de la sesión:**

```css
.pokedex > .pokemon {
  order: 40; /* todos los pokémon normales van al final */
}

.pokemon.superrebelde {
  order: 35; /* aparece antes que los normales */
}
```

---

### 10. `align-self` - Alineación individual

`align-self` permite sobreescribir la alineación de `align-items` para **un flex item concreto**.

```css
.contenedor {
  align-items: flex-start;
}

.item-especial {
  align-self: stretch; /* este item se estira aunque los demás no lo hagan */
}
```

| Valor        | Descripción                                               |
| ------------ | --------------------------------------------------------- |
| `auto`       | Hereda el valor de `align-items` del contenedor (defecto) |
| `flex-start` | Se alinea al inicio del eje secundario                    |
| `flex-end`   | Se alinea al final del eje secundario                     |
| `center`     | Se centra en el eje secundario                            |
| `stretch`    | Se estira para ocupar todo el eje secundario              |
| `baseline`   | Se alinea según la línea base de texto                    |

**Ejemplo del ejercicio de la sesión:**

```css
.pokemon.rebelde {
  align-self: stretch; /* esta tarjeta se estira mientras las demás no */
}
```

---

### 11. Ejemplo completo de la sesión: Pokédex

En la sesión construimos una página de Pokédex usando Flexbox tanto en el header como en las tarjetas.

<iframe src="/examples/session08/index.html" title="Ejemplo Sesión 08 - CSS Flexbox" class="course-iframe"></iframe>

**HTML:**

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
    <div class="card pokemon">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif"
      />
      <h2>Bulbasaur</h2>
    </div>
    <!-- más tarjetas... -->
    <div class="card pokemon superrebelde">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/54.gif"
      />
      <h2>Psyduck</h2>
    </div>
  </section>
</main>
```

**CSS:**

```css
/* Header en fila con espacio entre los elementos */
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 2em;
}

/* .cachito en columna con elementos centrados */
.cachito {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Cuadrícula de tarjetas con flex-wrap */
section.pokedex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-start;
  align-items: flex-end;
}

/* Tarjeta individual */
.pokedex > .pokemon {
  width: 177px;
  padding: 0.5em;
  order: 40;
}

/* Psyduck aparece antes que los demás */
.pokemon.superrebelde {
  order: 35;
}
```

---

## Resumen

En esta sesión hemos aprendido:

- ✅ `display: flex` para activar el modelo Flexbox en un contenedor
- ✅ `flex-direction` para definir la dirección del eje principal (`row`, `column`)
- ✅ `flex-wrap` para permitir que los elementos se envuelvan a la siguiente línea (`wrap`)
- ✅ `justify-content` para distribuir elementos en el eje principal (`flex-start`, `space-between`)
- ✅ `align-items` para alinear elementos en el eje secundario (`center`, `flex-end`)
- ✅ `align-content` para alinear las líneas cuando hay `flex-wrap`
- ✅ `gap` para añadir espacio entre elementos de forma sencilla
- ✅ `order` para cambiar el orden visual de los elementos sin modificar el HTML
- ✅ `align-self` para sobreescribir la alineación de un elemento individual

**Lo más importante:**

> [!IMPORTANT]
>
> - `display: flex` convierte los hijos directos en **flex items**
> - El **eje principal** lo define `flex-direction` (horizontal por defecto)
> - El **eje secundario** es perpendicular al principal
> - `justify-content` actúa sobre el **eje principal**
> - `align-items` actúa sobre el **eje secundario**
> - Usa `gap` en lugar de `margin` para separar flex items

## Recursos Adicionales

- [MDN - Flexbox](https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout/Flexbox)
- [MDN - display: flex](https://developer.mozilla.org/es/docs/Web/CSS/flex)
- [CSS Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Josh Comeau - An Interactive Guide to Flexbox](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/)
- [Flexbox Froggy](https://flexboxfroggy.com/#es) - Juego para practicar Flexbox
