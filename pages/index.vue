<template lang="pug">
  section.container
    div.title
      | unipota
    br
    nuxt-link(to="/about/")
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
.title {
  position: fixed;
  top: 30px;
  left: 30px;
  width: 100px;
  border: solid 2px #666666;
  padding: 10px;
  font-size: 20px;
  font-weight: 500;
}

</style>
