/**
 * Componente de tarjeta para mostrar un artículo de contenido.
 *
 * Componente funcional que renderiza un artículo individual como una
 * tarjeta visual. La tarjeta incluye un avatar circular con el ID,
 * título del artículo, descripción y un badge.
 *
 * Características visuales:
 *   - Tarjeta contenedora con bordes y sombra
 *   - Avatar circular con ID del artículo
 *   - Títitud y descripción textuales
 *   - Badge con ID (solo en pantallas >= sm)
 *   - Efectos hover: sombra aumentada y traslación hacia arriba
 *   - Dark mode compatible
 *
 * Exports:
 *   - ContentCard: Componente Server funcional
 *
 * @see IContent - Interface de tipos para propiedades
 * @see ContentGrid - Componente que renderiza múltiples ContentCards
 * @see Card, CardHeader, CardTitle - Componentes de shadcn/ui
 */

import { IContent } from "@/types/content";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/**
 * Interface para propiedades del componente ContentCard.
 *
 * @interface IContentCardProps
 * @property {IContent} content - Objeto con datos del artículo a mostrar
 */
interface IContentCardProps {
    content: IContent;
}

/**
 * Tarjeta visual para mostrar un artículo de contenido.
 *
 * Renderiza un artículo con diseño horizontal: avatar | contenido.
 * Incluye efectos hover interactivos para mejorar la UX.
 *
 * Estructura visual:
 *   1. Contenedor Card: tarjeta con bordes y sombra
 *   2. CardHeader: contenedor horizontal con flexbox
 *   3. Avatar circular: ID del artículo en circulo de color primary
 *   4. Contenedor derecho: título, descripción y badge
 *
 * Estilos de interacción:
 *   - Hover: shadow-md (sombra aumentada) + -translate-y-0.5 (traslación arriba)
 *   - Transición suave: duration-200 (200ms)
 *
 * @component
 * @param {IContentCardProps} props - Propiedades del componente
 * @param {IContent} props.content - Artículo a mostrar
 * @returns {JSX.Element} Tarjeta visual del artículo
 *
 * @example
 * <ContentCard content={{ id: '1', title: 'React', description: 'Librería UI' }} />
 *
 * @note
 * - Es un Server Component (sin 'use client')
 * - Badge solo visible en pantallas sm+ (hidden en móvil)
 * - Avatar muestra solo el ID (ej: "1", "42", "123")
 * - Componentes shadcn/ui: Card, CardHeader, CardTitle, Badge
 */
export const ContentCard = ({ content }: IContentCardProps) => {
    return (
        <Card className="w-full transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
            {/* CardHeader: contenedor horizontal que agrupa el contenido */}
            {/* flex flex-row: disposición horizontal */}
            {/* items-start: alinea items al inicio (arriba) */}
            {/* gap-4: espacio de 1rem entre avatar y contenido */}
            <CardHeader className="flex flex-row items-start gap-4">
                {/* Avatar circular con ID del artículo */}
                {/* h-10 w-10: 40px de ancho y alto (pequeño pero visible) */}
                {/* shrink-0: evita que se comprima en flex (mantiene tamaño) */}
                {/* items-center justify-center: centra el texto ID */}
                {/* bg-primary/10: fondo del color primary con opacidad 10% */}
                {/* text-primary: texto del color primary */}
                {/* font-bold text-sm: texto pequeño y negrita */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">
                    {content.id}
                </div>

                {/* Contenedor derecho con título y descripción */}
                {/* flex flex-col: disposición vertical */}
                {/* gap-1: espacio pequeño entre título y descripción */}
                <div className="flex flex-col gap-1">
                    {/* Fila con título y badge */}
                    {/* flex items-center gap-2: disposición horizontal centrada */}
                    <div className="flex items-center gap-2">
                        {/* Título del artículo */}
                        {/* text-base: tamaño de texto base */}
                        {/* leading-snug: altura de línea compacta */}
                        <CardTitle className="text-base leading-snug">
                            {content.title}
                        </CardTitle>

                        {/* Badge con ID (solo visible en pantallas small+) */}
                        {/* variant="outline": estilo de borde sin relleno */}
                        {/* text-xs: texto muy pequeño */}
                        {/* hidden sm:inline-flex: oculto en móvil, visible desde sm */}
                        <Badge
                            variant="outline"
                            className="text-xs hidden sm:inline-flex"
                        >
                            #{content.id}
                        </Badge>
                    </div>

                    {/* Descripción del artículo */}
                    {/* text-sm: texto pequeño */}
                    {/* leading-relaxed: altura de línea cómoda para lectura */}
                    <CardDescription className="text-sm leading-relaxed">
                        {content.description}
                    </CardDescription>
                </div>
            </CardHeader>
        </Card>
    );
};
