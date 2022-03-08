<template>
<div class='button'>
    <div class="contour">
        <div class="masqueRight"></div>
        <div class="masqueLeft"></div>
        <div class="background">
        <div class='potitCarreRouge'></div>
        <div class='potitCarreInvisible'></div>
            <slot></slot>
        </div>
    </div>
</div>
</template>


<script>

export default {
    name: 'Button'
}
</script>


<style scoped>

.background{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0c131b;
    
    width: 333px;
    height: 80px;
    z-index: 2;

    color: white;
    font-family: 'FreeSans';
    font-weight: bold;
    font-size: 36px;
    position: relative;
    transition: 300ms ease-out;
}

.contour{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border: solid 0.65mm #9A9A9A;
    
    z-index: 1;
}

.button{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 95px;
}
.button:hover .background{
    background-color: rgb(221, 33, 39);
    cursor:pointer;
}
.button:hover .potitCarreRouge{
    background-color: #0c131b;
    cursor:pointer;
}

.potitCarreRouge{
    background-color: #FF4C53;
    transition: 300ms ease-out;
    height: 8px;
    width: 8px;
    position: absolute;
    right: 0px;
    bottom: 0px;
    z-index: 3;
}

.potitCarreInvisible{
    background-color: rgba(236, 232, 225, 1);;
    height: 8px;
    width: 8px;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 3;
}

.masqueRight{
    background-color: rgba(236, 232, 225, 1);;
    height: 30px;
    width: 8px;
    position: absolute;
    left: 0px;
    margin: 50%,0;
    z-index: 3;
}

.masqueLeft{
    background-color: #FF4C53;
    height: 30px;
    width: 8px;
    position: absolute;
    right: 0px;
    margin: 50%,0;
    z-index: 3;
}

</style>