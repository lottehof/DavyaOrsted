<template lang="html">
  <div class="information-boxes" v-editable="blok">
    <div class="information-box-content">
      <a href="/nieuws">
        <figure>
          <img :src="blok.image_box_1" class="content-image" alt="Nieuws">
        </figure>
      <h3>{{ blok.image_box_1_title }}</h3>
      </a>
    </div>
    <div class="information-box-content">
      <a href="/jachthaven#Winterstalling">
        <figure>
          <img :src="blok.image_box_2" class="content-image" alt="Winterstalling Davy&Orsted">
        </figure>
        <h3>{{ blok.image_box_2_title }}</h3>
        </a>
    </div>
    <div class="information-box-content">
      <a href="/occasions">
        <figure>
          <img :src="blok.image_box_3" class="content-image" alt="Occasions Davy&Orsted">
        </figure>
      <h3>{{ blok.image_box_3_title }}</h3>
      </a>
    </div>
    <div class="information-box-content">
      <a href="/jachthaven">
        <figure>
          <img :src="blok.image_box_4" class="content-image" alt="De werf">
        </figure>
      <h3>{{ blok.image_box_4_title }}</h3>
      </a>
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
.test{
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.content-image{
  width: 100%;
  height: 300px;
  background-size: cover;
}
h3{
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.02px;
  color: #3d4333;
  padding-top: 20px;
  bottom: 0;
  font-family: 'Raleway', sans-serif;
}
a{
  color: #3d4333;
  text-decoration: none;
}
.information-boxes{
  margin-top: 20px;
  margin-bottom: 20px;
  width: 90%;
  height: auto;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
}
.information-box-content{
  margin:20px 0;
  height: auto;
}

@media (min-width: 768px) {
  .information-boxes{
    width: 80%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
    grid-gap: 8px;
    }
  .content-image{
    min-width: 300px;
  }
  .information-boxes > .information-box-content:nth-of-type(1){
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
  }
  .information-boxes > .information-box-content:nth-of-type(2){
    grid-column: 3 / span 2;
    grid-row: 1 / span 2
  }
  .information-boxes > .information-box-content:nth-of-type(3){
    grid-column: 1 / span 2;
    grid-row: 2 / span 2
  }
  .information-boxes > .information-box-content:nth-of-type(4){
    grid-column: 3 / span 2;
    grid-row: 2 / span 2
  }
  .information-box-content{
    max-width: 447px;
    height: 300px;
    margin-top: 41px;
    margin-left: auto;
    margin-right: auto;
  }
}
@media (min-width: 1280px) {
  .information-boxes{
    height: 400px;
    width: 95vw;
    margin: 0 auto;
    grid-template-rows: repeat(1, minmax(0, 1fr));
    margin-bottom: 100px;
  }
  img{
    width: 100%;
    height: 300px;
  }
  .information-box-content{
    width: 100%;
  }
  .information-boxes > .information-box-content:nth-of-type(1){
    grid-column: 1 / span 1;
    grid-row: 1;
  }
  .information-boxes > .information-box-content:nth-of-type(2){
    grid-column: 2 / span 1;
    grid-row: 1;
  }
  .information-boxes > .information-box-content:nth-of-type(3){
    grid-column: 3 / span 1;
    grid-row: 1;
  }
  .information-boxes > .information-box-content:nth-of-type(4){
    grid-column: 4 / span 1;
    grid-row: 1;
  }
}
</style>
