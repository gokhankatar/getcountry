<script>
/* eslint-disable */

import fetchData from '@/mixins/fetchData';

export default {
    name: 'ErrorVue',
    mixins: [fetchData],
    methods: {
        goHome() {
            this.$router.push('/');
        }
    }
}
</script>

<template>
    <div class="container-error">
        <h1>404</h1>
        <p>Oops! Something is wrong.</p>
        <button @click="goHome">
            <i class="fa-solid fa-house"></i>
            <span>Go Home</span>
        </button>
    </div>
</template>

<style scoped>
.container-error {
    background-color: red;
    color: #fff;
    font-size: 100%;
    line-height: 1.5;
    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

button {
    font-weight: 300;
    color: #fff;
    background: transparent;
    cursor: pointer;
    font-size: 1rem;
    letter-spacing: 1px;
    font-weight: 600;
    border: 1px solid #efefef;
    padding: 1rem 1.5rem;
    border-radius: 3px;
    transition: all .3s ease;
    margin-top: 2rem;

    display: flex;
    align-items: center;
    gap: 1rem;
}

button:hover {
    border: 1px solid #000;
    background-color: #000;
    color: #fff;
    box-shadow: 0 0 3rem #000;
}

p {
    font-size: 2rem;
    text-align: center;
    font-weight: 100;
}

h1 {
    text-align: center;
    font-size: 15rem;
    font-weight: 600;
    letter-spacing: 3px;
}
</style>