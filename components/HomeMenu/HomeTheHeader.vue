<template>
  <header>
    <div class="drawer-toggle" role="button" @click="$store.dispatch('nav/toggleSidebar')">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>

    <div class="brand-name" @click="$store.dispatch('nav/toggleSidebar')">
      <nuxt-link to="/">Menu</nuxt-link>
    </div>
  </header>
</template>

<script>
import AppLinks from '~/components/HomeMenu/HomeAppLinks'
export default {
  components: {
    AppLinks
   }
}
</script>

<style scoped>
  header{
    position: absolute;
    display: flex;
    align-items: center;
    background-color: transparent;
    background-position: top;
    padding: 0 16px;
    height: 100px;
    width: 100vw;
  }
  header:nth-child{
    justify-self: end !important;
  }
  .drawer-toggle .bar{
    height: 2px;
    background-color: white;
    border-radius: 50px
  }
  .drawer-toggle .bar:nth-of-type(1){
    width: 20px;
  }
  .drawer-toggle  .bar:nth-of-type(2){
    width: 28px;
  }
  .drawer-toggle  .bar:nth-of-type(3){
    width: 16px;
  }
  .drawer-toggle {
    display: flex;
    justify-self: start;
    flex-direction: column;
    justify-content: space-around;
    height: 15%;
    width: 25px;
    cursor: pointer;
  }
  .app-links{
    justify-self: end;
    display: none;
  }
  .brand-name {
    margin: 0px;
    margin-right: 20px;
    font-family: 'HelveticaNeue', sans-serif;
  }
  .brand-name a {
    text-decoration: none;
    color: white;
    display: none;
    font-size: 16px;
  }

@media (min-width: 430px) {
  .logo{
    width: 40%;
    margin-right: 30px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
  }
  .bar:nth-of-type(3){
    display: none;
  }
  .drawer-toggle .bar:nth-of-type(1),
  .drawer-toggle  .bar:nth-of-type(2){
    width: 24px;
  }
  .brand-name {
    margin-left: 10px;
  }
  .brand-name a {
    display: block;
  }
}

@media (min-width: 900px) {
  .logo{
    width: 300px;
  }
  .drawer-toggle{
    margin-left: 35px;
  }
}
</style>
