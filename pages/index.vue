<script setup lang="ts">
useHead({
  titleTemplate: "%s - Home",
  title: "Sneakers shop",
});


</script>

<template>
  <div>
    Page: Home

    <div class="show-case flex-wrap justify-between flex gap-4 items-center">
      <UICard
        img="/sneakers/sneakers-1.jpg"
        title="Sneaker"
        :price="1200"
        :liked="false"
      />
      <UICard
        img="/sneakers/sneakers-1.jpg"
        title="Sneaker"
        :price="1200"
        :liked="false"
      />
   
    </div>
  </div>
</template>

<style scoped></style>
