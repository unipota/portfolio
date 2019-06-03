<template lang="pug">
  section.container
    div.about-container
      table(border="0")
        tr
          td(align="right")
            | Name:
          td.bold(align="left")
            | Yasunishi Wataru
        tr
          td(align="right")
            | Screen Name:
          td.bold(align="left")
            | sigma, unipota
        tr
          td(align="right")
            | Location:
          td.bold(align="left")
            | Tokyo
        tr
          td(align="right")
            | Occupation:
          td.bold(align="left")
            | Student
        tr
          td(align="right" valign="top")
            | Like:
          td.bold(align="left")
            | UI, Logo Design,
            br
            | Web Programming
        tr
          td(align="right" valign="top")
            | Skill:
          td.bold(align="left")
            | HTML(Pug), CSS(SASS), JS(Vue.js)
            br
            | PHP(CakePHP), Adobe Illustrator
        tr
          td(align="right")
            | Interest:
          td.bold(align="left")
            | Vue.js, Golang, UI/UX
      div.icon-container
        a(href="https://github.com/unipota" target="_blank")
          div.icon
            img(src="~assets/img/github.svg")
        a(href="https://www.facebook.com/woz.xt" target="_blank")
          div.icon
            img(src="~assets/img/fb.svg")
        a(href="https://twitter.com/sigmative" target="_blank")
          div.icon
            img(src="~assets/img/twitter.svg")
        // div.icon
        //   img(src="/assets/img/mail.svg")
</template>

<script>
export default {

}
</script>

<style lang="sass">
.about-container
.bold
  font-weight: 600
.icon-container
  margin-top: 10px
  display: flex
  align-items: center
  justify-content: center
.icon
  margin: 0 3px
  width: 30px
  height: 30px
  img
    max-width: 100%
</style>
