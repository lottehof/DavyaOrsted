<template lang="html">
  <section>
    <hr>
    <h1 class="title">{{story.content.titel}}</h1>
    <div class="product">
      <BootImages
      v-if="story.content.component"
      :key="story.content._id"
      :blok="story.content" />
      <BootInformation
      v-if="story.content.component"
      :key="story.content._id"
      :blok="story.content" />
    </div>
    <Banner
    v-if="story.content.component"
    :key="story.content._id"
    :blok="story.content"/>
  </section>
</template>

<script>
import Banner from '@/components/Boten/Banner'
import BootImages from '@/components/Boten/Boot-images'
import BootInformation from '@/components/Boten/Boot-information'
export default {
  layout: 'headerbar',
  components: {
    Banner,
    BootImages,
    BootInformation
  },
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
    return context.app.$storyapi.get('cdn/stories/boten/' + context.params.bootpostId, {
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
.title{
  text-align: center;
  font-size: 30px;
  margin: 15px 0px;
  text-transform: uppercase;
}

@media (min-width: 1400px) {
  .title{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
  .product{
    /* width: 80%; */
    margin: 0 auto;
    margin-top: 40px;
    display: grid;
    height: auto;
    min-height: 700px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}

@media (min-width: 1610px) {

}

</style>
