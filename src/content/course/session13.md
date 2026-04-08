# Sesión 13 - CSS Positioning

**Fecha:** 17 de Marzo de 2026

## Contenidos de la Sesión

En esta sesión se ha explicado el **posicionamiento en CSS** usando la propiedad `position`. Se han visto todos sus valores posibles y las propiedades de coordenadas (`top`, `right`, `bottom`, `left`) que permiten desplazar los elementos.

Como punto de partida se ha utilizado el template [vanilla-html-template](https://github.com/yurigo/vanilla-html-template), se ha eliminado todo el CSS y se ha construido el resultado final desde cero. El ejemplo resultante se encuentra en la carpeta [`example/`](./example/), concretamente en los archivos [`index.html`](./example/index.html) y [`style.css`](./example/style.css).

---

### 1. La propiedad `position`

Por defecto todos los elementos HTML tienen `position: static`, lo que significa que siguen el flujo normal del documento. Con cualquier otro valor de `position` el elemento puede desplazarse respecto a un punto de referencia usando las propiedades `top`, `right`, `bottom` y `left`.

```css
.elemento {
  position: static;    /* valor por defecto: el elemento sigue el flujo normal */
  position: relative;  /* se desplaza respecto a su posición original */
  position: absolute;  /* se desplaza respecto al ancestro posicionado más cercano */
  position: fixed;     /* se desplaza respecto al viewport y no se mueve al hacer scroll */
  position: sticky;    /* se comporta como relative hasta cruzar un umbral, luego como fixed */
}
```

> [!NOTE]
> Un elemento está **posicionado** cuando su `position` es `relative`, `absolute`, `fixed` o `sticky`. Un elemento con `position: static` **no** está posicionado.

---

### 2. `position: relative`

El elemento mantiene su espacio en el flujo del documento (los elementos adyacentes no se mueven) pero puede desplazarse visualmente respecto a su posición original usando `top`, `right`, `bottom` y `left`.

```css
#about {
  position: relative; /* sirve además como punto de referencia para los hijos absolutos */
}
```

> [!TIP]
> Aunque no se desplace, declarar `position: relative` en un contenedor sirve para convertirlo en el **punto de referencia** de cualquier hijo con `position: absolute`.

---

### 3. `position: absolute`

El elemento **sale del flujo** del documento (deja de ocupar espacio) y se posiciona respecto al **ancestro posicionado más cercano** (el primer ancestro cuyo `position` no sea `static`). Si no hay ninguno, se posiciona respecto al `<body>`.

```css
#about {
  position: relative; /* convierte #about en el punto de referencia */
}

#about > span {
  font-size: 100px;
  position: absolute;
  top: 40%;           /* 40% desde el borde superior de #about */
  left: 40%;          /* 40% desde el borde izquierdo de #about */
  z-index: -1;        /* queda por debajo del texto */
  opacity: 0.6;
  filter: drop-shadow(5px 5px 10px black);
}
```

**Resultado:** el emoji ❤️ se coloca en el interior de la sección `#about`, por detrás del texto gracias a `z-index: -1`.

> [!IMPORTANT]
> Cuando un elemento tiene `position: absolute` ya no ocupa espacio en el flujo: los demás elementos actúan como si no existiese.

---

### 4. `position: fixed`

El elemento sale del flujo y se posiciona respecto al **viewport** (la ventana del navegador). Al hacer scroll, el elemento permanece fijo en la misma posición de la pantalla.

```css
header {
  position: fixed;
  inset: 0 0 auto 0; /* top:0 right:0 bottom:auto left:0 → pegado a la parte superior */
  z-index: 10;       /* aparece por encima del resto del contenido */
  background-color: var(--verde-neon);
}
```

> [!NOTE]
> Como el `header` con `position: fixed` sale del flujo, el contenido de debajo queda tapado por él. Por eso se añade `padding-top` a los elementos que vienen después.

---

### 5. `position: sticky`

El elemento se comporta como `relative` mientras el usuario no ha hecho scroll hasta él, y como `fixed` una vez que cruza el umbral definido por `top`, `right`, `bottom` o `left`. A diferencia de `fixed`, **queda contenido dentro de su elemento padre**.

```css
section > h2 {
  position: sticky;
  top: 75px; /* se queda "pegado" cuando llega a 75px del borde superior del viewport */
  background-color: white;
  padding: 0.5em 0;
}
```

**Resultado:** cada subtítulo `<h2>` de las secciones se queda visible en la parte superior mientras el usuario lee esa sección, y desaparece al entrar la siguiente sección.

| Valor      | Sale del flujo | Referencia              | Se mueve con el scroll |
| ---------- | -------------- | ----------------------- | ---------------------- |
| `static`   | No             | —                       | Sí (flujo normal)      |
| `relative` | No             | Su posición original    | Sí                     |
| `absolute` | Sí             | Ancestro posicionado    | Sí (con el ancestro)   |
| `fixed`    | Sí             | Viewport                | No                     |
| `sticky`   | No             | Su posición original    | Hasta el umbral        |

---

### 6. Propiedades de coordenadas: `top`, `right`, `bottom`, `left`

Estas propiedades indican el desplazamiento desde cada borde respecto al punto de referencia del elemento posicionado. Sólo tienen efecto cuando `position` no es `static`.

```css
.elemento {
  position: absolute;
  top: 20px;    /* 20px desde el borde superior del ancestro posicionado */
  left: 50%;    /* 50% desde el borde izquierdo del ancestro posicionado */
}
```

#### La propiedad `inset`

`inset` es el **shorthand** de `top`, `right`, `bottom` y `left`, siguiendo el mismo orden que `margin` y `padding` (sentido horario desde arriba).

```css
/* Estas dos declaraciones son equivalentes */
header {
  top: 0;
  right: 0;
  bottom: auto;
  left: 0;
}

header {
  inset: 0 0 auto 0; /* top right bottom left */
}
```

> [!TIP]
> `inset: 0` (un solo valor) equivale a poner `top: 0; right: 0; bottom: 0; left: 0`, es decir, el elemento ocupa todo el espacio del ancestro posicionado.

---

### 7. `z-index` — Orden de apilamiento

Cuando varios elementos posicionados se solapan, `z-index` controla cuál aparece por encima. Un valor mayor significa que el elemento aparece más al frente.

```css
header {
  position: fixed;
  z-index: 10; /* el header queda por encima de todo el contenido */
}

#about > span {
  position: absolute;
  z-index: -1; /* el emoji queda por detrás del texto */
}
```

> [!IMPORTANT]
> `z-index` sólo funciona en elementos **posicionados** (es decir, con `position` distinto de `static`). En elementos con `position: static` no tiene ningún efecto.

> [!NOTE]
> Los valores de `z-index` se comparan dentro del mismo **contexto de apilamiento** (stacking context). Un nuevo contexto de apilamiento se crea, entre otros casos, con `position` + `z-index` distinto de `auto`, con `opacity < 1`, o con `filter`.

---

### 8. Otras propiedades vistas en el ejemplo

#### `filter: drop-shadow()`

`filter` aplica efectos gráficos a un elemento. A diferencia de `box-shadow`, `drop-shadow()` sigue la forma real del elemento (incluyendo los canales alfa de las imágenes PNG o SVG).

```css
#about > span {
  filter: drop-shadow(5px 5px 10px black);
  /*               ↑    ↑    ↑     ↑
                offset-x offset-y blur color */
}
```

#### Pseudo-clases: `:nth-child()`, `:first-child` y `:not()`

Las **pseudo-clases** permiten seleccionar elementos según su posición o estado sin necesidad de añadir clases en el HTML.

```css
/* Selecciona el segundo hijo de su padre */
section:nth-child(2) {
  font-weight: 600;
}

/* Selecciona todos los section que NO sean el primero */
section:not(:first-child) {
  width: 80ch;
  margin: 0 auto;
}

/* Selecciona los h1 que sean el segundo hijo */
h1:nth-child(2) {
  background-color: var(--verde-neon);
}

/* Pseudo-clase :hover combinada con nth-child */
h1:nth-child(2):hover {
  display: none;
}
```

| Pseudo-clase       | Descripción                                                   |
| ------------------ | ------------------------------------------------------------- |
| `:first-child`     | Selecciona el elemento si es el **primer** hijo de su padre   |
| `:last-child`      | Selecciona el elemento si es el **último** hijo de su padre   |
| `:nth-child(n)`    | Selecciona el elemento si es el hijo número **n** de su padre |
| `:not(selector)`   | Selecciona el elemento si **no** coincide con el selector     |

---

### 9. Estructura de los archivos de la sesión

```
example/
├── index.html   — Página construida desde el template vanilla-html-template
├── style.css    — Estilos con position: fixed, absolute, relative, sticky y z-index
├── reset.css    — Reset CSS
└── img/         — Recursos gráficos (icono SVG)
```

---

## Resumen

En esta sesión hemos aprendido:

- ✅ `position: relative` — desplazamiento visual sin salir del flujo; crea punto de referencia para hijos absolutos
- ✅ `position: absolute` — sale del flujo; se posiciona respecto al ancestro posicionado más cercano
- ✅ `position: fixed` — sale del flujo; se posiciona respecto al viewport y no se mueve con el scroll
- ✅ `position: sticky` — híbrido entre `relative` y `fixed`; se queda pegado al cruzar un umbral
- ✅ `top`, `right`, `bottom`, `left` — desplazan el elemento desde cada borde del punto de referencia
- ✅ `inset` — shorthand de `top right bottom left`
- ✅ `z-index` — controla el orden de apilamiento de elementos posicionados
- ✅ `filter: drop-shadow()` — sombra que sigue la forma real del elemento
- ✅ Pseudo-clases `:nth-child()`, `:first-child` y `:not()` para seleccionar elementos por posición

**Lo más importante:**

> [!IMPORTANT]
> - `position: static` es el valor por defecto; el elemento sigue el flujo normal y no acepta `z-index`
> - `position: absolute` y `position: fixed` sacan al elemento del flujo (los demás actúan como si no existiese)
> - Para que un hijo `absolute` se posicione dentro de su contenedor, el contenedor necesita `position: relative` (o cualquier valor distinto de `static`)
> - `z-index` sólo funciona en elementos posicionados
> - `position: sticky` necesita al menos uno de `top`, `right`, `bottom` o `left` para funcionar

## Recursos Adicionales

- [MDN - position](https://developer.mozilla.org/es/docs/Web/CSS/position)
- [MDN - z-index](https://developer.mozilla.org/es/docs/Web/CSS/z-index)
- [MDN - top / right / bottom / left](https://developer.mozilla.org/es/docs/Web/CSS/top)
- [MDN - inset](https://developer.mozilla.org/es/docs/Web/CSS/inset)
- [MDN - filter](https://developer.mozilla.org/es/docs/Web/CSS/filter)
- [MDN - :nth-child()](https://developer.mozilla.org/es/docs/Web/CSS/:nth-child)
- [MDN - :not()](https://developer.mozilla.org/es/docs/Web/CSS/:not)
- [CSS Tricks - Almanac: position](https://css-tricks.com/almanac/properties/p/position/)
- [Josh Comeau - What the heck z-index](https://www.joshwcomeau.com/css/stacking-contexts/)
