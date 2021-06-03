<template lang="html">
  <section class="content">
    <div class="button-container">
      <button @click="description"
      class="boot-button"
      :class="dsactive" type="button" name="button">Beschrijving</button>
      <button @click="uitvoering"
      class="boot-button"
      :class="uvactive"
       type="button" name="button">Uitvoering</button>
    </div>
    <div class="boot-description" v-if="description_content">
      <section>
        <section class="onderhoud-content" v-html="$options.filters.markdown(blok.beschrijving)"></section>
      </section>
    </div>
    <div class="boot-uitvoering" v-if="uitvoering_content">
      <section class="onderhoud-content" v-html="$options.filters.markdown(blok.uitvoering)"></section>
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
  },
  data(){
    return{
      description_content: true,
      uitvoering_content: false,
      specificaties_content: false,
      dsactive: 'active',
      uvactive: '',
      spactive: '',
      selectedImage: {
      }
    }
  },
  methods: {
    description(){
      this.description_content = true;
      this.uitvoering_content = false;
      this.specificaties_content = false;
      this.dsactive = 'active';
      this.uvactive = '';
      this.spactive = '';
    },
    uitvoering(){
      this.description_content = false;
      this.uitvoering_content = true;
      this.specificaties_content = false;
      this.dsactive = '';
      this.uvactive = 'active';
      this.spactive = '';
    },
    specificaties(){
      this.description_content = false;
      this.uitvoering_content = false;
      this.specificaties_content = true;
      this.dsactive = '';
      this.uvactive = '';
      this.spactive = 'active';
    }
  }

}
</script>

<style lang="css" scoped>
.button-container{
  border-bottom: 1px solid #CACACA;
  text-align: center;
}
.boot-button{
  background-color: white;
  border: none;
  text-transform: uppercase;
  font-family: 'Raleway', sans-serif;
  height: 30px;
  margin-right: 20px;
  border-bottom: none;
  font-size: 14px;
}
.active,
.boot-button:focus,
.boot-button:active{
  border-bottom: 2px solid black;
}
.boot-description,
.boot-uitvoering,
.boot-specificaties{
  padding: 16px 20px 20px 30px;
}

@media (min-width: 768px) {
  .button-container{
    text-align: left;
    margin-left: 30px;
    margin-top: 20px;
  }
  .boot-button{
    font-size: 18px;
    margin-right: 50px;
  }
  .boot-description p,
  .boot-uitvoering p,
  .boot-specificaties p{
    font-size: 16px;
  }
}

@media (min-width: 1400px) {
  .content{
    width: 550px;
    margin: 0 auto;
    grid-column: 3 / span 3;
  }
  .button-container{
    margin-top: 0px;
  }
  .boot-button{
    margin-right: 30px;
  }
  .boot-description p,
  .boot-uitvoering p,
  .boot-specificaties p{
    font-size: 14px;
  }
}
@media (min-width: 1610px) {
  .content{
    width: 850px;
  }
  .boot-button{
    margin-right: 50px;
  }
}
</style>
