<template lang="html">
  <section class="terms">
    <div class="title-terms">
      <h1 class="title">{{ story.content.title}}</h1>
    </div>
    <section class="terms-content" v-html="$options.filters.markdown(story.content.content)"></section>
  </section>
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
  return context.app.$storyapi.get('cdn/stories/voorwaarden', {
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

}
</script>

<style lang="css" scoped>
.terms{
  min-height: 100vh;
}
.title-terms{
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.title{
  text-align: center;
  text-decoration: underline;
}
.terms-content{
  margin: 20px;
  padding: 10px;
}


</style>
