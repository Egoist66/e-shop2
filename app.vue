<template>
  <NuxtLoadingIndicator color="#42b883" :height="5" :duration="2000" />

  <NuxtLayout>
    <template #main>
      <NuxtPage />
    </template>
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
