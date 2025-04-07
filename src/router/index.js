import { createRouter, createWebHistory } from "vue-router";

import Candidates from "@/pages/Candidates.vue";

const routes = [
  {
    path: "/",
    name: "Candidates",
    component: Candidates,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
