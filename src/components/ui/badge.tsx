/**
 * Componentes Badge (insignia/etiqueta) de shadcn/ui.
 *
 * Componentes reutilizables de shadcn/ui para mostrar insignias/etiquetas.
 * Utiliza library CVA (Class Variance Authority) para manejar variantes
 * de estilo de forma type-safe.
 *
 * Componentes exportados:
 *   - Badge: Componente de insignia personalizable
 *   - badgeVariants: CVA que define las variantes de estilo
 *
 * Variantes disponibles:
 *   - default: Fondo primary con texto primary-foreground
 *   - secondary: Fondo secondary con texto secondary-foreground
 *   - destructive: Fondo rojo desaturado (para alertas)
 *   - outline: Solo borde, sin relleno
 *   - ghost: Efecto fantasma (solo hover)
 *   - link: Estilo de enlace con subrayado
 *
 * Uso:
 *   <Badge variant="default">Etiqueta</Badge>
 *   <Badge variant="outline">Borde</Badge>
 *   <Badge variant="destructive">Peligro</Badge>
 *
 * @see https://ui.shadcn.com/docs/components/badge
 * @see CVA (Class Variance Authority) - Type-safe CSS class utilities
 */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

/**
 * Definición de variantes de Badge usando CVA.
 *
 * Define estilos base y variantes type-safe para el componente Badge.
 * Permite cambiar estilos dinámicamente con TypeScript.
 *
 * Estilos base (aplicado a todas las variantes):
 *   - Flex with justify-center: contenido centrado
 *   - gap-1: poco espacio entre elementos
 *   - shrink-0: no se reduce
 *   - px-2 py-0.5: padding pequeño
 *   - text-xs: texto muy pequeño
 *   - border border-transparent: borde invisible por defecto
 *   - transition-all: transiciones suaves
 *
 * Variantes:
 *   - default: Badge normal (fondo primary)
 *   - secondary: Badge secundario
 *   - destructive: Badge para destrucción/error
 *   - outline: Solo borde
 *   - ghost: Sin borde ni fondo (solo hover)
 *   - link: Estilo de enlace
 */
const badgeVariants = cva(
    "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-none border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
    {
        variants: {
            variant: {
                // Variante default: badge normal con colores primary
                default:
                    "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
                // Variante secondary: colores secundarios
                secondary:
                    "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
                // Variante destructive: para alertas/errores (rojo desaturado)
                destructive:
                    "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
                // Variante outline: solo borde, sin relleno
                outline:
                    "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
                // Variante ghost: sin borde, aparece en hover
                ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
                // Variante link: parecido a un hipervínculo
                link: "text-primary underline-offset-4 hover:underline",
            },
        },
        // Variante por defecto si no se especifica otra
        defaultVariants: {
            variant: "default",
        },
    },
);

/**
 * Componente Badge personalizable.
 *
 * Renderiza una insignia/etiqueta HTML. Soporta:
 *   - Múltiples variantes de estilo (default, outline, destructive, etc.)
 *   - Clases CSS personalizadas
 *   - Soporte para Radix Slot (puede ser otro componente)
 *
 * @component
 * @param {React.ComponentProps<"span">} props - Props estándar de span
 * @param {"default"|"secondary"|"destructive"|"outline"|"ghost"|"link"} [variant="default"] - Variante de estilo
 * @param {string} [className] - Clases CSS adicionales (sobrescribe variante)
 * @param {boolean} [asChild=false] - Si true, renderiza hijos en lugar de span
 * @returns {JSX.Element} Componente Badge renderizado
 *
 * @example
 * // Badge default
 * <Badge>Etiqueta</Badge>
 *
 * @example
 * // Badge con variante
 * <Badge variant="outline">Borde</Badge>
 *
 * @example
 * // Badge destructive con clases personalizadas
 * <Badge variant="destructive" className="text-lg">Error</Badge>
 */
function Badge({
    className,
    variant = "default",
    asChild = false,
    ...props
}: React.ComponentProps<"span"> &
    VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
    // Si asChild=true, usa Radix Slot para renderizar hijos como elemento
    // Si asChild=false, renderiza como span normal
    const Comp = asChild ? Slot.Root : "span";

    return (
        <Comp
            data-slot="badge"
            data-variant={variant}
            // Combina clases de variante con clases personalizadas
            // cn() resuelve conflictos de Tailwind
            className={cn(badgeVariants({ variant }), className)}
            {...props}
        />
    );
}

// Exporta el componente y las variantes para usar fuera
export { Badge, badgeVariants };
