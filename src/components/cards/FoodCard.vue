<template>
	<v-card :key="item.id" class="pb-3" border flat :subtitle="item.category" :title="item.name">
		<v-card-text v-if="item.comment">
			Kommentar: {{ item.comment }}
		</v-card-text>
	</v-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { FoodEntry } from '@/types/foodEntry.ts'

defineProps({
	item: {
		type: FoodEntry,
		required: true
	}
})
</script>
