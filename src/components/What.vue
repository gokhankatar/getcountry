<script>
/* eslint-disable */

import { gsap } from 'gsap';
import Line from './Line';

export default {
    name: 'WhatIs',
    components: { Line },
    mounted() {
        gsap.from('.who-title', {
            x: -1500,
            duration: 2
        }),
            gsap.from('.who-text', {
                x: 1500,
                duration: 2.1
            }),
            gsap.from('.what-title', {
                x: -1500,
                duration: 2.5
            }),
            gsap.from('.what-text', {
                x: 1500,
                duration: 2.6
            })
    }
}
</script>

<template>
    <section class="who-is">
        <div class="top">
            <h1 class="who-title">Who Is GK Software ?</h1>
        </div>
        <div class="bottom">
            <p class="who-text">GK Software actually means Gokhan Katar Software. For now, he is a person, not a
                company. So I am the
                owner of the project. GK Software's mission is to develop free web applications and provide services to
                all users. More web applications will be developed in the future. You can also reach me through my
                contact addresses. Your ideas and criticisms are very important to me.</p>
        </div>
    </section>
    <Line />
    <section class="what-is">
        <div class="top">
            <h1 class="what-title">What Is Get Country ?</h1>
        </div>
        <div class="bottom">
            <p class="what-text">The Get Country project shows a lot of data from all countries in the world for free.
                The country you
                want; It shows the population, currency, which languages are spoken in that country, its location on
                Google maps, and even whether traffic is moving from the right or left side, and much more, for free.
                First of all, I would like to thank the API provider.</p>
        </div>
    </section>
</template>

<style scoped>
.who-is {
    margin-bottom: 2rem;
    height: 15rem;
    width: 100%;

    display: flex;
    flex-direction: column;
}

@media screen and (max-width:1250px) {
    .who-is {
        height: 20rem;
    }
}

@media screen and (max-width:600px) {
    .who-is {
        height: 23rem;
    }
}

@media screen and (max-width:400px) {
    .who-is {
        height: 26rem;
    }
}


.what-is {
    height: 15rem;
    width: 100%;

    display: flex;
    flex-direction: column;
}

@media screen and (max-width:1250px) {
    .what-is {
        height: 20rem;
    }
}

@media screen and (max-width:600px) {
    .what-is {
        height: 23rem;
    }
}

@media screen and (max-width:400px) {
    .what-is {
        height: 26rem;
    }
}

.top {
    flex: 0 15%;

    display: flex;
    justify-content: center;
    align-items: center;
}

h1 {
    color: #fff;
    font-size: 2.5rem;
}

@media screen and (max-width:480px) {
    h1 {
        font-size: 2rem;
    }
}

.bottom {
    flex: 1;
    line-height: 1.8;

    display: flex;
    justify-content: center;
    align-items: center;
}

p {
    font-size: 1.3rem;
    letter-spacing: 2px;
    text-align: center;
    color: #fff;
}

@media screen and (max-width:480px) {
    p {
        font-size: 1.1rem;
        text-align: justify;
    }
}
</style>