<script setup lang="ts"></script>

<template>
  <nav>
    <ul class="flex gap-5 items-center">
      <NuxtLink>
        <li class="flex gap-1 items-center hover:text-black">
          <img src="/cart.svg" alt="cart" />
          <span class="font-semibold">1200rub</span>
        </li>
      </NuxtLink>
      <NuxtLink >
        <li class="flex gap-1 items-center hover:text-black">
          <img src="/heart.svg" alt="favourite" />
          <span>Закладки</span>
        </li>
      </NuxtLink>
      <NuxtLink >
        <li class="flex gap-1 items-center hover:text-black">
          <img src="/profile.svg" alt="profile" />
          <span>Профиль</span>
        </li>
      </NuxtLink>
    
    </ul>
  </nav>
</template>

<style scoped>
li {
  cursor: pointer;
}
</style>

