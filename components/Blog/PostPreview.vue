<template>
  <article class="post-preview">
  <nuxt-link :to="'/nieuws/' + id">
    <div class="title">
      <h1 class="post-preview-title">{{ title }}</h1>
    </div>
    <div class="post-preview-content">
      <section class="post-preview-text" v-html="$options.filters.markdown(excerpt)"></section>
    </div>
      <div :style="{backgroundImage: 'url(' + thumbnailImage + ')'}"
              class="post-preview-thumbnail">
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
};
</script>

<style scoped>
.post-preview {
  min-height: 600px;
  max-height: auto;
  display: block;
  position: relative;
  width: 300px;
  margin: 0px 10px;
  margin-bottom: 100px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.post-preview-title{
  font-size: 24px;
  padding: 0 20px;
  color: #3E4B51;
  padding-top: 30px;
  text-align: center;

}
.post-preview-thumbnail {
  background-position: center;
  background-size: cover;
  width: 100%;
  min-height: 350px;
  bottom: 0;
  position: absolute;
}
.post-preview-text{
  width: 100%;
  height: auto;
  padding: 0 20px;
  margin-top: 20px;
  /* opacity: 60%; */
}
.post-preview-text-button{
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  padding: 20px;
  color: #3E4B51;
  text-transform: uppercase;
  text-decoration: underline;
  /* opacity: 60%; */
}
.post-preview-text-button:hover{
  color: black;
  /* opacity: 100%; */
}
.post-preview-text > ul li::before{
    content: "+";
}


hr{
  margin-top: 20px;
}
a {
  text-decoration: none;
  color: black;
}
p{
  white-space: pre-line;
}

@media (min-width: 768px) {
  .post-preview-text{
    font-size: 18px;
  }
  .post-preview {
    width: 500px;
  }
}
@media (min-width: 1300px) {
  .post-preview{
    width: 500px;
  }

}
</style>
