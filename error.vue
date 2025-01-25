<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
    error: NuxtError
}>()
</script>

<template>
  <div>
    <h1>{{ error?.message }}</h1>
    
    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" @click="clearError({redirect: '/'})">Вернуться на домашнюю страницу</button>

  </div>
</template>
