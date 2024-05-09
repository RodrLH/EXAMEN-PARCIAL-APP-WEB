/**
 * @fileoverview Este archivo es el punto de entrada principal de la aplicación Vue.
 * @summary Configura e inicia la aplicación Vue, incluyendo la configuración de i18n, PrimeVue y el router.
 */

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from "primevue/config";
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/aura-dark-green/theme.css';
//
import i18n from "./i18n.js"
//
import Toolbar from "primevue/toolbar";
import Card from "primevue/card";
import Button from "primevue/button";
//
import router from "./routes/index.js";

/**
 * @summary Crea la aplicación Vue, configura y monta la aplicación.
 */
createApp(App)
    .use(router)
    .use(i18n)
    .use(PrimeVue, {ripple: true})
    .component('pv-card', Card)
    .component('pv-button', Button)
    .component('pv-toolbar', Toolbar)
    .mount('#app')
