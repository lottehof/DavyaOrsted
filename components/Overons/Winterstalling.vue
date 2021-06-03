<template lang="html">
  <section id="Winterstalling">
    <div class="winterstalling">
      <article class="winterstalling-article">
        <section class="winterstalling-content" v-html="$options.filters.markdown(blok.winterstalling_content)"></section>
      </article>
      <section class="winterstalling-image-holder">
        <div class="grey-box"></div>
        <img class="winterstalling-image" :src="blok.winterstalling_image" alt="Jachthaven">
    </section>
    </div>
  </section>

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
.winterstalling{
  display: grid;
}
.winterstalling-article{
  width: 100vw;
  padding: 16px 20px 20px 30px;
  color: #3E4B51;
}

.winterstalling-image-holder{
  position: relative;
  height: 350px;
}
.grey-box{
  background-color: rgba(203, 203, 197, 0.4);
  height: 100%;
  width: 50%;
  position: absolute;
  right: 0;

}
.winterstalling-image{
  height: 60%;
  width: 90%;
  position: absolute;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (min-width: 768px) {
  .winterstalling-image-holder{
    height: 550px;
  }
  .winterstalling-image{
    height: 70%;
  }
}

@media (min-width: 1100px) {
  .winterstalling{
    grid-template-columns: repeat(6, minmax(0, 1fr));
    grid-template-rows: repeat(1, minmax(0, 1fr));
    margin-top: 50px;
    height: 800px;
  }
  .winterstalling-article{
    grid-column: 1 / span 3;
    grid-row: 1;
    width: 100%;
    position: relative;
  }
  .winterstalling-content,
  .winterstalling-title{
    width: 70%;
    margin: 0 auto;
  }
  .winterstalling-content{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .winterstalling-title{
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .winterstalling-image-holder{
    grid-column: 4 / span 3;
    grid-row: 1;
    height: 600px;
  }
  .winterstalling-image-holder{
    height: 100%;
  }
  .winterstalling-image{
    height: 400px;
    width: 600px;
  }
  .grey-box{
    height: 100%;
    width: 45%;
  }
}
</style>
