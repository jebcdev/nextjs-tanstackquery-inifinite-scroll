/**
 * Layout raíz de la aplicación.
 *
 * Componente Server de Next.js que establece la estructura HTML base
 * y configuración global de la aplicación. Incluye:
 *   - Importación de estilos globales (Tailwind CSS, shadcn/ui)
 *   - Carga de fuentes de Google (Geist, JetBrains Mono)
 *   - Provider de TanStack Query para whole app
 *   - Metadata SEO de la página raíz
 *
 * Estructura:
 *   - RootLayout: Componente que renderiza estructura HTML
 *   - metadata: Objeto exportado con información SEO
 *
 * @see TanStackQueryProvider - Proveedor de React Query
 * @see Next.js Layouts - https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import TanStackQueryProvider from "@/components/providers/TanStackQueryProvider";

/**
 * Configuración de fuente JetBrains Mono desde Google Fonts.
 * Utilizada como fuente monoespaciada en la clase global --font-mono.
 */
const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
});

/**
 * Configuración de fuente Geist Sans desde Google Fonts.
 * Fuente sans-serif moderna para cuerpo de texto.
 */
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

/**
 * Configuración de fuente Geist Mono desde Google Fonts.
 * Alternativa monoespaciada a JetBrains.
 */
const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

/**
 * Metadata SEO de la página raíz.
 *
 * Información que aparece en:
 *   - Pestaña del navegador (title)
 *   - Meta descripción en resultados de búsqueda
 *   - Preview en redes sociales (si se comparte)
 *
 * @type {Metadata}
 */
export const metadata: Metadata = {
    title: "Infinite Scroll Demo",
    description:
        "Práctica de infinite scroll con Next.js, TanStack Query y json-server",
};

/**
 * Layout raíz de la aplicación.
 *
 * Componente Server que renderiza la estructura HTML principal.
 * Todos sus descendientes son "hijos" de este layout.
 *
 * Estructura rendida:
 *   1. Elemento <html> con configuración de idioma y fuentes
 *   2. Elemento <body> con estilos Tailwind (dark mode)
 *   3. TanStackQueryProvider: Envuelve children con React Query
 *   4. {children}: Contenido de rutas específicas (ej: /page.tsx)
 *
 * @component
 * @param {Object} props - Props del componente
 * @param {React.ReactNode} props.children - Contenido renderizado por rutas
 * @returns {JSX.Element} Estructura HTML principal
 *
 * @example
 * // Este layout se aplica a:
 * // - /page.tsx (Home)
 * // - Todas las rutas dentro de app/
 *
 * // Estructura final:
 * // <html lang="en">
 * //   <body dark>
 * //     <TanStackQueryProvider>
 * //       {children}
 * //     </TanStackQueryProvider>
 * //   </body>
 * // </html>
 */
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            // Combina clases: font-mono de Tailwind + variable de JetBrains
            // cn() resuelve conflictos entre clases Tailwind
            className={cn("font-mono", jetbrainsMono.variable)}
        >
            <body
                // Aplica variables de fuentes: geistSans y geistMono
                // antialiased: suaviza el render de texto
                // dark: activa tema oscuro definido en globals.css
                // p-0.5: pequeño padding para separación del viewport
                className={`${geistSans.variable} ${geistMono.variable} antialiased dark p-0.5`}
            >
                {/* TanStackQueryProvider envuelve toda la app con React Query */}
                {/* Proporciona QueryClient a todos los componentes hijos */}
                {/* Necesario para useQuery, useInfiniteQuery, etc. */}
                <TanStackQueryProvider>
                    {children}
                </TanStackQueryProvider>
            </body>
        </html>
    );
}
