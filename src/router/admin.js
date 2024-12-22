
import { createRouter, createWebHistory } from 'vue-router';
import admin from './index.js';

const routes = [...admin];

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;
