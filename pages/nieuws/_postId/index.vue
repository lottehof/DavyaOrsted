<template>
  <div class="post">
    <h1 class="post-title">{{ story.content.title }}</h1>
    <div class="post-container">
      <p class="post-preview-summary">{{story.content.summary}}</p>
      <img :src="story.content.image" alt="Nieuwsbrief post" class="post-thumbnail">
    </div>
    <section class="post-content" v-html="$options.filters.markdown(story.content.content)"></section>
    <section class="slider">
      <post
        v-if="story.content.component"
        :key="story.content._id"
        :blok="story.content" />
    </section>
  </div>
</template>

<script>
export default {
  layout: 'headerbar',
  data () {
    return {
      story: { content: {} }
    }
  },
  mounted () {
    // Use the input event for instant update of content
    this.$storybridge.on('input', (event) => {
      if (event.story.id === this.story.id) {
        this.story.content = event.story.content
      }
    })
    // Use the bridge to listen the events
    this.$storybridge.on(['published', 'change'], (event) => {
      // window.location.reload()
      this.$nuxt.$router.go({
        path: this.$nuxt.$router.currentRoute,
        force: true,
      })
    })
  },
  asyncData (context){
    //load the JSOn from the API - loading the home content (index page)
    return context.app.$storyapi.get('cdn/stories/nieuws/' + context.params.postId, {
      version: process.env.NODE_ENV == "production" ? "published" : 'draft',
    }).then((res) => {
      return res.data
    }).catch((res) => {
      if (!res.response){
        console.error(res)
        context.error({ statusCode: 404, message: 'Failed to receive content from api'})
      } else {
        console.error(res.resonse.data)
        context.error({ statusCode: res.response.status, message: res.response.data })
      }
    })
  }
};
</script>

<style>
.nav-title{
  height: 35px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.slider{
  height: 300px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.post-title{
  height: 41px;
  font-size: 26px;
  letter-spacing: 0.03px;
  text-align: center;
  color: #3e4b51;
  margin-top: 20px;
  margin-bottom: 0px;
}
.post-thumbnail {
  width: 90%;
  height: 200px;
  background-size: cover;
  background-position: center;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.post-preview-summary{
  line-height: 2.3;
}
.post-preview-summary, .post-content {
  margin: auto;
  width: 90%;
  height: auto;
  margin-bottom: 20px;
  /* opacity: 60%; */
}
.post-content {
  margin-top: 20px;
}
.post-content > p{
  margin-bottom: 0px;
  line-height: 2.3;
}
.container-top-border{
  width: 100vw;
  height: 35px;
  background-color: #3E4B51;
}
.nieuwsbrief-start-image{
  width: 100vw;
  height: 40vh;
  background-size: auto;
  background-position: center;
  background-color: lightblue;
}
@media (min-width: 768px ) {
  .post-title{
    font-size: 28px;
  }
  .post-thumbnail {
    height: 400px;
  }
  .post-preview-summary, .post-content {
    font-size: 16px;
  }
}
@media (min-width: 1200px) {
  .post-container{
    display: grid;
    margin: auto;
    width: 90%;
    margin-top: 20px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .post-preview-summary{
    grid-column: 1 / span 1;
    font-size: 18px;
  }
  .post-thumbnail{
    grid-column: 2 / span 1;
    padding-top: 40px;
    width: 700px;
  }
  .post-content {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    width: 90%;
    height: auto;
    font-size: 18px;
    margin-bottom: 200px;
  }
  .post-content p:nth-of-type(6){
    grid-column: 1 / span 1;
    grid-row: 1/ span 1;
  }
  .post-content p:nth-of-type(3){
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
  }
  .post-content p:nth-of-type(5){
    grid-column: 3 / span 1;
    grid-row: 1/ span 1;
    height: auto;
  }
  .post-content p:nth-of-type(2){
    grid-column: 1 / span 1;
    grid-row: 3 / span 1;
  }
  .post-content p:nth-of-type(4){
    grid-column: 2 / span 1;
    grid-row: 3 / span 1;
  }

  .post-content p:nth-of-type(1){
    grid-column: 2 / span 1;
    grid-row: 1 / span 2;
  }

  .post-content > p{
    margin: 10px;
    width: 80%;
    padding: 10px;
    height: auto;
  }
  .slider{
    height: 600px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}
  @media (min-width: 1390px) {
    .container-top-border{
      height: 55px;
    }
    .nav-title{
      height: 55px;
    }
  }
  @media (min-width: 1800px) {
    .container-top-border{
      height: 65px;
    }
    .nav-title{
      height: 65px;
    }
}
</style>
