<template>
	<v-container class="w-full h-full">
		<v-row justify="center">
			<TopBar />
		</v-row>

		<v-row>
			<RouterView />
		</v-row>
	</v-container>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import TopBar from './components/bars/TopBar.vue';
</script>
