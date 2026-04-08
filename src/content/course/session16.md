# Sesión 16 - Git y GitHub

**Fecha:** 8 de Abril de 2026

## Contenidos de la Sesión

En esta sesión se ha introducido **Git** como sistema de control de versiones y **GitHub** como plataforma de alojamiento de repositorios remotos. Se han practicado los comandos básicos tanto desde la terminal como desde la interfaz de VSCode, y se ha visto cómo desplegar un proyecto con **Vercel** usando integración continua con la rama principal.

El ejemplo construido en clase se encuentra en la carpeta [`example/`](./example/), con el archivo [`index.html`](./example/index.html).

---

### 1. ¿Qué es Git?

**Git** es un sistema de **control de versiones distribuido**. Permite registrar el historial de cambios de un proyecto, trabajar en paralelo con ramas y colaborar con otros desarrolladores.

👉 Git trabaja **en local** — no necesita conexión a Internet para funcionar  
👉 Cada desarrollador tiene una **copia completa** del historial del proyecto  
👉 GitHub es solo una de las plataformas que hospeda repositorios Git remotos

---

### 2. Árbol local vs árbol remoto

Cuando trabajamos con Git y GitHub existen dos árboles (o árboles de commits):

| Concepto       | Descripción                                                                 |
| -------------- | --------------------------------------------------------------------------- |
| **Local tree** | El historial de commits en tu máquina. Solo tú lo ves.                      |
| **Remote tree** | El historial de commits en GitHub. Lo puede ver (y clonar) cualquiera.     |

Los dos árboles se sincronizan con `git push` (local → remoto) y `git pull` (remoto → local).

```
Local                         Remote (GitHub)
──────                         ───────────────
commit C  ←──── git pull ────  commit C
commit B  ────── git push ───► commit B
commit A                       commit A
```

---

### 3. Comandos básicos de Git

#### Configuración inicial (solo la primera vez)

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

#### Iniciar un repositorio

```bash
git init
```

#### Ver el estado del repositorio

```bash
git status
```

#### Ciclo básico: add → commit → push

```bash
git add .                        # Añade todos los cambios al área de preparación (staging)
git commit -m "mensaje claro"    # Guarda los cambios con un mensaje descriptivo
git push                         # Sube los commits al repositorio remoto (GitHub)
```

#### Obtener cambios del repositorio remoto

```bash
git pull                         # Descarga y fusiona los cambios del remoto en la rama actual
```

> [!NOTE]
> `git add .` añade **todos** los archivos modificados. Si quieres añadir solo un archivo concreto: `git add nombre-del-archivo.html`

---

### 4. Git desde la interfaz de VSCode

VSCode incluye integración con Git en el panel **Source Control** (icono de bifurcación en la barra lateral, o `Ctrl+Shift+G`):

| Acción terminal         | Equivalente en VSCode UI                          |
| ----------------------- | ------------------------------------------------- |
| `git add .`             | Hacer clic en **+** junto a cada archivo o en "Stage All Changes" |
| `git commit -m "msg"`   | Escribir el mensaje en el campo de texto y pulsar **✓ Commit** |
| `git push`              | Pulsar el botón **Sync Changes** o el icono **↑** |
| `git pull`              | Pulsar el botón **Sync Changes** o el icono **↓** |

---

### 5. Ramas (branches)

Las **ramas** permiten trabajar en nuevas funcionalidades de forma aislada, sin afectar a la versión principal del proyecto.

#### Rama `master` / `main`

Es la rama principal. Contiene el código **estable y en producción**. No se debe trabajar directamente en ella.

#### Rama `develop`

Es la rama de desarrollo activo. Aquí se hacen los cambios antes de fusionarlos a `master`.

#### Crear y cambiar de rama

```bash
git branch develop               # Crea la rama "develop"
git checkout develop             # Cambia a la rama "develop"

# O en un solo comando:
git checkout -b develop          # Crea y cambia a "develop"
```

#### Ver todas las ramas

```bash
git branch                       # Ramas locales
git branch -a                    # Ramas locales y remotas
```

---

### 6. Fusionar ramas (git merge)

Una vez terminado el trabajo en `develop`, se fusiona en `master`:

```bash
git checkout master              # Vuelve a la rama principal
git merge develop                # Fusiona los commits de "develop" en "master"
git push                         # Sube los cambios al remoto
```

```
develop:  A──B──C
                 \
master:   A──────D   ← merge commit
```

---

### 7. Pull Requests en GitHub

Un **Pull Request (PR)** es la forma de proponer la fusión de una rama en GitHub antes de ejecutar el merge. Permite:

- Revisar el código antes de fusionarlo
- Dejar comentarios y sugerencias
- Aprobar o solicitar cambios
- Tener un historial de las discusiones

**Flujo habitual:**

1. Haces commits en `develop` y los subes con `git push`
2. En GitHub abres un **Pull Request** de `develop` → `master`
3. Se revisa el código
4. Se aprueba y se fusiona (merge) en `master`

---

### 8. Despliegue con Vercel

**Vercel** es una plataforma de despliegue que se integra directamente con GitHub para ofrecer **CI/CD** (integración y despliegue continuos).

#### Configuración básica

1. Conecta tu cuenta de GitHub en [vercel.com](https://vercel.com)
2. Importa el repositorio que quieres desplegar
3. Selecciona la rama **master** (o `main`) como rama de producción
4. Cada vez que hagas `git push` a `master`, Vercel **desplegará automáticamente** la nueva versión

#### CI/CD con Vercel

| Evento                          | Acción de Vercel                                    |
| ------------------------------- | --------------------------------------------------- |
| Push a `master`                 | Despliega en producción (URL pública)               |
| Push a `develop` u otra rama    | Crea un despliegue de previsualización (preview URL) |
| Pull Request abierto            | Genera una URL de previsualización automáticamente  |

> [!TIP]
> Trabaja siempre en `develop` y fusiona a `master` solo cuando el código esté listo. Así el despliegue en producción siempre refleja código revisado y estable.

---

### 9. Flujo de trabajo completo

```
1. git checkout develop             # Trabaja en la rama de desarrollo
2. # (editas archivos en VSCode)
3. git add .                        # Añade los cambios
4. git commit -m "feat: nueva sección de contacto"   # Guarda los cambios
5. git push                         # Sube a GitHub (rama develop)
6. # Abre un Pull Request en GitHub: develop → master
7. # Revisa y aprueba el Pull Request
8. git checkout master              # Cambia a master
9. git merge develop                # Fusiona develop en master
10. git push                        # Sube master → Vercel despliega automáticamente
```

---

### 10. Estructura de los archivos de la sesión

```
example/
└── index.html    — Chuleta interactiva con los comandos Git vistos en clase
```

---

## Resumen

En esta sesión hemos aprendido:

- ✅ **Git** — sistema de control de versiones distribuido que trabaja en local
- ✅ **Árbol local vs remoto** — sincronizados con `git push` y `git pull`
- ✅ **Comandos básicos** — `git add .`, `git commit -m`, `git push`, `git pull`
- ✅ **VSCode UI** — integración de Git en el panel Source Control
- ✅ **Ramas** — `master` para producción, `develop` para desarrollo activo
- ✅ **`git merge`** — fusionar `develop` en `master` una vez el trabajo está listo
- ✅ **Pull Requests** — proponer y revisar merges en GitHub antes de ejecutarlos
- ✅ **Vercel** — despliegue automático desde GitHub con CI/CD en la rama `master`

**Lo más importante:**

> [!IMPORTANT]
> - Nunca trabajes directamente en `master` — usa `develop` para los cambios
> - Escribe mensajes de commit descriptivos: `git commit -m "feat: descripción corta"`
> - Usa Pull Requests para revisar el código antes de fusionarlo en producción
> - Vincula `master` a Vercel para tener CI/CD: cada push a `master` despliega automáticamente

## Recursos Adicionales

- [Git - Documentación oficial](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com/es)
- [Vercel Docs](https://vercel.com/docs)
- [Atlassian - Git Branching](https://www.atlassian.com/es/git/tutorials/using-branches)
- [GitHub - Understanding the GitHub flow](https://guides.github.com/introduction/flow/)
- [Oh My Git! — Juego interactivo para aprender Git](https://ohmygit.org/)
