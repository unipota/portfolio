<template lang="pug">
  section
    transition-group(name="list" tag="div").works-container
      div.work(v-for="(d,i) in listdata" :key="i" @click="openWindow(i)")
        // div.description
        //   | {{d.name}}
        img(:src="d.img")
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
        span.work-description
          | {{works[currentId].description}}
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
          name: "RobotLoveロゴ",
          img: "/img/robotlove.png"
        },
        {
          name: "双テック logo",
          img: "/img/sugotech_logo.png"
        },
        {
          name: "東工大図書館",
          img: "/img/titech.png"
        },
        {
          name: "デザイン研究会 名刺",
          img: "/img/deken_meishi.png"
        },
        {
          name: "デザイン研究会 ロゴ",
          img: "/img/deken_logo.png"
        },
        {
          name: "traP公認化記念壁紙",
          img: "/img/traP_wall.png"
        },
        {
          name: "traP名刺",
          img: "/img/card2018.png"
        },
        {
          name: "工大祭2018公式サイト",
          img: "/img/koudaisai2018.png"
        },
        {
          name: "工大祭2018テーマロゴ",
          img: "/img/frontier.png"
        },
        {
          name: "traP新歓パンフレット",
          img: "/img/leaflet2018.png"
        },
        {
          name: "JIZI新歓サイト",
          img: "/img/jizi_shinkan.png"
        },
        {
          name: "traQListロゴ",
          img: "/img/traQList_logo.png"
        },
        {
          name: "SkyHighFightロゴ",
          img: "/img/SHF_logo.png"
        },
        {
          name: "2018年賀状",
          img: "/img/nenga2018.png"
        },
        {
          name: "traP AdC2017",
          img: "/img/adc2017.png"
        },
        {
          name: "JIZI ネットワーク局",
          img: "/img/network_logo.svg"
        },
        {
          name: "工大祭 ビラ",
          img: "/img/bira_2017.png"
        },
        {
          name: "工大祭 看板",
          img: "/img/kanban_2017.png"
        },
        {
          name: "チズケ研究会",
          img: "/img/cheese_logo.png"
        },
        {
          name: "タクスタ",
          img: "/img/taksta_logo.png",
        },
        {
          name: "四川屋台 チラシ",
          img: "/img/shisen.png"
        },
        {
          name: "traP ポロシャツ",
          img: "/img/polo_2017.png"
        },
        {
          name: "traP Tシャツ",
          img: "/img/tshirt_2017.png"
        },
        {
          name: "福袋STG logo",
          img: "/img/hukubukuro_logo.png"
        },
        {
          name: "traP SoundCollection",
          img: "/img/sound_collection.png"
        },
        {
          name: "traP のぼり",
          img: "/img/nobori.png"
        },
        {
          name: "工大祭公式サイト2017",
          img: "/img/koudaisai2017.png"
        },
        {
          name: "traP新歓パンフレット",
          img: "/img/leaflet_2017.png"
        },
        {
          name: "traP AdC2016",
          img: "/img/adc2016.jpg"
        },
        {
          name: "SabaCrack",
          img: "/img/saba_logo.png"
        },
        {
          name: "課金王者ガチャキング",
          img: "/img/gacha_logo.png"
        },
        {
          name: "traP Collection vol.1",
          img: "/img/jacket_front_p1.png"
        },
        {
          name: "Tokyo Game City",
          img: "/img/gamecity_logo.png"
        },
        {
          name: "titeQuest",
          img: "/img/teq_waiting.gif"
        },
        {
          name: "traP名刺",
          img: "/img/card_2016.png"
        },
        {
          name: "traPロゴ",
          img: "/img/logo_text_official.svg",
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
