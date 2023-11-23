<template>
	<v-container>
		<v-row>
			<div>
				<img src="/HamsterFoodDB_cartoon-removebg.png">
			</div>
			Top Bar
		</v-row>
		<v-row>
			<v-text-field clearable label="Food" variant="outlined" @input="search"
				v-model="searchTerm"></v-text-field>
		</v-row>
	</v-container>
</template>

<script setup lang="ts">
let searchTerm = ""
const search = () => { console.log(searchTerm) }
</script>
