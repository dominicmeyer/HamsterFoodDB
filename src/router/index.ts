import { createRouter, createWebHistory } from 'vue-router'
import FoodsView from "@/views/FoodsView.vue"

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			component: FoodsView
		}
	]
})

export default router
