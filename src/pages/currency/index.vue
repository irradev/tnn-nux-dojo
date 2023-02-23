<template>
  <div>
    <h1 class="font-bold text-blue-600 text-xl">Currency api</h1>
    <p>{{ data }}</p>
  </div>
</template>

<script setup>

const { data } = await useFetch('/api/currency/GBP');

</script>

<style lang="css" scoped>

</style>