/**
 * Módulo de tipos para gestión de contenido.
 *
 * Define las interfaces principales para estructurar la respuesta de la API
 * y los datos individuales de contenido. Estos tipos se utilizan en toda
 * la aplicación para asegurar tipado estático y seguridad en TypeScript.
 *
 * Exports:
 *   - IContent: Estructura de un artículo individual
 *   - IContentResponse: Estructura de la respuesta paginada del servidor
 *
 * @see getContents - Server Action que retorna IContentResponse
 * @see useContentQueryInfinite - Hook que utiliza estos tipos
 */

/**
 * Interface que representa la estructura de respuesta paginada del servidor.
 *
 * Esta estructura sigue el estándar de json-server para respuestas paginadas,
 * incluyendo metadatos de paginación y los datos del contenido.
 *
 * @interface IContentResponse
 * @property {number} first - Número de la primera página disponible
 * @property {null} prev - Número de la página anterior (null si es la primera)
 * @property {number} next - Número de la siguiente página disponible
 * @property {number} last - Número de la última página disponible
 * @property {number} pages - Total de páginas en la respuesta
 * @property {number} items - Total de items en toda la colección
 * @property {IContent[]} data - Array de artículos en la página actual
 */
export interface IContentResponse {
    first: number;
    prev: null;
    next: number;
    last: number;
    pages: number;
    items: number;
    data: IContent[];
}

/**
 * Interface que representa un artículo individual de contenido.
 *
 * Cada artículo contiene información básica necesaria para mostrar
 * una tarjeta en la interfaz del usuario.
 *
 * @interface IContent
 * @property {string} id - Identificador único del artículo
 * @property {string} title - Título del artículo (ej: "Introducción a React")
 * @property {string} description - Descripción breve del contenido del artículo
 */
export interface IContent {
    id: string;
    title: string;
    description: string;
}
