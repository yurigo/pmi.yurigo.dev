---
title: "Sesión 05 - Formularios HTML"
section: "HTML"
order: 5
description: "Formularios, inputs, validación y elementos de formulario"
---

# Sesión 05 - Formularios HTML

**Fecha:** 17 de Febrero de 2026

## Contenidos de la Sesión

### 1. Introducción a Formularios HTML

Los **formularios HTML** permiten recopilar información del usuario y enviarla a un servidor.

**Ejemplos comunes:**
- Formularios de contacto
- Formularios de registro/login
- Búsquedas
- Encuestas
- Formularios de pago

### 2. Elemento `<form>`

```html
<form action="/procesar-formulario" method="POST">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre" />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" />

  <button type="submit">Enviar</button>
</form>
```

**Atributos principales:**

- **`action`**: URL donde se envían los datos
- **`method`**: Método HTTP (`GET` para búsquedas, `POST` para datos sensibles)

### 3. Elemento `<input>`

```html
<input type="tipo" name="nombre" id="identificador" />
```

**Atributos comunes:**
- **`type`**: Define el tipo de campo
- **`name`**: Identificador del campo al enviar (¡obligatorio para que se envíe!)
- **`id`**: Para vincular con `<label>`
- **`value`**: Valor por defecto
- **`placeholder`**: Texto de ayuda
- **`required`**: Campo obligatorio
- **`disabled`**: Desactiva el campo
- **`readonly`**: Solo lectura

### 4. Tipos de Input

#### `type="text"` — Texto libre

```html
<input type="text" name="nombre" placeholder="Tu nombre" required />
```

#### `type="password"` — Contraseña

```html
<input type="password" name="password" required minlength="8" />
```

#### `type="email"` — Correo electrónico

```html
<input type="email" name="email" placeholder="tu@email.com" required />
```

#### `type="date"` — Fecha

```html
<input type="date" name="fecha" min="1900-01-01" max="2026-12-31" />
```

#### `type="color"` — Color

```html
<input type="color" name="color-favorito" value="#ff0000" />
```

#### `type="radio"` — Opción única

```html
<input type="radio" id="masculino" name="genero" value="masculino" />
<label for="masculino">Masculino</label>

<input type="radio" id="femenino" name="genero" value="femenino" />
<label for="femenino">Femenino</label>
```

> **Importante:** Todos los radio buttons del mismo grupo deben tener el mismo `name`.

#### `type="checkbox"` — Opciones múltiples

```html
<input type="checkbox" id="html" name="tecnologias" value="html" />
<label for="html">HTML</label>

<input type="checkbox" id="css" name="tecnologias" value="css" />
<label for="css">CSS</label>

<input type="checkbox" id="js" name="tecnologias" value="js" />
<label for="js">JavaScript</label>
```

#### `type="range"` — Rango deslizante

```html
<input type="range" name="volumen" min="0" max="100" value="50" step="10" />
```

#### `type="number"` — Número

```html
<input type="number" name="edad" min="0" max="150" step="1" />
```

#### `type="file"` — Archivo

```html
<input type="file" name="foto" accept="image/*" />
```

#### `type="submit"` — Botón de envío

```html
<input type="submit" value="Enviar Formulario" />
```

### 5. Otros Elementos de Formulario

#### `<textarea>` — Texto multilínea

```html
<label for="mensaje">Mensaje:</label>
<textarea id="mensaje" name="mensaje" rows="5" cols="40"
  placeholder="Escribe tu mensaje..."></textarea>
```

#### `<select>` — Lista desplegable

```html
<label for="pais">País:</label>
<select id="pais" name="pais">
  <option value="">-- Selecciona un país --</option>
  <option value="es">España</option>
  <option value="mx">México</option>
  <option value="ar">Argentina</option>
</select>
```

#### `<label>` — Etiqueta de campo

```html
<!-- Forma 1: usando for/id -->
<label for="nombre">Nombre:</label>
<input type="text" id="nombre" name="nombre" />

<!-- Forma 2: envolviendo el input -->
<label>
  Nombre:
  <input type="text" name="nombre" />
</label>
```

#### `<button>` — Botón

```html
<button type="submit">Enviar</button>
<button type="reset">Limpiar</button>
<button type="button" onclick="...">Acción</button>
```

### 6. Validación de Formularios

```html
<form action="/registro" method="POST">
  <input type="text" name="nombre" required minlength="2" maxlength="50" />
  <input type="email" name="email" required />
  <input type="password" name="password" required minlength="8"
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
    title="Debe contener mayúsculas, minúsculas y números" />
  <input type="number" name="edad" min="18" max="100" />
  <button type="submit">Registrarse</button>
</form>
```

**Atributos de validación:**
- `required`: Campo obligatorio
- `minlength` / `maxlength`: Longitud del texto
- `min` / `max`: Valores numéricos o de fecha
- `pattern`: Expresión regular
- `type`: Validación automática según tipo (email, url, etc.)
