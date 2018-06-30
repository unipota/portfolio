<template lang="pug">
  section.container
    | portfolio
    br
    nuxt-link(to="/about")
      | about
</template>

<script>
import anime from 'animejs'

export default {
  components: {
  }
}
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
