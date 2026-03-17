/**
 * Módulo generador de contenido mock para db.json.
 *
 * Script que genera un conjunto de 500 artículos de demostración
 * con títulos y descripciones variados sobre temas de tecnología.
 * Utiliza combinaciones de temas, acciones y plantillas para crear
 * contenido realista y diverso.
 *
 * El archivo generado se guarda en src/db.json y es servido
 * por json-server en desarrollo.
 *
 * Exports:
 *   Script ejecutable que genera db.json
 *
 * @note
 * IMPORTANTE: Este script es solo para desarrollo.
 * En producción, usar una base de datos real (PostgreSQL, MongoDB, etc.)
 *
 * @see db.json - Archivo JSON generado
 * @see json-server - Servidor que sirve estos datos
 *
 * @example
 * // Ejecutar para regenerar db.json
 * npx ts-node src/helpers/generate-content.ts
 */

import { writeFileSync } from "fs";

/**
 * Interface para estructura de contenido individual.
 * Debe coincidir con IContent del módulo de tipos.
 */
interface IContent {
    id: string;
    title: string;
    description: string;
}

/**
 * Array de temas tecnológicos para variar el contenido generado.
 * Estos temas se combinan con acciones para crear títulos realistas.
 *
 * @type {string[]}
 */
const topics = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "GraphQL",
    "REST API",
    "Docker",
    "Kubernetes",
    "AWS",
    "Machine Learning",
    "Inteligencia Artificial",
    "Web3",
    "Blockchain",
    "Rust",
    "Go",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "Redis",
];

/**
 * Array de verbos/acciones para iniciar títulos de forma variada.
 * Se combinan con temas para crear títulos más naturales.
 *
 * @type {string[]}
 */
const actions = [
    "Introducción a",
    "Guía completa de",
    "Mejores prácticas en",
    "Tutorial avanzado de",
    "Fundamentos de",
    "Arquitectura con",
    "Patrones de diseño en",
    "Optimización con",
    "Deployment de",
    "Testing en",
];

/**
 * Array de funciones generadoras de descripción.
 * Cada función toma un tema y retorna una descripción única.
 * Se aplican en rotación para mayor variedad.
 *
 * @type {Array<Function>}
 */
const descTemplates = [
    (topic: string) =>
        `Aprende todo lo que necesitas saber sobre ${topic} desde cero hasta un nivel profesional. Este artículo cubre los conceptos fundamentales y casos de uso reales.`,
    (topic: string) =>
        `Una guía detallada sobre ${topic} con ejemplos prácticos, ejercicios y proyectos para consolidar tu aprendizaje.`,
    (topic: string) =>
        `Descubre cómo usar ${topic} de manera eficiente en proyectos del mundo real. Incluye tips, trucos y errores comunes a evitar.`,
    (topic: string) =>
        `Explora las características más importantes de ${topic} y cómo pueden mejorar tu flujo de trabajo como desarrollador.`,
    (topic: string) =>
        `Todo lo que debes saber sobre ${topic} para llevar tus habilidades al siguiente nivel. Perfecto para desarrolladores intermedios y avanzados.`,
];

// Array que acumulará todos los artículos generados
const items: IContent[] = [];

// Iteramos 500 veces, generando un artículo por iteración
// Utilizamos módulo (%) para reciclar temas, acciones y plantillas
for (let i = 1; i <= 500; i++) {
    // Selecciona tema rotando a través del array
    const topic = topics[i % topics.length];
    // Selecciona acción rotando a través del array
    const action = actions[i % actions.length];
    // Selecciona plantilla de descripción rotando a través del array
    const descFn = descTemplates[i % descTemplates.length];

    // Agrega un nuevo artículo con título y descripción generados
    items.push({
        id: String(i),
        title: `${action} ${topic} — Parte ${Math.floor(i / topics.length) + 1}`,
        description: descFn(topic),
    });
}

// Estructura final que tendrá db.json con array de contenidos
const db = { contents: items };

// Escribe el archivo db.json con indentación de 2 espacios para legibilidad
writeFileSync("../db.json", JSON.stringify(db, null, 2), "utf-8");

// Mensaje de éxito en consola
console.log(`✅ db.json generado con ${items.length} items`);
