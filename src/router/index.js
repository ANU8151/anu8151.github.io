import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../pages/Landing.vue'
import Registration from '../pages/Registration.vue'
import PersonalInformation from '../pages/registration/PersonalInformation.vue'
import ChessExperience from '../pages/registration/ChessExperience.vue'

const routes = [
  { path: '/', component: Home, name:'Home' },
  { path: '/registration', component: Registration, name: 'Registration' }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;