/**
 * Server Action para obtener contenido paginado.
 *
 * Este módulo contiene un Server Action de Next.js que se ejecuta
 * exclusivamente en el servidor. Obtiene artículos paginados del
 * endpoint /contents y simula latencia de red para demostración.
 *
 * Directiva 'use server':
 *   - Marca todo este módulo como código de servidor
 *   - Las funciones no se incluyen en el bundle del cliente
 *   - Pueden llamarse directamente desde Client Components vía FormAction o evento
 *
 * Exports:
 *   - getContents: Server Action para obtener contenido paginado
 *
 * @see Server Actions - https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions
 * @see useContentQueryInfinite - Hook que invoca esta acción
 */

"use server";

import { IContentResponse } from "@/types/content";
import { apiContent } from "@/api/get-content";
import { sleep } from "@/helpers/sleep";

/**
 * Interface para parámetros de la función getContents.
 *
 * @interface IGetContents
 * @property {number} [page=1] - Número de página a obtener (comienza en 1)
 * @property {number} [limit=10] - Cantidad de items por página
 */
interface IGetContents {
    page?: number;
    limit?: number;
}

/**
 * Server Action que obtiene contenido paginado del servidor.
 *
 * Ejecuta solo en servidor (seguro). Realiza una petición GET a json-server
 * para obtener artículos con paginación. Simula latencia de 2.5 segundos
 * para mostrar comportamiento realista y demostración de estados de carga.
 *
 * Ejecutar este Server Action:
 *   - Desde un Client Component: usar directamente o con useTransition
 *   - Desde un hook: usar en queryFn de TanStack Query
 *   - Desde formulario: action attribute (próxima generación de formas)
 *
 * @async
 * @function getContents
 * @param {IGetContents} params - Parámetros de paginación
 * @param {number} [params.page=1] - Número de página (base 1)
 * @param {number} [params.limit=10] - Items por página
 * @returns {Promise<IContentResponse>} Respuesta con artículos paginados
 *
 * @throws {AxiosError} Si la petición a json-server falla
 * @throws {Error} Si hay error en la simulación de latencia
 *
 * @example
 * // Desde un hook (TanStack Query)
 * const { data } = useInfiniteQuery({
 *   queryFn: ({ pageParam }) => getContents({ page: pageParam })
 * });
 *
 * @example
 * // Desde un Client Component con useTransition
 * const [isPending, startTransition] = useTransition();
 * startTransition(async () => {
 *   const result = await getContents({ page: 2 });
 *   console.log(result);
 * });
 *
 * @note
 * - La latencia de 2.5s es artificial para demostración
 * - En producción: remover sleep() para mejor UX
 * - json-server corre en puerto 3001
 * - Soporta parámetros _page y _per_page del json-server
 *
 * @see sleep - Simula latencia para desarrollo
 * @see apiContent - Cliente Axios configurado para json-server
 */
export const getContents = async ({
    page = 1,
    limit = 10,
}: IGetContents): Promise<IContentResponse> => {
    // Simula latencia de red para demostración (2.5 segundos)
    // En producción con API real, esto ocurriría naturalmente
    await sleep(2500);

    // Realiza petición GET a /contents con parámetros de paginación
    // _page: número de página a obtener
    // _per_page: cantidad de items por página (máximo recomendado: 50)
    const response = await apiContent
        .get("/contents", {
            params: { _page: page, _per_page: limit },
        })
        // Extrae solo los datos del response (descartar headers, etc.)
        .then((res) => res.data);

    return response;
};
