<template>
	<v-container class="w-full h-full">
		<TopBar />

		<v-row>
			<v-data-iterator class="w-full" :items="data" :items-per-page="itemsPerPage" :search="search">
				<template v-slot:header>
					<v-text-field v-model="search" clearable placeholder="Food"
						variant="solo"></v-text-field>
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

				<template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
					<BottomPaginationBar :page="page" :page-count="pageCount" :prev-page="prevPage"
						:next-page="nextPage" />
				</template>
			</v-data-iterator>
		</v-row>
	</v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useDisplay } from 'vuetify/lib/framework.mjs';
import { useFoodStore } from '@/stores/foodStore';
import TopBar from '@/components/bars/TopBar.vue'
import BottomPaginationBar from '@/components/bars/BottomPaginationBar.vue'

const data = useFoodStore().foods
const { mdAndUp } = useDisplay()
let search = ref("")
let itemsPerPage = ref(mdAndUp.value ? 9 : 6)


const calcItemsPerPage = () => {
	itemsPerPage.value = mdAndUp.value ? 9 : 6
}
window.addEventListener("resize", calcItemsPerPage);
</script>
