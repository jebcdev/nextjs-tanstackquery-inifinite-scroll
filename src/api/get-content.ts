/**
 * Módulo de configuración del cliente HTTP.
 *
 * Configura una instancia de Axios para comunicarse con json-server.
 * Este cliente se utiliza en Server Actions para obtener datos de la API.
 *
 * Configuración:
 *   - Base URL: http://localhost:3001 (puerto de json-server en desarrollo)
 *   - Content-Type: application/json (para requests y responses)
 *   - Sin autenticación requerida (demo sin seguridad)
 *
 * Exports:
 *   - apiContent: Instancia de Axios preconfigurada
 *
 * @see getContents - Server Action que utiliza este cliente
 * @see json-server - Mock API ejecutada en puerto 3001
 */

import axios from "axios";

/**
 * Instancia de cliente HTTP (Axios) preconfigurada para la API.
 *
 * Utiliza json-server en puerto 3001 como servidor de mockups.
 * En producción, esto debería apuntar a tu API real.
 *
 * @type {AxiosInstance}
 *
 * @example
 * // Realizar una petición GET
 * const response = await apiContent.get('/contents', {
 *   params: { _page: 1, _per_page: 10 }
 * });
 */
const apiContent = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
        "Content-Type": "application/json",
    },
});

export { apiContent };
