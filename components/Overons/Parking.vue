<template lang="html">
  <!-- <section id="Parking"> -->
    <div class="parking">
      <article class="parking-article">
        <section class="parking-content" v-html="$options.filters.markdown(blok.parking_content)"></section>
      </article>
      <section class="parking-image-holder">
        <section class="holder">
          <img class="parking-image" :src="blok.parking_image" alt="Jachthaven">
        </section>
      </section>
    </div>
  <!-- </section> -->
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
.parking{
  display: grid;
  margin-top: 50px;
}
.parking-article{
  width: 100vw;
  padding: 16px 20px 20px 30px;
  background-color: rgba(203, 203, 197, 0.4);
  color: #3E4B51;
}
.parking-image{
  height: 250px;
  width: 100%;
}
@media (min-width: 768px) {
  .parking-image{
    height: 400px;
    width: 100%;
  }
}
@media (min-width: 1100px) {
  .parking{
    grid-template-columns: repeat(6, minmax(0, 1fr));
    grid-template-rows: repeat(1, minmax(0, 1fr));
    margin-top: 50px;
    margin-bottom: 100px;
  }
  .parking-article{
    grid-column: 4 / span 3;
    grid-row: 1;
    width: 80%;
  }
  .parking-content{
    width: 90%;
    margin: 0 auto;
  }
  .parking-image{
    width: 80%;
  }
  .parking-image-holder{
    grid-column: 1 / span 3;
    grid-row: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .holder{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .onderhoud-image{
    height: 80%;
    width: 80%;
  }
}

</style>
