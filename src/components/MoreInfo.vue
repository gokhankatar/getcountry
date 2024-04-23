<script>
/* eslint-disable */

import fetchData from "../mixins/fetchData.js";
import BigData from "./BigData.vue";

export default {
    name: 'MoreInfoBtn',
    props: ['item'],
    components: { BigData },
    mixins: [fetchData],
    methods: {
        moreInfo(item) {
            this.isActiveInfo = true;
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
    },
}
</script>

<template>
    <button @click="moreInfo(item)" id="card-btn">More Info</button>
    <teleport to='#searchZone'>
        <BigData ref="bigData" v-if="isActiveInfo" :country="item" />
    </teleport>
</template>

<style scoped>
#card-btn {
    border: 1px solid var(--colorPrimary);
    border-radius: 1.5rem;
    font-size: .8rem;
    font-weight: 600;
    letter-spacing: 1px;
    color: var(--colorPrimary);
    padding: .5rem 1rem;
    width: 50%;
    background: transparent;
    cursor: pointer;
    margin: .5rem auto;
    text-wrap: nowrap;
}

#card-btn:hover {
    color: var(--colorSecondary);
    background: var(--colorPrimary);
    border: 1px solid var(--colorPrimary);
}
</style>