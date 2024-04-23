<script>
/* eslint-disable */

import { gsap } from 'gsap';
import FeatureFree from "./FeatureFree.vue";
import FeatureOS from "./FeatureOS";
import FeatureContact from "./FeatureContact";

export default {
    name: 'FeaturesVue',
    components: { FeatureFree, FeatureOS, FeatureContact },
    data() {
        return {
            isActiveComponent: 'FeatureFree',
        }
    },
    watch: {
        isActiveComponent() {
            if (this.isActiveComponent === 'FeatureOS') {
                setTimeout(() => {
                    this.isActiveComponent = 'FeatureContact'
                }, 10000);
            } else if (this.isActiveComponent === 'FeatureContact') {
                setTimeout(() => {
                    this.isActiveComponent = 'FeatureFree'
                }, 10000);
            } else {
                setTimeout(() => {
                    this.isActiveComponent = 'FeatureOS'
                }, 10000);
            }
        }
    },
    mounted() {
        setTimeout(() => {
            this.isActiveComponent = 'FeatureOS'
        }, 10000);
        gsap.from('.features',{
            y:250,
            duration:3
        })
    },
}
</script>

<template>
    <section class="features" id="features">
        <div class="dots">
            <div :class="isActiveComponent === 'FeatureFree' ? 'active' : ''" @click="isActiveComponent = 'FeatureFree'"
                id="dot"></div>
            <div :class="isActiveComponent === 'FeatureOS' ? 'active' : ''" @click="isActiveComponent = 'FeatureOS'"
                id="dot"></div>
            <div :class="isActiveComponent === 'FeatureContact' ? 'active' : ''"
                @click="isActiveComponent = 'FeatureContact'" id="dot"></div>
        </div>
        <component :is='isActiveComponent' />
    </section>
</template>

<style scoped>
.features {
    width: 100%;
    height: 35rem;
    padding: 0 25rem;

    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    justify-content: center;
    align-items: center;
}

.features .feature-container {
    background: rgba(0, 0, 50, .5);
}

@media screen and (max-width:1650px) {
    .features {
        padding: 0 15rem;
    }
}

@media screen and (max-width:1250px) {
    .features {
        padding: 0 5rem;
    }
}

@media screen and (max-width:768px) {
    .features {
        padding: 0 2rem;
    }
}

@media screen and (max-width:600px) {
    .features {
        height: 40rem;
    }
}

@media screen and (max-width:450px) {
    .features {
        height: 45rem;
    }
}

@media screen and (max-width:600px) {
    .features .feature-container {
        flex-direction: column;
        text-align: center;
        height: 80%;
    }
}

.dots {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

#dot {
    height: .5rem;
    width: 3rem;
    border: none;
    border-radius: 1.5rem;
    background: rgba(255, 255, 255, .2);
    cursor: pointer;
}

.active {
    background-color: var(--colorBlue) !important;
}
</style>