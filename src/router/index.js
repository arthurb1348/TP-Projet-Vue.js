// Dans ce fichier on va lister toutes les routes de notre application
import { createRouter, createWebHistory } from 'vue-router'
//! Cette route HOME (qui est un composant vue) on importe ici et on va l'utiliser dans notre routeur
import Home from '../views/Home.vue';



const router = createRouter({
    history: createWebHistory(),
    routes: [
        // Cette route n'est pas en lazy loading, elle est directement importée en haut du fichier
        {
            path: '/home',
            alias: '/',
            component: Home
        },
        // ! Ces routes sont en lazy loading.
        {
            path: '/lessons',
            component: () => import('../views/Lessons.vue')
        },
        {
            path: '/lessons/setup',
            component: () => import('../views/lessons/lesson-setup.vue')
        },
        {
            path: '/lessons/intro',
            component: () => import('../views/lessons/lesson-introduction.vue')
        },
        {
            path: '/lessons/syntax',
            component: () => import('../views/lessons/lesson-syntax.vue')
        },
        {
            path: '/lessons/text-interpolation',
            component: () => import('../views/lessons/lesson-text-interpolation.vue')
        },
        {
            path: '/lessons/attribute-binding',
            component: () => import('../views/lessons/lesson-attribute-binding.vue')
        },
        {
            path: '/lessons/event-binding',
            component: () => import('../views/lessons/lesson-event-binding.vue')
        },
        {
            path: '/lessons/dynamic-styling',
            component: () => import('../views/lessons/lesson-dynamic-styling.vue')
        },
        {
            path: '/lessons/2-way-binding',
            component: () => import('../views/lessons/lesson-two-way-binding.vue')
        },
        {
            path: '/lessons/conditional-rendering',
            component: () => import('../views/lessons/lesson-conditional-rendering.vue')
        },
        {
            path: '/lessons/list-rendering',
            component: () => import('../views/lessons/lesson-list-rendering.vue')
        },
        {
            path: '/exercices',
            component: () => import('../views/Exercices.vue')
        },
        {
            path: '/exercices/text-interpolation',
            component: () => import('../views/exercices/TextInterpolation.vue')
        },
        {
            path: '/exercices/attribute-binding',
            component: () => import('../views/exercices/AttributeBinding.vue')
        },
        {
            path: '/exercices/event-binding',
            component: () => import('../views/exercices/EventBinding.vue')
        },
        {
            path: '/exercices/dynamic-styling',
            component: () => import('../views/exercices/DynamicStyling.vue')
        },
        {
            path: '/exercices/conditional-rendering',
            component: () => import('../views/exercices/ConditionalRendering.vue')
        },
        {
            path: '/tp',
            component: () => import('../views/TP.vue')
        },
        {
            path: '/tp/data-binding',
            component: () => import('../views/tp/tp-data-binding.vue')
        },
        {
            path: '/tp/dynamic-style',
            component: () => import('../views/tp/tp-dynamic-style.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            component: () => import('../views/not-found.vue'),
        },
    ]
})
export default router