<template>
	<v-data-iterator class="w-full" :items="foods" :items-per-page="itemsPerPage" :search="search">
		<template v-slot:header>
			<v-text-field v-model="search" clearable placeholder="Food" variant="solo"></v-text-field>
		</template>

		<template v-slot:default="{ items }">
			<div class="grid grid-cols-2 md:grid-cols-3 w-full">
				<v-card v-for="item in items" :key="item.raw.name" class="pb-3" border flat
					:subtitle="item.raw.category" :title="item.raw.name">
					<v-card-text v-if="item.raw.comment">
						Kommentar: {{ item.raw.comment }}
					</v-card-text>
				</v-card>
			</div>
		</template>

		<template v-slot:footer="{ page, pageCount, setPage }">
			<v-pagination :length="pageCount" :model-value="page" @update:model-value="setPage" />
		</template>
	</v-data-iterator>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useDisplay } from 'vuetify/lib/framework.mjs';
import { useFoodStore } from '@/stores/foodStore';

const foods = useFoodStore().foods
const search = ref("")

const { mdAndUp } = useDisplay()
const itemsPerPage = ref(9)

const calcItemsPerPage = () => {
	itemsPerPage.value = mdAndUp.value ? 9 : 6
}

window.addEventListener("resize", calcItemsPerPage);
window.addEventListener("load", calcItemsPerPage);
</script>
