<template lang="pug">
  section
    div.logo-wrap
      div.wrap1
        div.u
          div.rect1
          div.rect2
          div.circle
        div.n
          div.rect1
          div.rect2
          div.circle
        div.i
          div.circle
          div.rect
      div.wrap2
        div.p
          div.rect
          div.circle
        div.o
          div.circle
        div.t
          div.rect1
          div.rect2
        div.a
          div.rect
          div.circle
</template>

<script>
import anime from 'animejs'

export default {
  components: {
  }
}
</script>

<style lang="sass">
.logo-wrap
  width: 250px
  margin: auto
  padding-top: 40vh
  @media screen and (max-width:480px)
    &
      transform: scale(0.8)
.wrap1
  position: relative
.wrap2
  position: relative
  top: 90px
.u
  position: absolute
  top: 0
  left: 0
  .rect1
    position: absolute
    width: 50px
    height: 45px
    background: #BBBBBB
  .rect2
    position: absolute
    left: 25px
    top: calc( 100% + 25px )
    width: 25px
    height: 45px
    background: #BBBBBB
  .circle
    position: absolute
    top: 20px
    width: 50px
    height: 50px
    background: gray
    border-radius: 100%
.n
  position: absolute
  top: 0
  left: 70px
  .circle
    position: absolute
    top: 0
    width: 50px
    height: 50px
    background: gray
    border-radius: 100%
  .rect1
    position: absolute
    top: 25px
    width: 50px
    height: 45px
    background: #BBBBBB
  .rect2
    position: absolute
    width: 25px
    height: 25px
    background: #BBBBBB
.i
  position: absolute
  left: 140px
  .circle
    position: absolute
    top: 0
    width: 20px
    height: 20px
    background: gray
    border-radius: 100%
  .rect
    position: absolute
    top: 25px
    width: 20px
    height: 45px
    background: #BBBBBB
.p
  position: absolute
  top: 0
  left: 0
  .circle
    position: absolute
    top: 0
    width: 50px
    height: 50px
    background: gray
    border-radius: 100%
  .rect
    position: absolute
    top: 25px
    width: 25px
    height: 45px
    background: #BBBBBB
.o
  position: absolute
  left: 70px
  .circle
    position: absolute
    top: 0
    width: 50px
    height: 50px
    background: gray
    border-radius: 100%
.t
  position: absolute
  left: 140px
  .rect1
    position: absolute
    width: 20px
    height: 50px
    background: #BBBBBB
  .rect2
    position: absolute
    top: 15px
    width: 40px
    height: 15px
    background: gray
.a
  position: absolute
  left: 200px
  .circle
    position: absolute
    top: 0
    width: 50px
    height: 50px
    background: gray
    border-radius: 100%
  .rect
    position: absolute
    top: 25px
    left: 25px
    width: 25px
    height: 25px
    background: #BBBBBB
</style>
