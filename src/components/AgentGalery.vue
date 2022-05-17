<template>
<div>
  <div id="menu">
    <input type="checkbox" id="menu-toggle"/>
    <ul>
      <li>
        <a @click="changeAgentCategory('Controller')"><img id="controller_icon" class="role_icon" src="https://media.valorant-api.com/agents/roles/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png"></a>
      </li><li>
        <a @click="changeAgentCategory('Initiator')"><img id="initiator_icon" class="role_icon" src="https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png"></a>
      </li><li>
        <a @click="changeAgentCategory('Duelist')"><img id="duelist_icon" class="role_icon" src="https://media.valorant-api.com/agents/roles/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png"></a>
      </li><li>
        <a @click="changeAgentCategory('Sentinel')"><img id="sentinel_icon" class="role_icon" src="https://media.valorant-api.com/agents/roles/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png"></a>
      </li>
    </ul>
  </div>
  <div class="numberOfAgents">
    {{nbofAgents}}
  </div>
  <div class="AgentGalery">
    <AgentCard
    v-for="agent in agentOrganizedData"
    :key="agent.uuid"
    :name="agent.displayName" 
    :bustPortrait="agent.bustPortrait"
    @click.native="infoForSelectedAgent(agent,$event)"
    />
  </div>

  <div id="resetButton" @click="reset()">
    <img id= 'resetIcon' src='@/assets/img/restart-icon-18-256.png'>
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
    msg: String,
    search: String,
    isCardClicked: Boolean,
    Agent_sel: Object
  },
  components: {
    AgentCard
  },

  data(){
    return {
      dataTab: [],
      AgentCategory: '',
      AgentVisible: false,
      agentData: []
    }
  },
  computed: {
		agentOrganizedData: function() {
      const filterFunc = (agent) => agent.displayName.toLowerCase().includes(this.search.toLowerCase())
      let data = this.dataTab.filter(filterFunc)
      if(this.AgentCategory!=''){data = data.filter(agent => agent.role.displayName == this.AgentCategory)}
      return data
		},
    nbofAgents: function() {
      const filterFunc = (agent) => agent.displayName.toLowerCase().includes(this.search.toLowerCase())
      let data = this.dataTab.filter(filterFunc)
      if(this.AgentCategory!=''){data = data.filter(agent => agent.role.displayName == this.AgentCategory)}
      let nb = 0
      for(let i = 0; i < data.length; i++){
        nb+=1
      }
      if (nb ==0) nb = "No agent"
      else nb = nb + " agents"
      return nb
    }
	},
  

  created:function(){
    this.retrieveAgentData()
  },

  methods: {
    async retrieveAgentData(){
      this.dataTab = await getAgentData()
    },

    changeAgentCategory(refAgent){
      this.AgentCategory = refAgent
      console.log(this.AgentCategory)
    },
    isVisible(refAgent){
      if(refAgent == this.AgentCategory){
        return this.AgentVisible = true
      }
      if(refAgent == 'all'){
        return this.AgentVisible = true
      }
      else{
        return this.AgentVisible = false
      }
    },
    reset(){
      this.AgentCategory = ''
      this.$emit('update:isCardClicked',false)
      this.$emit('update:search','')

    },

    infoForSelectedAgent: function(agent_selected) {
			console.log(agent_selected)
      this.$emit('update:isCardClicked',true)
      this.$emit('update:Agent_sel',agent_selected)

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


#menu{
  position:absolute;
  top:30px;
  left:30px;
  z-index:500;
  border-radius:25px;
  overflow:hidden;
  background:#797979;
  box-shadow:0px 0px 10px rgba(0,0,0,.5);
  transition:all .5s ease;
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
    height: 200px;
    background-position:0px -50px;
  }



ul{
  display: block;
  list-style-type:none;
  margin:0;
  padding:50px 0px 0px 0px;
  height:0px;
  width:50px;
  transition:.4s height ease;
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

li:hover{
  background-color: #f55c61d2;
  cursor:pointer;
}

.role_icon{
  position: relative;
  top: 6px;
  width: 25px;
}

.numberOfAgents{
  padding-top: 30px;
  font-size: 33px;
  font-family: Valorant;
  color: whitesmoke;
  }

#resetButton{
  width: 50px;
  height: 50px;
  z-index:500;
  border-radius:25px;
  background:#797979;
  box-shadow:0px 0px 10px rgba(0,0,0,.5);
  position: absolute;
  top: 30px;
  right: 28px;

}

#resetIcon{
  width: 30px;
  height: 30px;
  position: relative;
  top: 11px;
}

#resetButton:hover{
  transform: scale(1.05);
  cursor: pointer;
}


</style>