---
title: "Sesión 10 - Corrección de la Actividad MWC"
section: "CSS"
order: 10
description: "position: fixed, variables CSS, pseudo-clases y backdrop-filter"
---

# Sesión 10 - Corrección de la Actividad MWC

<!-- **Fecha:** 4 de Marzo de 2026 -->

## Contenidos de la Sesión

Esta sesión se dedicó a la **corrección y revisión de la actividad MWC** de la sesión anterior (session09). Se recogieron los trabajos entregados, se mostraron algunos ejemplos de clase y se comentaron estrategias para mejorar la implementación y dominar la maquetación.

Se trabajó sobre dos ejemplos reales entregados por alumnos:

| Código original (from)                                                                                         | Código mejorado (to)                                                                                       |
| -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| [`example-1/from/`](https://github.com/yurigo/PMI-2526/tree/master/sessions/session10/examples/example-1/from) | [`example-1/to/`](https://github.com/yurigo/PMI-2526/tree/master/sessions/session10/examples/example-1/to) |
| [`example-2/from/`](https://github.com/yurigo/PMI-2526/tree/master/sessions/session10/examples/example-2/from) | [`example-2/to/`](https://github.com/yurigo/PMI-2526/tree/master/sessions/session10/examples/example-2/to) |

Se fue modificando el código de ambos ejemplos en directo, explicando las decisiones de maquetación y las posibles mejoras. Los temas principales fueron: **Flexbox**, **Box Model**, **`position: fixed`**, **variables CSS** y las **pseudo-clases** `:nth-child()`, `:first-child` y `:last-child`.

---

### 1. `position: fixed` — Cabecera fija en pantalla

`position: fixed` saca al elemento del flujo normal del documento y lo posiciona **relativo a la ventana del navegador**. El elemento permanece visible aunque el usuario haga scroll.

```css
header {
  position: fixed;
  top: 0;
  width: 100%;
}
```

> [!IMPORTANT]
> Al fijar el `header` con `position: fixed`, este deja de ocupar espacio en el flujo del documento. Es necesario añadir un margen superior al contenido siguiente para que no quede oculto bajo la cabecera.

```css
main {
  margin-block: 100px; /* compensa la altura del header fijo */
}
```

| Valor      | Descripción                                                         |
| ---------- | ------------------------------------------------------------------- |
| `static`   | Posicionamiento normal (por defecto)                                |
| `relative` | Se desplaza relativo a su posición original, sin salir del flujo    |
| `absolute` | Se posiciona relativo al ancestro posicionado más cercano           |
| `fixed`    | Se posiciona relativo a la ventana; no se mueve con el scroll       |
| `sticky`   | Se comporta como `relative` hasta que llega a un umbral, luego fija |

Propiedades que trabajan junto con `position` (excepto `static`):

- `top`, `right`, `bottom`, `left` — desplazamiento desde cada borde
- `z-index` — capas de apilamiento (valores más altos aparecen por encima)

---

### 2. Variables CSS (`custom properties`)

Las **variables CSS** permiten definir valores reutilizables en toda la hoja de estilos. Se declaran con el prefijo `--` dentro de un selector (normalmente `:root` para que sean globales) y se usan con la función `var()`.

```css
:root {
  --color-primario: rgba(44, 44, 45, 0.252);
  --color-de-fondo: rgb(243, 243, 243);
}

body {
  background-color: var(--color-de-fondo);
}

header {
  background-color: var(--color-primario);
}

button {
  background-color: var(--color-primario);
}
```

**Ventajas:**

- Cambiar el valor de la variable lo actualiza en todos los lugares donde se usa.
- Facilita la creación de temas (modo oscuro/claro).
- Mejora la legibilidad del código al dar nombre semántico a los valores.

> [!NOTE]
> Las variables CSS son sensibles a mayúsculas/minúsculas: `--Color-Primario` y `--color-primario` son variables diferentes.

---

### 3. `backdrop-filter` — Efecto de desenfoque

La propiedad `backdrop-filter` aplica efectos visuales (como desenfoque) al área **detrás** de un elemento. Es ideal para crear cabeceras translúcidas con efecto "cristal esmerilado".

```css
header {
  position: fixed;
  background-color: rgba(44, 44, 45, 0.252); /* fondo semitransparente */
  backdrop-filter: blur(25px); /* desenfoca lo que hay detrás */
}
```

> [!TIP]
> Para que `backdrop-filter` sea visible, el fondo del elemento debe ser **semitransparente** (usar `rgba` o `hsla` con opacidad < 1).

---

### 4. Pseudo-clases estructurales: `:nth-child()`, `:first-child`, `:last-child`

Las **pseudo-clases estructurales** permiten seleccionar elementos según su posición dentro del padre, sin necesidad de añadir clases extra en el HTML.

#### `:first-child` y `:last-child`

Seleccionan el primer y el último hijo de un contenedor, respectivamente.

```css
/* el primer elemento de la lista sin borde superior */
li:first-child {
  border-top: none;
}

/* el último elemento sin borde inferior */
li:last-child {
  border-bottom: none;
}
```

#### `:nth-child(n)`

Permite seleccionar elementos según una fórmula. El parámetro puede ser:

| Expresión          | Selecciona                                    |
| ------------------ | --------------------------------------------- |
| `:nth-child(1)`    | El primer elemento (igual que `:first-child`) |
| `:nth-child(2)`    | El segundo elemento                           |
| `:nth-child(2n)`   | Los elementos pares (2, 4, 6…)                |
| `:nth-child(2n+1)` | Los elementos impares (1, 3, 5…)              |
| `:nth-child(odd)`  | Los elementos impares (equivalente a `2n+1`)  |
| `:nth-child(even)` | Los elementos pares (equivalente a `2n`)      |
| `:nth-child(-n+3)` | Los tres primeros elementos                   |

**Ejemplo del ejemplo-1 de la sesión — filas de tabla con colores alternos (zebra stripes):**

```css
tr:nth-child(2n) {
  background-color: rgb(219, 219, 219); /* filas pares con fondo gris */
}
```

**Ejemplo del ejemplo-1 de la sesión — destacar las dos primeras tarjetas de ponentes:**

```css
.gente > div:nth-child(1),
.gente > div:nth-child(2) {
  border: 2px solid gold;
  background-color: rgb(251, 248, 225);
  outline: 4px dashed gold;
  outline-offset: 5px;
  box-shadow: 0 0 30px -5px gold;
}
```

---

### 5. `outline` y `outline-offset`

`outline` es similar a `border` pero **no ocupa espacio** en el box model; se dibuja por fuera del borde sin afectar al layout. `outline-offset` controla la separación entre el borde del elemento y el contorno.

```css
.destacado {
  outline: 4px dashed gold;
  outline-offset: 5px; /* espacio entre el borde y el contorno */
}
```

> [!NOTE]
> A diferencia de `border`, `outline` no tiene propiedades independientes para cada lado (`outline-top`, etc.). Se aplica de forma uniforme alrededor del elemento.

---

### 6. `object-position` — Controlar el recorte de imágenes

Cuando se usa `object-fit: cover`, la imagen se recorta para llenar el contenedor. `object-position` permite indicar qué parte de la imagen debe quedar visible.

```css
.gente img {
  width: 100%;
  height: 234px;
  object-fit: cover;
  object-position: top; /* muestra la parte superior de la imagen */
}
```

| Valor              | Descripción                            |
| ------------------ | -------------------------------------- |
| `center` (defecto) | Centra la imagen en el recorte         |
| `top`              | Muestra la parte superior              |
| `bottom`           | Muestra la parte inferior              |
| `left`, `right`    | Desplaza la imagen a izquierda/derecha |
| `50% 20%`          | Posición exacta en X e Y               |

---

### 7. `overflow: hidden` — Recorte de contenido desbordado

`overflow: hidden` oculta cualquier parte del contenido que sobresalga de los límites del elemento. Es muy útil para que las imágenes no rompan el `border-radius` de las tarjetas.

```css
.gente > div {
  border-radius: 6px;
  overflow: hidden; /* la imagen no sobresale de las esquinas redondeadas */
}
```

---

### 8. Repaso de Flexbox y mejoras en el layout

Durante la corrección se revisaron varias estrategias de Flexbox aplicadas a los ejemplos:

#### Shorthand `flex` en los elementos del hero

```css
.hero > * {
  flex: 1 1 50%; /* crece, se encoge, tamaño base del 50% */
}
```

Esto es equivalente a:

```css
.hero > * {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 50%;
}
```

#### `align-self` para posicionar el botón

```css
.herotext {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-start;
}

button {
  align-self: flex-end; /* el botón se alinea al final del eje secundario */
}
```

#### Distribución del footer con `flex-grow`

```css
.footer {
  display: flex;
  gap: 1em;
}

.footer > * {
  flex-grow: 1;
  flex-basis: 33%; /* cada columna ocupa un tercio */
}
```

#### Agenda con dos columnas flexibles

```css
.agenda {
  display: flex;
  border: 1px solid rgb(200, 200, 200);
}

.agenda-times {
  flex: 1; /* columna estrecha */
  border-right: 1px solid rgb(200, 200, 200);
}

.agenda-events {
  flex: 3; /* columna ancha (3 veces la anterior) */
}
```

---

### 9. Estructura de los ejemplos de la sesión

#### Example-1

Versión original entregada por un alumno (`from`) y código mejorado en clase (`to`).

##### from

<iframe src="/examples/session10/example-1/from/index.html" title="Ejemplo Sesión 10 - CSS Flexbox" class="course-iframe"></iframe>

##### to

<iframe src="/examples/session10/example-1/to/index.html" title="Ejemplo Sesión 10 - CSS Flexbox" class="course-iframe"></iframe>

```
example-1/
├── from/               — Código original del alumno
│   ├── index.html
│   ├── reset.css
│   ├── style.css
│   └── images/
└── to/                 — Código mejorado en clase
    ├── index.html
    ├── reset.css
    ├── style.css
    └── images/
```

Principales mejoras introducidas:

- Cabecera fija con `position: fixed` y efecto `backdrop-filter: blur()`
- Variables CSS con `:root`
- Tarjetas de ponentes con `overflow: hidden` y `object-position: top`
- Primeras dos tarjetas destacadas con `:nth-child(1)` y `:nth-child(2)`
- Filas de tabla con colores alternos con `:nth-child(2n)`
- Botón con `align-self: flex-end`

#### Example-2

##### from

<iframe src="/examples/session10/example-2/from/index.html" title="Ejemplo Sesión 10 - CSS Flexbox" class="course-iframe"></iframe>

##### to

<iframe src="/examples/session10/example-2/to/index.html" title="Ejemplo Sesión 10 - CSS Flexbox" class="course-iframe"></iframe>

```
example-2/
├── from/               — Código original del alumno
│   ├── index.html
│   ├── reset.css
│   ├── style.css
│   └── (imágenes)
└── to/                 — Código mejorado en clase
    ├── index.html
    ├── reset.css
    ├── style.css
    └── img/
```

Principales mejoras introducidas:

- Footer con `ul` en columna (`flex-direction: column`) para los enlaces
- Clase auxiliar `ul.flex-row` para la fila de iconos de redes sociales
- `flex: 0 0 auto` en los `li` para que no se estiren ni encojan

---

## Resumen

En esta sesión hemos repasado y ampliado:

- ✅ Revisión práctica de la actividad MWC con corrección en directo
- ✅ `position: fixed` para fijar la cabecera en la parte superior de la pantalla
- ✅ Variables CSS (`--variable: valor` y `var()`) para centralizar los colores
- ✅ `backdrop-filter: blur()` para crear efectos de cristal esmerilado
- ✅ Pseudo-clases `:first-child`, `:last-child` y `:nth-child(n)` para seleccionar elementos por posición
- ✅ `outline` y `outline-offset` para añadir contornos sin afectar al layout
- ✅ `object-position` para controlar qué parte de una imagen queda visible al recortar
- ✅ `overflow: hidden` para que las imágenes no rompan el `border-radius`
- ✅ Mejoras en la distribución con `flex`, `align-self` y `flex-grow`

**Lo más importante:**

> [!IMPORTANT]
>
> - `position: fixed` requiere compensar el espacio con `margin-block` en el contenido siguiente
> - Las variables CSS se declaran en `:root` con `--nombre: valor` y se usan con `var(--nombre)`
> - `:nth-child(2n)` selecciona los elementos pares (ideal para zebra stripes en tablas)
> - `outline` no afecta al box model, al contrario que `border`
> - `object-position` sólo tiene efecto cuando se usa junto con `object-fit`

## Recursos Adicionales

- [MDN - position](https://developer.mozilla.org/es/docs/Web/CSS/position)
- [MDN - Using CSS custom properties (variables)](https://developer.mozilla.org/es/docs/Web/CSS/Using_CSS_custom_properties)
- [MDN - backdrop-filter](https://developer.mozilla.org/es/docs/Web/CSS/backdrop-filter)
- [MDN - :nth-child()](https://developer.mozilla.org/es/docs/Web/CSS/:nth-child)
- [MDN - :first-child](https://developer.mozilla.org/es/docs/Web/CSS/:first-child)
- [MDN - :last-child](https://developer.mozilla.org/es/docs/Web/CSS/:last-child)
- [MDN - outline](https://developer.mozilla.org/es/docs/Web/CSS/outline)
- [MDN - object-position](https://developer.mozilla.org/es/docs/Web/CSS/object-position)
- [MDN - overflow](https://developer.mozilla.org/es/docs/Web/CSS/overflow)
- [CSS Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
