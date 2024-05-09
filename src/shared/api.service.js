/**
 * @fileoverview Este archivo define el servicio de API para la aplicación.
 * @summary Proporciona una instancia de axios preconfigurada con la URL base y los headers por defecto para realizar solicitudes HTTP.
 */

import axios from 'axios';

const url = 'http://localhost:3001';

/**
 * @summary Crea una instancia de axios con la URL base y los headers por defecto.
 */
const api = axios.create({
    baseURL: url, headers: {
        'Content-type': 'application/json',
    }
});

export default api;
