<template lang="html">
  <section id="Onderhoud">
    <div class="onderhoud">
      <article class="onderhoud-article">
        <section class="onderhoud-content" v-html="$options.filters.markdown(blok.onderhoud_content)"></section>
      </article>
      <section class="onderhoud-image-holder">
        <section class="holder">
        <img class="onderhoud-image" :src="blok.onderhoud_image" alt="Jachthaven">
      </section>
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
.onderhoud{
  display: grid;
}
.onderhoud-article{
  width: 100vw;
  padding: 16px 20px 20px 30px;
  color: #3E4B51;
}
.holder{
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(203, 203, 197, 0.4);
}
.onderhoud-image{
  height: 250px;
}

@media (min-width: 768px) {
  .holder{
    height: 550px;
  }
  .onderhoud-image{
    height: 400px;
    width: 600px;
  }
}
@media (min-width: 1100px) {
  .onderhoud{
    grid-template-columns: repeat(6, minmax(0, 1fr));
    grid-template-rows: repeat(1, minmax(0, 1fr));
    margin-top: 50px;
  }
  .onderhoud-article{
    grid-column: 4 / span 3;
    grid-row: 1;
    width: 100%;
  }
  .onderhoud-content,
  .onderhoud-title{
    width: 90%;
    margin: 0 auto;
  }
  .onderhoud-image-holder{
    grid-column: 1 / span 3;
    grid-row: 1;
    position: relative;
  }
.holder{
    height: 90%;
    width: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .onderhoud-image{
    height: 80%;
    width: 80%;
  }
}

</style>
