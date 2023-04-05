<template>
    <header class="header">
        <img src="./imagens/LogoDali.png" width="95">
    </header>
</template>

<script>
export default {
    name: 'CoHeader'
}
</script>

<style>
  .header {
    grid-area: header;    
    display: flex;
    padding: 0;
    margin: 0;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 1px 5px  #cfcccc;
  }
</style>