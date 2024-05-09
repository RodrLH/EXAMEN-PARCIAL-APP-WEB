/**
 * @fileoverview Este archivo define la entidad MentalStateExam para el módulo de enfermería.
 * @summary Proporciona una clase para modelar un examen de estado mental, con campos para el ID del examen, el ID del paciente, el ID del examinador, la fecha del examen y las puntuaciones de varias categorías del examen.
 * @author Rodrigo Adrián López Huamán
 */

export class MentalStateExam{
    /**
     * @summary Crea una nueva instancia de la entidad MentalStateExam.
     * @param {Object} params - Un objeto con los valores iniciales para la entidad.
     * @param {number} params.id - El ID del examen.
     * @param {number} params.patientId - El ID del paciente.
     * @param {number} params.examinerId - El ID del examinador.
     * @param {Date} params.examDate - La fecha del examen.
     * @param {number} params.orientationScore - La puntuación de orientación del examen.
     * @param {number} params.registrationScore - La puntuación de registro del examen.
     * @param {number} params.attentionAndCalculationScore - La puntuación de atención y cálculo del examen.
     * @param {number} params.recallScore - La puntuación de recuerdo del examen.
     * @param {number} params.languageScore - La puntuación de lenguaje del examen.
     */
    constructor({id, patientId, examinerId, examDate, orientationScore, registrationScore,
                    attentionAndCalculationScore, recallScore, languageScore}){
        this.id = id;
        this.patientId = patientId;
        this.examinerId = examinerId;
        this.examDate = examDate;
        this.orientationScore = orientationScore;
        this.registrationScore = registrationScore;
        this.attentionAndCalculationScore = attentionAndCalculationScore;
        this.recallScore = recallScore;
        this.languageScore = languageScore;
    }
}