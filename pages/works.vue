<template lang="pug">
  section
    div.description(v-if="isOpened")
      div.border1
      div.border2
      div.close-button(@click="isOpened=false")
        div.v
        div.h
      div.description-container
        div.img-container
          img(:src="works[currentId].img")
        span.work-title
          | {{works[currentId].name}}
        div.work-tags
          div.tag(v-for="t in works[currentId].tags")
            | {{t}}
        span.work-description
          | {{works[currentId].description}}
    div.overlay(v-if="isOpened" @click="isOpened=false")
    transition-group(name="list" tag="div").works-container
      div.work(v-for="(d,i) in listdata" :key="i" @click="openWindow(i)")
        img(:src="d.img")
</template>

<script>
export default {
  methods: {
    openWindow: function(id) {
      this.isOpened = true
      this.currentId = id
    }
  },
  data(){
    return {
      currentId: Number,
      isOpened: false,
      works: [
        {
          name: "RobotLove Logo",
          img: "/img/robotlove.png",
          tags: ["Logo Design","Illustrator"]
        },
        {
          name: "双テック Logo",
          img: "/img/sugotech_logo.png",
          tags: ["Logo Design","Illustrator"]
        },
        {
          name: "Tokyo Tech Library",
          img: "/img/titech.png",
          tags: ["Graphic Design","Illustrator"]
        },
        {
          name: "Design Lab. Card",
          img: "/img/deken_meishi.png",
          tags: ["Graphic Design","Illustrator"]
        },
        {
          name: "Design Lab. Logo",
          img: "/img/deken_logo.png",
          tags: ["Logo Design","Illustrator"]
        },
        {
          name: "traP Wallpaper",
          img: "/img/traP_wall.png",
          tags: ["Graphic Design","Illustrator"]
        },
        {
          name: "traP Card",
          img: "/img/card2018.png",
          tags: ["Graphic Design","Illustrator"]
        },
        {
          name: "Tokyo Tech Fes. Official Site",
          img: "/img/koudaisai2018.png",
          tags: ["Web Design","Figma"]
        },
        {
          name: "Tokyo Tech Fes. ThemeLogo",
          img: "/img/frontier.png",
          tags: ["Logo Design","Illustrator"]
        },
        {
          name: "traP Welcome Leaflet 2018",
          img: "/img/leaflet2018.png",
          tags: ["Graphic Design","Illustrator"]
        },
        {
          name: "JIZI Welcome Site",
          img: "/img/jizi_shinkan.png",
          tags: ["Web Design","HTML","CSS","javascript"]
        },
        {
          name: "traQList Logo",
          img: "/img/traQList_logo.png",
          tags: ["Logo Design","Illustrator"]
        },
        {
          name: "SkyHighFight Logo",
          img: "/img/SHF_logo.png",
          tags: ["Logo Design","Illustrator"]
        },
        {
          name: "New Year Card 2018",
          img: "/img/nenga2018.png",
          tags: ["Graphic Design","Illustrator"]
        },
        {
          name: "traP AdC 2017",
          img: "/img/adc2017.png",
          tags: ["Blog Entry","Advent Calendar"]
        },
        {
          name: "JIZI Network",
          img: "/img/network_logo.svg",
          tags: ["Logo Design","Illustrator"]
        },
        // {
        //   name: "Tokyo Tech Fes. traP Flyer",
        //   img: "/img/bira_2017.png",
        //   tags: ["Graphic Design","Illustrator"],
        //   description: "Illust: @katsudontkd"
        // },
        // {
        //   name: "Tokyo Tech Fes. traP Signboard",
        //   img: "/img/kanban_2017.png",
        //   tags: ["Graphic Design","Illustrator"],
        //   description: "Illust: @KNJ"
        // },
        {
          name: "チズケ研究会 Logo",
          img: "/img/cheese_labo2.png",
          tags: ["Logo Design","Illustrator"]
        },
        {
          name: "タクスタ",
          img: "/img/taksta_logo.png",
          tags: ["Web Application","Vue.js","Pug","SASS"]
        },
        {
          name: "四川屋台 Flyer",
          img: "/img/shisen.png",
          tags: ["Graphic Design","Affinity Designer"]
        },
        {
          name: "traP Polo Shirt",
          img: "/img/polo_2017.png",
          tags: ["Graphic Design","Illustrator"]
        },
        {
          name: "traP T-shirt",
          img: "/img/tshirt_2017.png",
          tags: ["Graphic Design","Illustrator"]
        },
        {
          name: "福袋STG Logo",
          img: "/img/hukubukuro_logo.png",
          tags: ["Logo Design","Affinity Designer"]
        },
        {
          name: "traP SoundCollection LabelDesign",
          img: "/img/sound_collection.png",
          tags: ["Graphic Design","Illustrator"]
        },
        {
          name: "traP Banner",
          img: "/img/nobori.png",
          tags: ["Graphic Design","Illustrator"]
        },
        {
          name: "Tokyo Tech Fes. 2017 OfficialSite",
          img: "/img/koudaisai2017.png",
          tags: ["Web Design","HTML","SASS","jQuery"]
        },
        {
          name: "traP Welcome Leaflet 2017",
          img: "/img/leaflet_2017.png",
          tags: ["Graphic Design","Illustrator"]
        },
        {
          name: "traP AdC2016",
          img: "/img/adc2016.jpg",
          tags: ["Blog Entry","Advent Calendar"]
        },
        {
          name: "SabaCrack Logo",
          img: "/img/saba_logo.png",
          tags: ["Logo Design","Affinity Designer"]
        },
        {
          name: "課金王者ガチャキング Logo",
          img: "/img/gacha_logo.png",
          tags: ["Logo Design","Affinity Designer"],
          description: ""
        },
        {
          name: "traP Collection vol.1 DiscJacket",
          img: "/img/jacket_front_p1.png",
          tags: ["Graphic Design","Affinity Designer"]
        },
        {
          name: "TokyoGameCity Logo",
          img: "/img/gamecity_logo.png",
          tags: ["Logo Design","GIMP"]
        },
        {
          name: "titeQuest Graphics",
          img: "/img/teq_waiting.gif",
          tags: ["Pixel Art","Aseprite"],
          description: ""
        },
        {
          name: "traP Card",
          img: "/img/card_2016.png",
          tags: ["Graphic Design","Illustrator"]
        },
        {
          name: "traP Logo",
          img: "/img/logo_text_official.svg",
          tags: ["Logo Design","Illustrator"],
          description: "東京工業大学デジタル創作同好会traPの公式ロゴ"
        },
      ],
      currentList: []
    }
  },
  computed: {
    listdata: function() {
      return this.works
    }
  }
}
</script>

<style lang="sass">
.overlay
  position: fixed
  width: 100vw
  height: 100vh
  z-index: 150
.description-container
  padding: 5px
  width: 100%
  display: flex
  flex-flow: column
  justify-content: center
  align-items: center
  opacity: 0
  animation: fade .8s ease .4s
  animation-fill-mode: forwards
  overflow-x: hidden
.img-container
  margin-top: 10px
  width: 200px
  height: 200px
  display: flex
  justify-content: center
  align-items: center
  img
    max-width: 100%
    max-height: 100%
.work-title
  margin-top: 10px
  font-size: 25px
  font-weight: 400
  position: relative
  text-align: center
  &:after
    content: ''
    position: absolute
    bottom: -10px
    left: 50%
    transform: translateX(-50%)
    margin: auto
    width: calc( 100% + 20px)
    height: 1px
    background: #666666
.work-tags
  margin-top: 20px
  display: flex
  flex-wrap: wrap
  justify-content: center
.tag
  background: #666666
  color: white
  padding: 2px 5px
  border-radius: 5px
  margin: 5px 5px
  word-break: none
.work-description
  margin-top: 20px
.close-button
  position: absolute
  z-index: 200
  top: -30px
  right: -10px
  width: 50px
  height: 50px
  background: #666666
  cursor: pointer
  .v,.h
    position: absolute
    background: white
    width: 80%
    height: 2px
  .v
    top: 50%
    left: 50%
    transform: translate(-50%,-50%) rotate(-45deg)
  .h
    top: 50%
    left: 50%
    transform: translate(-50%,-50%) rotate(45deg)
.is-opened
  transform: scale(0.6)
.works-container
  display: flex
  justify-content: center
  align-items: center
  flex-wrap: wrap
  margin: 0 auto
  padding: 120px 0
  max-width: 800px
  width: 90%
.work
  display: flex
  position: relative
  justify-content: center
  align-items: center
  margin: 10px
  width: 140px
  height: 150px
  transition: all .5s ease
  border: solid 1px rgba(0,0,0,0)
  cursor: pointer
  &:hover
    border-color: #666666
  img
    max-width: 100%
    max-height: 100%
  .work-back
    position: absolute
    width: 100%
    height: 100%
    z-index: -1
.description
  position: fixed
  z-index: 200
  width: 80%
  max-width: 800px
  height: 80%
  top: 0
  bottom: 0
  right: 0
  left: 0
  margin: auto
  transition: all .5s
  animation: bg-white .8s ease .4s
  animation-fill-mode: forwards
  .border1
    &:before,&:after
      content: ''
      position: absolute
      background: #666666
    &:before
      top: 0
      left: 0
      width: 100%
      height: 2px
      animation: width-border .8s
    &:after
      top: 0
      right: 0
      height: 100%
      width: 2px
      animation: height-border .8s
  .border2
    &:before,&:after
      content: ''
      position: absolute
      background: #666666
    &:before
      bottom: 0
      left: 0
      width: 100%
      height: 2px
      animation: width-border .8s
    &:after
      bottom: 0
      left: 0
      height: 100%
      width: 2px
      animation: height-border .8s
.list-enter
  opacity: 0
.list-enter-active
  transition: all .5s ease
@keyframes width-border
  0%
    width: 0
  100%
    width: 100%
@keyframes height-border
  0%
    height: 0
  100%
    height: 100%
@keyframes bg-white
  0%
    background: rgba(0,0,0,0)
  100%
    background: rgba(255,255,255,1)
@keyframes fade
  0%
    opacity: 0
  100%
    opacity: 1
</style>
