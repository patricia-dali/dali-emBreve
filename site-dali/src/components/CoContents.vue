<template>
    <contents class="content">
        <div class="text1">
            <h1>Dalí,</h1>
            <h2>A Surreal Way</h2>
            <h3>of Doing Things</h3>
        </div>
            <!-- z-10 animate-spin-slow overflow-hidden ... -->
        <div class="rod1">
        </div>

        <div class="img1 border-solid border-2 border-[#120F82] ...">
        </div>

        <div class="exc1 relative overflow-auto"> 
           <div class="max-w-md mx-auto  min-w-0 "> 
            <div class="flex"> 
             <div class="flex-none py-6 px-3 first:pl-6 last:pr-6"> 
              <div class="flex flex-col items-center justify-center gap-3"> 
               <img class="img2" src="./imagens/cardProjet.png"> 
              </div> 
             </div> 
             <div class="flex-none py-6 px-3 first:pl-6 last:pr-6"> 
              <div class="flex flex-col items-center justify-center gap-3"> 
               <img class="img2" src="./imagens/cardProjet.png"> 
              </div> 
             </div> 
             <div class="flex-none py-6 px-3 first:pl-6 last:pr-6"> 
              <div class="flex flex-col items-center justify-center gap-3"> 
               <img class="img2" src="./imagens/cardProjet.png"> 
              </div> 
             </div> 
             <div class="flex-none py-6 px-3 first:pl-6 last:pr-6"> 
              <div class="flex flex-col items-center justify-center gap-3"> 
               <img class="img2" src="./imagens/cardProjet.png"> 
              </div> 
             </div> 
             <div class="flex-none py-6 px-3 first:pl-6 last:pr-6"> 
              <div class="flex flex-col items-center justify-center gap-3"> 
               <img class="img2" src="./imagens/cardProjet.png"> 
              </div> 
             </div> 
             <div class="flex-none py-6 px-3 first:pl-6 last:pr-6"> 
              <div class="flex flex-col items-center justify-center gap-3"> 
               <img class="img2" src="./imagens/cardProjet.png"> 
              </div> 
             </div>
            </div>
           </div>
          </div>

        <div class="barra flex">
            <div class=" ok1">
                <button class="bot2 rounded-md order-solid border border-[#120F82] ...">&lt;</button>
            </div>
            <div class=" poj1">
                <a href="">Ver todos os projetos</a>
            </div>
            <div class=" ok2">
                <button class="bot2 rounded-md order-solid border border-[#120F82] ...">&gt;</button>
            </div>
        </div>

        <div>Olá</div>

    </contents>
</template>

<script>
export default {
    name: 'CoContents'
}

</script>

<style>
    .content {
        width: 100vw;
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
        width: 88vw;
        height: 37vh;
        margin: auto;
    }
    .rod1 {
        position: absolute;
        background-image: url(./imagens/Arc.png);
        background-size: cover;
        top: 33vh;
        right: 0;
        width: 16vw;
        height: 35vh;
        z-index: -1;
    }
    .exc1 {
        margin-top: 12vh;
    }
    .img2 {
        width: 19vw;
        height: auto;
    }
    .barra {
        margin-bottom: 12vh;
    }
    .poj1 {   
        position: relative;
        width: 40vw;
        left: 30vw;
        text-align: center;
    }
    .ok1 {
        position: absolute;
        margin-left: 5vw;
    }
    .ok2 {
        position: absolute;
        right: 5vw;
    }
    .bot2 {
        background-color: #FF7E74;
        color: #FFFFFF;
        font-weight: bold;
        font-family: 'Anuphan', sans-serif;
        font-size: 1.2rem;
        margin-left: auto;
        margin-right: auto; 
        width: 40px;
        height: 33px;
        box-shadow: -3px 3px #120F82;
    }
</style>