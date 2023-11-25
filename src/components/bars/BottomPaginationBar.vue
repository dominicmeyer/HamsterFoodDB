<template>
	<div class="d-flex align-center justify-center pa-4">
		<v-btn :disabled="page === 1" icon="mdi-arrow-left" density="comfortable" variant="tonal" rounded
			@click="prevPage"></v-btn>

		<div class="mx-2 text-caption">
			Page {{ page }} of {{ pageCount }}
		</div>

		<v-btn :disabled="page >= pageCount" icon="mdi-arrow-right" density="comfortable" variant="tonal" rounded
			@click="nextPage"></v-btn>
	</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  page: {
	  type: Number,
		required: true
	},
  pageCount: {
	  type: Number,
		required: true
	},
  nextPage: {
		type: Function,
		required: true
	},
  prevPage: {
		type: Function,
		required: true
	}
})
</script>
