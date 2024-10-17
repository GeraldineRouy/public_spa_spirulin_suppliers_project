import {createRouter, createWebHistory} from "vue-router";
import SuppliersList from "@/components/SuppliersList.vue";
import SuppliersMap from "@/components/SuppliersMap.vue";
import Supplier from "@/components/Supplier.vue";
import RegisterNewSupplier from "@/components/RegisterNewSupplier.vue";
import Home from "@/components/Home.vue";

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
    },
    {
        path : '/registerNewSupplier',
        name: 'Register New Supplier',
        component: RegisterNewSupplier
    },
    {
        path : '/',
        name : 'Home',
        component: Home
    },
    // {
    //     path : '/editSupplier',
    //     name: 'Edit Supplier',
    //     component: EditSupplier
    // },
    // {
    //     path: '/deleteSupplier',
    //     name: 'Delete Supplier',
    //     component: DeleteSupplier
    // }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;