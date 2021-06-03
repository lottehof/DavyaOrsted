<template lang="html">
  <section class="hand-made">
    <section class="handmade-container-one">
      <div class="handmade-content">
          <img :src="story.content.content_one_image" alt="boot" class="handmade-content-image-one">
      </div>
      <div class="handmade-content">
        <article class="handmade-content-article">
          <section class="post-content" v-html="$options.filters.markdown(story.content.content_one)"></section>
        </article>
      </div>
      </section>

      <section class="handmade-container-two">
        <div class="handmade-content-two">
          <article class="handmade-article-two">
            <section class="handmade-section-two" v-html="$options.filters.markdown(story.content.content_two)"></section>
          </article>
        </div>

        <div class="handmade-content-two">
          <img :src="story.content.content_two_image" alt="boot" class="handmade-content-image-two">
        </div>
      </section>

      <section class="handmade-container-three">
        <div class="handmade-content-three">
          <article class="handmade-article-three">
            <section class="handmade-section-two" v-html="$options.filters.markdown(story.content.content_three)"></section>
          </article>
        </div>

        <div class="handmade-content-three" id="test">
            <img :src="story.content.content_three_image" alt="boot" class="handmade-content-image-three">
        </div>
      </section>
      <section>
        <article class="handmade-article-four">
          <section class="" v-html="$options.filters.markdown(story.content.content_four)"></section>
        </article>
      </section>

      <section class="handmade-calltoaction">
        <div class="calltoaction">
        <section class="calltoaction-text" v-html="$options.filters.markdown(story.content.calltoactiontext)"></section>
        <input class="CTAButton" type="submit" name="" value="Contact ons" onclick="window.location.href='mailto:info@davy-orsted.nl'">
      </div>
        <ImageGrid />
      </section>


  </section>

</template>

<script>
import TheHeader from '~/components/Menu/TheHeader'
import TheSideNav from '~/components/Menu/TheSideNav'
import ImageGrid from '~/components/Hand-made/ImageGrid'
export default {
    layout: 'headerbar',
  /*COMPONENTS*/
  /*----------------*/
  components: {
    TheHeader,
    TheSideNav,
    ImageGrid,

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
    return context.app.$storyapi.get('cdn/stories/hand-made', {
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

<style lang="css" scoped>
.handmade{
  width: 100vw;
  height: auto;
  margin-bottom: 30px;
}
.container-top-border{
  width: 100vw;
  height: 45px;
  background-color: #3E4B51;
}

.quote{
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
.quote-text{
  font-size: 20px;
  text-align: center;
  color: #3e4b51;
}
.handmade-container-one,
.handmade-container-two,
.handmade-container-three{
  width: 100vw;
  height: auto;
  display: grid;
  margin: 0;
  grid-template-columns: 1fr;
}
.handmade-container-one{
  background-color: rgba(203, 203, 197, 0.4);
}
.handmade-content-article,
.handmade-article-two,
.handmade-article-three,
.handmade-article-four{
  margin-top: 30px;
  padding: 16px 20px 20px 30px;
  font-weight: 500;
  line-height: 2.43;
}
.handmade-article-four{
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 90%;
}
.handmade-content-image-one,
.handmade-content-image-two,
.handmade-content-image-three{
  width: 100%;
  height: 250px;
}

.handmade-calltoaction{
  width: 100%;
  margin-top: 50px;
}
.calltoaction{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #4C565C;
}
.calltoaction-text,
.calltoaction-button{
  color: white;
  font-size: 14px;
  text-align: center;
  margin: 0;
  padding: 0;
  height: 130px;
}
.calltoaction-text{
  padding: 16px 20px 20px 30px;
}
.CTAButton{
  font-size: 14px;
  width: 150px;
  height: 40px;
  margin-bottom: 20px;
  background-color: #4C565C;
  border: 4px solid white;
  color: white;
  border-radius: 5px;
  text-transform: uppercase;
  transition: all 0.4s ease 0s;
  text-decoration: none;
  display: inline-block;

}
.CTAButton:hover{
  border-radius: 50px;
  transition: all 0.3s ease 0s;

}

@media (min-width: 768px) {
  .handmade-content-image-one,
  .handmade-content-image-two,
  .handmade-content-image-three{
    height: 400px;
  }
  .handmade-calltoaction{
    height: 100%;
  }
  .calltoaction-text,
  .calltoaction-button{
    font-size: 16px;
  }
  .calltoaction-text,
  .calltoaction-button{
    height: 100px;
  }
}

@media (min-width: 1000px) {
  .handmade-content-image-one,
  .handmade-content-image-two,
  .handmade-content-image-three{
    height: 500px;
  }
  .calltoaction-text,
  .calltoaction-button{
    height: 110px;
  }
}

@media (min-width: 1300px) {
  .quote-text{
    font-size: 30px;
  }
  .quote{
    margin-bottom: 25px;
    margin-top: 25px;
  }
}
@media (min-width: 1390px) {
  .container-top-border{
    height: 70px;
  }
  .title{
    height: 55px;
  }
  .handmade-container-one,
  .handmade-container-two{
    grid-template-columns: repeat(6, minmax(0, 1fr));
    margin-bottom: 50px;
  }
  .handmade-container-three{
      grid-template-columns: repeat(6, minmax(0, 1fr));
      height: 400px;
      margin-bottom: 70px;
  }
  .handmade-content-image-one,
  .handmade-content-image-two,
  .handmade-content-image-three{
    height: 100%;
    width: 100%;
  }
  .handmade-content-image-two,
  .handmade-content-image-three{
    width: 80%;
  }
  .handmade-content-image-three{
    float: right;
  }
  .handmade-content:nth-of-type(1),
  .handmade-content-two:nth-of-type(1),
  .handmade-content-three:nth-of-type(2){
    grid-column: 1 / span 3;
    grid-row: 1;
    width: 100%;
  }
  .handmade-content:nth-of-type(2),
  .handmade-content-two:nth-of-type(2),
  .handmade-content-three:nth-of-type(1){
    grid-column: 4 / span 3;
    grid-row: 1;
  }

  .handmade-content-two,
  .handmade-content-three:nth-of-type(1){
    display: flex;
    align-items: center;
    justify-content: center;
    height: 450px;
  }
  .handmade-article-three{
    width: 80%;
  }
  .handmade-content-image-three{
    height: 450px;
  }

  .handmade-article-four{
    display: block;
    margin-right: auto;
    margin-left: auto;
    width: 40%;
  }
}

@media (min-width: 1800px) {
  .container-top-border{
    height: 65px;
  }
  .title{
    height: 65px;
  }
}

</style>
