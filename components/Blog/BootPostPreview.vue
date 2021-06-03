<template lang="html">
  <article class="post-preview">
    <nuxt-link :to="'/boten/' + id">

    <div class="post-preview-container">
      <div :style="{backgroundImage: 'url(' + thumbnailImage + ')'}"
              class="post-preview-thumbnail">
      </div>
      <div class="title">
        <h1 class="post-preview-title">{{ title }}</h1>
      </div>
      <div class="post-preview-content">
          <section class="post-preview-text" v-html="$options.filters.markdown(excerpt)"></section>
      </div>
      <div class="button-holder">
      <button class="post-preview-button" type="button" name="button">Lees meer</button>
    </div>
    </div>
    </nuxt-link>
  </article>

</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    excerpt: {
      type: String,
      required: true
    },
    thumbnailImage: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
  }
}
</script>

<style lang="css" scoped>
.post-preview{
  width: 350px;
  margin-bottom: 50px;
  /* border: 1px solid red; */
  min-height: 720px;
  position: relative;
  /* z-index: 0; */
}
.post-preview:hover{
   box-shadow: 0 8px 6px -6px black;
}
.title{

}
.post-preview-title{
  font-size: 24px;
  color: #3E4B51;
  padding-top: 30px;
  text-align: center;
}
.post-preview-container{
  height: auto;

}
.post-preview-thumbnail {
 background-position: center;
 background-size: cover;
 width: 350px;
 min-height: 250px;
}

.post-preview-text{
  width: 100%;
  height: auto;
  margin-top: 20px;
  padding: 16px 20px 20px 30px;
  line-height: 2.43;
  letter-spacing: 0.7px;

}
.button-holder{
  display: flex;
  align-items: center;
  justify-content: center;
}
.post-preview-button{
  background-color: #E0E0DD;
  border: none;
  font-size: 16px;
  width: 200px;
  height: 40px;
  border-radius: 20px;
  position: absolute;
  letter-spacing: 1.3px;
  bottom: 3%;
}
.post-preview-button:hover{
  background-color: #2A393F;
  color: white;
}
a {
  text-decoration: none;
  color: black;
}
p{
  white-space: pre-line;
}

@media (min-width: 768px) {
  .post-preview{
    width: 300px;
    height: 750px;
  }
  .post-preview-thumbnail{
    width: 300px;
  }
}

@media (min-width: 1400px) {
  .post-preview{
    width: 350px;
    height: 700px;
  }
  .post-preview-thumbnail{
    width: 350px;
  }
}

</style>
