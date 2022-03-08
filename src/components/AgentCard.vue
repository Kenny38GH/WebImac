<template>
<div class='contours'>
    <div class='card'>
            <div class="name">{{name}}</div>
            <img id= "bustPortrait" alt='Agent img' :src="bustPortrait">
            <div class="backgroundName"></div>
    </div>
</div>
</template>

<script>
export default {
    name: 'AgentCard',
    props:{
        name: String,
        bustPortrait: String,
        backgroundName: String
    }
}
</script>

<style>
.card{
    margin: 2px;
    height: 200px;
    width: 200px;
    background-color: #f83a40b6;
    display: flex;
    font-family: "Valorant";
    color: white;
    text-align: center;
}

.name{
    padding-left: 5px;
    padding-top: 5px;
    transition: 400ms ease-out;
}
.name:hover{
    color: #0F1923;
    cursor:pointer;
}

.contours{
    

    display: flex;
    justify-content: center;
    align-items: center;

    border: solid 0.65mm #9A9A9A;
    margin: 25px;
}

</style>