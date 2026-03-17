/**
 * Hook personalizado para infinite scroll paginado.
 *
 * Hook que utiliza TanStack Query (useInfiniteQuery) para gestionar
 * paginación infinita. Acumula múltiples páginas en un array y proporciona
 * métodos para cargar la siguiente página automáticamente.
 *
 * Funcionalidad principal:
 *   1. Carga inicial: página 1
 *   2. Acumula páginas: cada fetchNextPage() agrega una página más
 *   3. Detecta fin: cuando no hay más páginas, hasNextPage = false
 *   4. Cachéo: 5 minutos de cachéo automático
 *
 * Exports:
 *   - useContentInfinite: Hook que retorna useContentQueryInfinite
 *
 * @see useInfiniteQuery - Hook de TanStack Query para queries paginadas
 * @see getContents - Server Action que obtiene página específica
 * @see ContentGrid - Componente que lo utiliza
 *
 * @see https://tanstack.com/query/latest/docs/framework/react/guides/infinite-queries
 */

import { getContents } from "@/actions/getContents";
import { IContentResponse } from "@/types/content";
import { useInfiniteQuery } from "@tanstack/react-query";

/**
 * Hook para gestionar infinite scroll con paginación.
 *
 * Utiliza useInfiniteQuery de TanStack Query. Acumula todas las páginas
 * cargadas en data.pages y proporciona fetchNextPage() para cargar más.
 *
 * Configuración de paginación:
 *   - initialPageParam: 1 - Primera página a cargar
 *   - getNextPageParam: calcula el número de la siguiente página
 *     • Si allPages.length >= lastPage.pages: retorna undefined (fin)
 *     • Sino: retorna allPages.length + 1 (siguiente página)
 *
 * Opciones de caché y refetch:
 *   - staleTime: 5 minutos - Cachea datos
 *   - refetchOnWindowFocus: false - No refetch al cambiar pestaña
 *   - refetchOnReconnect: false - No refetch al reconectar internet
 *
 * @hook
 * @returns {Object} Objeto con estado y funciones:
 *   {
 *     useContentQueryInfinite: {
 *       data: { pages: IContentResponse[] },  // Todas las páginas cargadas
 *       isLoading: boolean,                    // Primera carga en progreso
 *       isFetchingNextPage: boolean,           // Cargando página siguiente
 *       hasNextPage: boolean,                  // ¿Hay más páginas?
 *       fetchNextPage: () => Promise,          // Función para cargar siguiente
 *       isError: boolean,                      // Error en petición
 *       error: Error | null                    // Objeto error si aplica
 *     }
 *   }
 *
 * @example
 * // Usar en componente
 * const { useContentQueryInfinite } = useContentInfinite();
 *
 * // Chequear estado de carga inicial
 * if (useContentQueryInfinite.isLoading) return <Spinner />;
 * if (useContentQueryInfinite.isError) return <ErrorMsg />;
 *
 * // Renderizar todas las páginas
 * useContentQueryInfinite.data?.pages.forEach(page => {
 *   page.data.forEach(item => renderCard(item));
 * });
 *
 * // Mostrar botón si hay más
 * if (useContentQueryInfinite.hasNextPage) {
 *   <button onClick={() => useContentQueryInfinite.fetchNextPage()}>
 *     Cargar más
 *   </button>
 * }
 *
 * @performance
 * - Acumula páginas: todas las cargadas se mantienen en memoria
 * - Cachéo: 5 minutos evita refetch innecesarios
 * - Sin refetch en cambios de foco/reconexión: mejor UX
 * - Escalable: maneja 1000+ items sin problema
 *
 * @note
 * - getNextPageParam determina si hay más o no
 * - Si lastPage.pages = 2 y allPages.length = 2: no hay más
 * - fetchNextPage() se desactiva si isFetchingNextPage = true
 * - Cada página es una IContentResponse completa
 *
 * @see Infinite Queries - https://tanstack.com/query/latest/docs/framework/react/guides/infinite-queries
 */
export const useContentInfinite = () => {
    // Hook de TanStack Query para queries paginadas infinitas
    const useContentQueryInfinite =
        useInfiniteQuery<IContentResponse>({
            // Clave única para identificar esta query en el cache
            queryKey: ["contents"],

            // Función que obtiene una página específica
            // pageParam viene de initialPageParam o getNextPageParam
            queryFn: ({ pageParam }) =>
                getContents({ page: pageParam as number }),

            // Número inicial de página: comienza en 1
            initialPageParam: 1,

            // Función que calcula el siguiente pageParam
            // Recibe:
            //   - lastPage: la última página cargada (IContentResponse)
            //   - allPages: array de todas las páginas cargadas hasta ahora
            // Retorna:
            //   - número para siguiente página (else se carga)
            //   - undefined para indicar que no hay más páginas (fin)
            getNextPageParam: (lastPage, allPages) => {
                // Si ya cargamos todas las páginas (allPages.length >= lastPage.pages)
                // retorna undefined para indicar que no hay más contenido
                if (allPages.length >= lastPage.pages)
                    return undefined;
                // Sino, calcula la siguiente página como total de páginas cargadas + 1
                // Ejemplo: allPages.length = 1 → siguiente = 2
                return allPages.length + 1;
            },

            // Cachea datos por 5 minutos (300000 ms)
            // Después: se marca como stale pero se sigue usando hasta refetch
            staleTime: 1000 * 60 * 5,

            // No hace refetch cuando el navegador regresa a esta pestaña
            // Mejora UX: evita recarga innecesaria
            refetchOnWindowFocus: false,

            // No hace refetch cuando reconecta a internet
            // Mejora UX: previene recargas molestas
            refetchOnReconnect: false,
        });

    return { useContentQueryInfinite };
};
