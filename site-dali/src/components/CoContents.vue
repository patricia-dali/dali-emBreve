<template>
    <contents class="content">
        <div class="text1">
            <h1>Dalí,</h1>
            <h2>A Surreal Way</h2>
            <h3>of Doing Things</h3>
        </div>

        <div class="img1 border-solid border-2 border-[#120F82] ...">
        </div>

        <div class="text2">
            olá
        </div>  

    </contents>
</template>

<script>
export default {
    name: 'CoContents'
}
</script>

<style>
    .content {
        grid-area: content;
        padding-top: 4%;
    }
    .text1 {
        font-size: 3.7rem;
        line-height: 10vh;
        margin-left: 6%;
        padding-bottom: 5vh;
    }
    h1 {
        font-family: 'Raleway', sans-serif;
        letter-spacing: 1px;
        color: #FF5B6B;
    }
    h2 {
        font-family: 'PT Serif', serif;
        color: #6930F5;
    }
    h3 {
        font-family: 'Raleway', sans-serif;
        letter-spacing: 1px;
        word-spacing: 20px;
        color: #6930F5;
    }
    .img1 {
        background-image: url(./imagens/Component1.png);
        border-radius: 10px;
        box-shadow: -9px 9px 0px -1px #FF5B6B;
        box-sizing: content-box;
        background-size: cover;
        background-position: 89%;
        background-repeat: no-repeat;
        width: 87vw;
        height: 37vh;
        margin: auto;
    }
    .text2 {
        padding-block: 10%;
        text-align: center;
    }
</style>
