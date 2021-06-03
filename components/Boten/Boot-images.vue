<template lang="html">
  <section class="product__images">
    <div class="head-image-container">
      <div v-if="blok.images.length > 0">
        <img class="head-image" :src="(selectedImage.filename || blok.images[0].filename)" :alt="selectedImage.name || blok.images[0].name">
      </div>
    </div>
    <div class="sub-image-container">
      <ul class="product__thumbs">
        <li class="product__thumb" v-for="image in blok.images" :key="image.filename" @click="selectedImage = image">
          <img class="product__thumb-image" :src="image.filename" :alt="image.name">
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: ['blok'],
data() {
  return {
    selectedImage: {}
    }
  }
}
</script>

<style lang="css" scoped>
.product__images{
  display: block;
  margin: 0 auto;
}
.head-image-container{
  text-align: center;
}
.head-image{
  width: 350px;
}
.sub-image-container{
  display: flex;
  align-items: center;
  justify-content: center;
}
.product__thumbs{
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  max-width: 350px;
}
.product__thumb{
  display: inline-block;
  list-style: none;
  width: calc(100% / 3 * 2);
  margin-right: 10px;
  max-height: 100px;
}
.product__thumb-image{
  width: 100%;
  object-fit: cover;
  height: 100%;
}

/*MEDIA QUERIES*/
/*-------------------*/
@media (min-width: 768px) {
  .head-image{
    width: 650px;
  }
  .product__thumbs{
    max-width: 650px;
  }
}

@media (min-width: 1400px) {
  .head-image{
    width: 600px;
  }
  .head-image-container{
    text-align: left;
    max-width: 600px;
  }
  .product__thumbs{
    max-width: 600px;
  }
  .product__images{
    width: 600px;
    margin-left: 100px;
  }
}

@media (min-width: 1800px) {
  .head-image{
    width: 700px;
  }
  .sub-image-container{
    width: 700px;
  }
  .product__thumbs{
    max-width: 700px;
  }
  .product__images{
    width:  700px;
    margin-left: 100px;
  }
}
</style>
