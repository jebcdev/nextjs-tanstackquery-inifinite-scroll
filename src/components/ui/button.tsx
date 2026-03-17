/**
 * Componentes Button (botón) de shadcn/ui.
 *
 * Componentes reutilizables de shadcn/ui para botones.
 * Utiliza CVA (Class Variance Authority) para manejar:
 *   - Múltiples variantes de estilo (default, outline, ghost, etc.)
 *   - Múltiples tamaños (xs, sm, default, lg, icon)
 *   - Estados interactivos (hover, active, disabled, focus)
 *
 * Componentes exportados:
 *   - Button: Componente de botón personalizable
 *   - buttonVariants: CVA que define variantes y tamaños
 *
 * Variantes disponibles:
 *   - default: Botón normal con colores primary
 *   - outline: Solo borde, fondo tránsparente
 *   - secondary: Colores secundarios
 *   - ghost: Sin borde ni relleno (solo hover)
 *   - destructive: Para acciones de eliminación/error
 *   - link: Estilo de hipervínculo
 *
 * Tamaños disponibles:
 *   - xs: Muy pequeño (6px altura)
 *   - sm: Pequeño (7px altura)
 *   - default: Normal (8px altura)
 *   - lg: Grande (9px altura)
 *   - icon: Cuadrado para solo ícono
 *
 * @see https://ui.shadcn.com/docs/components/button
 * @see CVA (Class Variance Authority) - Type-safe CSS utilities
 */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

/**
 * Definición de variantes y tamaños de Botón usando CVA.
 *
 * Estilos base (aplicado a todos los botones):
 *   - Flex with items-center justify-center: contenido centrado
 *   - Transiciones suaves
 *   - Focus ring visible
 *   - Estados disabled (opacidad 50%)
 *   - Active press effect (1px translate-y)
 *
 * Variantes:
 *   - default: Botón normal (primary)
 *   - outline: Solo borde
 *   - secondary: Colores secundarios
 *   - ghost: Sin estilo base (solo hover)
 *   - destructive: Rojo para acciones destructivas
 *   - link: Parecido a hipervínculo
 *
 * Tamaños:
 *   - xs: Más pequeño, para espacios compactos
 *   - sm: Pequeño, para UI densa
 *   - default: Normal, más común
 *   - lg: Grande, para acciones principales
 *   - icon: Solo ícono cuadrado
 */
const buttonVariants = cva(
    "group/button inline-flex shrink-0 items-center justify-center rounded-none border border-transparent bg-clip-padding text-xs font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    {
        variants: {
            variant: {
                // Variante default: botón normal con colores primary
                default:
                    "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
                // Variante outline: solo borde sin relleno
                outline:
                    "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
                // Variante secondary: colores secundarios
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
                // Variante ghost: sin estilo, solo hover tiene efecto
                ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
                // Variante destructive: rojo para acciones peligrosas
                destructive:
                    "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
                // Variante link: parecido a enlace con subrayado en hover
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                // Tamaño default: botón normal
                default:
                    "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
                // Tamaño xs: muy pequeño
                xs: "h-6 gap-1 rounded-none px-2 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
                // Tamaño sm: pequeño
                sm: "h-7 gap-1 rounded-none px-2.5 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
                // Tamaño lg: grande
                lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
                // Tamaño icon: cuadrado para solo ícono
                icon: "size-8",
                // Variantes de icon: icon pequeño, medio, grande
                "icon-xs":
                    "size-6 rounded-none [&_svg:not([class*='size-'])]:size-3",
                "icon-sm": "size-7 rounded-none",
                "icon-lg": "size-9",
            },
        },
        // Valores por defecto si no se especifican
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);

/**
 * Componente Botón personalizable.
 *
 * Renderiza un botón HTML. Soporta:
 *   - Múltiples variantes (default, outline, ghost, etc.)
 *   - Múltiples tamaños (xs, sm, default, lg, icon)
 *   - Clases CSS personalizadas
 *   - Radix Slot para usar otro componente como botón
 *
 * @component
 * @param {React.ComponentProps<"button">} props - Props estándar de button
 * @param {VariantProps<typeof buttonVariants>} variant - Variante de estilo
 * @param {VariantProps<typeof buttonVariants>} size - Tamaño del botón
 * @param {string} [className] - Clases CSS adicionales
 * @param {boolean} [asChild=false] - Si true, renderiza hijos como elemento
 * @returns {JSX.Element} Componente Botón renderizado
 *
 * @example
 * // Botón default
 * <Button>Click me</Button>
 *
 * @example
 * // Botón con variante y tamaño
 * <Button variant="outline" size="lg">
 *   Cargar más
 * </Button>
 *
 * @example
 * // Botón destructive
 * <Button variant="destructive">Eliminar</Button>
 *
 * @example
 * // Botón deshabilitado
 * <Button disabled>Deshabilitado</Button>
 */
function Button({
    className,
    variant = "default",
    size = "default",
    asChild = false,
    ...props
}: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
    }) {
    const Comp = asChild ? Slot.Root : "button";

    return (
        <Comp
            data-slot="button"
            data-variant={variant}
            data-size={size}
            className={cn(
                buttonVariants({ variant, size, className }),
            )}
            {...props}
        />
    );
}

export { Button, buttonVariants };
