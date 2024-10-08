<script setup lang="ts"></script>

<template>
  <nav>
    <ul class="flex gap-4 items-center">
        <li class="flex gap-1 items-center">
            <NuxtLink>
                <img src="/cart.svg" alt="cart">
            </NuxtLink>
            <span class="font-bold">1200rub</span>
        </li>
        <li class="flex gap-1  items-center">
            <NuxtLink>
                <img src="/heart.svg" alt="favourite">
            </NuxtLink>
            <span>Закладки</span>
        </li>
        <li class="flex gap-1 items-center">
            <NuxtLink>
                <img src="/profile.svg" alt="profile">
            </NuxtLink>
            <span>Профиль</span>
        </li>
    </ul>
  </nav>
</template>

<style scoped></style>
