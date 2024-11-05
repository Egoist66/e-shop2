<script setup lang="ts">

    const props = withDefaults(defineProps<{
        img?: string,
        title?: string,
        price?: number,
        liked?: boolean
    }>(), {
        liked: false,
        img: '',
        title: '',
        price: 0
    })

    // const emit = defineEmits<{
    //     (e: 'toLike', event: Event): void
    // }>()

    const {toLike, isLiked} = useCard({defaultLiked: props.liked})

  
</script>

<template>
  <div
    class="relative goods-card flex flex-col w-full border border-slate-100 rounded-xl p-8 cursor-pointer transition hover:shadow-xl hover:transform hover:-translate-y-2"
  >
    <div @click="toLike($event)" class="absolute top-8 left-8">
      <img :src="isLiked ? '/like-2.svg' : '/like-1.svg'" alt="Favorite" />
    </div>
    <img  :src="img" class="w-full goods" alt="Sneaker" />
    <p>{{ title }}</p>
    <div class="flex justify-between mt-5">
      <div class="flex flex-col gap-2">
        <span class="text-slate-200">Цена:</span>
        <span class="font-bold">{{ price }} руб.</span>
      </div>
      <img src="/plus.svg" alt="Plus" />
    </div>
  </div>
</template>

<style>

  img {
      max-width: 100%;
      
  }

  .goods {
      width: 200px;
  }

  @media(max-width: 1230px) {
    div.goods-card {
      flex-grow: 1;
    }
  }
</style>
