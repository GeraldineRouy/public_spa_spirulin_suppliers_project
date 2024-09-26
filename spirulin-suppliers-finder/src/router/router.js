import {createRouter, createWebHistory} from "vue-router";
import SuppliersList from "@/components/SuppliersList.vue";
import SuppliersMap from "@/components/SuppliersMap.vue";
import Supplier from "@/components/Supplier.vue";

const routes = [
    {
        path: '/suppliers',
        name: 'SuppliersList',
        component: SuppliersList,
    },
    {
        path: '/map',
        name: 'Map',
        component: SuppliersMap,
    },
    {
        path: '/suppliers/johnDoe',
        name: 'Supplier',
        component: Supplier,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;