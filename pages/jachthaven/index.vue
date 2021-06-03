<template lang="html">
  <section>
    <section class="quote">
      <h1 class="quote-text">{{ story.content.title }}</h1>
    </section>
    <section class="jachthaven-container">
      <div class="jachthaven-content">
        <article class="jachthaven-content-article">
            <section class="post-content" v-html="$options.filters.markdown(story.content.content)"></section>
        </article>
      </div>
      <div class="jachthaven-content">
        <figure>
          <img class="jachthaven-content-image" :src="story.content.image" alt="Jachthaven">
        </figure>
      </div>
    </section>
    <Onderhoud
      :key="story.content._id"
      :blok="story.content" />
    <Winterstalling
      :key="story.content._id"
      :blok="story.content" />
    <Parking
      :key="story.content._id"
      :blok="story.content" />
    <!-- <Information
     /> -->
    <!-- <Instagram /> -->
  </section>
</template>

<script>
import Information from '@/components/Information/Information'
import Instagram from '@/components/Instagram/Instagram'
import Onderhoud from '@/components/Overons/Onderhoud'
import Winterstalling from '@/components/Overons/Winterstalling'
import Parking from '@/components/Overons/Parking'
export default {
  layout: 'headerbar',
  components: {
    Information,
    Instagram,
    Onderhoud,
    Winterstalling,
    Parking
  },

/*CONNECTOR TO CMS STORYBLOK*/
/*--------------------------*/
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
return context.app.$storyapi.get('cdn/stories/jachthaven', {
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
p{display: block;}

.container-top-border{
  width: 100vw;
  height: 35px;
  background-color: #3E4B51;
}
.title{
  height: 35px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.jachthaven-start-image{
  width: 100vw;
  height: 50vh;
  background-size: cover;
  background-position: center;
}
.quote{
  margin-bottom: 65px;
  margin-top: 35px;
  width: 100vw;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
}
.quote-text{
  font-size: 36px;
  width: 100%;
  height: 82px;
  font-size: 22px;
  text-align: center;
  color: #010000;
  white-space: pre-line;
}
.jachthaven-container{
  width: 100vw;
  height: auto;
  display: grid;
  margin: 0;
  grid-template-columns: 1fr;
}
.jachthaven-content:nth-of-type(2){
  width: 100%;
  height: 100%;
  position: relative;
}
.jachthaven-content-article{
  width: 95%;
  height: auto;
  margin-bottom: 20px;
  margin: 10px;
  color: #3e4b51;
}
.jachthaven-content-image{
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}
.jachthaven-content-article{
  white-space: pre-line;
}
/*MEDIA QUERIES*/
/*-------------------*/
@media (min-width: 768px) {
  .jachthaven-content-article{
    padding: 18px;
  }
  .quote{
    margin-bottom: 25px;
    padding: 0 1rem;
  }
  .jachthaven-content-image{
    width: 100%;
    height: 100%;
    float: right;
  }
}

@media (min-width: 1390px) {
  .container-top-border{
    height: 55px;
  }
  .title{
    height: 55px;
  }
  .quote-text{
    font-size: 28px;
  }
  .jachthaven-content-article{
    padding: 0 18px;
    margin-left: 50px;
    width: 550px;
  }
  .jachthaven-container{
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  .jachthaven-content:nth-of-type(1){
    grid-column: 1 / span 2;
        width: 100%;
  }
  .jachthaven-content:nth-of-type(2){
    grid-column: 3 / span 3;
  }
  .jachthaven-content:nth-of-type(2){
    height: 100%;
    width: 100%;
  }
  .jachthaven-content-image{
    width: 90%;
    height: 600px;
    float: right;
  }
}

@media (min-width: 1450px) {
  .jachthaven-content-image{
    width: 100%;
  }
}

@media (min-width: 1800px) {
  .container-top-border{
    height: 65px;
  }
  .title{
    height: 65px;
  }
  .quote-text{
    font-size: 30px;
  }
  .jachthaven-content-image{
    width: 100%;
    height: 578px;
    margin-right: 0;
  }
  .jachthaven-container{
    width: 100%;
    height: 665px;
    display: grid;
    margin: 0;
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  .jachthaven-content:nth-of-type(1){
    grid-column: 1 / span 2;
  }
  .jachthaven-content:nth-of-type(2){
    grid-column: 3 / span 3;
  }
  .jachthaven-content-article{
    width: 593px;
    height: 665px;
    /* padding: 2.1rem; */
    margin-left: 100px;
  }
  .jachthaven-content:nth-of-type(2){
    width: 100%;
    height: 778px;
    margin-right: 0;
  }
}


</style>
