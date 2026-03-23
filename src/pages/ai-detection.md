---
layout: ../layouts/MarkdownArticleLayout.astro
title: Detección de uso de IA
---

# RÚBRICA DE DETECCIÓN DE USO DE IA <br /><small>EN PRÁCTICAS FRONTEND</small>

- **Asignatura:** Programación Web
- **Tecnologías:** HTML, CSS y JavaScript
- **Nivel:** Inicial

---

## 📊 Estructura de la rúbrica

- Cada criterio se puntúa de **0 a 2**
- Los criterios se agrupan en **5 bloques**
- **Puntuación máxima: 40 puntos**
- La interpretación final debe hacerse **sobre el conjunto de evidencias**, no sobre un único indicio aislado

---

## 🧠 1. BLOQUE COGNITIVO (0–8 puntos)

Evalúa si el código refleja un proceso de aprendizaje real y un nivel coherente con el contexto de la asignatura.

| Criterio                   | 0 puntos                                                              | 1 punto                                                | 2 puntos                                                     |
| -------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------ |
| **Evolución del código**   | No hay evolución visible; el resultado parece cerrado desde el inicio | Se aprecia cierta progresión, pero limitada            | El código refleja claramente una construcción progresiva     |
| **Nivel adecuado**         | Muy superior al esperado para la asignatura y el momento del curso    | Ligeramente superior al esperado                       | Acorde al nivel del grupo y al trabajo realizado en clase    |
| **Generalización**         | Excesiva; abstrae o reutiliza más de lo necesario                     | Moderada; hay alguna abstracción anticipada            | Adecuada; resuelve el problema sin sofisticación innecesaria |
| **Naturalidad del código** | Artificial; demasiado perfecto o estandarizado                        | Mixto; combina rasgos naturales con otros artificiales | Natural; propio de un proceso real de aprendizaje            |

---

## ⚙️ 2. BLOQUE TÉCNICO (0–8 puntos)

Evalúa decisiones de implementación y coherencia técnica con lo trabajado en clase.

| Criterio                            | 0 puntos                                                        | 1 punto                              | 2 puntos                                                                 |
| ----------------------------------- | --------------------------------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------ |
| **Uso DOM vs strings**              | Genera HTML principalmente mediante strings o template literals | Combina DOM API y strings            | Usa el DOM de forma clara y adecuada                                     |
| **Separación de responsabilidades** | HTML, CSS y JS aparecen mezclados                               | Hay cierta separación, pero parcial  | Existe una separación correcta entre estructura, estilo y comportamiento |
| **Eventos (`addEventListener`)**    | Usa eventos inline o no sigue el enfoque trabajado              | Mezcla eventos inline con listeners  | Usa `addEventListener` de forma coherente                                |
| **CSS (externo vs inline)**         | Predominan estilos inline                                       | Combina estilos inline y CSS externo | Usa CSS externo de forma clara y consistente                             |

---

## 🧩 3. BLOQUE PEDAGÓGICO (0–8 puntos)

Evalúa la alineación entre la entrega y los criterios, prácticas y contenidos enseñados en la asignatura.

| Criterio                              | 0 puntos                                            | 1 punto                                | 2 puntos                                                            |
| ------------------------------------- | --------------------------------------------------- | -------------------------------------- | ------------------------------------------------------------------- |
| **Coherencia con lo visto en clase**  | La solución se aleja claramente del enfoque docente | Coincide parcialmente con lo trabajado | Está claramente alineada con lo enseñado                            |
| **Uso de buenas prácticas enseñadas** | No aplica las buenas prácticas trabajadas           | Aplica solo una parte                  | Aplica correctamente las buenas prácticas enseñadas                 |
| **Uso de conceptos no vistos**        | Introduce varios conceptos o técnicas no trabajados | Introduce algunos conceptos no vistos  | No introduce conceptos ajenos al nivel o los justifica con claridad |
| **Justificación técnica**             | No sabe explicar decisiones clave del código        | Explica parcialmente sus decisiones    | Justifica con claridad lo que ha hecho y por qué                    |

---

## 🧪 4. BLOQUE DE PROCESO (0–8 puntos)

Evalúa si el trabajo deja huellas razonables del desarrollo real de un alumno de nivel inicial.

| Criterio               | 0 puntos                                                       | 1 punto                            | 2 puntos                                                  |
| ---------------------- | -------------------------------------------------------------- | ---------------------------------- | --------------------------------------------------------- |
| **Código intermedio**  | No existe rastro de evolución, pruebas o versiones intermedias | Hay pocas huellas del proceso      | El trabajo refleja un desarrollo progresivo y reconocible |
| **Logs / pruebas**     | No aparecen pruebas, verificaciones ni rastros de depuración   | Aparecen algunas pruebas puntuales | Hay pruebas o verificaciones naturales del proceso        |
| **Errores esperables** | No aparecen errores ni dudas propias del nivel                 | Aparecen algunos                   | Aparecen errores o correcciones razonables para el nivel  |
| **Limpieza excesiva**  | Código excesivamente limpio, uniforme y sin ruido humano       | Bastante limpio, pero plausible    | Limpieza natural y coherente con un alumno real           |

---

## 🤖 5. BLOQUE DE INDICIOS DE IA (0–8 puntos)

Evalúa la presencia de patrones frecuentemente asociados a generación o asistencia intensiva por IA.

| Criterio                                                   | 0 puntos                                                                                              | 1 punto                                      | 2 puntos                                                   |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------- | ---------------------------------------------------------- |
| **Funciones “de manual” (`escapeHtml`, `sanitize`, etc.)** | Aparecen claramente y no puede explicarlas                                                            | Aparecen, pero las explica solo parcialmente | No aparecen o están justificadas con solvencia             |
| **Template literals avanzados**                            | Uso masivo para construir HTML                                                                        | Uso parcial o puntual                        | No se usan o su uso es razonable y limitado                |
| **UI avanzada no enseñada**                                | Aparecen varios patrones no trabajados (loading states, empty states, placeholders, paginación, etc.) | Aparece alguno de forma puntual              | No aparecen o están claramente justificados                |
| **Mezcla de buenas y malas prácticas**                     | Hay incoherencias claras: código sofisticado junto a errores básicos                                  | Se observan algunas inconsistencias          | El conjunto es coherente con el nivel y el enfoque docente |

---

## 📈 Interpretación de resultados

| Puntuación       | Interpretación                                                       |
| ---------------- | -------------------------------------------------------------------- |
| **32–40 puntos** | Autoría muy probable y coherencia alta con el proceso de aprendizaje |
| **24–31 puntos** | Dudas razonables; conviene verificar algunos aspectos                |
| **16–23 puntos** | Alta sospecha de asistencia externa o uso intensivo de IA            |
| **0–15 puntos**  | Muy alta probabilidad de uso de IA o de falta de autoría real        |

> **Nota importante:** esta interpretación debe usarse como guía orientativa. La decisión final no debe basarse en una suma mecánica, sino en la combinación entre puntuación, contexto docente y capacidad del alumno para defender el trabajo.

---

## ⚖️ Recomendación docente según resultado

### 🟢 32–40 → Evaluación estándar

No se detectan indicios relevantes más allá de lo razonable para el nivel.

### 🟡 24–31 → Seguimiento

Conviene realizar preguntas puntuales sobre decisiones técnicas, estructura o fragmentos concretos.

### 🟠 16–23 → Sospecha alta

Se recomienda una defensa oral breve o un ejercicio corto en entorno controlado.

### 🔴 0–15 → Sospecha muy alta

Se recomienda una prueba controlada obligatoria y la revisión específica de la autoría de la entrega.

---

## 🧠 Bonus: frase clave para defender la rúbrica

> La evaluación no se basa en el resultado final, sino en la coherencia entre el nivel del alumno, el proceso de desarrollo y los criterios trabajados en la asignatura.
