# 📜 Infinite Scroll with Next.js & TanStack Query

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-16.1.7-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![TanStack Query](https://img.shields.io/badge/TanStack%20Query-5.90-FF4154?style=flat-square&logo=react-query)](https://tanstack.com/query)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

**Una implementación moderna y educativa de infinite scroll con carga bajo demanda, cachéo inteligente y simulación realista de latencia.**

[🎯 Features](#-features) • [📂 Estructura](#-estructura-de-carpetas) • [🚀 Inicio Rápido](#-inicio-rápido) • [🔄 Flujo de Datos](#-flujo-de-datos) • [🎨 Componentes](#-componentes) • [📚 Documentación](#-documentación)

</div>

---

## 🎯 Features

<table>
  <tr>
    <td>✅ Infinite Scroll sin botones fantasma</td>
    <td>⚡ Cachéo inteligente con TanStack Query</td>
  </tr>
  <tr>
    <td>🎨 Diseño responsive con Tailwind CSS</td>
    <td>🔐 Tipado completo con TypeScript</td>
  </tr>
  <tr>
    <td>🧩 Componentes reutilizables (shadcn/ui)</td>
    <td>🎭 Simulación realista de latencia de red</td>
  </tr>
  <tr>
    <td>📊 API Mock con json-server</td>
    <td>🚀 Server Actions para operaciones seguras</td>
  </tr>
  <tr>
    <td>🌙 Dark mode por defecto</td>
    <td>⭐ Estados de UI elegantes (loading, empty, error)</td>
  </tr>
  <tr>
    <td>🔄 Paginación automática</td>
    <td>💾 Persistencia de datos en caché</td>
  </tr>
</table>

---

## 📊 Tech Stack

### Backend

- **Next.js 16.1.7** — Framework React con App Router
- **TypeScript 5** — Tipado estático para código seguro
- **json-server 1.0.0-beta.13** — API REST mock local

### Frontend

- **React 19.2.3** — Librería UI moderna
- **TanStack Query 5.90.21** — Gestión de estado del servidor y cachéo
- **Tailwind CSS 4** — Estilos utilitarios
- **shadcn/ui 4.0.8** — Componentes pre-construidos

### Utilidades

- **Axios 1.13.6** — Cliente HTTP type-safe
- **Lucide React 0.577.0** — Iconos SVG
- **ESLint** — Linting de código

---

## 📁 Estructura de Carpetas

```
nextjs-tanstackquery-infinite-scroll/
├── src/
│   ├── app/                              # Next.js App Router
│   │   ├── page.tsx                      # 🏠 Página principal
│   │   ├── layout.tsx                    # Layout con providers
│   │   └── globals.css                   # Estilos globales
│   │
│   ├── components/                       # 🧩 Componentes React
│   │   ├── ContentCard.tsx               # Tarjeta de contenido
│   │   ├── ContentGrid.tsx               # Grid con infinite scroll ⭐
│   │   ├── LoadingSpinner.tsx            # Spinner de carga
│   │   ├── providers/
│   │   │   └── TanStackQueryProvider.tsx # QueryClient provider
│   │   └── ui/                           # shadcn/ui components
│   │
│   ├── hooks/                            # 🪝 Custom React Hooks
│   │   ├── useContentQuery.ts            # Query simple
│   │   └── useContentQueryInfinite.ts    # Infinite query ⭐
│   │
│   ├── actions/                          # 🔒 Server Actions
│   │   └── getContents.tsx               # Fetch seguro del servidor
│   │
│   ├── api/                              # 🌐 Configuración HTTP
│   │   └── get-content.ts                # Instancia Axios
│   │
│   ├── types/                            # 📘 Tipos TypeScript
│   │   └── content.ts                    # IContent, IContentResponse
│   │
│   ├── lib/                              # 🔧 Utilidades
│   │   └── utils.ts                      # Helpers (cn, etc.)
│   │
│   ├── helpers/                          # 🛠️ Funciones auxiliares
│   │   ├── sleep.ts                      # Simula latencia
│   │   └── generate-content.ts           # Genera datos mock
│   │
│   └── db.json                           # 📊 Base de datos JSON
│
├── public/                               # 📁 Assets estáticos
├── package.json                          # Dependencias y scripts
├── tsconfig.json                         # Configuración TypeScript
├── tailwind.config.ts                    # Configuración Tailwind
├── next.config.ts                        # Configuración Next.js
└── README.md                             # Este archivo ✨
```

---

## 🚀 Inicio Rápido

### Requisitos Previos

- Node.js 18+ ([descargar](https://nodejs.org))
- npm o yarn

### 1️⃣ Clonar y instalar

```bash
git clone https://github.com/jebcdev/nextjs-tanstackquery-inifinite-scroll
cd nextjs-tanstackquery-infinite-scroll
npm install
```

### 2️⃣ Iniciar los servidores

```bash
# ⭐ Opción 1: Ambos servidores simultáneamente (RECOMENDADO)
npm run concur

# Opción 2: Por separado en dos terminales
# Terminal 1:
npm run dev

# Terminal 2:
npm run jserver
```

### 3️⃣ Abrir en navegador

```
http://localhost:3000
```

¡Listo! 🎉 Verás la app con infinite scroll funcionando.

---

## 📜 Scripts Disponibles

| Script            | Descripción                    | Puerto        |
| ----------------- | ------------------------------ | ------------- |
| `npm run dev`     | Arranca Next.js dev server     | `3000`        |
| `npm run jserver` | Arranca json-server            | `3001`        |
| `npm run concur`  | **Ambos servidores juntos** ⭐ | `3000 + 3001` |
| `npm run build`   | Build de producción            | —             |
| `npm start`       | Inicia servidor de producción  | `3000`        |
| `npm run lint`    | Ejecuta ESLint                 | —             |

**💡 Tip:** Usa `npm run concur` durante desarrollo para tener ambos servidores en una sola terminal.

---

## 🔄 Flujo de Datos

```
┌─────────────────────────────────────────────────────────────────┐
│ Usuario abre http://localhost:3000                              │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ app/layout.tsx                                                  │
│ ├─ TanStackQueryProvider (Client Component)                     │
│ └─ Renderiza app/page.tsx                                       │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ app/page.tsx                                                    │
│ └─ Renderiza ContentGrid (Client Component)                     │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ ContentGrid.tsx (Client Component)                              │
│ ├─ Usa hook: useContentQueryInfinite()                          │
│ └─ Initial fetch con pageParam = 1                              │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ useContentQueryInfinite.ts (Hook)                               │
│ └─ Triggeriza: getContents({ page: 1 })                         │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ getContents() (Server Action)                                   │
│ ├─ Ejecuta sleep(2500ms) → Simula latencia                      │
│ ├─ Llama Axios GET /contents?_page=1&_per_page=10              │
│ └─ Retorna IContentResponse                                     │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ json-server (Puerto 3001)                                       │
│ ├─ Lee 📊 db.json                                               │
│ ├─ Filtra y pagina (items 1-10)                                 │
│ └─ Retorna:                                                     │
│    {                                                            │
│      "first": 1,                                                │
│      "prev": null,                                              │
│      "next": 2,        ← Hay más páginas                        │
│      "last": 2,                                                 │
│      "pages": 2,                                                │
│      "items": 20,                                               │
│      "data": [...]     ← Array de 10 items                      │
│    }                                                            │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ TanStack Query (Cachea)                                          │
│ ├─ Almacena response con clave ["contents"]                     │
│ ├─ staleTime = 5 minutos = 300000ms                             │
│ └─ hasNextPage = true (porque next: 2 existe)                   │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ ContentGrid.tsx renderiza                                       │
│ ├─ Suspense → LoadingSpinner termina                            │
│ ├─ Mapea data.pages[0].data → Renderiza ContentCard × 10        │
│ ├─ Botón "Cargar más" habilitado                                │
│ └─ hasNextPage = true                                           │
└─────────────────────────────────────────────────────────────────┘
                              ↓
             ✅ Usuario ve 10 artículos + Botón
                         (Esperando interacción)
                              ↓
                   Usuario clickea "Cargar más" ← ← ← →
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ fetchNextPage() se dispara                                      │
│ ├─ pageParam calculado: allPages.length + 1 = 2                 │
│ └─ getContents({ page: 2 })                                     │
└─────────────────────────────────────────────────────────────────┘
                              ↓
                    (Repite desde "getContents()")
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ json-server retorna página 2 (items 11-20)                      │
│ ├─ next: null  ← ¡No hay más páginas!                           │
│ └─ pages: 2                                                     │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ TanStack Query                                                  │
│ ├─ pages = [page1, page2]                                       │
│ ├─ getNextPageParam() verifica: allPages.length (2) >= pages (2)│
│ └─ Retorna undefined → hasNextPage = false                      │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ ContentGrid.tsx actualiza                                       │
│ ├─ Renderiza 20 ContentCards en total                           │
│ ├─ Botón desaparece                                             │
│ └─ Muestra "Ya viste todo 👀"                                    │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🎨 Componentes

### 📌 ContentCard.tsx (Server Component)

Tarjeta individual que muestra un artículo.

```tsx
// Props
interface ContentCardProps {
    content: IContent;
}

// Renderiza
<Card>
    <div className="flex gap-4">
        <Avatar>{content.id}</Avatar>
        <div>
            <h3>{content.title}</h3>
            <p>{content.description}</p>
            <Badge>{content.id}</Badge>
        </div>
    </div>
</Card>;
```

**Features:**

- ✨ Hover animation (sombra + traslación)
- 🎨 Badge con número de ID
- 📱 Responsive design

---

### 🎯 ContentGrid.tsx (Client Component) ⭐

Orquestador principal del infinite scroll.

```tsx
export function ContentGrid() {
    const {
        data,
        isLoading,
        isFetchingNextPage,
        hasNextPage,
        fetchNextPage,
    } = useContentQueryInfinite();

    return (
        <div className="space-y-8">
            {/* Suspense con fallback */}
            <Suspense fallback={<LoadingSpinner />}>
                {/* Grid de tarjetas */}
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                    {data?.pages.map((page) =>
                        page.data.map((item) => (
                            <ContentCard
                                key={item.id}
                                content={item}
                            />
                        )),
                    )}
                </div>

                {/* Botón "Cargar más" */}
                {hasNextPage && (
                    <Button
                        onClick={() => fetchNextPage()}
                        disabled={isFetchingNextPage}
                        size="lg"
                        variant="outline"
                    >
                        {isFetchingNextPage
                            ? "Cargando..."
                            : "Cargar más"}
                    </Button>
                )}

                {/* Mensaje final */}
                {!hasNextPage && data?.pages.length > 0 && (
                    <p className="text-center text-muted-foreground">
                        Ya viste todo 👀
                    </p>
                )}
            </Suspense>
        </div>
    );
}
```

**Features:**

- 🔄 Infinite scroll con paginación automática
- ⚙️ Estados: loading, fetchingNextPage, hasNextPage
- 💾 Cachéo inteligente
- 🎭 UI elegante con transiciones

---

### ⏳ LoadingSpinner.tsx (Client Component)

Spinner de carga inicial.

```tsx
export function LoadingSpinner() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <Spinner className="h-8 w-8 animate-spin" />
        </div>
    );
}
```

---

## 🪝 Custom Hooks

### useContentQueryInfinite.ts ⭐ (El importante)

```typescript
const {
    data,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    isError,
} = useContentQueryInfinite();
```

**Retorna:**

- `data.pages` — Array de páginas cargadas
- `isLoading` — Primera carga en progreso
- `isFetchingNextPage` — Cargando página siguiente
- `hasNextPage` — ¿Hay más contenido?
- `fetchNextPage()` — Cargar siguiente página
- `isError` — Error en fetch

**Lógica de paginación:**

```typescript
{
  initialPageParam: 1,                    // Comienza en página 1
  getNextPageParam: (lastPage, allPages) => {
    // Si ya cargamos todas las páginas → undefined (sin más)
    if (allPages.length >= lastPage.pages) return undefined
    // Si no, siguiente página = total de páginas cargadas + 1
    return allPages.length + 1
  },
  staleTime: 300000,                      // Cachéo por 5 minutos
}
```

---

## 📊 Tipos de Datos

### IContent

```typescript
interface IContent {
    id: string; // ID único
    title: string; // Título del artículo
    description: string; // Descripción corta
}
```

### IContentResponse

```typescript
interface IContentResponse {
    first: number; // Primera página
    prev: number | null; // Página anterior
    next: number | null; // Página siguiente
    last: number; // Última página
    pages: number; // Total de páginas
    items: number; // Total de items
    data: IContent[]; // Array de contenidos
}
```

---

## 🛠️ Instalación para Desarrollo

### 1. Setup inicial

```bash
# Clonar repositorio
git clone <repo-url>
cd nextjs-tanstackquery-infinite-scroll

# Instalar dependencias
npm install
```

### 2. Verificar puertos

```bash
# Next.js → Puerto 3000
# json-server → Puerto 3001

# Si están ocupados, editar package.json en scripts
```

### 3. Ejecutar

```bash
# La forma más fácil:
npm run concur

# Luego abre:
# http://localhost:3000
```

### 4. Desarrollo

- Edita `src/` y los cambios se reflejan al guardar (hot reload)
- `db.json` se actualiza automáticamente con json-server
- Los cambios en TypeScript son validados en tiempo real

---

## 🎓 Qué Aprenderás

Esta aplicación es perfecta para entender:

- ✅ **Next.js App Router** — Estructura moderna de Next.js 16
- ✅ **Server Components vs Client Components** — Cuándo usar cada uno
- ✅ **Server Actions** — Mutaciones seguras desde cliente
- ✅ **TanStack Query (React Query)** — Gestión de estado del servidor
- ✅ **Infinite Queries** — Paginación automática
- ✅ **TypeScript Avanzado** — Tipos complejos e inferencias
- ✅ **Tailwind CSS** — Diseño responsive y accesible
- ✅ **shadcn/ui** — Componentes pre-hechos y customizables
- ✅ **REST API** — json-server para desarrollo
- ✅ **Axios** — Cliente HTTP type-safe

---

## 📈 Datos del Proyecto

- **📊 20+ artículos** en `db.json` sobre temas tech
- **📄 10 items por página** (configurable)
- **⏱️ 2.5 segundos** de latencia simulada
- **💾 5 minutos** de cachéo (staleTime)
- **🚀 2 servidores** corriendo simultáneamente

### Temas en la Base de Datos

Next.js · TypeScript · Tailwind CSS · React · Node.js · GraphQL · REST API · Docker · Kubernetes · AWS · CI/CD · Git · Blockchain · Machine Learning · Rust · Go · Python · PostgreSQL · MongoDB · Redis · WebSockets

---

## 🔧 Configuración Personalizada

### Cambiar items por página

**En `db.json`:**

```bash
# Antes:
http://localhost:3001/contents?_page=1&_per_page=10

# Después (cambiar _per_page):
http://localhost:3001/contents?_page=1&_per_page=20
```

**En `src/actions/getContents.tsx`:**

```typescript
const response = await axiosInstance.get("/contents", {
    params: {
        _page: page,
        _per_page: 15, // ← Cambiar aquí
    },
});
```

### Cambiar latencia simulada

**En `src/actions/getContents.tsx`:**

```typescript
export async function getContents(params: IGetContentsParams) {
    await sleep(1000); // ← Cambiar de 2500 a 1000
    // ...
}
```

### Cambiar puerto de json-server

**En `package.json`:**

```json
{
    "scripts": {
        "jserver": "json-server --watch src/db.json --port 5000"
        //                                              ↑ Cambiar puerto
    }
}
```

---

## 🐛 Solución de Problemas

### ❌ "Cannot GET /contents"

**Solución:** Verifica que json-server está corriendo en puerto 3001

```bash
npm run jserver
```

### ❌ "Network Error"

**Solución:** Asegúrate que ambos servidores están corriendo:

```bash
npm run concur
```

### ❌ Los datos no se actualizan

**Solución:** Espera 5 minutos (staleTime) o abre DevTools en red para ver requests

### ❌ next dev no inicia

**Solución:** Limpia caché de Next.js:

```bash
rm -rf .next
npm run dev
```

---

## 📚 Documentación Externa

- [Next.js 16 Docs](https://nextjs.org/docs)
- [React 19 Docs](https://react.dev)
- [TanStack Query Docs](https://tanstack.com/query/latest)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [json-server](https://github.com/typicode/json-server)

---

## 🏆 Best Practices Implementadas

✨ **Code Quality**

- Tipado completo con TypeScript
- No hay `any` types
- ESLint configurado

🎯 **Performance**

- Cachéo inteligente con TanStack Query
- Server Components cuando es posible
- Code splitting automático

🔐 **Seguridad**

- Server Actions para operaciones seguras
- Validación en servidor
- No exponemos secretos del servidor

🎨 **UX/UI**

- Estados de carga elegantes
- Mensajes claros al usuario
- Dark mode por defecto
- Responsive design

---

## 📄 Licencia

MIT License - Libre para usar como quieras.

---

## 🤝 Contribuciones

¿Tienes ideas? ¡Las pull requests son bienvenidas!

Simplemente:

1. Fork el repositorio
2. Crea una rama: `git checkout -b feature/TuFeature`
3. Commit: `git commit -m 'Agrega TuFeature'`
4. Push: `git push origin feature/TuFeature`
5. Abre un Pull Request

---

## 💬 Preguntas Frecuentes

**P: ¿Por qué TanStack Query en lugar de otro estado?**
A: Es el estándar de facto para gestión de estado del servidor en React. Maneja caché, revalidación y sincronización automáticamente.

**P: ¿Funciona sin json-server?**
A: Sí, puedes reemplazar `getContents()` para llamar a tu propia API. json-server es solo para desarrollo.

**P: ¿Cómo escalarlo a producción?**
A: Reemplaza json-server con una API real (Express, FastAPI, etc.) y despliega con Vercel, Netlify o tu hosting favorito.

**P: ¿Puedo usar esto como boilerplate?**
A: ¡Absolutamente! Es un excelente punto de partida para aplicaciones Next.js modernas.

---

## 📞 Soporte

Si tienes problemas:

1. Revisa la sección [Solución de Problemas](#-solución-de-problemas)
2. Abre un issue en GitHub
3. Consulta la documentación oficial de las librerías

---

<div align="center">

### Hecho con ❤️ usando Next.js, React, TanStack Query y Tailwind CSS

**Happy coding! 🚀**

[⬆ Volver al inicio](#-infinite-scroll-with-nextjs--tanstack-query)

</div>
