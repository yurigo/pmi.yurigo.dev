---
title: "Sesión 07 - CSS: border-radius, box-shadow y height"
section: "CSS"
order: 7
description: "Esquinas redondeadas, sombras y unidades de altura"
---

# Sesión 07 - CSS: border-radius, box-shadow y height

<!-- **Fecha:** 24 de Febrero de 2026 -->

## Contenidos de la Sesión

### 1. Repaso de Estilos y Selectores CSS

En esta sesión repasamos las propiedades de CSS vistas en sesiones anteriores, especialmente las relacionadas con el **Box Model**:

- **`margin`**: Espacio externo que separa el elemento de otros elementos
- **`border`**: Línea visible que rodea el padding y el contenido

**Ejemplo de repaso:**

```css
.caja {
  width: 200px;
  height: 200px;
  background-color: salmon;

  /* Margin */
  margin-inline: 10px;

  /* Border shorthand: ancho estilo color */
  border: 10px solid green;
}
```

> [!TIP]
> Recuerda que en el Box Model el orden de las capas de fuera hacia adentro es: **margin → border → padding → content**.

---

### 2. `border-radius` - Esquinas Redondeadas

La propiedad `border-radius` permite redondear las esquinas de un elemento, creando formas que van desde ligeramente redondeadas hasta círculos perfectos.

**Sintaxis:**

```css
selector {
  border-radius: valor;
}
```

#### Propiedades individuales por esquina

```css
.caja {
  border-top-left-radius: 10px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 100px;
  border-bottom-left-radius: 5px;
}
```

#### Propiedad shorthand `border-radius`

```css
/* Un valor: todas las esquinas iguales */
.caja {
  border-radius: 10px;
}

/* Dos valores: top-left & bottom-right | top-right & bottom-left */
.caja {
  border-radius: 10px 30px;
}

/* Cuatro valores: top-left | top-right | bottom-right | bottom-left */
.caja {
  border-radius: 150px 25px 100px 10px;
}
```

#### Casos prácticos

##### Crear un Círculo

Para crear un círculo perfecto, el elemento debe ser cuadrado y tener `border-radius: 50%` o `border-radius: 100%`.

```css
.circle {
  width: 200px;
  height: 200px;
  background-color: blue;
  border-radius: 100%; /* o 50% */
}
```

##### Crear una Píldora (Pill)

Una píldora se consigue con un elemento rectangular y un `border-radius` igual a la mitad de su altura.

```css
.pill {
  width: 200px;
  height: 100px;
  background-color: red;
  border-radius: 50px; /* = height / 2 */
}
```

##### Crear un Triángulo

Con `border` podemos crear triángulos sin usar imágenes:

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

**Cómo funciona:**

Al hacer el elemento `0×0` y darle bordes grandes de color transparente, y solo uno de los bordes con color visible, obtenemos un triángulo.

##### Formas creativas

Combinando diferentes valores de `border-radius` podemos obtener formas orgánicas:

```css
.forma-organica {
  width: 200px;
  height: 200px;
  background-color: violet;
  border: 10px solid aqua;
  border-radius: 150px 25px 100px 10px;
}
```

**Ejemplo completo (de los ejemplos de la sesión):**

```html
<div class="figure circle"></div>
<div class="figure pill"></div>
<div class="figure engendro"></div>
```

```css
.figure {
  height: 200px;
  width: 200px;
  background-color: red;
  display: inline-block;
  border: 10px solid green;
  margin-inline: 10px;
}

.circle {
  background-color: blue;
  border-radius: 100%;
}

.pill {
  height: 100px;
  border-radius: 50px;
}

.engendro {
  background-color: violet;
  border-color: aqua;
  border-radius: 150px 25px 100px 10px;
}
```

---

### 3. `box-shadow` - Sombras de Caja

La propiedad `box-shadow` añade una o más sombras a un elemento.

**Sintaxis:**

```css
selector {
  box-shadow: offset-x offset-y blur spread color;
}
```

**Parámetros:**

| Parámetro  | Descripción                                                         | Ejemplo |
| ---------- | ------------------------------------------------------------------- | ------- |
| `offset-x` | Desplazamiento horizontal. Positivo = derecha, negativo = izquierda | `10px`  |
| `offset-y` | Desplazamiento vertical. Positivo = abajo, negativo = arriba        | `10px`  |
| `blur`     | Radio de difuminado. Mayor valor = sombra más suave                 | `10px`  |
| `spread`   | Expansión de la sombra. Positivo = crece, negativo = encoge         | `-10px` |
| `color`    | Color de la sombra (acepta rgba, hsla, etc.)                        | `black` |
| `inset`    | Palabra clave opcional para sombra interior                         | `inset` |

#### Ejemplos básicos

```css
/* Sombra simple */
.caja {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
}

/* Sin desplazamiento: sombra difuminada alrededor */
.caja {
  box-shadow: 0px 0px 15px black;
}

/* Sombra interior (inset) */
.caja {
  box-shadow: 0px 0px 10px 0px black inset;
}
```

#### Múltiples sombras

Se pueden añadir múltiples sombras separadas por comas:

```css
.caja {
  box-shadow:
    10px 10px 10px -10px rgb(128, 5, 243),
    -10px -10px 10px -10px rgb(49, 192, 27),
    -3px 3px 3px 0px rgb(231, 143, 19),
    0px 0px 10px 0px black inset;
}
```

Las sombras se renderizan de arriba a abajo en el código: la primera declarada queda por encima.

#### Sombra exterior vs. sombra interior (`inset`)

```css
/* Sombra exterior (por defecto): la sombra sale fuera del elemento */
.exterior {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}

/* Sombra interior: la sombra se proyecta dentro del elemento */
.interior {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5) inset;
}
```

#### Casos de uso comunes

```css
/* Efecto de tarjeta elevada */
.card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Efecto hover elevado */
.card:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* Botón con efecto 3D */
.boton {
  box-shadow: 0 4px 0 #1a56db;
}

.boton:active {
  box-shadow: none;
  transform: translateY(4px);
}

/* Glow (efecto de brillo) */
.glow {
  box-shadow: 0 0 20px rgba(66, 135, 245, 0.8);
}
```

> [!NOTE]
> Puedes experimentar con `box-shadow` visualmente en herramientas como [CSS Box Shadow Generator](https://cssgenerator.org/box-shadow-css-generator.html).

---

### 4. `height: 100vh` vs `height: 100%` vs `height: 100dvh`

Esta es una de las confusiones más comunes en CSS. Entender cuándo usar cada unidad es clave para construir layouts de pantalla completa.

#### `height: 100%`

`100%` es **relativo al elemento padre**. Para que funcione, **todos los ancestros** deben tener altura definida.

**Ejemplo — el problema:**

```css
/* ❌ Esto NO funciona porque el padre no tiene altura definida */
section {
  height: 100%; /* 100% de nada = 0 */
}
```

**Ejemplo — la solución correcta con `%`:**

```css
/* ✅ Para que 100% funcione, todos los padres deben tener altura */
html {
  height: 100%;
}

body {
  height: 100%;
}

main {
  height: 100%;
}

section {
  height: 100%; /* Ahora sí = 100% del main = 100% del body = 100% del html */
}
```

#### `height: 100vh`

`100vh` equivale al **100% del alto del viewport** (la ventana del navegador), independientemente del padre.

```css
/* ✅ Esto SÍ ocupa toda la pantalla sin necesidad de definir altura en los padres */
section {
  height: 100vh;
}
```

**¿Cuándo usarlo?**

- Secciones hero (splash) de pantalla completa
- Páginas de presentación que ocupan toda la ventana
- Sidebars o paneles laterales fijos

#### `height: 100dvh` (Dynamic Viewport Height)

`100dvh` es una unidad **moderna** que resuelve un problema específico en **móviles**: en algunos navegadores móviles (como Chrome en Android o Safari en iOS), la barra de dirección se muestra y oculta al hacer scroll, cambiando el alto visible de la pantalla.

| Unidad   | Descripción                               | Problema                         |
| -------- | ----------------------------------------- | -------------------------------- |
| `100vh`  | 100% del viewport inicial                 | Puede causar scroll en móviles   |
| `100dvh` | 100% del viewport dinámico (actualizado)  | Más correcto en móviles modernos |
| `100svh` | 100% del viewport pequeño (barra visible) | El más pequeño posible           |
| `100lvh` | 100% del viewport grande (barra oculta)   | El más grande posible            |

```css
/* Moderno y recomendado para pantallas completas en móvil */
section {
  height: 100dvh;
}
```

**Ejemplo práctico del ejemplo de la sesión:**

<a href="https://github.com/yurigo/PMI-2526/tree/master/sessions/session07/examples/session07" target="_blank">Aquí</a> puedes ver el ejemplo práctico trabajado en esta sesión.

<iframe src="/examples/session07/index.html" title="Ejemplo Sesión 07 - Unidades de Medida" class="course-iframe"></iframe>

```css
section {
  height: 100dvh;
  background-image: url("https://placecats.com/600/600");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}
```

```html
<main>
  <section>
    <h1>splash</h1>
  </section>
  <section class="lados">
    <h2>sección 2</h2>
  </section>
  <section>
    <h2>sección 3</h2>
  </section>
</main>
```

> [!TIP]
> Para proyectos nuevos, usa `100dvh` en lugar de `100vh` para mejor compatibilidad con navegadores móviles.

---

### 5. `cursor` - Control del Cursor del Ratón

La propiedad `cursor` permite cambiar el aspecto del cursor del ratón cuando el usuario pasa por encima de un elemento.

**Sintaxis:**

```css
selector {
  cursor: tipo-de-cursor;
}
```

#### Valores más comunes

| Valor         | Descripción                                      |
| ------------- | ------------------------------------------------ |
| `default`     | Cursor por defecto (flecha)                      |
| `pointer`     | Mano con dedo índice (indica elemento clickable) |
| `text`        | Cursor de texto (I-beam)                         |
| `crosshair`   | Cruz (útil para herramientas de dibujo)          |
| `move`        | Cruz con flechas (indica que se puede mover)     |
| `grab`        | Mano abierta                                     |
| `grabbing`    | Mano cerrada                                     |
| `not-allowed` | Círculo con barra (indica acción no permitida)   |
| `wait`        | Reloj o spinner (indica carga)                   |
| `zoom-in`     | Lupa con "+"                                     |
| `zoom-out`    | Lupa con "-"                                     |
| `none`        | Cursor invisible                                 |

#### Ejemplos básicos

```css
/* El cursor de mano en botones y enlaces */
button,
a {
  cursor: pointer;
}

/* Indica que algo no está disponible */
.deshabilitado {
  cursor: not-allowed;
  opacity: 0.5;
}

/* Para elementos arrastrables */
.arrastrable {
  cursor: grab;
}

.arrastrable:active {
  cursor: grabbing;
}
```

#### Cursor personalizado con imagen

Podemos usar cualquier imagen como cursor personalizado.

**Sintaxis:**

```css
selector {
  cursor:
    url("ruta/imagen.png") hotspot-x hotspot-y,
    fallback;
}
```

- **`ruta/imagen.png`**: Ruta a la imagen del cursor (se recomienda PNG o SVG)
- **`hotspot-x` y `hotspot-y`**: Coordenadas del punto activo del cursor (en píxeles)
- **`fallback`**: Cursor estándar a usar si la imagen no carga

```css
/* Cursor personalizado con imagen SVG */
.seccion-especial {
  cursor:
    url("./ufo.svg") 10 10,
    pointer;
}
```

**Ejemplo práctico del ejemplo de la sesión:**

```css
section.lados {
  background-color: salmon;
  cursor:
    url("./ufo.svg") 10 10,
    pointer;
}
```

> [!TIP]
> Las imágenes de cursor personalizadas deben tener un tamaño máximo de **32×32 píxeles** por compatibilidad con navegadores. Para SVG puede haber variaciones según el navegador.

> [!IMPORTANT]
> **SIEMPRE** incluye un cursor de fallback (`pointer`, `default`, etc.) después de la URL personalizada, por si la imagen no carga.

---

## Resumen

En esta sesión hemos aprendido:

- ✅ Repaso del Box Model: `margin` y `border`
- ✅ `border-radius` para redondear esquinas:
  - Propiedades individuales por esquina
  - Shorthand con 1, 2 o 4 valores
  - Crear círculos (`border-radius: 50%`)
  - Crear píldoras (half of height)
  - Formas orgánicas con valores distintos por esquina
- ✅ `box-shadow` para añadir sombras:
  - Sintaxis: `offset-x offset-y blur spread color`
  - Sombra exterior vs. interior (`inset`)
  - Múltiples sombras con comas
- ✅ Diferencia entre `height: 100vh` y `height: 100%`:
  - `100%` es relativo al padre (requiere que todos los ancestros tengan altura)
  - `100vh` es relativo al viewport (ventana del navegador)
  - `100dvh` es la versión moderna y dinámica recomendada para móviles
- ✅ `cursor` para cambiar el cursor del ratón:
  - Valores predefinidos: `pointer`, `grab`, `not-allowed`, etc.
  - Cursores personalizados con imágenes

**Lo más importante:**

> [!IMPORTANT]
>
> - Para crear un **círculo**: elemento cuadrado + `border-radius: 50%`
> - Para crear una **píldora**: `border-radius` igual a la mitad de la altura
> - En `box-shadow` el orden es: `offset-x offset-y blur spread color`
> - Usar `100dvh` en lugar de `100vh` para mejor soporte en móviles
> - **SIEMPRE** incluir un cursor de fallback al usar cursores personalizados

## Recursos Adicionales

### border-radius

- [MDN - border-radius](https://developer.mozilla.org/es/docs/Web/CSS/border-radius)
- [CSS border-radius Generator](https://9elements.github.io/fancy-border-radius/) - Generador visual de formas con border-radius
- [CSS Tricks - border-radius](https://css-tricks.com/almanac/properties/b/border-radius/)

### box-shadow

- [MDN - box-shadow](https://developer.mozilla.org/es/docs/Web/CSS/box-shadow)
- [Box Shadow CSS Generator](https://cssgenerator.org/box-shadow-css-generator.html) - Generador visual de sombras
- [CSS Tricks - box-shadow](https://css-tricks.com/almanac/properties/b/box-shadow/)
- [Smooth Shadow Generator](https://shadows.brumm.af/) - Generador de sombras suaves con múltiples capas

### height y viewport units

- [MDN - height](https://developer.mozilla.org/es/docs/Web/CSS/height)
- [MDN - Viewport-percentage lengths (dvh, svh, lvh)](https://developer.mozilla.org/en-US/docs/Web/CSS/length#viewport-percentage_lengths)
- [CSS Tricks - The Large, Small, and Dynamic Viewport Units](https://css-tricks.com/the-large-small-and-dynamic-viewport-units/)

### cursor

- [MDN - cursor](https://developer.mozilla.org/es/docs/Web/CSS/cursor)
- [CSS Tricks - cursor](https://css-tricks.com/almanac/properties/c/cursor/)
