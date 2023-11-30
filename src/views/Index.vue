<template>
	<v-container class="w-full h-full">
		<v-row justify="center">
			<TopBar />
		</v-row>

		<v-row>
			<FoodsSection />
		</v-row>
	</v-container>
</template>

<script setup lang="ts">
import TopBar from '@/components/bars/TopBar.vue'
import FoodsSection from '@/components/sections/FoodsSection.vue'
</script>
