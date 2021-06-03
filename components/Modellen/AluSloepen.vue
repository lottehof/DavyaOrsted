<template lang="html">
  <div class="aluSloepen-container">
    <div class="modellen-header">
      <div class="model">
        <h1 class="head-title">Modellen</h1>
          <h2 class="container-title">{{ blok.type_of_boat_1 }}</h2>
      </div>
    </div>
    <div class="wrap">
      <div class="modellen-container">

        <div class="modellen-content">
          <nuxt-link to="/boten/crafter">
          <figure>
            <img class="modellen-image" :src="blok.boat_image_one" alt="sleop D&O Raptor">
          </figure>
        </nuxt-link>
        </div>

        <div class="modellen-content">
        <nuxt-link to="/boten/crafter">
          <div class="modellen-title">
            <h2 class="boat-title">{{ blok.first_boat_title }}</h2>
              <h5 class="boat-sub-title">{{ blok.boat_subtitle_1 }}</h5>
          </div>
          <ul>
            <li class="list-items">{{ blok.boat_1_listItem_1 }}</li>
            <li class="list-items">{{ blok.boat_1_listItem_2 }}</li>
            <li class="list-items">{{ blok.boat_1_listItem_3 }}</li>
            <li class="list-items">{{ blok.boat_1_listItem_4 }}</li>
            <li class="list-items">{{ blok.boat_1_listItem_5 }}</li>
          </ul>
            </nuxt-link>
        </div>


        <div class="modellen-content">
          <nuxt-link to="/boten/raptor">
          <figure>
            <img class="modellen-image" :src="blok.boat_image_two" alt="sleop D&O Raptor">
          </figure>
          </nuxt-link>
        </div>

        <div class="modellen-content">
          <nuxt-link to="/boten/raptor">
            <div class="modellen-title">
              <h2 class="boat-title">{{ blok.second_boat_title }}</h2>
                <h5 class="boat-sub-title">{{ blok.boat_subtitle_2 }}</h5>
            </div>
            <ul>
              <li class="list-items">{{ blok.boat_2_listItem_1 }}</li>
              <li class="list-items">{{ blok.boat_2_listItem_2 }}</li>
              <li class="list-items">{{ blok.boat_2_listItem_3 }}</li>
              <li class="list-items">{{ blok.boat_2_listItem_4 }}</li>
              <li class="list-items">{{ blok.boat_2_listItem_5 }}</li>
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
.aluSloepen-container{
  width: 100vw;
  height: auto;
}
.head-title{
  height: 41px;
  font-size: 26px;
  letter-spacing: 0.03px;
  text-align: center;
  color: #3e4b51;
  margin-bottom: 0px;
}
.container-title{
  height: 21px;
  font-size: 17px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.02px;
  text-align: center;
  color: #3e4b51;
  margin-bottom: 30px;
  font-family: 'Raleway', sans-serif;
}
.modellen-container{
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: repeat(3, minmax(0, 1fr));
  width: 100%;
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
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.boat-title{
  height: 22px;
  margin-top: 37px;
  margin-left: 3px;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.02px;
  color: #3d4333;
  text-transform: uppercase;
  text-align: center;
  font-family: 'Raleway', sans-serif;
}
.boat-sub-title{
  height: 16px;
  margin-left: 3px;
  margin-bottom: 20px;
  font-weight: 500;
  letter-spacing: 0.01px;
  text-align: center;
  color: #696969;
}
.boat-sub-title,
.list-items{
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
  color: #3e4b51;
  text-transform: uppercase;
  text-align: center;
}

/*MEDIA QUERIES*/
/*-------------------*/
@media (min-width: 550px) {
  .head-title{
    font-size: 28px;
  }
  .container-title{
    font-size: 22px;
  }
  .boat-title{
    font-size: 18px;
  }
}

@media (min-width: 1000px) {
  .head-title{
    font-size: 36px;
  }
  .container-title{
    font-size: 26px;
    margin-bottom: 60px;
    margin-top: 30px;
  }
  .modellen-image{
    height: 410px;
  }
  .boat-title{
    font-size: 22px;
  }
  .boat-sub-title,
  .list-items {
    display: block;
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
}

@media (min-width: 1300px) {
  .aluSloepen-container{
    height: 1146px;
  }
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
  .head-title{
    font-size: 36px;
    margin-bottom: 18px;
    margin-top: 77px;
  }
  .container-title{
    margin-top: 37px;
    margin-bottom: 77px;
  }
  .modellen-title{
    display: flex;
    justify-content: left;
  }
  .modellen-image{
    width: 100%;
    height: 500px;
  }
  .boat-title{
    margin-left: 0px;
    margin-bottom: 20px;
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
</style>
