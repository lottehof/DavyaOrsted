<template lang="html">
  <div
  v-editable="blok"
  class="py-2">
    <div class="newsletter-container">

      <div class="newsletter-content">
      <b-carousel
        id="carousel-fade"
        fade
        indicators
        controls
      >
      <b-carousel-slide
       v-for="icon in blok.image"
      :key='blok._id'
      :img-src="icon.filename"
        class="test"

      ></b-carousel-slide>
    </b-carousel>
    </div>
    <div class="newsletter-content" >

    </div>

  </div>
</div>

</template>

<script>
import marked from 'marked';
export default {
  props: {
    blok: {
      type: Object,
      required: true
    },
  }
}
</script>

<style lang="css" scoped>
.py-2{
  display: flex;
  justify-content: center;
  align-items: center;
}
.newsletter-content:nth-last-of-type(2){
  height: 250px;
  width: 350px;
}
@media (min-width: 1200px) {
  .newsletter-content:nth-last-of-type(2){
    height: 300px;
    width: 650px;
  }
}

</style>
