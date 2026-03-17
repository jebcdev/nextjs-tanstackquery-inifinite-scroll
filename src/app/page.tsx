/**
 * Página de inicio (Home) de la aplicación.
 *
 * Página principal que renderiza la demostración de infinite scroll.
 * Utiliza Suspense para manejar la carga inicial del componente ContentGrid.
 *
 * Estructura:
 *   1. Encabezado con título y descripción
 *   2. Suspense boundary con fallback spinner
 *   3. ContentGrid: componente que gestiona el infinite scroll
 *
 * Server Component que:
 *   - Define metadata SEO
 *   - Renderiza estructura básica
 *   - Implementa Suspense para mejor UX
 *
 * @see ContentGrid - Componente Client que maneja infinite scroll
 * @see LoadingSpinner - Fallback mientras carga ContentGrid
 * @see Suspense - API de React para boundary de suspensión
 */

import { ContentGrid } from "@/components";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { Metadata } from "next";
import { Suspense } from "react";

/**
 * Metadata SEO específica de la página Home.
 *
 * Anula la metadata del layout raíz para esta ruta específica.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = {
    title: "Infinite Scroll | Next.js + TanStack Query",
    description:
        "Práctica de infinite scroll con Next.js, TanStack Query y json-server",
};

/**
 * Componente de página Home.
 *
 * Renderiza el contenedor principal con título, descripción y
 * el componente ContentGrid (que maneja todo el infinite scroll).
 *
 * Implementa Suspense para mostrar un LoadingSpinner mientras
 * ContentGrid se está cargando (útil para Server Components).
 *
 * @component
 * @returns {JSX.Element} Página principal con infinite scroll
 *
 * @note
 * - ContentGrid es un Client Component (tiene 'use client')
 * - Suspense es un Server Component que permite async rendering
 * - El fallback (LoadingSpinner) aparece mientras carga ContentGrid
 */
export default function Home() {
    return (
        <main className="min-h-screen py-10">
            {/* Encabezado de la página */}
            <div className="max-w-2xl mx-auto px-4 mb-8">
                <h1 className="text-3xl font-bold tracking-tight">
                    Infinite Scroll
                </h1>
                <p className="text-muted-foreground mt-1 text-sm">
                    Cargando contenido de a poco, sin morir en el
                    intento.
                </p>
            </div>

            {/* Suspense boundary: muestra fallback mientras ContentGrid carga */}
            {/* Once ContentGrid se resuelve, reemplaza el fallback automáticamente */}
            <Suspense fallback={<LoadingSpinner />}>
                {/* ContentGrid maneja todo el infinite scroll */}
                {/* Incluye: fetching, paginación, botón "Cargar más", etc. */}
                <ContentGrid />
            </Suspense>
        </main>
    );
}
