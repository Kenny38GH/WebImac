<template>
  <div id="app">
    <Menu id='menu'/>
    <div class="container">
      <div id="title">
        VALORANT
        <p>
          STATS
        </p>
      </div>  
      <img id= "main_logo" alt='main logo' src="./assets/img/LogoSolo.png">
      <img id= "cypher_img" alt='Cypher img' src="./assets/img/V_AGENTS_587x900_Cypher.png">
      <img id= "bot_triangles" alt='tr1' src="./assets/img/bot_group.svg">
      <img id= "line01" alt='line' src="./assets/img/Line.svg">
      <img id= "line02" alt='line' src="./assets/img/Line.svg">
      <img id= "line03" alt='line' src="./assets/img/Line.svg">
      <img id= "line04" alt='line' src="./assets/img/Line.svg">
      <img id= "line05" alt='line' src="./assets/img/Line.svg">
      <img id= "line06" alt='line' src="./assets/img/Line.svg">
      <img id= "line07" alt='line' src="./assets/img/Line.svg">
      <img id= "line08" alt='line' src="./assets/img/Line.svg">
      <img id= "line09" alt='line' src="./assets/img/Line.svg">
      <img id= "line10" alt='line' src="./assets/img/Line.svg">
      
      <a href="#agentGalery"><Button id="PlayButton"> PLAY </Button></a>
      <div id= "number">
        05
      </div>
      <div id= "numberone">
        01
      </div>
      <div id= "cubeone"></div>
      <div id= "cubetwo"></div>
      <div id= "cubethree"></div>
    </div>
    <div id="agentGalery">
      <FilterMenu v-on:giveSearchContent="getSearchContent"/>
      <BigCard v-if="isBigCard" v-bind:info.sync="SelectedAgent"/>
      <AgentGalery v-bind:isCardClicked.sync="isBigCard" v-bind:search.sync="search_content" v-bind:Agent_sel.sync="SelectedAgent"/>
    </div>
    <audio autoplay loop src=".\assets\VALORANT-Collection.mp3">Your browser does not support the <code>audio</code> element.</audio>
    <footer id="footer">
      <Footer/>
    </footer>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import AgentGalery from './components/AgentGalery.vue'
import Button from './components/Button.vue'
import FilterMenu from './components/FilterMenu.vue'
import Footer from './components/Footer.vue'
import BigCard from './components/BigCard.vue'

export default {
  name: 'App',
  components: {
    Menu,AgentGalery,Button,FilterMenu,Footer, BigCard
  },
  methods: {
    getSearchContent: function(value){
      this.search_content = value
      console.log(this.search_content)
    },
    goto: function(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    }
  },
  data() {
    return {
      search_content: "",
      isBigCard: false,
      SelectedAgent:{}
    }
  },
}
</script>

<style>
@media (max-width: 1250px){
  #cypher_img{
    display: none;
  }
  #number{
    display: none;
  }
}
html{
  scroll-behavior: smooth;
}
body{
  margin: 0;
  padding: 0;
}
@font-face{
  font-family: "Valorant";
  src: local("Valorant"), url(./assets/fonts/ValorantFont.ttf) format("truetype");
  font-family: "FreeSans";
  src: local("FreeSans"), url(./assets/fonts/FreeSans.ttf) format("truetype");
  font-family: "FreeSansBold";
  src: local("FreeSansBold"), url(./assets/fonts/FreeSansBold.ttf) format("truetype");
  font-family: "Monument";
  src: url(./assets/fonts/MonumentExtended-Regular.otf) format("truetype");
  font-family: "Monument Bold";
  src: url(./assets/fonts/MonumentExtended-Ultrabold.otf) format("truetype");
}
#app {
  background-color:  rgba(236, 232, 225, 1);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1b2b3b;
  min-height: 100vh;
  position: relative;
  height: 140vh;
  scroll-behavior: smooth;
}
#cypher_img{
  position: absolute;
  right: 100px;
  top: 110px;
  z-index: 3;
}
#main_logo{
  position: absolute;
  z-index: 0;
  top: 10px;
  left: 150px;
  width: 1150px;
  height: 996px;
}
#bot_triangles{
  position: absolute;
  z-index: 1;
  left:50%;
  transform:translateX(-50.1%);
  height: 25.9%;
  bottom: 0px;
  width: 205vh;
}
#title{
  font-family: "Valorant";
  font-size: 90px;
  text-align: left;
  z-index: 1;
  text-shadow: 0px 8px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  left: 350px;
  top: 330px;
}
p{
  font-family: "Valorant";
  font-size: 90px;
  text-align: left;
  z-index: 1;
  text-shadow: 0px 8px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  left: 30px;
  top: 5px;
}
#PlayButton{
  z-index: 1;
  position: absolute;
  left: 150px;
  top: 580px;
}
#line01{
  z-index: 1;
  position: absolute;
  left: 100px;
  top: 200px;
  width: 20%;
  height: 40px;
}
#line02{
  z-index: 1;
  position: absolute;
  right: 600px;
  top: 150px;
  width: 30%;
  height: 40px;
}
#line03{
  z-index: 2;
  position: absolute;
  right: 0px;
  top: 210px;
  width: 30%;
}
#line04{
  z-index: 2;
  position: absolute;
  right: 90px;
  top: 210px;
  width: 30%;
}
#line05{
  z-index: 2;
  position: absolute;
  top: 240px;
  right: -50px;
  width: 30%;
  transform: rotate(90deg);
}
#line06{
  z-index: 2;
  position: absolute;
  top: 310px;
  right: -50px;
  width: 30%;
  transform: rotate(90deg);
}
#line07{
  z-index: 0;
  position: absolute;
  top: 750px;
  right: 50px;
  width: 20%;
  transform: rotate(90deg);
}
#line08{
  z-index: 0;
  position: absolute;
  top: 800px;
  left: 400px;
  width: 20%;
  transform: rotate(90deg);
}
#line09{
  z-index: 0;
  position: absolute;
  bottom: 150px;
  left: -80px;
  width: 20%;
  transform: rotate(90deg);
}
#line10{
  z-index: 2;
  position: absolute;
  left: -80px;
  top: 180px;
  width: 30%;
  transform: rotate(90deg);
}
#number{
  font-family: "Valorant";
  font-size: 260px;
  text-align: center;
  z-index: 1;
  position: absolute;
  color: transparent;
  -webkit-text-stroke: 1px #0F1923;
  transform: rotate(-90deg);
  right: 120px;
  bottom: 190px;
}
#numberone{
  font-family: "Valorant";
  font-size: 55px;
  text-align: center;
  z-index: 1;
  position: absolute;
  color: #0F1923;
  transform: rotate(90deg);
  left: 140px;
  top: 305px;
}
#cubeone{
  z-index: 1;
  position: absolute;
  left: 700px;
  top: 215px;
  background-color: #f55c61d2;
  width: 18px;
  height: 18px;
}
#cubetwo{
  z-index: 1;
  position: absolute;
  left: 360px;
  bottom: 190px;
  background-color: #f76368b6;
  width: 18px;
  height: 18px;
}
#cubethree{
  z-index: 1;
  position: absolute;
  left: 120px;
  top: 383px;
  background-color: rgba(141, 141, 141, 0.603);
  width: 18px;
  height: 18px;
}
#agentGalery{
  position: relative;
  background-color: #0F1923;
  width: 100%;
}
.container{
  position: relative;
  height: 135vh;
}
#footer{
  position: relative;
}
</style>
