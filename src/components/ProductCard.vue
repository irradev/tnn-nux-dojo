<template>
  <div class="card text-center">
    <div class="flex-grow flex flex-col justify-center">

      <img :src="product.image" alt="product thumb" class="thumb max-h-52 mx-auto" />
      <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    </div>
    <NuxtLink :to="`/products/${product.id}`">
      <p class="btn my-4 ">View Details</p>
    </NuxtLink>
  </div>
</template>

<script setup>
  const { product } = defineProps(['product']);
</script>

<style lang="css" scoped>

</style>