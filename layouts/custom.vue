
<script setup lang="ts">

</script>

<template>
    <div class="min-h-screen bg-gray-100">
        <header class="bg-white shadow">
            <div class="container mx-auto px-4 py-4">
                <nav class="flex justify-between">
                    <NuxtLink to="/" class="text-2xl font-bold">Sneakers shop</NuxtLink>
                    <ul class="flex space-x-4">
                        <li>
                            <NuxtLink to="/about">About</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/contact">Contact</NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <main class="container mx-auto px-4 py-6">
            <slot />
        </main>
    </div>
</template>


<style scoped>

</style>