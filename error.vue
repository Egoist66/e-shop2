<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
    error: NuxtError
}>()
</script>

<template>
  <div>
    <h1>{{ error?.message }}</h1>
    
    <button @click="clearError({redirect: '/'})">Вернуться на домашнюю страницу<</button>

  </div>
</template>
