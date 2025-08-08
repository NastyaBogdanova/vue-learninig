import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router';
import Dashboard from '@/components/tasks/TasksDesk.vue';
import UserAccount from '@/components/user/UserAccount.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/dashboard' },
  { name: 'Tasks', path: '/dashboard', component: Dashboard },
  { name: 'Account', path: '/account', component: UserAccount },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;