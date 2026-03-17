/**
 * Módulo de utilidad para simular latencia de red.
 *
 * Proporciona una función que crea una Promise que se resuelve
 * después de un tiempo especificado. Se utiliza para simular
 * latencia realista en acciones del servidor durante desarrollo.
 *
 * Exports:
 *   - sleep: Función que simula un delay asíncrono
 */

/**
 * Simula una pausa asíncrona de tiempo especificado.
 *
 * Crea una Promise que se resuelve después del tiempo indicado,
 * permitiendo simular latencia de red en desarrollo sin necesidad
 * de un servidor lento.
 *
 * @param {number} ms - Tiempo en milisegundos a esperar
 * @returns {Promise<void>} Promise que se resuelve sin valor después del delay
 *
 * @example
 * // Esperar 2.5 segundos
 * await sleep(2500);
 * console.log('2.5 segundos han pasado');
 *
 * @example
 * // Simular latencia en una operación
 * export async function obtenerDatos() {
 *   await sleep(2000);  // Simula latencia de red
 *   return datos;
 * }
 *
 * @note
 * Usado primariamente en getContents() para simular latencia
 * realista de API. En producción sin API real, remover o reducir.
 */
export const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
