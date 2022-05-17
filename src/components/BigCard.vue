<template>
<div class="contoursbig">
    <div class="bigcard" :style="{'background-image':`url(${info.background})`}">
        <div class="blur">
            <div class="namebig">
                {{info.displayName}}    
                <div class="desc">
                    {{info.description}}   
                </div>
                    <audio autoplay :src="info.voiceLine.mediaList[0].wave">
                        Your browser does not support the <code>audio</code> element.
                    </audio>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'BigCard',
    props:{
        name: String,
        info: Object
    }
}
</script>

<style>
.bigcard{
    margin: 20px;
    height: 200px;
    width: 100% -20px;
    background-color: #f83a40b6;
    font-family: "Valorant";
    color: white;
    background-position-y: 50%;
    font-size: 30px;
   
}

.blur{
    backdrop-filter: blur(2.5px);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

}
.namebig{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    
}

.contoursbig{
    border: solid 0.5mm #9A9A9A;
    margin: 25px;
    backdrop-filter: blur(5px);
    border-radius: 10px;
}

.desc{
    font-family: Arial, Helvetica, sans-serif;
    font-style: italic;
    font-size: 20px;
    max-width: 50%;
    
}

</style>