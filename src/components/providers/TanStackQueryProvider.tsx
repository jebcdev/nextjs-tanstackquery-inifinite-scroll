/**
 * Proveedor de configuración global de TanStack Query (React Query).
 *
 * Componente Client que envuelve la aplicación con QueryClientProvider,
 * proporcionando acceso global a React Query en toda la app.
 *
 * Configuración global:
 *   - refetchOnWindowFocus: false - No refetch al cambiar de pestaña
 *   - retry: false - No reintentar en caso de error
 *   - Devtools: Habilitadas pero cerradas por defecto
 *
 * Estructura:
 *   1. QueryClient: instancia centralizadas con opciones por defecto
 *   2. QueryClientProvider: envuelve children con el cliente
 *   3. ReactQueryDevtools: panel de debug en desarrollo
 *
 * Exports:
 *   - TanStackQueryProvider: Componente Client funcional (default export)
 *
 * @see QueryClient - Instancia de configuración
 * @see useQuery, useInfiniteQuery - Hooks que usan este provider
 * @see app/layout.tsx - Donde se usa este provider
 * @see https://tanstack.com/query - Documentación oficial
 */

"use client";
import {
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

/**
 * Instancia global de QueryClient con configuración predeterminada.
 *
 * Configura:
 *   - refetchOnWindowFocus: false
 *     • No hace refetch cuando se regresa a la pestaña del navegador
 *     • Mejor UX: evita refetch innecesarios
 *
 *   - retry: false
 *     • No reintenta peticiones fallidas automáticamente
 *     • Alternativa: implementar retry logic manual si se necesita
 *
 * @type {QueryClient}
 * @constant
 */
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // No hace refetch cuando se cambia de pestaña (better UX)
            refetchOnWindowFocus: false,
            // No reintenta fallos automáticamente (mejor control manual)
            retry: false,
        },
    },
});

/**
 * Proveedor de TanStack Query para toda la aplicación.
 *
 * Componente Client que proporciona QueryClient a todos sus hijos.
 * Es necesario envolver la app con este provider para usar React Query.
 *
 * Estructura renderizada:
 *   1. QueryClientProvider: proporciona queryClient a children
 *   2. {children}: todas las rutas y componentes
 *   3. ReactQueryDevtools: panel de debug (solo en dev)
 *
 * @component
 * @param {Object} props - Props del componente
 * @param {React.ReactNode} props.children - Contenido a envolver
 * @returns {JSX.Element} Provider wrapping children
 *
 * @example
 * // Se usa en app/layout.tsx
 * <TanStackQueryProvider>
 *   {children}
 * </TanStackQueryProvider>
 *
 * @note
 * - Debe estar lo más alto en la jerarquía de componentes
 * - Permite a todos los hooks (useQuery, etc.) acceder al cliente
 * - Devtools est activos en development, cerrados por defecto
 *
 * @access
 * - useQuery() ✅ Disponible en todos los componentes
 * - useInfiniteQuery() ✅ Disponible en todos los componentes
 * - useQueryClient() ✅ Disponible para acceder al cliente
 * - useMutation() ✅ Disponible para operaciones (si se implementan)
 */
export default function TanStackQueryProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        // QueryClientProvider: hace disponible queryClient a todos los hijos
        <QueryClientProvider client={queryClient}>
            {/* Contenido de la aplicación */}
            {children}

            {/* DevTools: panel de debug de React Query */}
            {/* initialIsOpen={false}: comienza cerrado para mejor UX */}
            {/* Solo disponible en desarrollo (se elimina en build) */}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}
