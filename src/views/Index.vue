<template>
	<v-container>
		<v-row>
			<div>
				<img src="/HamsterFoodDB_cartoon-removebg.png">
			</div>
		</v-row>

		<v-row>
			<v-text-field clearable label="Food" variant="outlined" @input="search"
				v-model="searchTerm"></v-text-field>
		</v-row>

		<v-row>
			<v-card v-for="item in result" :key="item.name" :title="item.name"
				:subtitle="'Kategorie: ' + item.category"></v-card>
		</v-row>
	</v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import MiniSearch from 'minisearch'
import data from '@/data.json'

let searchTerm = ""
let result: Ref<{ name: string, category: string }[]> = ref([{ "name": "test", "category": "test" }])
const miniSearch = new MiniSearch({
	fields: ['name'],
	storeFields: ["category", "comment", "name"],
})
miniSearch.addAll(data)

const search = () => {
	result.value = miniSearch.search(searchTerm).map((item) => {
		const name = item.name
		const category = item.category

		return {
			name,
			category
		}
	})
}
</script>
