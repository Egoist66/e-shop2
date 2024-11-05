<script setup lang="ts">

</script>



<template>
    <div class="w-4/5 m-auto bg-white rounded-xl shadow-xl" id="layout">
        <LayoutHeader />
    
        <main class="py-5" v-if="$slots.main">
           
            <div class="container">
                <slot  name="main"></slot>
            </div>
        </main>
    </div>
</template>


<style lang="css" scoped></style>
