<template lang="html">
  <div class="total">
    <TheHeader/>
    <TheSideNav/>
    <div class="start"  :style="{backgroundImage: 'url(' + story.content.header_image +')'}">
      <div class="gradient-border">
        <img src="@/assets/img/logo-nav.png" alt="logo" class="logo">
        <img src="@/assets/img/Buildtolast.png" alt="logo" class="buildtolast">
      </div>
    </div>
    <History
    :key="story.content._id"
    :blok="story.content" />
    <AluSloepen
    :key="story.content._id"
    :blok="story.content"
    />
    <AluSportboot
    :key="story.content._id"
    :blok="story.content"/>
    <Information
    :key="story.content._id"
    :blok="story.content" />
    <Instagram />
  </div>
</template>

<script>
import History from '@/components/History/History'
import AluSloepen from '@/components/Modellen/AluSloepen'
import AluSportboot from '@/components/Modellen/AluSportboot'
import Instagram from '@/components/Instagram/Instagram'
import Information from '@/components/Information/Information'
import TheHeader from '~/components/HomeMenu/HomeTheHeader'
import TheSideNav from '~/components/HomeMenu/HomeTheSideNav'
export default {
  components: {
    History,
    AluSloepen,
    Instagram,
    AluSportboot,
    Information,
    TheHeader,
    TheSideNav,
  },
  computed: {
      isSidebar() {
          return this.$store.getters['nav/toggleSidebar']
      }
  },
  watch: {
      '$route': function() {
          if (process.client && this.isSidebar && window.innerWidth < 768) {
              this.$store.dispatch('nav/toggleSidebar')
          }
      },
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
    return context.app.$storyapi.get('cdn/stories/landingpage', {
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
.total{
  width: 100vw;
}
.start{
  height: 100vh;
  background-position: 40% 20%;
  background-size: cover;
}
.gradient-border{
  width: 100vw;
  height: 416px;
  background-image: linear-gradient(to bottom, #000000 -7%, rgba(3, 3, 3, 0.99) -6%, rgba(122, 122, 122, 0) 53%, rgba(255, 255, 255, 0) 76%, rgba(216, 216, 216, 0));
}
.logo{
  position: absolute;
  top: 40px;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  left: 0;
  right: 0;
  text-align: center;
}
.buildtolast{
  position: absolute;
  top: 70px;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  left: 0;
  right: 0;
  text-align: center
}

@media (min-width: 600px) {
  .logo{
    top: 40px;
    width: 350px;
  }
  .buildtolast{
    top: 100px;
  }
}

</style>
