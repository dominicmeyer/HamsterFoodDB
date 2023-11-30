import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
import { FoodEntry } from "@/types/foodEntry";
import data from '@/assets/data.json'

export const useFoodStore = defineStore('foods', () => {
	const foods: Ref<FoodEntry[]> = ref([])

	data.forEach((entry) => {
		foods.value.push(new FoodEntry(entry.id, entry.name, entry.comment, entry.digestible))
	})

	foods.value.sort((entry1, entry2) => entry1.name.localeCompare(entry2.name))

	return { foods }
})
