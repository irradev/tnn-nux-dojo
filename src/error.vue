<template>
  <div class="flex h-screen justify-center items-center  bg-slate-500">
    <div class="w-full max-w-sm max-auto">

      <div class="mt-7 text-center card">
        <p class="mt-7 text-7xl font-bold">{{  error.statusCode }}</p>
        <p class="mt-7 text-6xl">Oops.</p>
        <p class="mt-7">{{ error.message }}</p>
        <button class="btn mt-7" @click="handleClearError">Go Home...</button>
      </div>
    </div>

  </div>
</template>

<script setup>
  defineProps(['error']);
  const handleClearError = () => clearError({ redirect: '/'})
</script>

<style lang="css" scoped>

</style>