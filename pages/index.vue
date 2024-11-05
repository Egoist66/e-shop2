<script setup lang="ts">
useHead({
  titleTemplate: "%s - Home",
  title: "Sneakers shop",
});

const products = [
  {
    id: 1,
    title: "Sneakers",
    price: 1200,
    isLiked: false,
    img: "/sneakers/sneakers-1.jpg",
  },
  {
    id: 2,
    title: "Sneakers",
    price: 1100,
    isLiked: true,
    img: "/sneakers/sneakers-2.jpg",
  },
  {
    id: 3,
    title: "Sneakers",
    price: 1300,
    isLiked: false,
    img: "/sneakers/sneakers-3.jpg",
  },
];
</script>

<template>
  <div>
    <h1 class="text-2xl font-semibold mb-5">Все кроссовки</h1>

    <LazyUICardListView  :data="products">
      <template #default="{ item }">
        <LazyUICard
          :title="item.title"
          :price="item.price"
          :img="item.img"
          :liked="item.isLiked"
        />
      </template>
    </LazyUICardListView>
  </div>
</template>
