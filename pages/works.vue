<template lang="pug">
  section
    div.works-container
      div.work(v-for="d in data")
        img(:src="d.img")
        div.work-back(v-if="d.background" :style="{'background':d.background}")
</template>

<script>
export default {
  data(){
    return {
      data: [
        {
          name: "RobotLove",
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
          name: "デザイン研究会",
          img: "/img/deken_logo.png"
        },
        {
          name: "",
          img: "/img/traP_wall.png"
        },
        {
          name: "",
          img: "/img/card2018.png"
        },
        {
          name: "",
          img: "/img/koudaisai2018.png"
        },
        {
          name: "",
          img: "/img/frontier.png"
        },
        {
          name: "",
          img: "/img/leaflet2018.png"
        },
        {
          name: "",
          img: "/img/jizi_shinkan.png"
        },
        {
          name: "traQList",
          img: "/img/traQList_logo.png"
        },
        {
          name: "",
          img: "/img/SHF_logo.png"
        },
        {
          name: "",
          img: "/img/nenga2018.png"
        },
        {
          name: "traP AdC2017",
          img: "/img/adc2017.png"
        },
        {
          name: "",
          img: "/img/network_logo.svg"
        },
        {
          name: "",
          img: "/img/bira_2017.png"
        },
        {
          name: "",
          img: "/img/kanban_2017.png"
        },
        {
          name: "チズケ研究会",
          img: "/img/cheese_logo.png"
        },
        {
          name: "タクスタ",
          img: "/img/taksta_logo.png",
          background: "#bbbbbb"
        },
        {
          name: "",
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
          name: "traP SoundCollection LabelDesign",
          img: "/img/sound_collection.png"
        },
        {
          name: "traP のぼり",
          img: "/img/nobori.png"
        },
        {
          name: "",
          img: "/img/koudaisai2017.png"
        },
        {
          name: "traP leaflet2017",
          img: "/img/leaflet_2017.png"
        },
        {
          name: "traP AdC2016",
          img: "/img/adc2016.jpg"
        },
        {
          name: "Saba Crack",
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
          name: "titeQuest Graphics",
          img: "/img/teq_waiting.gif"
        },
        {
          name: "traP 名刺 ver.2016",
          img: "/img/card_2016.png"
        },
        {
          name: "traP logo",
          img: "/img/logo_text_official.svg"
        },
      ]
    }
  }
}
</script>

<style lang="sass">
.works-container
  display: flex
  flex-wrap: wrap
  margin: 120px auto
  max-width: 500px
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
</style>
