<script setup lang="tsx">
import { Products } from "~/data/mock-data";

useHead({
  titleTemplate: "%s - Home",
  title: "Sneakers shop",
});

const { provide } = useNuxtApp();
provide("hello", (name: string) => `Hello ${name}`);


</script>

<template>
  <div>

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
