/**
 * @fileoverview Este archivo define la configuración de internacionalización (i18n) para la aplicación Vue.
 * @summary Configura y exporta una instancia de vue-i18n con los mensajes de localización en inglés y español.
 */

import en from './locales/en.json';
import es from './locales/es.json';

import {createI18n} from 'vue-i18n';

/**
 * @summary Crea y configura una instancia de vue-i18n.
 */
const i18n=createI18n({
    legacy: false,
    locale: "en",
    fallbackLocale: 'en',
    globalInjection:true,
    messages: { en, es}
})

export default i18n;
