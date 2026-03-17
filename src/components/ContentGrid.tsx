/**
 * Componente de grid con infinite scroll.
 *
 * Componente Client que orquesta todo el sistema de infinite scroll.
 * Gestiona estados de carga, renderizado de tarjetas y el botón de carga.
 *
 * Funcionalidad:
 *   1. Carga inicial: muestra LoadingSpinner mientras obtiene primera página
 *   2. Renderiza todas las tarjetas cargadas hasta el momento
 *   3. Mostrar botón "Cargar más" si hay más páginas disponibles
 *   4. Mostrar mensaje de fin cuando no hay más contenido
 *   5. Estados visuales: pulse en grid mientras carga, bounce en botón
 *
 * Estados manejados:
 *   - isLoading: Primera carga (muestra spinner)
 *   - isError: Error en petición (muestra mensaje)
 *   - isFetchingNextPage: Cargando página siguiente (anima grid)
 *   - hasNextPage: Botón disponible si hay más contenido
 *
 * Exports:
 *   - ContentGrid: Componente Client funcional
 *
 * @see useContentInfinite - Hook que gestiona el estado infinito
 * @see ContentCard - Componente renderizado por cada artículo
 * @see getContents - Server Action que obtiene páginas
 * @see TanStack Query - Librería de gestión de estado del servidor
 */

"use client";

import clsx from "clsx";
import { ContentCard } from "./ContentCard";
import { useContentInfinite } from "@/hooks/useContentQueryInfinite";
import { LoadingSpinner } from "./LoadingSpinner";
import { Button } from "@/components/ui/button";

/**
 * Grid de contenido con paginación infinita.
 *
 * Componente principal que maneja el flujo completo de infinite scroll.
 * Utiliza useContentInfinite para gestionar queries paginadas.
 *
 * Renderiza:
 *   1. LoadingSpinner: mientras carga la primera página
 *   2. Mensaje de error: si la petición falla
 *   3. Grid de tarjetas: todas las páginas cargadas hasta ahora
 *   4. Botón "Cargar más": si hay más páginas disponibles
 *   5. "Ya viste todo 👀": cuando se llega al final
 *
 * Estados del botón "Cargar más":
 *   - Habilitado: hasNextPage = true, isFetchingNextPage = false
 *   - Cargando: muestra "Cargando..." + disabled + animate-bounce
 *   - Deshabilitado: hasNextPage = false (ocultado) o error
 *
 * @component
 * @returns {JSX.Element} Grid completo con infinite scroll o fallback
 *
 * @example
 * // Se renderiza en Home page dentro de Suspense
 * <Suspense fallback={<LoadingSpinner />}>
 *   <ContentGrid />
 * </Suspense>
 *
 * @note
 * - Cliente component necesario para hooks y event handlers
 * - Usa TanStack Query para caching y state management
 * - Peticiones controladas por useContentInfinite hook
 * - Estilos Tailwind CSS para respuesta
 *
 * @performance
 * - Solo renderiza tarjetas de páginas ya cargadas (no virtualizadas)
 * - Cachéo automático de 5 minutos (staleTime en hook)
 * - No refetch al cambiar de pestaña: refetchOnWindowFocus: false
 */
export const ContentGrid = () => {
    // Hook que gestiona el estado del infinite query
    // Retorna: data, isLoading, isError, isFetchingNextPage, hasNextPage, fetchNextPage
    const { useContentQueryInfinite } = useContentInfinite();

    // Estado 1: Primera carga en progreso
    // Muestra spinner centrado mientras se obtiene la primera página
    if (useContentQueryInfinite.isLoading) return <LoadingSpinner />;

    // Estado 2: Error en la petición
    // Muestra mensaje de error simple al usuario
    if (useContentQueryInfinite.isError)
        return <div>Error cargando contenido.</div>;

    return (
        <div
            className={clsx(
                "w-full max-w-2xl mx-auto px-4 py-6 flex flex-col gap-3",
                // Añade animación pulse mientras se carga la siguiente página
                // Proporciona feedback visual de que algo está pasando
                {
                    "animate-pulse":
                        useContentQueryInfinite.isFetchingNextPage,
                },
            )}
        >
            {/* Mapea cada página cargada y renderiza sus contenidos */}
            {/* data.pages es un array de IContentResponse */}
            {/* Cada página contiene array de IContent en su propiedad data */}
            {useContentQueryInfinite.data?.pages.map((page) =>
                // Para cada artículo de la página, renderiza una ContentCard
                // key=content.id: React clave única para reconciliación
                page.data.map((content) => (
                    <ContentCard key={content.id} content={content} />
                )),
            )}

            {/* Botón "Cargar más" - Solo visible si hay más páginas */}
            {/* Se desactiva mientras se está cargando la siguiente página */}
            {useContentQueryInfinite.hasNextPage && (
                <Button
                    // Click handler: obtiene y concatena la siguiente página
                    onClick={() =>
                        useContentQueryInfinite.fetchNextPage()
                    }
                    // Desactiva botón mientras está cargando (previene clicks duplicados)
                    disabled={
                        useContentQueryInfinite.isFetchingNextPage
                    }
                    className="w-full mt-4 disabled:animate-bounce"
                >
                    {/* Muestra texto dinámico según el estado de carga */}
                    {useContentQueryInfinite.isFetchingNextPage
                        ? "Cargando..."
                        : "Cargar más"}
                </Button>
            )}

            {/* Mensaje final - Aparece cuando no hay más páginas */}
            {/* Confirma al usuario que vio todo el contenido disponible */}
            {!useContentQueryInfinite.hasNextPage && (
                <p className="text-center text-sm text-muted-foreground py-4">
                    Ya viste todo 👀
                </p>
            )}
        </div>
    );
};
