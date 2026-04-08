# Sesión 15 - Responsividad en Diseño Web

**Fecha:** 7 de Abril de 2026

## Contenidos de la Sesión

En esta sesión se ha explicado cómo hacer que una página web se adapte a cualquier tamaño de pantalla usando **Media Queries**. Se han visto los conceptos de *breakpoints*, la diferencia entre **Mobile First** y **Desktop First**, y las dos sintaxis disponibles para escribir media queries. También se ha explorado la media query especial `@media print` para controlar el aspecto al imprimir.

El ejemplo construido en clase se encuentra en la carpeta [`example/`](./example/), con tres archivos: [`index.html`](./example/index.html), [`mobile-first.css`](./example/mobile-first.css) y [`desktop-first.css`](./example/desktop-first.css).

---

### 1. ¿Qué es la responsividad?

La **responsividad** (del inglés *responsive design*) es la capacidad de una página web para adaptarse de forma fluida a diferentes tamaños de pantalla: móvil, tablet, laptop y desktop.

👉 No son varias webs diferentes  
👉 Es **una sola web que se adapta** a cada dispositivo

> "Si una web no es responsive, está mal diseñada."

La clave está en que, con CSS, podemos aplicar estilos distintos según las características del dispositivo (principalmente el ancho de la pantalla), sin necesidad de duplicar el HTML.

---

### 2. ¿Por qué es importante?

- 📱 La mayoría de usuarios navega desde el móvil
- 👀 Mejora la experiencia de usuario en todos los dispositivos
- 🚀 Es un estándar en diseño web moderno
- 🔍 Influye positivamente en el posicionamiento SEO

---

### 3. Media Queries

Las **Media Queries** son la herramienta fundamental de CSS para aplicar estilos condicionalmente según las características del dispositivo (principalmente el ancho de la pantalla).

#### Sintaxis básica

```css
@media (condición) {
  /* estilos que se aplican cuando se cumple la condición */
}
```

#### Ejemplo

```css
@media (max-width: 600px) {
  body {
    background-color: red;
  }
}
```

Si la pantalla tiene **600px de ancho o menos** → se aplica el fondo rojo.

---

### 4. Breakpoints (puntos de cambio)

Los **breakpoints** son los valores de ancho en los que el diseño "rompe" (cambia) para adaptarse al dispositivo. Los más habituales son:

| Dispositivo | Rango de ancho       |
| ----------- | -------------------- |
| 📱 Móvil    | hasta 600px          |
| 📲 Tablet   | 600px – 1024px       |
| 💻 Laptop   | 1024px – 1440px      |
| 🖥️ Desktop  | más de 1440px        |

No existe un estándar único de breakpoints: dependen del diseño concreto de cada proyecto. Lo importante es definirlos según el contenido, no según los modelos de dispositivos.

---

### 5. Sintaxis de Media Queries

#### ✅ Sintaxis clásica (recomendada)

```css
@media (max-width: 600px) { /* hasta 600px */ }
@media (min-width: 600px) { /* desde 600px */ }
```

- `max-width` → aplica estilos **hasta** ese ancho (enfoque Desktop First)
- `min-width` → aplica estilos **desde** ese ancho (enfoque Mobile First)

#### 🆕 Sintaxis moderna

```css
@media (width <= 600px) { /* hasta 600px */ }
@media (width >= 600px) { /* desde 600px */ }
```

Más intuitiva y legible, pero con menor compatibilidad en navegadores antiguos. Para proyectos modernos es perfectamente válida.

> [!NOTE]
> Puedes combinar condiciones con `and`, `or` y `not`:
> ```css
> @media (min-width: 600px) and (max-width: 1024px) {
>   /* solo en tablet */
> }
> ```

---

### 6. Mobile First vs Desktop First

Son los dos enfoques opuestos a la hora de diseñar y escribir los estilos CSS de una web responsiva.

#### 📱 Mobile First

Se **diseña primero para móvil** y se van añadiendo estilos para pantallas más grandes mediante `min-width`.

```css
/* Estilos base para móvil (sin media query) */
.elementos {
  grid-template-columns: 1fr;
}

@media (min-width: 600px) {
  /* Tablet: dos columnas */
  .elementos {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 900px) {
  /* Desktop: tres columnas */
  .elementos {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
```

- ✅ Se construye **hacia arriba** (de lo pequeño a lo grande)
- ✅ Los estilos base son los más sencillos
- ✅ Es el enfoque recomendado actualmente
- ✅ Mejor rendimiento en móvil (carga solo lo necesario)

#### 💻 Desktop First

Se **diseña primero para desktop** y se reducen los estilos para pantallas más pequeñas con `max-width`.

```css
/* Estilos base para desktop (sin media query) */
.elementos {
  grid-template-columns: 1fr 1fr 1fr;
}

@media (max-width: 900px) {
  /* Tablet: dos columnas */
  .elementos {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 600px) {
  /* Móvil: una columna */
  .elementos {
    grid-template-columns: 1fr;
  }
}
```

- Construyes **hacia abajo** (de lo grande a lo pequeño)
- Vas recortando y simplificando estilos

> [!TIP]
> Aunque ambos enfoques son válidos, **Mobile First** es el estándar en la industria porque la mayoría del tráfico web proviene de dispositivos móviles. Empezar por lo esencial y añadir complejidad es una práctica más robusta.

---

### 7. La meta etiqueta `viewport`

Para que las media queries funcionen correctamente en dispositivos móviles es imprescindible incluir esta etiqueta en el `<head>` del HTML:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

Sin ella, los dispositivos móviles renderizan la página a un ancho virtual de ~980px y la escalan, ignorando los breakpoints definidos.

---

### 8. `@media print` — Estilos para impresión

Además de los breakpoints de pantalla, CSS permite definir estilos específicos para cuando el usuario imprime la página (o genera un PDF):

```css
@media print {
  body {
    font-family: "Times New Roman", Times, serif;
  }
}
```

Esto es útil para ocultar elementos como la navegación o el footer, cambiar la tipografía, ajustar márgenes, etc., de cara a una versión impresa del documento.

---

### 9. Estructura de los archivos de la sesión

```
example/
├── index.html          — Página con una cuadrícula de elementos
├── mobile-first.css    — Estilos responsivos con enfoque Mobile First (min-width)
└── desktop-first.css   — Estilos responsivos con enfoque Desktop First (max-width)
```

El archivo `index.html` enlaza por defecto con `mobile-first.css`. Para probar la versión Desktop First, basta con cambiar el `<link>` en el `<head>`.

---

## Resumen

En esta sesión hemos aprendido:

- ✅ **Responsividad** — una web que se adapta a cualquier tamaño de pantalla sin duplicar el HTML
- ✅ **Media Queries** — aplican estilos condicionalmente según el ancho del dispositivo
- ✅ **Breakpoints** — los puntos de ancho en los que el diseño cambia (móvil, tablet, laptop, desktop)
- ✅ **Sintaxis clásica** (`min-width` / `max-width`) y **sintaxis moderna** (`width >=` / `width <=`)
- ✅ **Mobile First** — diseñar para móvil y ampliar con `min-width` (enfoque recomendado)
- ✅ **Desktop First** — diseñar para desktop y reducir con `max-width`
- ✅ **`<meta name="viewport">`** — imprescindible para que los breakpoints funcionen en móvil
- ✅ **`@media print`** — estilos específicos para la versión impresa

**Lo más importante:**

> [!IMPORTANT]
> - Una web responsiva es **una sola web** que se adapta, no múltiples versiones
> - Usa `min-width` para **Mobile First** y `max-width` para **Desktop First**
> - Incluye siempre la meta etiqueta `viewport` en el `<head>` de tu HTML
> - Los breakpoints deben definirse según el contenido, no según modelos de dispositivos concretos

## Recursos Adicionales

- [MDN - Media Queries](https://developer.mozilla.org/es/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [MDN - @media](https://developer.mozilla.org/es/docs/Web/CSS/@media)
- [MDN - Diseño Responsivo](https://developer.mozilla.org/es/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
- [CSS Tricks - A Complete Guide to CSS Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
- [web.dev - Responsive Web Design Basics](https://web.dev/articles/responsive-web-design-basics)
- [Josh Comeau - The Surprising Truth About Pixels and Accessibility](https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/)
