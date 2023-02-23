export default defineEventHandler(async (event) => {
  // console.log(event);
  // console.log(getQuery(event));
  // handle query params
  const { name } = getQuery(event);

  // handle post data
  const { age } = await readBody(event);

  // const data = await $fetch('https://fakestoreapi.com/products/2');

  return {
    message: `Hello, ${name}! You are ${age} years old.`,
    // productTitle: data.title,
  };
});
