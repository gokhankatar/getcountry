<script>
/* eslint-disable */

import fetchData from "../mixins/fetchData";
import Card from "../components/Card";
import LoaderVue from "../components/Loader";
import ErrorVue from "../components/Error";

export default {
    name: 'AppView',
    mixins: [fetchData],
    components: { Card, LoaderVue, ErrorVue },
    data() {
        return {
            isActiveInput: false,
            isDarkMode: false,
            placeHolderMsg: "Write any country name...",
            activeInfo: this.isActiveInfo,
        }
    },
    methods: {
        onClickInput() {
            this.$refs.input.placeholder = this.placeHolderMsg;
            this.$refs.input.style.width = '70%';
            this.$refs.input.style.textAlign = 'start';
        }
    },
    watch: {
        isDarkMode() {
            return this.isDarkMode
                ? document.querySelector('.main').classList.add('dark-mode')
                : document.querySelector('.main').classList.remove('dark-mode');
        },
        name() {
            if (this.name === '') {
                this.isActiveInput = false;
            }
        },
    }
}
</script>

<template>
    <main class="main">
        <i @click="isDarkMode = !isDarkMode" :class="isDarkMode ? 'fa-solid fa-sun' : 'fa-solid fa-moon'"
            id="modeIcon"></i>
        <ErrorVue v-if="isError" />
        <div id="searchZone"></div>
        <div ref="searchAppContainer" v-if="!isError" class="container">
            <input ref="input" type="text" placeholder="&#128269; Search..." id="searchInput" @click="onClickInput"
                @keyup="onKeyUpData" :class="[isActiveInput ? 'active-input' : '', dataList.length>0 ? 'controlled':'']" v-model="name">
            <LoaderVue v-if="isLoading" />
            <div v-show="dataList.length > 0" class="card-wrappers">
                <Card v-if="!isLoading" :countryList="dataList" />
            </div>
        </div>
    </main>
</template>

<style scoped>
.main {
    background: var(--colorSecondary);
}

#modeIcon {
    position: absolute;
    top: 3%;
    right: 6%;

    color: var(--colorPrimary);
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    border: 1px solid var(--colorPrimary);
    border-radius: 50%;
    padding: 1rem;
    z-index: 99;
    transition: all .2s ease-in;
}

@media screen and (max-width:600px) {
    #modeIcon {
        padding: 1rem;
        font-size: 1.5rem;
    }
}

#modeIcon:hover {
    background: var(--colorSecondary);
    color: var(--colorPrimary)
}

.container {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}

#searchInput {
    outline: none;
    background: transparent;
    border: 2px solid var(--colorPrimary);
    border-radius: 2.5rem;
    width: 20%;
    text-align: center;
    transition: all .3s ease;
    padding: 1.5rem 2.5rem;
    letter-spacing: 2px;
    font-weight: 600;
    font-size: .9rem;
}

@media screen and (max-width:1650px) {
    #searchInput {
        margin-top: 2rem;
    }
}

@media screen and (max-width:950px) {
    #searchInput {
        width: 35%;
    }
}

@media screen and (max-width:550px) {
    #searchInput {
        width: 40%;
    }
}

#searchInput::placeholder {
    letter-spacing: 1px;
    font-weight: 500;
    font-size: 1.2rem;
}

.active-input {
    border-color: var(--colorBlue) !important;
    color: var(--colorBlue) !important;
    box-shadow: 0 0 3rem var(--colorBlue);
    width: 70%;
}

.card-wrappers {
    display: flex;
    justify-content: center;
    gap: 2.5rem;
    padding: 0 2rem;
    flex-wrap: wrap;
    width: 100vw;
}

.back-btn {
    text-align: center;
    margin-top: -5rem;
}

.link_404 {
    border: 1px solid var(--colorBlue);
    border-radius: 1.5rem;
    background: transparent;
    color: var(--colorBlue);
    padding: .8rem 1.2rem;
    cursor: pointer;
    display: inline-block;
    transition: all .2s ease-in;
}

.link_404:hover {
    background: var(--colorBlue);
    color: #fff;
}

.controlled {
    margin-top: 7rem !important;
}
</style>