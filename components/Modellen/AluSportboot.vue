<template lang="html">
  <div class="AluBoten-container">
    <div class="modellen-header">
      <div class="model">
        <h2 class="container-title">{{ blok.type_of_boat_2 }}</h2>
      </div>
    </div>
    <div class="wrap">
      <div class="modellen-container">

        <div class="modellen-content">
          <nuxt-link to="/boten/moonraker">
            <figure>
              <img class="modellen-image" :src="blok.boat_image_three" alt="sloep D&O Raptor">
            </figure>
            <div class="grey-box"></div>
        </nuxt-link>
        </div>

        <div class="modellen-content">
          <nuxt-link to="/boten/moonraker">
            <div class="modellen-title">
              <h2 class="boat-title">{{ blok.third_boat_title }}</h2>
                <h5 class="boat-sub-title">{{ blok.boat_subtitle_3 }}</h5>
            </div>
            <ul>
              <li class="list-items">{{ blok.boat_3_listItem_1}}</li>
              <li class="list-items">{{ blok.boat_3_listItem_2 }}</li>
              <li class="list-items">{{ blok.boat_3_listItem_3 }}</li>
              <li class="list-items">{{ blok.boat_3_listItem_4 }}</li>
              <li class="list-items">{{ blok.boat_3_listItem_5 }}</li>
            </ul>
          </nuxt-link>
        </div>

        <div class="modellen-content">
          <nuxt-link to="/boten/marshall">
            <figure>
              <img class="modellen-image" :src="blok.boat_image_four" alt="sleop D&O Raptor">
            </figure>
            <div class="grey-box-second"></div>
          </nuxt-link>
        </div>

        <div class="modellen-content">
          <nuxt-link to="/boten/marshall">
            <div class="modellen-title">
              <h2 class="boat-title">{{ blok.fourth_boat_title}}</h2>
                <h5 class="boat-sub-title">{{ blok.boat_subtitle_4 }}</h5>
            </div>
            <ul>
              <li class="list-items">{{ blok.boat_4_listItem_1 }}</li>
              <li class="list-items">{{ blok.boat_4_listItem_2 }}</li>
              <li class="list-items">{{ blok.boat_4_listItem_3 }}</li>
              <li class="list-items">{{ blok.boat_4_listItem_4 }}</li>
              <li class="list-items">{{ blok.boat_4_listItem_5 }}</li>
            </ul>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="css" scoped>
.AluBoten-container{
  width: 100vw;
  height: auto;
  border: solid 1px #979797;
  background-color: #2a393f;
}
.container-title{
  height: 21px;
  font-size: 17px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.02px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 30px;
  margin-top: 30px;
  font-family: 'Raleway', sans-serif;
}
.modellen-container{
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: repeat(3, minmax(0, 1fr));
  width: 100%;
}
.modellen-content{
  position: relative;
}
.modellen-content:nth-of-type(1){
  grid-column: 1 / span 2;
  grid-row: 1 / span 2 ;
}
.modellen-content:nth-of-type(2){
  grid-column: 1 / span 2;
  grid-row: 3 / span 1 ;
}
.modellen-content:nth-of-type(3){
  grid-column: 3 / span 2;
    grid-row: 1 / span 2 ;
}
.modellen-content:nth-of-type(4){
  grid-column: 3 / span 2;
  grid-row: 3 / span 1 ;
}
.modellen-content:nth-of-type(2),
.modellen-content:nth-of-type(4) {
  padding: 0 20px;
  margin-bottom: 35px;
}
figure{
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modellen-image{
  width: 95%;
  height: 210px;
  margin: 0;
  z-index: 2;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.grey-box,
.grey-box-second{
  width: 90%;
  height: 100%;
  background-color: #5e686c;
  position: absolute;
  display: none;
  z-index: 0;
}
.boat-title{
  height: 22px;
  margin-top: 37px;
  margin-left: 3px;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.02px;
  color: #ffffff;;
  text-transform: uppercase;
  text-align: center;
  font-family: 'Raleway', sans-serif;;
}
.boat-sub-title{
  height: 16px;
  margin-left: 3px;
  margin-bottom: 20px;
  font-weight: 500;
  letter-spacing: 0.01px;
  text-align: center;
  color: #ffffff;;
}
.boat-sub-title,
.list-items {
  display: none;
}
ul{
  list-style: none;
  padding: 0;
}
li:before{
  content: "+";
  margin-right: 13px;
}
.list-items{
  width: 100%;
  margin-bottom: 16px;
  margin-left: 3px;
  font-weight: 500;
  line-height: 1.71;
  letter-spacing: 2px;
  color: #ffffff;
  text-transform: uppercase;
  text-align: center;
}

/*MEDIA QUERIES */
/*--------------------*/

@media (min-width: 550px) {
  .container-title{
    font-size: 22px;
    margin-bottom: 60px;
    margin-top: 60px;
  }
  .boat-title{
    font-size: 18px;
  }
}

@media (min-width: 1000px) {
  .container-title{
    font-size: 26px;
  }
  .modellen-image{
    height: 410px;
  }
  .boat-title{
    font-size: 22px;
  }
  .wrap{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
  }
  .modellen-container{
    grid-template-rows: repeat(4, minmax(0, 1fr));
    width: 90vw;
    height: auto;
    border-radius: 0.5rem;
    grid-gap: 15px;
  }
  .modellen-content{
    max-width: 90vw;
  }
  .modellen-container > .modellen-content:nth-of-type(2){
    grid-column: 1 / span 2;
    grid-row: 3 / span 2 ;
  }
  .modellen-container > .modellen-content:nth-of-type(4){
    grid-column: 3 / span 2;
    grid-row: 3 / span 2 ;
  }
  .modellen-content:nth-of-type(2),
  .modellen-content:nth-of-type(4) {
    padding: 0px;
    margin-bottom: 0px;
    margin-top: 20px;
  }
  .boat-sub-title,
  .list-items {
    display: block;
  }
}

@media (min-width: 1300px) {
  .modellen-header{
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .model{
    width: 100%;
    text-align: center;
  }
  .container-title{
    font-size: 24px;
    margin-bottom: 77px;
    margin-top: 77px;
  }

  .modellen-title{
    display: flex;
    justify-content: left;
  }
  .modellen-image{
    width: 100%;
    height: 500px;
  }
  .grey-box{
    top: 28px;
    left: -22px;
    display: block;
  }
  .grey-box-second{
    top: 28px;
    right: -35px;
    display: block;
  }
  .boat-title{
    margin-left: 0px;
    margin-bottom: 20px;;
    font-size: 22px;
  }
  .boat-sub-title{
    width: 175px;
    margin-top: 43px;
  }
  .list-items{
    font-size: 14px;
    text-align: left;
  }
}

@media (min-width:1800px) {
  .grey-box{
    width: 760px;
    height: 444px;
    top: 78px;
    left: -22px;
  }
  .grey-box-second{
    width: 760px;
    height: 444px;
    top: 78px;
    right: -35px;
  }
}
</style>
