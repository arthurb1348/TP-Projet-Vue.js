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
        // ! Ces routes sont en lazy loading, elle sera chargée uniquement quand on ira sur la page /about
        {
            path: '/about',
            component: () => import('../views/About.vue')
        },
        {
            path: '/contact',
            component: () => import('../views/Contact.vue')
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
    ]
})
export default router