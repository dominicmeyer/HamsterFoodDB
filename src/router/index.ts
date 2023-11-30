import { createRouter, createWebHistory } from 'vue-router'
import FoodsView from "@/views/FoodsView.vue"
import FoodDetailView from "@/views/FoodDetailView.vue"
import Error404View from "@/views/Error404View.vue"
import { useFoodStore } from '@/stores/foodStore'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			component: FoodsView
		},
		{
			path: '/food/:id',
			component: FoodDetailView,
			beforeEnter: (to, _from) => {
				const foodStore = useFoodStore()
				const foodId: number = parseInt(to.params.id.toString())
				return foodStore.foodById(foodId) !== undefined
			}
		},
		{
			path: '/:pathMatch(.*)*',
			component: Error404View
		}
	]
})

export default router
