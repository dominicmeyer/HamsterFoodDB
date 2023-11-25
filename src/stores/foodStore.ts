import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
import { FoodEntry } from "@/types/foodEntry";
import data from '@/data.json'

export const useFoodStore = defineStore('foods', () => {
	const foods: Ref<FoodEntry[]> = ref([])

	data.forEach((entry) => {
		foods.value.push(new FoodEntry(entry.id, entry.name, entry.category, entry.comment))
	})

	return { foods }
})
