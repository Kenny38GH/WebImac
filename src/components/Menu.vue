<template>
  <div class="Menu">
    <img id ="logo" alt="Valolo logo" src="../assets/img/LogoSolo.png" >
    <ul>
      <li class = "item">
        Weapons
      </li>
      <li>
        |
      </li>
      <li class = "item">
        Maps
      </li>
      <li>
        |
      </li>
      <li class = "item">
        Agents
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    msg: String
  },
  data(){
    return {
      dataTab: []
    }
  },
  methods: {
    doStuff(){
      console.log('Yogaa')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#logo{
  margin: 20px;
  height : 60px;
  mix-blend-mode: normal;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) grayscale(100%) brightness(5);
  transition: 300ms ease-out;
}
#logo:hover{
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  cursor:pointer;
}

.Menu{
  font-family: "Valorant";
  font-size: 18px;
  background-color: #0F1923;
  background: linear-gradient(180deg, rgba(15, 25, 35, 1) 0%, rgba(236, 232, 225, 0) 100%);
  background-blend-mode: hard-light;
  color: rgba(236, 232, 225, 0.82);
  display: flex;
  justify-content: space-between;
  height: 100px;
  z-index: 3;
  opacity: 100%;
  position: relative;
}
li{
  font-size: 22px;
  list-style: none;
  margin: 15px 0px;
}

.item{
  font-size: 18px;
  margin: 15px 150px;
  transition: 400ms ease-out;
}

.item:hover{
  color: #0F1923;
  cursor:pointer;
}
ul{
  display: flex;
  margin-right: 200px;
}
</style>
