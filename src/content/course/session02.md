---
title: "Sesión 02 - HTML Avanzado"
section: "HTML"
order: 2
description: "Imágenes, listas, tablas, multimedia y enlaces"
duration: 2
objectives:
  - "Insertar imágenes con la etiqueta <img> usando atributos src y alt correctamente"
  - "Crear listas ordenadas y desordenadas con <ol>, <ul> y <li>"
  - "Estructurar datos tabulares con <table>, <thead>, <tbody> y <tr>"
  - "Añadir audio y vídeo a una página con las etiquetas <audio> y <video>"
  - "Utilizar enlaces internos, externos y anclas con <a>"
exercises:
  - title: "Galería de imágenes"
    description: "Crea una página HTML con al menos 5 imágenes, cada una con un atributo alt descriptivo y un pie de foto."
  - title: "Tabla de horarios"
    description: "Construye una tabla que represente el horario semanal de clase con cabeceras de columna (días) y fila (horas)."
  - title: "Página de receta"
    description: "Crea una página con una receta de cocina: ingredientes en lista no ordenada, pasos en lista ordenada y una imagen del plato."
checklist:
  - "Sé insertar imágenes con src y alt correctos"
  - "Puedo crear listas ordenadas y no ordenadas"
  - "Sé construir una tabla HTML básica con cabeceras"
  - "Puedo añadir un vídeo o audio con controles a una página"
  - "Sé crear enlaces a otras páginas y a secciones dentro de la misma página"
commonErrors:
  - "Olvidar el atributo alt en las imágenes (afecta a la accesibilidad y el SEO)"
  - "Usar rutas absolutas del sistema de archivos (C:/...) en lugar de rutas relativas"
  - "Confundir <ul> (sin orden) con <ol> (con orden numérico)"
  - "No cerrar las etiquetas de tabla correctamente (<td>, <tr>, <tbody>)"
---

# Sesión 02 - HTML Avanzado

<!-- **Fecha:** 05/02/2026 -->

## Contenidos de la Sesión

### 1. Imágenes en HTML

Las imágenes son elementos fundamentales para crear páginas web visualmente atractivas. HTML permite insertar imágenes mediante la etiqueta `<img>`, que es un elemento vacío (no tiene etiqueta de cierre).

**Etiqueta `<img>`:**

La etiqueta `<img>` es un elemento auto-cerrado que se utiliza para incrustar imágenes en una página web.

**Atributos principales:**

- **`src`**: (obligatorio) Especifica la ruta o URL de la imagen. Puede ser una ruta relativa (`./img/foto.png`), absoluta (`/images/foto.png`), o una URL externa (`https://ejemplo.com/foto.png`).
- **`alt`**: (recomendado) Proporciona texto alternativo que se muestra si la imagen no se carga. Es esencial para accesibilidad (lectores de pantalla) y SEO.
- **`width` y `height`**: Definen las dimensiones de la imagen. Se pueden especificar en píxeles (`width="200"`) o porcentajes. Usar `height="40px"` establece el alto.
- **`title`**: Texto que aparece al pasar el cursor sobre la imagen.

**Ejemplo:**

```html
<img src="./img/psyduck.png" alt="Psyduck Pokemon" height="40px" />
```

**Buenas prácticas:**

- Siempre incluir el atributo `alt` para accesibilidad
- Optimizar el tamaño de las imágenes antes de subirlas
- Usar formatos apropiados (JPEG para fotos, PNG para gráficos con transparencia, SVG para iconos)
- Considerar imágenes responsive para diferentes dispositivos

### 2. Listas en HTML

Las listas permiten organizar y presentar información de manera estructurada. HTML ofrece tres tipos principales de listas.

#### Listas Desordenadas (`<ul>`)

Las listas desordenadas se utilizan cuando el orden de los elementos no es importante. Por defecto, los elementos se marcan con viñetas.

**Estructura:**

```html
<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
</ul>
```

**Atributo `type`:**

- `type="disc"`: Círculo relleno (por defecto)
- `type="circle"`: Círculo vacío
- `type="square"`: Cuadrado relleno

**Ejemplo:**

```html
<ul type="square">
  <li>Java</li>
  <li>JavaScript</li>
  <li>Python</li>
</ul>
```

#### Listas Ordenadas (`<ol>`)

Las listas ordenadas se utilizan cuando el orden de los elementos es relevante. Los elementos se numeran automáticamente.

**Estructura:**

```html
<ol>
  <li>Primer paso</li>
  <li>Segundo paso</li>
  <li>Tercer paso</li>
</ol>
```

**Atributos:**

- **`type`**: Tipo de numeración
  - `type="1"`: Números (1, 2, 3...) - por defecto
  - `type="A"`: Letras mayúsculas (A, B, C...)
  - `type="a"`: Letras minúsculas (a, b, c...)
  - `type="I"`: Números romanos mayúsculas (I, II, III...)
  - `type="i"`: Números romanos minúsculas (i, ii, iii...)
- **`start`**: Número desde el cual comienza la lista (ej: `start="10"`)

**Ejemplo:**

```html
<ol type="i" start="10">
  <li>Elemento 10</li>
  <li>Elemento 11</li>
</ol>
```

#### Listas Anidadas

Las listas pueden anidarse para crear jerarquías:

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

Las tablas permiten organizar datos en filas y columnas, siendo ideales para presentar información estructurada de manera clara.

**Estructura básica:**

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

**Elementos principales:**

- **`<table>`**: Contenedor principal de la tabla
- **`<thead>`**: Agrupa las filas de encabezado de la tabla
- **`<tbody>`**: Agrupa las filas de contenido de la tabla
- **`<tr>`**: Define una fila (table row)
- **`<th>`**: Define una celda de encabezado (table header) - texto en negrita y centrado por defecto
- **`<td>`**: Define una celda de datos (table data)

**Atributos útiles:**

- **`rowspan`**: Fusiona celdas verticalmente (ej: `rowspan="2"` combina dos filas)
- **`colspan`**: Fusiona celdas horizontalmente (ej: `colspan="3"` combina tres columnas)

**Ejemplo con `rowspan`:**

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

**Usos apropiados:**

- Tablas deben usarse SOLO para datos tabulares
- NO usar tablas para diseño o maquetación (usar CSS en su lugar)
- Incluir `<thead>` y `<tbody>` para mejor accesibilidad

### 4. Contenedores: `<div>` y `<span>`

Los contenedores son elementos genéricos que se utilizan para agrupar y aplicar estilos a contenido.

#### El elemento `<div>`

`<div>` es un contenedor de nivel de bloque que se usa para agrupar elementos relacionados.

**Características:**

- Elemento de bloque (comienza en una nueva línea)
- Ocupa todo el ancho disponible
- Se utiliza para estructurar secciones de la página
- Ideal para aplicar estilos CSS a grupos de elementos

**Ejemplo:**

```html
<div>
  <h2>Título de sección</h2>
  <p>Contenido de la sección</p>
</div>
```

#### El elemento `<span>`

`<span>` es un contenedor en línea que se usa para aplicar estilos a partes específicas de texto.

**Características:**

- Elemento en línea (no comienza en una nueva línea)
- Ocupa solo el espacio necesario
- Se utiliza para estilizar partes de texto dentro de un párrafo
- No afecta el flujo del documento

**Ejemplo:**

```html
<p>Lorem ipsum <span>dolor</span> sit amet</p>
```

### 5. Enlaces Externos y Atributos

#### Enlaces a Sitios Externos

Los enlaces externos apuntan a páginas fuera de tu sitio web.

**Atributo `target`:**

- **`target="_blank"`**: Abre el enlace en una nueva pestaña o ventana
- **`target="_self"`**: Abre el enlace en la misma ventana (por defecto)
- **`target="_parent"`**: Abre el enlace en el marco padre
- **`target="_top"`**: Abre el enlace en la ventana completa

**Ejemplo:**

```html
<a href="https://instagram.com/usuario" target="_blank">Ver mi Instagram</a>
```

**Buenas prácticas:**

- Usar `target="_blank"` para enlaces externos para mantener al usuario en tu sitio
- Considerar añadir `rel="noopener noreferrer"` por seguridad al usar `target="_blank"`

#### Enlaces Internos Entre Páginas

Los enlaces internos conectan diferentes páginas dentro del mismo sitio:

```html
<a href="./proyecto1.html">Ir a ver el proyecto</a>
<a href="./index.html">Volver a la página principal</a>
```

### 6. Elementos Multimedia (Audio y Video)

HTML5 introduce soporte nativo para multimedia sin necesidad de plugins externos.

#### Video

La etiqueta `<video>` permite incrustar videos:

```html
<video src="./img/video.mp4" autoplay muted loop controls></video>
```

**Atributos:**

- **`src`**: Ruta del archivo de video
- **`controls`**: Muestra controles de reproducción
- **`autoplay`**: Reproduce automáticamente al cargar
- **`muted`**: Silencia el audio (necesario para autoplay en muchos navegadores)
- **`loop`**: Reproduce en bucle
- **`width` y `height`**: Dimensiones del reproductor

#### Audio

La etiqueta `<audio>` permite incrustar audio:

```html
<audio src="./img/audio.ogv" controls></audio>
```

**Atributos:**

- **`src`**: Ruta del archivo de audio
- **`controls`**: Muestra controles de reproducción
- **`autoplay`**: Reproduce automáticamente
- **`loop`**: Reproduce en bucle
- **`muted`**: Silencia el audio

**Formatos soportados:**

- Video: MP4, WebM, Ogg
- Audio: MP3, WAV, Ogg

## Ejemplo

### Hello World 2 - Curriculum Vitae Avanzado

<a href="https://github.com/yurigo/PMI-2526/tree/master/sessions/session02/examples/helloworld-2" target="_blank">Aquí</a> encontrarás un ejemplo práctico que amplía el CV de la sesión anterior con características HTML avanzadas.

<iframe src="/examples/session02/index.html" title="Ejemplo Hello World - CV" class="course-iframe"></iframe>

**Archivos del ejemplo:**

- `index.html`: CV mejorado con imágenes, tablas, listas y estilos CSS
- `proyecto1.html`: Página secundaria que demuestra la navegación entre páginas
- `hola/mundo.html`: Archivo auxiliar que muestra la estructura básica de etiquetas
- `img/`: Carpeta con recursos multimedia (imágenes, videos, audio)

**Características implementadas:**

- **Imagen integrada**: Logo de Psyduck con atributo `height` para controlar el tamaño
- **Estilos CSS**: Uso de la etiqueta `<style>` en el `<head>` para estilizar elementos `<span>`
- **Contenedores**: Uso de `<div>` para organizar secciones del CV
- **Tabla de idiomas**: Tabla con `<thead>`, `<tbody>`, y uso de `rowspan` para fusionar celdas
- **Listas desordenadas**: Lista de lenguajes de programación con `type="square"` y listas anidadas
- **Listas ordenadas**: Múltiples ejemplos con diferentes tipos de numeración (`type="i"`) y atributo `start`
- **Enlaces externos**: Enlace a Instagram con `target="_blank"` para abrir en nueva pestaña
- **Enlaces internos**: Navegación entre `index.html` y `proyecto1.html`
- **Elementos multimedia comentados**: Ejemplos de `<video>` y `<audio>` listos para usar
- **Énfasis con `<span>`**: Resaltado de palabras específicas dentro de párrafos

**Cómo visualizar el ejemplo:**

1. Abre VS Code y navega al directorio del proyecto
2. Abre el archivo `sessions/session02/examples/helloworld-2/index.html`
3. Haz clic derecho en `index.html`
4. Selecciona "Open with Live Server"
5. La página se abrirá en tu navegador predeterminado
6. Prueba los diferentes enlaces para ver la navegación entre páginas

**Comparación con Session 01:**

Session 02 introduce elementos más avanzados que no estaban en Session 01:

- Imágenes y multimedia
- Tablas con fusión de celdas
- Listas ordenadas y desordenadas con diferentes estilos
- CSS básico para estilizar elementos
- Contenedores `<div>` y `<span>` para mejor estructura
- Enlaces que abren en nuevas pestañas

## Recursos Adicionales

- [MDN Web Docs - Imágenes en HTML](https://developer.mozilla.org/es/docs/Web/HTML/Element/img)
- [MDN Web Docs - Tablas](https://developer.mozilla.org/es/docs/Web/HTML/Element/table)
- [MDN Web Docs - Listas](https://developer.mozilla.org/es/docs/Web/HTML/Element/ul)
- [MDN Web Docs - CSS Básico](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/CSS_basics)
- [MDN Web Docs - Video](https://developer.mozilla.org/es/docs/Web/HTML/Element/video)
- [MDN Web Docs - Audio](https://developer.mozilla.org/es/docs/Web/HTML/Element/audio)
