<template>
	<div class="h-full w-full grid justify-items-center items-center">
		<v-sheet>
			{{ food.name }}
		</v-sheet>
	</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useFoodStore } from "@/stores/foodStore"

const foodId = useRoute().params.id
const food = useFoodStore().foodById(foodId)
</script>
