<script setup lang="ts">



</script>

<template>
  <header class="py-5 border-b border-slate-300">
    <div class="container flex justify-between items-center flex-wrap">
        <div class="flex gap-4 items-center">
            <NuxtLink :to="'/'">
                <img class="w-12" src="/logo.png" alt="logo" />
            </NuxtLink>
     
            <div>
                <h1 class="text-2xl font-semibold capitalize">Sneakers shop</h1>
                <p class="text-slate-400">A place for all your sneaker needs</p>
            </div>
        </div>

     
        <LayoutNavBar />
    </div>
  </header>
</template>

<style scoped>

    a {
        cursor: pointer;
    }


</style>
