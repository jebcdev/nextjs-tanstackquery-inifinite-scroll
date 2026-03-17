/**
 * Módulo de exportaciones públicas de componentes.
 *
 * Barril (barrel export) que reexporta los componentes principales
 * para facilitar importaciones limpias en otras partes de la app.
 *
 * En lugar de:
 *   import { ContentGrid } from '@/components/ContentGrid'
 *
 * Se puede usar:
 *   import { ContentGrid } from '@/components'
 *
 * Exports:
 *   - ContentGrid: Componente principal del infinite scroll
 */

export * from "./ContentGrid";
