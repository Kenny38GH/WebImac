<template>
<div class="container">
  <div class="un w-100"> 
  </div>
  <div class="deux w-100"> 
  </div>
  <div class="trois w-100"> 
  </div>
  
  <div class="button">
    <div class="PotitCarreInvisible">  
    </div>
    
    <div class="spanun">  
    </div>
    <div class="spandeux">
    </div>
    
    <div class="PotitCarreRouge">
    </div>
    
    <span>
      PLAY
    </span>
  </div>
</div>
</template>


<script>

export default {
    name: 'BetterButton'
}
</script>


<style scoped>
.w-100 {
  width: 100%;
}

.container {
  position: relative;
  display: grid;
  grid-template-rows: 1fr 0.6fr 1fr;
  width: 250px;
  min-height: 50px;
}

.un {
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
}

.deux {
  
}

.trois {
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
}

.button {
  position: absolute;
  transform: translate(-50%,-50%);
  top: 50%;
  left: 50%;
  
  height: calc(100% - 10px);
  width: calc(100% - 10px);
  
  display:grid;
  grid-template-columns: 5px calc(100% - 10px) 5px;
  grid-template-rows: 5px calc(100% - 10px) 5px;
}

.PotitCarreInvisible {
  grid-column: 1;
  grid-row: 1;
}

.spanun {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
  background-color: black;
}

.spandeux {
  grid-column: 1 / 3;
  grid-row: 2 / 4;
  background-color: black;
}

.PotitCarreRouge {
  grid-column: 3;
  grid-row: 3;
  background-color: red;
}


.button > span {
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
  color: white;
}
</style>