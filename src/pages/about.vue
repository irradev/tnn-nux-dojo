<template>
  <h1>About</h1>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non harum qui consectetur dolorem enim vel voluptatem magni? Nostrum asperiores labore minima ullam aspernatur nobis iusto architecto, cupiditate quaerat amet dignissimos?</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam iste sit totam perferendis minima temporibus, deleniti nisi atque explicabo tenetur labore autem dicta adipisci voluptatem voluptatibus hic alias fuga quasi?</p>
  <p>{{ data }}</p>
  <p>{{ apiData }}</p>
</template>

<script setup>
  const { data } = await useFetch('/api/ninja?name=irra', {
    method: 'POST',
    body: {
      age: 31
    }
  })

  const {data:apiData} = await useFetch('/api/currency/currency');
</script>

<style scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }

  p {
    margin: 20px 0;
  }
</style>