/**
 * @fileoverview Este archivo define el servicio de API para el módulo de enfermería.
 * @summary Proporciona funciones para realizar solicitudes HTTP a los endpoints relacionados con los examinadores y los exámenes de estado mental.
 */

import api from '../../shared/api.service';

/**
 * @summary Obtiene todos los examinadores.
 * @returns {Promise} Una promesa que resuelve con la respuesta de la API.
 */
const getAllExaminers = () => {
    return api.get('/examiners');
};

/**
 * @summary Obtiene todos los exámenes de estado mental.
 * @returns {Promise} Una promesa que resuelve con la respuesta de la API.
 */
const getAllMentalStateExams = () => {
    return api.get('/mental-state-exams');
};

/**
 * @summary Obtiene los exámenes de estado mental por el ID del examinador.
 * @param {number} examinerId - El ID del examinador.
 * @returns {Promise} Una promesa que resuelve con la respuesta de la API.
 */
const getMentalStateExamsByExaminersId = (examinerId) => {
    return api.get(`/examiners/${examinerId}/mental-state-exams`);
};

export default {
    getAllExaminers,
    getAllMentalStateExams,
    getMentalStateExamsByExaminersId
}
