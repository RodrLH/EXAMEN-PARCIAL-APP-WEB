/**
 * @fileoverview Este archivo define las rutas para la aplicación Vue.
 * @summary Proporciona la configuración de las rutas para la aplicación Vue, incluyendo la página de inicio, la página de rendimiento del examinador y la página de error 404.
 */

import { createRouter, createWebHistory } from 'vue-router';
import Home from "../public/pages/home.page.vue";
import pageNotFoundPage from "../public/pages/page-not-found.page.vue";
import exPerOver from "../nursing/components/pages/examiner-performance-overview.view.vue";

/**
 * @summary Crea y configura el router de la aplicación Vue.
 */
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/home'},
        { path: '/home', name: 'home', component: Home, meta: { title: 'Home'}},
        { path: '/nursing/examiner-performance-overview', name: 'exPerOver', component: exPerOver, meta: { title: 'Examiner Performance Overview'}},
        { path: '/:pathMatch(.*)*', component: pageNotFoundPage, meta: { title: 'Page Not Found' }}
    ]
})

/**
 * @summary Configura el título del documento antes de cada cambio de ruta.
 */
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Default Title';
    next();
});

export default router;
