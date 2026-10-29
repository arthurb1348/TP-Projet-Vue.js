// Dans ce fichier on va lister toutes les routes de notre application
import { createRouter, createWebHistory } from 'vue-router'
//! Cette route HOME (qui est un composant vue) on importe ici et on va l'utiliser dans notre routeur
import Home from '../views/Home.vue';
import { getCurrentUser } from "../services/AuthService.js";
import { auth } from "../firebase.js";



const router = createRouter({
    history: createWebHistory(),
    routes: [
        // Cette route n'est pas en lazy loading, elle est directement importée en haut du fichier
        {
            path: '/home',
            alias: '/',
            name: 'home',
            component: Home
        },
        // ! Ces routes sont en lazy loading.
        {
            path: '/details/:id/:itemName',
            name: 'Details',
            component: () => import('../components/DetailsPage.vue'),
            props: true,
        },
        {
            path: '/lessons',
            component: () => import('../views/Lessons.vue'),
        },
        {
            path: '/lessons/setup',
            component: () => import('../views/lessons/lesson-setup.vue'),
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
            path: '/lessons/computed-properties',
            component: () => import('../views/lessons/lesson-computed-properties.vue')
        },
        {
            path: '/lessons/watchers',
            component: () => import('../views/lessons/lesson-watchers.vue')
        },
        {
            path: '/lessons/chartjs',
            component: () => import('../views/lessons/lesson-lib-chartjs.vue')
        },
        {
            path: '/lessons/lifecycle',
            component: () => import('../views/lessons/lesson-lifecycle.vue')
        },
        {
            path: '/lessons/props',
            component: () => import('../views/lessons/lesson-props.vue')
        },
        {
            path: '/lessons/router',
            component: () => import('../views/lessons/lesson-router.vue')
        },
        {
            path: '/lessons/emit',
            component: () => import('../views/lessons/lesson-emit.vue')
        },
        {
            path: '/lessons/marked',
            component: () => import('../views/lessons/lesson-lib-marked.vue')
        },
        {
            path: '/lessons/pinia',
            component: () => import('../views/lessons/lesson-lib-pinia.vue')
        },
        {
            path: '/lessons/inline-templating',
            component: () => import('../views/lessons/lesson-inline-templating.vue')
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
            path: '/exercices/crash-test',
            component: () => import('../views/exercices/CrashTest.vue')
        },
        {
            path: '/exercices/exo-watchers',
            component: () => import('../views/exercices/ExoWatchers.vue')
        },
        {
            path: '/exercices/api',
            component: () => import('../views/exercices/API.vue')
        },
        {
            path: '/exercices/chartjs',
            component: () => import('../views/exercices/ChartJS.vue')
        },
        {
            path: '/exercices/props-api',
            component: () => import('../views/exercices/PropsAPI.vue')
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
            path: '/tp/watcher-computed',
            component: () => import('../views/tp/tp-watcher-computed.vue')
        },
        {
            path: '/tp/conditional-list-rendering',
            component: () => import('../views/tp/tp-conditional-list-rendering.vue')
        },
        {
            path: '/tp/jeu-tour-par-tour',
            component: () => import('../views/tp/tp-jeu-tour-par-tour.vue')
        },
        {
            path: '/tp/tp-props',
            component: () => import('../views/tp/tp-props.vue')
        },
        {
            path: '/tp/tp-emit',
            component: () => import('../views/tp/tp-defineEmits.vue')
        },
        {
            path: '/tp/comcom',
            component: () => import('../views/tp/ComponentCommunication.vue')
        },
        {
            path: '/tp/dashboard',
            component: () => import('../views/tp/tp-dashboard.vue')
        },
        {
            path: '/corrections',
            component: () => import('../views/Corrections.vue')
        },
        {
            path: '/corrections/text-interpolation',
            component: () => import('../views/corrections/exercice-text-interpolation.vue')
        },
        {
            path: '/corrections/attribute-binding',
            component: () => import('../views/corrections/exercice-attribute-binding.vue')
        },
        {
            path: '/corrections/event-binding',
            component: () => import('../views/corrections/exercice-event-binding.vue')
        },
        {
            path: '/corrections/dynamic-styling',
            component: () => import('../views/corrections/exercice-dynamic-styling.vue')
        },
        {
            path: '/corrections/conditional-rendering',
            component: () => import('../views/corrections/exercice-conditional-rendering.vue')
        },
        {
            path: '/corrections/list-rendering',
            component: () => import('../views/corrections/exercice-list-rendering.vue')
        },
        {
            path: '/corrections/computed-properties',
            component: () => import('../views/corrections/exercice-computed-properties.vue')
        },
        {
            path: '/corrections/watchers',
            component: () => import('../views/corrections/Watchers.vue')
        },
        {
            path: '/corrections/api',
            component: () => import('../views/corrections/exercice-lifecycle-api.vue')
        },
        {
            path: '/corrections/chartjs',
            component: () => import('../views/corrections/BarChartDynamic.vue')
        },
        {
            path: '/corrections/tp-data-binging',
            component: () => import('../views/corrections/tp-data-binding.vue')
        },
        {
            path: '/corrections/tp-dynamic-styling',
            component: () => import('../views/corrections/tp-dynamic-styling.vue')
        },
        {
            path: '/corrections/tp-reactivite',
            component: () => import('../views/corrections/tp-reactivite.vue')
        },
        {
            path: '/corrections/tp-props',
            component: () => import('../views/corrections/exercice-props.vue')
        },
        {
            path: '/corrections/emits',
            component: () => import('../views/corrections/exercice-emit.vue')
        },
        {
            path: '/corrections/dashboard',
            component: () => import('../views/corrections/tp-dashboard.vue')
        },
        {
            path: "/articles",
            name: "articles",
            component: () => import("../views/FirebaseArticlesView.vue")
        },
        {
            path: "/register",
            name: "register",
            component: () => import("../views/auth/register.vue")
        },
        {
            path: "/login",
            name: "login",
            component: () => import("../views/auth/login.vue")
        },
        {
            path: "/admin",
            name: "admin",
            component: () => import("../views/AdminView.vue"),
            meta: {
                requiresAuth: true
            }
            },
        {
            path: '/:pathMatch(.*)*',
            component: () => import('../views/not-found.vue'),
        },
    ]
})

router.beforeEach(async (to, from, next) => {
    // Vérifie si la destination nécessite une connexion.
    const requiresAuth = to.matched.some(
        (record) => record.meta.requiresAuth
    );

    // Les pages publiques restent accessibles directement.
    if (!requiresAuth) {
        return next();
    }

    // Attend que Firebase nous donne l'utilisateur ou null.
    const currentUser = await getCurrentUser();

    // Sans connexion, redirige vers ta route nommée "login".
    if (!currentUser) {
        return next({ name: "login" });
    }

    // L'utilisateur connecté peut continuer.
    return next();
});


export default router;

