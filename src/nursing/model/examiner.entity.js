/**
 * @fileoverview Este archivo define la entidad Examiner para el módulo de enfermería.
 * @summary Proporciona una clase para modelar un examinador, con campos para el ID del examinador, el nombre, el apellido y el identificador nacional del proveedor.
 * @author Rodrigo Adrián López Huamán
 */

export class Examiner {
    /**
     * @summary Crea una nueva instancia de la entidad Examiner.
     * @param {Object} params - Un objeto con los valores iniciales para la entidad.
     * @param {number} params.id - El ID del examinador.
     * @param {string} params.firstName - El nombre del examinador.
     * @param {string} params.lastName - El apellido del examinador.
     * @param {string} params.nationalProviderIdentifier - El identificador nacional del proveedor del examinador.
     */
    constructor({id, firstName, lastName, nationalProviderIdentifier}){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.nationalProviderIdentifier = nationalProviderIdentifier;
    }
}