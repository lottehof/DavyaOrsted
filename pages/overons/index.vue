<template lang="html">
  <section class="overOns">
    <section class="quote">
      <h1 class="quote-text">{{ story.content.quote }}</h1>
    </section>
    <div class="overons-container">
      <div class="overons-content">
        <div class="overons-image" > <img :src="story.content.content_image_one" alt="haven" class="overons-image"> </div>
      </div>
      <div class="overons-content">
        <div class="overons-text">
            <section class="post-content" v-html="$options.filters.markdown(story.content.content_one)"></section>
        </div>
      </div>
    </div>
    <section class="quote-second">
      <h1 class="quote-text-second">{{ story.content.quote_two }}
      </h1>
    </section>
    <div class="second-overons-container">
      <div class="second-overons-content">
        <div class="second-overons-text">
            <section class="post-content" v-html="$options.filters.markdown(story.content.content_two)"></section>
        </div>
      </div>
      <div class="second-overons-content">
        <div class="second-overons-image">
          <img class="second-overons-image" :src="story.content.content_image_two" alt="Sir Humphry en Hans Christiaan Orsted">
        </div>
      </div>
    </div>
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
    return context.app.$storyapi.get('cdn/stories/overons', {
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
.post-content a{
  color: #3e4b51;
  text-decoration: none;
}

.overOns{
  width: 100vw;
  height: auto;
}
.title{
  height: 45px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container-top-border{
  width: 100vw;
  height: 45px;
  background-color: #3E4B51;
}
.blok-one,
.blok-two{
  display: flex;
  align-items: center;
  justify-content: center;
}
.overons-start-image,
.overons-start-image-two{
  width: 100vw;
  height: 50vh;
  margin: 0 auto;
  background-size: cover;
  background-position: center;
}
.overons-start-image-two{
  width: 100vw;
  height: 40vh;
  margin: 0 auto;
  background-size: cover;
  background-position: center;
}
.quote,
.quote-second{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
  margin-top: 25px;
  width: 90%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
}
.quote-text,
.quote-text-second{
  font-size: 20px;
  text-align: center;
  color: #3e4b51;
}
.overons-container{
  width: 100vw;
  height: auto;
  background-color: rgba(203, 203, 197, 0.4);
  border-radius: 0.5rem;
}
.second-overons-container{
  width: 100vw;
  height: auto;
  border-radius: 0.5rem;
}
.overons-image,
.second-overons-image{
  background-size: cover;
  width: 100vw;
  height: auto;
  background-repeat: no-repeat;
}
.second-container-subtitle{
  width: 100%;
  height: auto;
  font-family: 'Baskerville', sans-serif;
  font-size: 22px;
  color: #010000;
  padding: 10px 0;
  }
.overons-text,
.overons-text .post-content p a,
.second-overons-text,
.second-overons-text p a{
  width: 100%;
  height: auto;
  padding: 16px 20px 20px 30px;
  font-weight: 500;
  line-height: 2.43;
  color: #3e4b51;
}

/*MEDIA QUERIES*/
/*-------------------*/
@media (min-width: 500px) {
  .overons-image,
  .second-overons-image{
    width: 100%;
    height: 400px;
  }
  .quote{
    margin-bottom: 45px;
    margin-top: 45px;
    height: 100px;
  }
}

/* IPAD */
@media (min-width: 768px) {
  .overons-text,
  .second-overons-text,
  .overons-text a,
  .second-overons-text a{
    font-size: 17px;
  }
  .quote-text,
  .quote-text-second{
    font-size: 26px;
  }
  .post-content p,
  .post-content p a{
    font-size: 16px;
  }
}
@media (min-width: 1000px) {
  .overons-image,
  .second-overons-image{
    height: 500px;
  }
}

@media (min-width: 1300px) {
  .quote-text,
  .quote-text-second{
    font-size: 30px;
  }
  .quote{
    margin-bottom: 25px;
    margin-top: 25px;
  }
}

@media (min-width: 1350px) {
  .overons-container{
    width: 100vw;
    height: auto;
    background-color: rgba(203, 203, 197, 0.4);
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-template-rows: repeat(1, minmax(0, 1fr));
    border-radius: 0.5rem;
    margin-bottom: 2rem;
    margin: 0 auto;
  }
  .second-overons-container,
  .overons-container-3{
    width: 90vw;
    height: auto;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-template-rows: repeat(1, minmax(0, 1fr));
    border-radius: 0.5rem;
    margin-bottom: 2rem;
    margin: 0 auto;
  }
  .overons-content:nth-of-type(1){
    grid-column: 1 / span 3;
  }
  .overons-content:nth-of-type(2){
    grid-column: 4 / span 2;
  }
  .overons-content-1:nth-of-type(1){
    grid-column: 1 / span 2;
  }
  .overons-content-2:nth-of-type(2){
    grid-column: 3 / span 3;
  }
  .second-overons-content:nth-of-type(1){
    grid-column: 1 / span 3;
  }
  .second-overons-content:nth-of-type(2){
      grid-column: 4 / span 2;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  .overons-text,
  .second-overons-text{
    padding: 32px 40px 40px 63px;
  }
  .overons-image,
  .second-overons-image{
    width: 100%;
    height: 100%;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }
  .quote-text{
    width: 100vw;
    height: 82px;
  }
  .quote{
    margin-bottom: 35px;
    margin-top: 35px;
    width: 100vw;
  }
  .second-overons-image{
    height: 350px;
    width: 600px;
    margin-right: 40px;
  }
}

@media (min-width: 1390px) {
  .container-top-border{
    height: 55px;
  }
  .title{
    height: 55px;
  }
  .overons-start-image-two{
    width: 90vw;
  }
  .second-overons-text{
    width: 730px;
  }
}

@media (min-width: 1800px) {
  .container-top-border{
    height: 65px;
  }
  .title{
    height: 65px;
  }

  .second-overons-image{
    width: 750px;

  }
}
</style>
