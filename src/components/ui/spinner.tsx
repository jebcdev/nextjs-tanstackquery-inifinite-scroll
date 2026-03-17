/**
 * Componente Spinner (rotador/cargador) de shadcn/ui.
 *
 * Componente pequeño y simple que renderiza un spinner animado
 * usando el ícono Loader2 de Lucide React.
 *
 * Uso:
 *   <Spinner />
 *   <Spinner className="h-8 w-8" />
 *   <Spinner className="text-primary" />
 *
 * El spinner:
 *   - Renderi aplicación de 4 × 4px (size-4)
 *   - Rota continuamente (animate-spin de Tailwind)
 *   - Soporta clases CSS personalizadas
 *   - Accesible: tiene role="status" y aria-label="Loading"
 *
 * @see https://ui.shadcn.com/docs/components/spinner
 * @see https://lucide.dev - Librería de iconos
 */

import { cn } from "@/lib/utils";
import { Loader2Icon } from "lucide-react";

/**
 * Componente Spinner (cargador animado).
 *
 * Renderiza un icono Loader2 de Lucide que rota continuamente.
 * Útil como indicador de carga o estado de procesamiento.
 *
 * Características:
 *   - Pequeño: 16 × 16px por defecto (size-4)
 *   - Accesible: role="status" para lectores de pantalla
 *   - Anima animado: rotate 4 segundos (animate-spin de Tailwind)
 *   - Personalizable: soporta className adicionales
 *
 * @component
 * @param {React.ComponentProps<"svg">} props - Props estándar de SVG
 * @param {string} [props.className] - Clases CSS adicionales para personalizar
 * @returns {JSX.Element} Spinner SVG animado
 *
 * @example
 * // Spinner default (pequeño)
 * <Spinner />
 *
 * @example
 * // Spinner más grande
 * <Spinner className="h-8 w-8" />
 *
 * @example
 * // Spinner con color custom
 * <Spinner className="text-primary" />
 *
 * @example
 * // Dentro de un contenedor de carga
 * <div className="flex items-center gap-2">
 *   <Spinner />
 *   <p>Cargando datos...</p>
 * </div>
 *
 * @note
 * - El SVG es muy pequeño por defecto (4x4), perfectamente escalable
 * - El icono Loader2Icon de Lucide es una flecha circular
 * - La animación es suave ('duration-4' de Tailwind)
 * - Ùtil como fallback o indicador de progreso indeterminado
 *
 * @a11y
 * - role="status": permite a lectores de pantalla identificar como carga
 * - aria-label="Loading": etiqueta descriptiva
 */
function Spinner({
    className,
    ...props
}: React.ComponentProps<"svg">) {
    return (
        // Loader2Icon: ícono circular con flecha de Lucide
        // size-4: 16 × 16px
        // animate-spin: rotación continua de 4 segundos
        // role="status": indica al navegador que es estado de carga
        // aria-label: texto alternativo para accesibilidad
        <Loader2Icon
            role="status"
            aria-label="Loading"
            // Combina clases base (size-4 animate-spin) con personalizadas
            className={cn("size-4 animate-spin", className)}
            {...props}
        />
    );
}

export { Spinner };
