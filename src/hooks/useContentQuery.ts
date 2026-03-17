/**
 * Hook personalizado para obtener contenido de forma simple (no paginada).
 *
 * Hook que utiliza TanStack Query (useQuery) para obtener un listado
 * único de contenido sin paginación. Se configura para cachear datos
 * por 5 minutos.
 *
 * NOTA IMPORTANTE:
 *   Este hook no se utiliza actualmente en la aplicación.
 *   Se mantiene como referencia de query simple.
 *   La aplicación usa useContentInfinite() para infinite scroll.
 *
 * Exports:
 *   - useContent: Hook que retorna useContentQuery
 *
 * @see useContentInfinite - Hook actualmente usado (paginación infinita)
 * @see useQuery - Hook de TanStack Query aunque single query
 * @see getContents - Server Action que obtiene los datos
 *
 * @todo
 * Considerar usar este hook si se implementa un modo de "ver todo"
 * o página de búsqueda sin infinite scroll.
 */

import { getContents } from "@/actions/getContents";
import { useQuery } from "@tanstack/react-query";

/**
 * Hook para obtener todo el contenido en una sola query.
 *
 * Retorna todos los contenidos sin paginación en una única petición.
 * Los resultados se cachean por 5 minutos (staleTime).
 *
 * Configuración:
 *   - queryKey: ["contents"] - Clave única para identificar esta query
 *   - queryFn: llama getContents sin parámetros
 *   - staleTime: 5 minutos - Cuánto tiempo cachear los datos
 *   - refetchOnWindowFocus: heredado de QueryProvider (false)
 *
 * @hook
 * @returns {Object} Objeto con estado y datos de la query
 * @returns {Object.useContentQuery - Estado y datos:
 *   - data: Todos los contenidos (IContentResponse)
 *   - isLoading: true mientras se obtienen datos
 *   - isError: true si hay error
 *   - error: Objeto Error si isError = true
 *   - refetch: Función para refetch manual
 *
 * @example
 * // Usar en un componente
 * const { useContentQuery } = useContent();
 *
 * if (useContentQuery.isLoading) return <p>Cargando...</p>;
 * if (useContentQuery.isError) return <p>Error: {useContentQuery.error.message}</p>;
 *
 * return (
 *   <div>
 *     {useContentQuery.data?.data.map(item => (
 *       <div key={item.id}>{item.title}</div>
 *     ))}
 *   </div>
 * );
 *
 * @performance
 * - Problema: Obtiene TODOS los datos en una sola petición
 * - Solución: Usar useContentInfinite() para paginación (más eficiente)
 * - Cachéo: 5 minutos reduce peticiones repetidas
 *
 * @note
 * Este hook es una alternativa simple a useContentInfinite().
 * Si el API tiene muchísimos items, puede ser lento.
 * Para mejor performance, usar infinite scroll (useContentInfinite).
 *
 * @deprecated
 *   Preferir useContentInfinite() para mejor escalabilidad.
 *   Este hook solo útil para listados pequeños (< 100 items).
 */
export const useContent = () => {
    // Hook de TanStack Query para query simple (no paginada)
    const useContentQuery = useQuery({
        // Clave única para identificar esta query en el cache
        queryKey: ["contents"],
        // Función que obtiene los datos (sin parámetros)
        queryFn: () => getContents({}),
        // Cachea datos por 5 minutos (300000 ms)
        // Después: datos se marcan como "stale" pero se usan hasta que se refetch
        staleTime: 1000 * 60 * 5, // 5 minutes
    });

    return { useContentQuery };
};
