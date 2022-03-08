<template>
<div>
  <div id="menu">
    <input type="checkbox" id="menu-toggle"/>
    <ul>
      <li>
        <a href="#">&#x2708;</a>
      </li><li>
        <a href="#">&#x266b;</a>
      </li><li>
        <a href="#">&#x2709;</a>
      </li>
    </ul>
  </div>

  <div class="AgentGalery">
    <AgentCard
    v-for="agent in dataTab" 
    :key="agent.uuid"
    :name="agent.displayName" 
    :bustPortrait="agent.bustPortrait" />
  </div>
</div>
</template>


<script>
import getAgentData from '@/services/api/api.js'
import AgentCard from './AgentCard.vue'
getAgentData()

export default {
  name: 'AgentGalery',
  props: {
    msg: String
  },
  components: {
    AgentCard
  },
  data(){
    return {
      dataTab: []
    }
  },
  created:function(){
    this.retrieveAgentData()
  },

  methods: {
    async retrieveAgentData(){
      this.dataTab = await getAgentData()
    }
  }
}
</script>


<style scoped>
.AgentGalery{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

p{
  color: white;
}


html, body{
  margin:0;
  padding:0;
  font-family:sans-serif;
}

#menu{
  position:absolute;
  top:30px;
  left:30px;
  z-index:500;
  height:50px;
  border-radius:25px;
  overflow:hidden;
  background:#444;
  box-shadow:0px 0px 10px rgba(0,0,0,.5);
  transition:all .5s ease;
}

#menu > *{
  float:left;
}
  

#menu-toggle{
  display:block;
  cursor:pointer;
  opacity:0;
  z-index:999;
  margin:0;
  width:50px;
  height:50px;
  position:absolute;
  top:0;
  left:0;

    
}

#menu-toggle:checked~ul{
    width:150px;
    background-position:0px -50px;
  }


ul{
  list-style-type:none;
  margin:0;
  padding:0 0 0 50px;
  height:50px;
  width:0px;
  transition:.5s width ease;
  background-image:url("https://i.imgur.com/3d0vJzn.png");
  background-repeat:no-repeat;
  background-position:0px 0px;
}

li{
  display:inline-block;
  line-height:50px;
  width:50px;
  text-align:center;
  margin:0;
}
  a{
    font-size:1.25em;
    font-weight:bold;
    color:white;
    text-decoration:none;
  }
</style>