<template>
	<v-card :key="item.id" class="pb-3" border flat :title="item.name" :color="item.digestible ? 'white' : 'red'">
		<v-card-text v-if="item.comment">
			Kommentar: {{ item.comment }}
		</v-card-text>
	</v-card>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { FoodEntry } from '@/types/foodEntry.ts'

const props = defineProps({
	item: {
		type: FoodEntry,
		required: true
	}
})
</script>
