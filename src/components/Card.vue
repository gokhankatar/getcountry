<script>
/* eslint-disable */

import CardImg from './CardImg.vue';
import CardContent from './CardContent';

export default {
    name: 'CardVue',
    props: ['countryList'],
    components: { CardImg, CardContent }
}
</script>

<template>
    <div class="card" v-for="item of countryList" :key="item">
        <CardImg :link="item.flags.png" />
        <CardContent :item="item" :cName="item.name.common" :cCapital="item.capital[0]" :cTime="item.timezones[0]"
            :cRegion="item.region" :cPop="item.population" />
    </div>
</template>

<style>
.card {
    width: 23%;
    height: auto;
    border: none;
    border-radius: 1.5rem;
    box-shadow: 0 0 1.5rem var(--colorSecondary);
    cursor: pointer;
    margin: 1rem 0;
    background: transparent;
    transition: all .3s ease-in;

    display: flex;
    flex-direction: column;
}

@media screen and (max-width:950px) {
    .card {
        width: 45%;
    }
}

@media screen and (max-width:600px) {
    .card {
        width: 70%;
    }
}

@media screen and (max-width:480px) {
    .card {
        width: 95%;
    }
}

.card:hover {
    box-shadow: 0 0 1.5rem var(--colorBlue);
    scale: 1.1;
}

.card:hover #card-btn {
    color: var(--colorBlue);
    border-color: var(--colorBlue);
}
</style>