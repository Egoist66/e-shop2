<script setup lang="ts">
import { Products } from "~/data/mock-data";

useHead({
  titleTemplate: "%s - Home",
  title: "Sneakers shop",
});

</script>

<template>
  <div>
    <h1 class="text-2xl font-semibold mb-5">Все кроссовки</h1>
    <NuxtErrorBoundary @error="(e) => console.log(e)">
      <template #default>
        <LazyUICardListView v-if="Products.length" :data="Products">
          <template #default="{ item }">
            <LazyUICard
              :title="item?.title"
              :price="item?.price"
              :is-added="item?.isAdded"
              :img="item?.img"
              :liked="item?.isLiked"
            />
          </template>
        </LazyUICardListView>

        <p v-else>Ничего не найдено</p>
      </template>
      <template #error="{ error }">
        <p>{{ error.message }}</p>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>
