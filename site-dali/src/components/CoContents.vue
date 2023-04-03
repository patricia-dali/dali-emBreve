<template>
    <content class="content">

    <div class="ar">
        <h1>Em breve</h1> 
        <h2>Experiências <br>Surreais</h2>
    </div>

    <div class="rod1 ">
    </div>   
    
    <div class="cont1 border-solid border-4 border-[#120F82] ...">
    </div>

    </content>
</template>

<script>
export default {
    name: 'CoContents'
    
}
</script>

<style>
    @media (max-width: 480px){
        .ar {
            padding-top: 8vh;
        }  
        .rod1 {
            left: 60%;
            bottom: 31%;
            position: fixed;
            background-image: url(./imagens/Arc.png);    
            background-repeat: no-repeat;
            background-size: cover;   
            width: 53vw;
            height: 30vh;
            z-index: 1;
        }
    }
    @media (min-width: 480px){
        .rod1 {
            right: 3vw;
            bottom: 22%;
            position: absolute;
            background-image: url(./imagens/Arc.png);    
            background-repeat: no-repeat;
            background-size: cover;   
            width: 24vw;
            height: 45vh;
    }
    }

    .content {
        grid-area: content;
        padding-top: 4%;
        padding-left: 7%;
        margin-bottom: 4%;
    }
    .ar {
        text-align: left;
        line-height: 1;
        padding-bottom: 4%;
    }
    h1 {
        font-family: 'Eczar', serif;
        font-size: 3.8rem;
        color: #FF5B6B;
    }
    h2 {
        font-family: 'Montserrat', sans-serif;
        font-size: 3.3rem;
        color: #6930F5;
    }
    .cont1 {
        position: absolute;
        background-image: url(./imagens/Component1.png);
        border-radius: 10px;
        box-shadow: -9px 9px 0px -1px #FF5B6B;
        box-sizing: content-box;
        background-size: cover;
        background-position: 89%;
        background-repeat: no-repeat;
        width: 89vw;
        height: 40vh;
        bottom: 5%;
    }
    
</style>