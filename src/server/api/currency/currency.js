export default defineEventHandler(async (event) => {
  // api call with private key
  const { data } = await $fetch(
    'https://api.currencyapi.com/v3/latest?apikey=fycXsYWayMeLUj7QZV9DmD4aAVd88UJahmPOv9Yi'
  );

  return data;
});
