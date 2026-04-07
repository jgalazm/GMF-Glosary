/*
 * ========== DICCIONARIO: ÚNICA FUENTE DE DATOS ==========
 * Cada entrada tiene:
 *   id          — identificador único (ej: 'entrada-1')
 *   pregunta    — la pregunta del concepto
 *   titulo      — nombre del concepto
 *   explicacion — texto explicativo
 *   personas    — nombres separados por comas
 *   area        — área temática (agrupa el contenido y los índices)
 *   referencia  — texto de la referencia
 *   referenciaUrl — si tiene URL, la referencia será un enlace; si '', solo texto
 * Para agregar una entrada: copie un bloque { id: '...', ... } y cambie los valores.
 */
var DICCIONARIO = [
    {
        id: 'entrada-1',
        pregunta: '¿Quién le robó el sombrero al profesor?',
        titulo: 'Sombrero',
        explicacion: 'Explicación del concepto sombrero en el contexto de la investigación: ¿Quién yo? sí tú',
        personas: 'Nombre Ejemplo',
        area: 'Área 1',
        referencia: 'Código o fuente.',
        referenciaUrl: ''
    },
    {
        id: 'entrada-2',
        pregunta: '¿Qué es A?',
        titulo: 'A',
        explicacion: 'Explicación del concepto A.',
        personas: 'Persona A',
        area: 'Área 1',
        referencia: 'Ref. A',
        referenciaUrl: ''
    },
    {
        id: 'entrada-3',
        pregunta: '¿Qué es B?',
        titulo: 'B',
        explicacion: 'Explicación del concepto B.',
        personas: 'Persona B',
        area: 'Área 2',
        referencia: 'Ref. B',
        referenciaUrl: ''
    },
    {
        id: 'entrada-4',
        pregunta: '¿Qué es c?',
        titulo: 'C',
        explicacion: 'Explicación del concepto C.',
        personas: 'Persona C',
        area: 'Área 2',
        referencia: 'Ref. C',
        referenciaUrl: ''
    },
    {
        id: 'entrada-5',
        pregunta: '¿Qué es D?',
        titulo: 'D',
        explicacion: 'Explicación del concepto D.',
        personas: 'Persona D',
        area: 'Área 3',
        referencia: 'Ref. D',
        referenciaUrl: ''
    },
    {
        id: 'entrada-6',
        pregunta: '¿Qué es ?',
        titulo: 'D',
        explicacion: 'Explicación del concepto D.',
        personas: 'Persona D',
        area: 'Área 3',
        referencia: 'Ref. D',
        referenciaUrl: ''
    }
];