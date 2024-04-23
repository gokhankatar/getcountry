<script>
/* eslint-disable */
export default {
    name: 'CountryFlag',
    props: ['link'],
}
</script>

<template>
    <img :src="link" alt="cardImg">
</template>

<style scoped>
img {
    border-radius: 1.5rem 1.5rem 0 0;
    flex: 0 45%;
}
</style>