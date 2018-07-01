<template lang="pug">
  div.body-container
    div.title
      nuxt-link(to="/")
        | unipota
    div.menu
        div.link.disabled
          nuxt-link(to="/about/")
            | About
        div.link
          nuxt-link(to="/works/")
            | Works
    nuxt.page-container
</template>

<style lang="sass">
@import url('https://fonts.googleapis.com/earlyaccess/mplus1p.css')
@import url('https://fonts.googleapis.com/css?family=Quicksand')

html
  font-family: 'Quicksand',"Rounded Mplus 1c","Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
  font-size: 16px
  word-spacing: 1px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  box-sizing: border-box
  color: #666666
  background: #666666
*, *:before, *:after
  box-sizing: border-box
  margin: 0
a
  text-decoration: none
  color: inherit
.container
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center
  text-align: center
.flex-center
  display:flex
  justify-content: center
  align-items: center
  text-align: center
.title
  position: fixed
  z-index: 100
  top: 30px
  left: 30px
  border: solid 2px #666666
  font-size: 25px
  font-weight: 500
  background: white
  a
    display: inline-block
    padding: 10px
    width: 100%
    height: 100%
.menu
  position: fixed
  z-index: 100
  display: flex
  bottom: 35px
  right: 30px
  font-size: 20px
.link
  background: #666666
  color: white
  margin: 0 10px
  a
    display: inline-block
    padding: 10px 15px
    width: 100%
    height: 100%
  position: relative
  &:after
    content: ''
    display: block
    position: absolute
    width: 0%
    height: 1px
    background: white
    top: 50%
    left: 10%
    transition: all .5s
  &:hover:after
      width: 80%
.body-container
.page-container
  background: white
  transition: all .5s
  min-height: 100vh
</style>
