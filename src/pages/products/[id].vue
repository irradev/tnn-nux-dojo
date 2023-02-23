<template>
  <div>
    <Head>
      <Title>Nuxt Dojo | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>
    <ProductDetail :product="product"/>
  </div>
</template>

<script setup>

  definePageMeta({
    layout: 'products'

  });

  const { id } = useRoute().params;
  const uri = `https://fakestoreapi.com/products/${id}`;
  // fetch the product
  const { data: product, pending, error, refresh } = await useFetch(uri, {key: id});
  if (!product.value ) {
    // console.log(error)
    throw createError({statusCode: 404, statusMessage: 'Product not found', fatal: true})
  }

</script>

<style lang="css" scoped>

</style>