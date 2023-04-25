<template>
    <rodape class="rodape"> 
        
<!-- <div class="rod1 z-10 animate-spin-slow overflow-hidden"></div> -->

        <div class="trapezium4"></div> 
        <div class="fund1">
            <div class="rod2">
                <div class="da6 flex justify-center ...">
                </div>
            </div>
            <div class="grid grid-cols-7 justify-items-center ...">
                <div class="lef flex"><a href="">Web Site</a><h7>●</h7></div>
                <div class="lef flex"><a href="">Aplicativo</a><h7>●</h7></div>
                <div class="lef flex"><a href="">UX Design</a><h7>●</h7></div>
                <div class="lef flex"><a href="">UI Design</a><h7>●</h7></div>
                <div class="lef flex"><a href="">Product Development</a><h7>●</h7></div>
                <div class="lef flex"><a href="">Web Site</a><h7>●</h7></div>
                <div class="lef flex"><a href="">Aplicativo</a><h7>●</h7></div>
            </div>
        </div>
        
        <div class="ele1 grid grid-cols-2">
            <div>
                <div class="ra1 grid grid-cols-2"> 
                    <a href="">Projetos</a>
                    <a href="">Sobre nós</a>
                    <a href="">Serviços</a>
                    <a href="">Time</a>
                    <a href="">LinkedIn</a>
                    <a href="">Instagram</a>
                    <a href="">Twitter</a>
                </div>
                <div class="ra2">
                    <a href="">Contato</a>
                </div>
            </div>
            <div class="rex flex justify-items-center ...">
                <div class="ret1"></div>
                <div class="ret2"></div>
                <div class="ret3"></div>
            </div>
        </div>

        <div class="cop">
            <h1>Copyright © Dalí New Dream Tech</h1>
        </div>        
    </rodape>
</template>

<script>
export default {
    name: 'CoRodape'
}
</script>

<style>
.cop{
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #120F82;
        box-shadow: 0px 1px 4px  #FFFDF3;
        /* border-top: 1px solid #FFFDF3; */
    }
    .cop h1 {
        color: #FFFDF3;
        font-size: 0.8rem;
    }
    .rod2 {
        background-image: url(../imagens/arcPB.png);
        background-size: contain;
        background-position-x: center;
        background-repeat: no-repeat;
        width: 24vw;
        height: 24vh;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 6vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .fund1 {
        padding-top: 3vh;
        padding-bottom: 8vh;
        background-color: #120F82;
        /* border-bottom: 1px solid #FAE0FF; */
    }
    .da6 {
        background-image: url(../imagens/daliPB.png);
        background-size: contain;
        background-position-y: center;
        background-position-x: center;
        background-repeat: no-repeat;
        width: 10vw;
        height: 6vh;
    }
    .trapezium4 {
        margin-top: 10vh;
        height: 0;
        width: 0;
        border-bottom: 45px solid #120F82;
        border-left: 99.4vw solid transparent;
    }
    .lef a {
        font-family: 'ofelia-text';
        color: #FF7E74;
        font-weight: bold;
        font-size: 0.7rem;     
        padding: 0; 
        letter-spacing: 1px;        
        align-items: center;
        display: flex;
    }
    .lef h7 {
        color: #6930F5;
        display: flex;
        font-size: 1.7rem;       
        align-items: flex-end;
        display: inline-flex;
        padding-left: 0.9vw;
    } 
    .oi6 {
        color: #6930F5;
        display: flex;
        font-size: 1.9rem;       
        align-items: flex-end;
        display: inline-flex;
        padding-left: 0.8vw;
    }
    .ele1 {
        background-color: #120F82;
        padding: 20px;
        box-shadow: 0px 1px 4px  #FFFDF3;
    }
    .ra1{
        width: 20vw;
        height: 20vh;
        margin-top: 3vh;
        margin-left: 10vw;
    }
    .ra1 a{
        font-family: 'ofelia-text';
        color: #FFFDF3;
        font-size: 0.8rem;
    }
    .rex {        
        align-items: flex-end;
    }
    .ret1 {
        background-image: url(../imagens/Rectangle.png);
        background-size: contain;
        background-repeat: no-repeat;
        height: 21vh;
        width: 11vw;
        margin-right: 1vw;
    }
    .ret2 {
        background-image: url(../imagens/Rectangle.png);
        background-size: contain;
        background-repeat: no-repeat;
        height: 27vh;
        width: 15vw;
    }
    .ret3 {
        background-image: url(../imagens/Rectangle.png);
        background-size: contain;
        background-repeat: no-repeat;
        height: 17vh;
        width: 9vw;
    }
    .ra2 {        
        margin-top: 1vh;
        margin-left: 10vw;
    }
    .ra2 a{
        font-family: 'Raleway', sans-serif;
        color: #FFFDF3;
        font-size: 0.9rem;
        font-weight: bold;
    }
    
</style>
