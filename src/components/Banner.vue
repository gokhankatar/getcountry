<script>
/* eslint-disable */
import { gsap } from 'gsap';

export default {
    name: 'BannerVue',
    data() {
        return {
            apiBtnActive: false,
            startBtnActive: false
        }
    },
    mounted() {
        // gsap animations
        gsap.from('#start-btn', {
            x: 1500,
            duration: 3,
            transition: 'elastic',
        }),
            gsap.to('#start-btn', {
                x: 0,
                duration: 3,
                ease: 'elastic',
            }),
            gsap.from('#api-btn', {
                x: -1500,
                duration: 3,
                transition: 'elastic'
            }),
            gsap.to('#api-btn', {
                x: 0,
                duration: 3,
                ease: 'elastic',
            }),
            gsap.from('.banner', {
                opacity: 0,
                duration: 2
            }),
            gsap.to('.banner', {
                opacity: 1,
                duration: 2
            }),
            gsap.from('#h1', {
                y: 500,
                duration: 3.5,
                transition: 'elastic'
            }),
            gsap.to('#h1', {
                y: 0,
                duration: 3.5,
                ease: 'elastic',
            })
    }
}
</script>

<template>
    <section class="banner">
        <div class="content">
            <h1 v-if="!apiBtnActive && !startBtnActive" id="h1">Discover nearly 250 countries</h1>
            <h1 v-if="apiBtnActive" class="api-text">See API Documentation</h1>
            <h1 v-if="startBtnActive" class="start-text">Look at source codes</h1>
            <div class="buttons">
                <a href="https://restcountries.com/" target="_blank" @mouseleave="apiBtnActive = false"
                    @mouseover="apiBtnActive = true" id="api-btn" :class="apiBtnActive ? 'api-btn' : ''">API
                    Documentation</a>
                <a href="https://github.com/gokhankatar/getcountry" @click="openApp" target="_blank"
                    @mouseleave="startBtnActive = false" @mouseover="startBtnActive = true" id="start-btn"
                    :class="startBtnActive ? 'start-btn' : ''">Source
                    Codes</a>
            </div>
        </div>
    </section>
</template>

<style scoped>
.banner {
    background: url(../assets/img/technology-785742_1280.jpg);
    background-size: cover;
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    height: 40%;
    width: 40%;
    line-height: 1;
}

@media screen and (max-width:1650px) {
    .content {
        width: 50%;
    }
}

@media screen and (max-width:1350px) {
    .content {
        width: 70%;
    }
}

@media screen and (max-width:650px) {
    .content {
        width: 90%;
        height: 65%;
        gap: 3rem;
    }
}

h1 {
    color: #fff;
    letter-spacing: 1px;
    font-size: 6rem;
    font-weight: 700;
    text-align: center;
    transition: all .2s ease;
}

@media screen and (max-width:768px) {
    h1 {
        font-size: 4rem;
    }
}


.buttons {
    display: flex;
    gap: 1.5rem;
}

a {
    text-decoration: none;
    padding: 1.2rem;
    cursor: pointer;
    color: #fff;
    background-color: rgba(255, 255, 255, .3);
    backdrop-filter: blur(.1rem);
    border: none;
    border-radius: .2rem;
    transition: all .3s ease;
    font-weight: 600;
}

.start-btn {
    background: var(--colorBlue);
}

.api-btn {
    background: #7F75FF;
}

.api-text {
    color: #7F75FF;
}

.start-text {
    color: var(--colorBlue);
}
</style>