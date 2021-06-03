<template lang="html">
  <article class="post-preview">
    <div class="post-preview-container">
      <div :style="{backgroundImage: 'url(' + thumbnailImage + ')'}"
              class="post-preview-thumbnail">
      </div>
      <div class="title">
        <h1 class="post-preview-title">{{ title }}</h1>
      </div>
      <div class="post-preview-content">
        <p class="post-preview-text">{{ excerpt }}</p>
      </div>
      <p class="post-preview-button">€{{ price }}</p>
    </div>
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
    price: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="css" scoped>
.post-preview{
  width: 350px;
  margin-bottom: 50px;
  position: relative;
  padding: 0;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.post-preview-title{
  font-size: 24px;
  color: #3E4B51;
  padding-top: 30px;
  text-align: center;
}

.post-preview-thumbnail {
 background-position: center;
 background-size: cover;
 width: 350px;
 min-height: 250px;
}
.post-preview-content{
   height: 100%;
   margin-bottom: 10px;
}
.post-preview-text{
  width: 100%;
  height: 100%;
  margin-top: 20px;
  padding: 16px 20px 20px 30px;
  line-height: 2.43;
  letter-spacing: 0.7px;
}
.post-preview-button{
  text-align: center;
  font-size: 20px;
  height: 50px;
  background-color: #4C565C;
  color: white;
  font-weight: 500;
  bottom: 0%;

}


a {
  text-decoration: none;
  color: black;
}
p{
  white-space: pre-line;
  margin-bottom: 0;
}

@media (min-width: 768px) {
  .post-preview{
    width: 300px;
    height: auto;
  }
  .post-preview-thumbnail{
    width: 300px;
  }
}

@media (min-width: 1400px) {
  .post-preview{
    width: 350px;
  }
  .post-preview-thumbnail{
    width: 350px;
  }
}

</style>
