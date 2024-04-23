<script>
/* eslint-disable */

import Line from '../components/Line';
import What from '../components/What';
import Features from '../components/Features';

export default {
  name: 'AboutView',
  components: { What, Line, Features },
}
</script>

<template>

  <div class="container-about">
    <What />
    <Line />
    <Features />
  </div>

</template>

<style scoped>
.container-about {
  min-height: 100vh;
  padding: 10rem 10rem 1rem;
}

@media screen and (max-width:805px) {
  .container-about{
    padding: 7rem 5rem 0;
  }
}

@media screen and (max-width:650px) {
  .container-about{
    padding: 7rem 2rem 0;
  }
}
</style>
