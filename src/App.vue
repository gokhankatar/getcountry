<script>
/* eslint-disable */
import { gsap } from 'gsap';

export default {
  name: 'AppVue',
  data() {
    return {
      isResponsive: false,
      windowWidth: window.innerWidth,
    }
  },
  methods: {
    handleResponsive(e) {
      if (e.target.className === 'fa-solid fa-bars') {
        this.isResponsive = true;
        e.target.className = 'fa-solid fa-x';
      } else {
        e.target.className = 'fa-solid fa-bars';
        this.isResponsive = false;
      }
    },
    handleLinkResponsive() {
      this.isResponsive = false;
      this.$refs.responsiveBar.className = 'fa-solid fa-bars'
    },
    getWindowWidth() {
      this.windowWidth = window.innerWidth;
    }
  },
  watch: {
    windowWidth(value) {
      if (value >= 800) {
        this.isResponsive = false;
        this.$refs.responsiveBar.className = 'fa-solid fa-bars';
      }
    },
  },
  mounted() {
    window.addEventListener('resize', this.getWindowWidth);
    gsap.from('.navigation', {
      x: 1500,
      duration: 1
    }),
      gsap.from('#responsive-bar', {
        opacity: 0,
        duration: 2
      }),
      gsap.to('#responsive-bar', {
        opacity: 1,
        duration: 2
      })
  },
}
</script>

<template>
  <nav class="navigation">
    <img @click="$router.push('/')" class="nav-logo" src="./assets/img/logo.png" alt="logo">
    <div class="list-container">
      <ul class="list">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/app">App</router-link>
      </ul>
      <ul class="socials">
        <a href="https://twitter.com/gokhan_crypto" target="_blank" aria-label="Twitter">
          <i class="fa-brands fa-x-twitter" id="social-icon"></i>
        </a>
        <a href="https://discord.gg/QNh6y9vv" target="_blank" aria-label="Discord">
          <i class="fa-brands fa-discord" id="social-icon"></i>
        </a>
        <a href="https://github.com/gokhankatar" target="_blank" aria-label="Github">
          <i class="fa-brands fa-github" id="social-icon"></i>
        </a>
        <a href="https://www.instagram.com/katargokhan96/" target="_blank" aria-label="Instagram">
          <i class="fa-brands fa-instagram" id="social-icon"></i>
        </a>
      </ul>
    </div>
  </nav>

  <!-- Responsive Mode Active Start -->
  <i class="fa-solid fa-bars" ref="responsiveBar" id="responsive-bar" @click="handleResponsive"></i>

  <nav class="navigation-responsive" v-if="isResponsive">
    <img @click="$router.push('/')" class="nav-logo" src="./assets/img/logo.png" alt="logo">
    <div class="list-container">
      <ul class="list">
        <router-link to="/" @click="handleLinkResponsive">Home</router-link>
        <router-link to="/about" @click="handleLinkResponsive">About</router-link>
        <router-link to="/app" @click="handleLinkResponsive">App</router-link>
      </ul>
      <ul class="socials">
        <a href="https://twitter.com/gokhan_crypto" target="_blank" aria-label="Twitter">
          <i class="fa-brands fa-x-twitter" id="social-icon"></i>
        </a>
        <a href="https://discord.gg/QNh6y9vv" target="_blank" aria-label="Discord">
          <i class="fa-brands fa-discord" id="social-icon"></i>
        </a>
        <a href="https://github.com/gokhankatar" target="_blank" aria-label="Github">
          <i class="fa-brands fa-github" id="social-icon"></i>
        </a>
        <a href="https://www.instagram.com/katargokhan96/" target="_blank" aria-label="Instagram">
          <i class="fa-brands fa-instagram" id="social-icon"></i>
        </a>
      </ul>
    </div>
  </nav>
  <!-- Responsive Mode Active End -->
  <router-view />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

html {
  font-size: 100%;
}

@media screen and (max-width:950px) {
  html {
    font-size: 80%;
  }
}

@media screen and (max-width:768px) {
  html {
    font-size: 75%;
  }
}

:root {
  --colorPrimary: #fff;
  --colorSecondary: #000;
  --colorBlue: #8DE3FB;
}

.dark-mode {
  --colorPrimary: #000;
  --colorSecondary: #fff;
}

body {
  overflow-x: hidden;
}

#app {
  min-height: 100vh;
  width: 100vw;
  font-family: "Titillium Web", sans-serif;
  font-weight: 500;
  background: #1b1b1b;
}

.navigation {
  position: fixed;
  z-index: 99;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, .1);
  padding: .5rem 1rem;
  width: 50%;
  border: none;
  border-radius: 2.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media screen and (max-width:1200px) {
  .navigation {
    width: 60%;
  }
}

@media screen and (max-width:1000px) {
  .navigation {
    width: 65%;
  }
}

@media screen and (max-width:800px) {
  .navigation {
    display: none;
  }
}



.list-container {
  display: flex;
  justify-content: end;
  gap: 5rem;
}

.list {
  display: flex;
  gap: 1.2rem;
}

.socials {
  display: flex;
  gap: 2rem;
}

#social-icon {
  font-size: 1.5rem;
}

.nav-logo {
  width: 3rem;
  cursor: pointer;
}

nav a {
  text-decoration: none;
  transition: all .2s ease;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: .2rem;
  color: #a7a4a4;
}

nav a:hover {
  text-decoration: underline;
  color: #fff;
}

nav a.router-link-exact-active {
  color: var(--colorBlue);
}

/* responsive tools start */
#responsive-bar {
  position: fixed;
  z-index: 999;
  top: 3%;
  left: 7%;
  font-size: 2rem;
  color: var(--colorBlue);
  cursor: pointer;
  border: 1px solid var(--colorBlue);
  padding: 1rem;
  border-radius: 50%;
  display: none;
}

@media screen and (max-width:800px) {
  #responsive-bar {
    display: flex;
  }
}

@media screen and (max-width:648px) {
  #responsive-bar {
    font-size: 1.5rem;
  }
}

.navigation-responsive {
  position: fixed;
  top: 12%;
  left: 4%;

  height: 70vh;
  width: 10vw;
  z-index: 999;
  background: rgba(0, 0, 0, .7);
  border-radius: 5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: space-around;
}

@media screen and (max-width:550px) {
  .navigation-responsive {
    width: 15vw;
  }
}

.navigation-responsive img {
  width: 4rem;
}

.navigation-responsive .list-container {
  display: flex;
  flex-direction: column;
}

.navigation-responsive .list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.navigation-responsive .list a {
  font-size: 1.4rem;
}

@media screen and (max-width:648px) {
  .navigation-responsive .list a {
    font-size: 1.2rem;
  }
}

.navigation-responsive .socials {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.navigation-responsive #social-icon {
  font-size: 3rem;
}

@media screen and (max-width:648px) {
  .navigation-responsive #social-icon {
    font-size: 2.2rem;
  }
}

/* responsive tools end */
</style>
