<template>
	<RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import data from './data.json'

console.log(data)
</script>
