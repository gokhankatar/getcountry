<script>
/* eslint-disable */

import { gsap } from 'gsap';

export default {
    name: 'LineVue',
    mounted() {
        gsap.from('.line-section', {
            x: -1500,
            duration: 1
        }),
            gsap.to('.line-section', {
                x: 0,
                duration: 1,
                ease:'elastic'
            })
    }
}
</script>

<template>
    <div class="line-section">
        <i class="fa-solid fa-cube"></i>
        <div class="line"></div>
        <i class="fa-solid fa-cube"></i>
    </div>
</template>

<style scoped>
.line-section {
    width: 100%;
    color: #6F6E7C;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .2rem;
}

.line {
    width: 100%;
    background-color: #6F6E7C;
    height: .1rem;
}

i {
    rotate: 45deg;
    font-size: 1rem;
}
</style>