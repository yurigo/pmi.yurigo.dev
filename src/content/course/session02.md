---
title: "Sesión 02 - HTML Avanzado"
section: "HTML"
order: 2
description: "Imágenes, listas, tablas, multimedia y enlaces"
---

# Sesión 02 - HTML Avanzado

**Fecha:** 05/02/2026

## Contenidos de la Sesión

### 1. Imágenes en HTML

La etiqueta `<img>` es un elemento auto-cerrado que se utiliza para incrustar imágenes.

**Atributos principales:**

- **`src`**: Especifica la ruta o URL de la imagen.
- **`alt`**: Texto alternativo para accesibilidad y SEO.
- **`width` y `height`**: Dimensiones de la imagen.
- **`title`**: Texto tooltip al pasar el cursor.

```html
<img src="./img/psyduck.png" alt="Psyduck Pokemon" height="40px" />
```

### 2. Listas en HTML

#### Listas Desordenadas (`<ul>`)

```html
<ul type="square">
  <li>Java</li>
  <li>JavaScript</li>
  <li>Python</li>
</ul>
```

#### Listas Ordenadas (`<ol>`)

```html
<ol type="i" start="10">
  <li>Elemento 10</li>
  <li>Elemento 11</li>
</ol>
```

**Atributos de `<ol>`:**
- `type="1"`: Números (por defecto)
- `type="A"`: Letras mayúsculas
- `type="a"`: Letras minúsculas
- `type="I"`: Números romanos mayúsculas
- `start`: Número de inicio

#### Listas Anidadas

```html
<ul>
  <li>Java</li>
  <ul>
    <li>C</li>
    <li>C++</li>
    <li>C#</li>
  </ul>
  <li>Python</li>
</ul>
```

### 3. Tablas en HTML

```html
<table>
  <thead>
    <tr>
      <th>Encabezado 1</th>
      <th>Encabezado 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dato 1</td>
      <td>Dato 2</td>
    </tr>
  </tbody>
</table>
```

**Atributos útiles:**

- **`rowspan`**: Fusiona celdas verticalmente.
- **`colspan`**: Fusiona celdas horizontalmente.

```html
<table>
  <tbody>
    <tr>
      <th>Castellano</th>
      <td rowspan="2"><strong>nativo</strong></td>
    </tr>
    <tr>
      <th>Catalán</th>
    </tr>
  </tbody>
</table>
```

### 4. Contenedores: `<div>` y `<span>`

#### El elemento `<div>`

- Elemento de bloque (comienza en una nueva línea)
- Ocupa todo el ancho disponible
- Ideal para agrupar y aplicar estilos CSS

```html
<div>
  <h2>Título de sección</h2>
  <p>Contenido de la sección</p>
</div>
```

#### El elemento `<span>`

- Elemento en línea (no comienza en una nueva línea)
- Ocupa solo el espacio necesario
- Para estilizar partes de texto dentro de un párrafo

```html
<p>Lorem ipsum <span>dolor</span> sit amet</p>
```

### 5. Enlaces y Atributos

**Atributo `target`:**

- **`target="_blank"`**: Abre en una nueva pestaña
- **`target="_self"`**: Abre en la misma ventana (por defecto)

```html
<a href="https://instagram.com/usuario" target="_blank">Ver mi Instagram</a>
```

**Buenas prácticas:**

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Enlace externo seguro
</a>
```

#### Enlaces Internos

```html
<a href="./proyecto1.html">Ir a ver el proyecto</a>
<a href="./index.html">Volver a la página principal</a>
```

### 6. Elementos Multimedia (Audio y Video)

#### Video

```html
<video src="./img/video.mp4" autoplay muted loop controls></video>
```

**Atributos:**
- `controls`: Muestra controles de reproducción
- `autoplay`: Reproduce automáticamente al cargar
- `muted`: Silencia el audio
- `loop`: Reproduce en bucle

#### Audio

```html
<audio src="./img/audio.ogv" controls></audio>
```

**Formatos soportados:**
- Video: MP4, WebM, Ogg
- Audio: MP3, WAV, Ogg
