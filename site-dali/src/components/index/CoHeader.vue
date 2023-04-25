<template>
    <header class="header">     
        <div class="grid grid-cols-3">
            <div>
                <img src="../imagens/LogoDali.png" width="85">
            </div>
            <div class="menu">
                <a href="../../Proj.vue">Projetos</a>  
                <a href="">Sobre</a> 
                <a href="">Serviços</a>
            </div>
            <div class="botao ">
                <button class="button1 rounded-md order-solid border border-[#120F82] ...">Contato</button>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'CoHeader'
}
</script>

<style>
    .header {
        height: 80px;
        display: flex;
        padding-left: 5%;
        padding-right: 5%;
        margin-bottom: 4%;
        align-items: center;
        box-shadow: 0px 1px 5px  #cfcccc;
    }
    .menu {
        text-align: center;
        font-family: 'PT Sans', sans-serif;
        font-size: 0.9rem;
        color: #120F82;
        margin-top: 7px;
        font-weight: bold;
        letter-spacing: 1px;
    }
    a {
        padding-right: 11%;
    }
    .botao {
        text-align: right;
    }
    .button1 {
        background-color: #FF7E74;
        color: #FFFFFF;
        font-weight: bold;
        font-family: 'Anuphan', sans-serif;
        letter-spacing: 1px;
        font-size: 0.9rem;
        margin-left: auto;
        margin-right: auto; 
        width: 120px;
        height: 33px;
        box-shadow: -3px 3px #120F82;
    }
    button:active {
        box-shadow: 0 0px #120F82;
        transform: translate(-3px, 3px);
    }
</style>
