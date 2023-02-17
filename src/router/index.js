import { createWebHistory, createRouter } from "vue-router"
import HelloWorld from '@/components/HelloWorld.vue'
import MainComponent from '@/components/MainComponent.vue'
import FormComponent from '@/components/FormComponent.vue'

//Componentes

const routes = [
    {
        path: "/hello",
        name: "HelloWorld", // Nombre del componente
        component: HelloWorld // Componente en sí
    },
    {
        path: "/",
        name: "MainComponent", // Nombre del componente
        component: MainComponent // Componente en sí
    },
    {
        path: "/form",
        name: "FormComponent", // Nombre del componente
        component: FormComponent // Componente en sí
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;