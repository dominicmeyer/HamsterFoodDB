<template>
	{{ food.name }}
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useFoodStore } from "@/stores/foodStore"

const foodId = useRoute().params.id
const food = useFoodStore().foodById(foodId)
</script>
