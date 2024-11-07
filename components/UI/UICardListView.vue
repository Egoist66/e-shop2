<script setup lang="ts">



const props = defineProps<{
  data?: Array<any>
}>();
</script>

<template>
  <div class="show-case grid grid-cols-4 gap-5">
    <template :key="item.id" v-for="item in data">
      <slot :item="item"></slot>
    </template>
  </div>
</template>

<style scoped></style>
