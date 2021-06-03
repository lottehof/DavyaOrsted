<template>
  <header>
    <div class="drawer-toggle" role="button" @click="$store.dispatch('nav/toggleSidebar')">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <div class="brand-name" @click="$store.dispatch('nav/toggleSidebar')">
      <nuxt-link to="/">Menu
      </nuxt-link>
    </div>
    </header>
</template>

<script>
import AppLinks from '~/components/Menu/AppLinks'
export default {
  components: {
    AppLinks
  }
}
</script>

<style scoped>
.test{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
  .header{
    width: 70%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto;

  }

  .header-logo{
    width: 50%;
  }


  header{
    position: absolute;
    display: flex;
    align-items: center;
    background-color: transparent;
    background-position: top;
    /* padding: 0 16px; */
    height: 60px;
    width: 20vw;
  }

  header:nth-child{
    justify-self: end !important;
  }
  .drawer-toggle .bar{
    height: 2px;
    background-color: black;
    border-radius: 50px;
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
    height: 20%;
    width: 25px;
    cursor: pointer;
    padding: 0 16px;
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
    color: black;
    display: none;
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
    margin-left: 20px;
    margin-right: 20px;

  }
  .brand-name a {
    display: block;
    font-size: 16px;
  }
}
@media (min-width: 500px) {
  .header{
    height: 60px;
  }
  .header-logo{
    width: 35%;
  }
}

@media (min-width: 768px) {
  .header{
    height: 60px;
  }
  .header-logo{
    width: 25%;
  }
}

@media (min-width: 900px) {
  .logo{
    width: 300px;
  }
  .drawer-toggle{
    margin-left: 35px;
  }
  header{
    height: 80px;
  }
  .drawer-toggle {
    height: 15%;
  }
}
@media (min-width: 1800px) {
  header{
    height: 100px;
  }
}

@media (min-width: 1390px) {
  .header{
    height: 80px;
  }
  .header-logo{
    width: 30%;
  }
}

@media (min-width: 1800px) {
  .header{
    height: 107px;
  }
  .header-logo{
    height: 33px;
    width: 300px;
  }
}
</style>
