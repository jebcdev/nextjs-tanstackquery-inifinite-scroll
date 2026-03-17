/**
 * Componentes Card (tarjeta) de shadcn/ui.
 *
 * Conjunto de componentes composables de shadcn/ui para crear tarjetas.
 * Las tarjetas son contenedores visuales con estructura predefinida:
 *   - Card: Contenedor principal
 *   - CardHeader: Sección de encabezado
 *   - CardTitle: Título dentro del header
 *   - CardDescription: Descripción/subtexto
 *   - CardContent: Contenido principal
 *   - CardAction: Área de acción (lado derecho)
 *   - CardFooter: Pie de tarjeta
 *
 * Las tarjetas support dos tamaños: default y sm (pequeño).
 *
 * Ejemplo de uso:
 * ```tsx
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Título</CardTitle>
 *     <CardDescription>Descripción</CardDescription>
 *   </CardHeader>
 *   <CardContent>Contenido</CardContent>
 *   <CardFooter>Pie</CardFooter>
 * </Card>
 * ```
 *
 * @see https://ui.shadcn.com/docs/components/card
 */

import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Componente Card (contenedor principal de tarjeta).
 *
 * Renderiza un div con estilos de tarjeta:
 *   - Fondo de color card
 *   - Anillo (borde sutil) de color foreground/10
 *   - Padding y gap entre elementos
 *   - Soporta tamaño (default o sm)
 *
 * @component
 * @param {React.ComponentProps<"div">} props - Props estándar de div
 * @param {"default"|"sm"} [size="default"] - Tamaño de la tarjeta
 * @returns {JSX.Element} Contenedor tarjeta
 */
function Card({
    className,
    size = "default",
    ...props
}: React.ComponentProps<"div"> & { size?: "default" | "sm" }) {
    return (
        <div
            data-slot="card"
            data-size={size}
            // Estilos base de tarjeta con soporte de tamaño
            // ring-1 ring-foreground/10: borde sutil
            // has-data-[slot=card-footer]:pb-0: sin padding inferior si hay footer
            className={cn(
                "group/card flex flex-col gap-4 overflow-hidden rounded-none bg-card py-4 text-xs/relaxed text-card-foreground ring-1 ring-foreground/10 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-2 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-none *:[img:last-child]:rounded-none",
                className,
            )}
            {...props}
        />
    );
}

/**
 * Componente CardHeader (encabezado de tarjeta).
 *
 * Sección de encabezado con layout grid para título y descripción.
 * Soporta acciones en el lado derecho (CardAction).
 *
 * @component
 * @param {React.ComponentProps<"div">} props - Props estándar de div
 * @returns {JSX.Element} Sección de encabezado
 */
function CardHeader({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-header"
            // Grid layout para título y descripción
            // has-data-[slot=card-action]: ajusta grid si hay acción
            className={cn(
                "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-none px-4 group-data-[size=sm]/card:px-3 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3",
                className,
            )}
            {...props}
        />
    );
}

/**
 * Componente CardTitle (título de tarjeta).
 *
 * Título principal de la tarjeta con tamaño text-sm.
 *
 * @component
 * @param {React.ComponentProps<"div">} props - Props estándar de div
 * @returns {JSX.Element} Título
 */
function CardTitle({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-title"
            // Título con font medium y tamaño consistente
            className={cn(
                "text-sm font-medium group-data-[size=sm]/card:text-sm",
                className,
            )}
            {...props}
        />
    );
}

/**
 * Componente CardDescription (descripción de tarjeta).
 *
 * Texto descriptivo o subtexto bajo el título.
 * Usa color muted-foreground para contrastar con el title.
 *
 * @component
 * @param {React.ComponentProps<"div">} props - Props estándar de div
 * @returns {JSX.Element} Descripción
 */
function CardDescription({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-description"
            // Texto pequeño en color muted (gris) para contraste suave
            className={cn(
                "text-xs/relaxed text-muted-foreground",
                className,
            )}
            {...props}
        />
    );
}

/**
 * Componente CardAction (área de acción de tarjeta).
 *
 * Sección del lado derecho para botones, menús, o controles.
 * Se alinea automáticamente en el lado derecho.
 *
 * @component
 * @param {React.ComponentProps<"div">} props - Props estándar de div
 * @returns {JSX.Element} Área de acción
 */
function CardAction({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-action"
            // Posiciona en segundo columna (lado derecho) del grid
            // row-span-2: ocupa dos filas (título + descripción)
            className={cn(
                "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
                className,
            )}
            {...props}
        />
    );
}

/**
 * Componente CardContent (contenido de tarjeta).
 *
 * Sección principal de contenido con padding horizontal.
 *
 * @component
 * @param {React.ComponentProps<"div">} props - Props estándar de div
 * @returns {JSX.Element} Contenido principal
 */
function CardContent({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-content"
            // Padding horizontal consistente
            className={cn(
                "px-4 group-data-[size=sm]/card:px-3",
                className,
            )}
            {...props}
        />
    );
}

/**
 * Componente CardFooter (pie de tarjeta).
 *
 * Sección inferior con borde superior y padding.
 * Útil para botones de acción al pie.
 *
 * @component
 * @param {React.ComponentProps<"div">} props - Props estándar de div
 * @returns {JSX.Element} Pie de tarjeta
 */
function CardFooter({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-footer"
            // Flex layout con borde superior
            className={cn(
                "flex items-center rounded-none border-t p-4 group-data-[size=sm]/card:p-3",
                className,
            )}
            {...props}
        />
    );
}

// Exporta todos los componentes de tarjeta
export {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent,
};
