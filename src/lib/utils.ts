/**
 * Módulo de utilidades para nombres de clases CSS.
 *
 * Proporciona la función `cn` que combina y resuelve conflictos
 * entre clases de Tailwind CSS. Utiliza clsx para combinar clases
 * condicionalmente y tailwind-merge para resolver conflictos.
 *
 * Exports:
 *   - cn: Función para combinar y normalizar clases CSS
 *
 * @see https://tailwindcss.com - Framework CSS utilizado
 * @see https://www.npmjs.com/package/clsx - Librería de combinación condicional
 * @see https://github.com/dcastil/tailwind-merge - Resolución de conflictos
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina múltiples valores de clases CSS resolviendo conflictos de Tailwind.
 *
 * Utiliza clsx para combinar clases condicionalmente (soporta strings, objetos,
 * arrays, etc.) y luego tailwind-merge para resolver conflictos entre clases
 * de Tailwind que podrían ser mutuamente excluyentes.
 *
 * @param {...ClassValue[]} inputs - Valores de clases a combinar (pueden ser
 *                                    strings, objetos, booleanos, arrays, etc.)
 * @returns {string} String con todas las clases combinadas y conflictos resueltos
 *
 * @example
 * // Combinar clases estáticas
 * cn('px-4 py-2 rounded')
 * // → 'px-4 py-2 rounded'
 *
 * @example
 * // Combinar condicionalmente
 * cn('px-4', isActive && 'bg-blue-500', isDisabled && 'opacity-50')
 * // → 'px-4 bg-blue-500 opacity-50' (si ambas condiciones son true)
 *
 * @example
 * // Resolver conflictos de Tailwind
 * cn('px-2', 'px-4')  // El último prevalece
 * // → 'px-4'
 *
 * @example
 * // Combinar en componentes
 * <Button className={cn('w-full', variant === 'primary' && 'bg-blue-500')} />
 *
 * @note
 * Esta función es esencial en componentes de shadcn/ui y componentes
 * personalizados para manejar clases dinámicas y variantes de Tailwind.
 */
export function cn(...inputs: ClassValue[]) {
    // clsx: combina valores de clase condicionalmente
    // twMerge: resuelve conflictos de clases Tailwind CSS¬
    return twMerge(clsx(inputs));
}
