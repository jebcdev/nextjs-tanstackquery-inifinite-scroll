/**
 * Componente de spinner de carga.
 *
 * Componente Client que muestra un spinner de carga animado
 * con texto "Cargando..." pulsante. Se utiliza como fallback
 * de Suspense en la página Home mientras se carga ContentGrid.
 *
 * Renderiza:
 *   - Spinner circular animado (CSS animation spin)
 *   - Texto "Cargando..." con animación de opacidad
 *   - Posicionado en centro de pantalla (fixed)
 *
 * Exports:
 *   - LoadingSpinner: Componente Client funcional
 *
 * @see Home page - Usado en Suspense boundary
 * @see ContentGrid - Mostrado mientras se carga si es necesario
 */

"use client";

/**
 * Componente de spinner de carga centrado.
 *
 * Renderiza un spinner circular animado que cubre toda la pantalla.
 * Útil como fallback de Suspense o estado de carga inicial.
 *
 * Características:
 *   - Fixed positioning: cubre todo el viewport
 *   - Flexbox centered: spinner en medio de pantalla
 *   - Animaciones: spin (rotate) + pulse (opacidad)
 *   - Responsive: se adapta a cualquier tamaño de pantalla
 *
 * @component
 * @returns {JSX.Element} Div con spinner y texto de carga
 *
 * @example
 * // Usar en Suspense
 * <Suspense fallback={<LoadingSpinner />}>
 *   <ContenidoLargo />
 * </Suspense>
 *
 * @example
 * // Usar en estado de carga
 * const [loading, setLoading] = useState(true);
 * return loading ? <LoadingSpinner /> : <Contenido />;
 *
 * @note
 * - Cubre toda la pantalla (fixed inset-0)
 * - Usa colores de tema: border-muted y border-t-primary
 * - animate-spin: rotación suave de Tailwind (4 segundos)
 * - animate-pulse: parpadeo del texto
 */
export const LoadingSpinner = () => {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center gap-3">
            {/* Spinner circular animado */}
            {/* size-10: 40px de ancho y alto */}
            {/* border-4: borde de 4px */}
            {/* border-muted: color muted (gris) para la mayor parte del circulo */}
            {/* border-t-primary: color primary solo en la parte superior (efecto de rotación) */}
            {/* animate-spin: animación de rotación infinita de Tailwind */}
            <div className="size-10 rounded-full border-4 border-muted border-t-primary animate-spin" />

            {/* Texto de estado de carga */}
            {/* text-sm: tamaño pequeño */}
            {/* text-muted-foreground: color gris oscuro del texto */}
            {/* animate-pulse: parpadeo suave (opacidad de 0.5 a 1) */}
            {/* tracking-widest: espaciado amplio entre letras */}
            {/* uppercase: convierte texto a mayúsculas */}
            <p className="text-sm text-muted-foreground animate-pulse tracking-widest uppercase">
                Cargando...
            </p>
        </div>
    );
};
