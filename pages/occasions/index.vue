<template lang="html">
  <section class="occasions">
    <h1 class="occasions-title">Occasions</h1>
    <div v-if="occasionposts.length === 0">
      <p  class="geen-aanbod">Momenteel hebben wij geen occasion aanbod voor u.
      Wilt u op de hoogte blijven van ons aanbod, laat dan hier uw e-mail achter
      </p>
      <div id="mc_embed_signup">
        <form action="https://app.us1.list-manage.com/subscribe/post?u=7366f87e6c3f60d49a9d7ef07&amp;id=14e7f66ee5" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
          <div id="mc_embed_signup_scroll" class="form-flex">
      	     <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_7366f87e6c3f60d49a9d7ef07_14e7f66ee5" tabindex="-1" value=""></div>
            <div class="clear"><input type="submit" value="Hou me op de hoogte" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
          </div>
        </form>
      </div>
    </div>
    <section class="occasion-container">
      <OccassionsPreview class="preview"
      v-for="occasionpost in occasionposts"
      :key="occasionpost.id"
      :title="occasionpost.title"
      :excerpt="occasionpost.previewText"
      :thumbnailImage="occasionpost.thumbnailUrl"
      :price="occasionpost.price"
      :id="occasionpost.id" />
    </section>
  </section>
</template>

<script>
import OccassionsPreview from '@/components/Blog/OccassionsPreview'
export default {
  layout: 'headerbar',
  components: {
    OccassionsPreview
  },
  asyncData(context) {
    return context.app.$storyapi.get('cdn/stories', {
      version: process.env.NODE_ENV == "production" ? "published" : 'draft',
      starts_with: 'occasions/'
    }).then(res => {
      console.log(res);
      return { occasionposts: res.data.stories.map(occasion => {
        return {
          id: occasion.slug,
          title: occasion.content.title,
          previewText: occasion.content.description,
          thumbnailUrl: occasion.content.thumbnail,
          price: occasion.content.price
          }
        })
      };
    });
  }
}
</script>

<style lang="css" scoped>
.occasions{
  min-height: 100vh;
  width: 100vw;
}
.container-top-border{
  width: 100vw;
  height: 45px;
  background-color: #3E4B51;
}
.occasions-title,
.geen-aanbod{
  text-align: center;
  margin-top: 40px;
}
.preview{
  margin: 10px 10px;
}
.geen-aanbod{
  margin-top: 80px;
  font-size: 20px;
  padding: 16px 20px 20px 30px;
}
.email{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  height: 40px;
}
input 				{
  font-size:18px;
  padding:10px 10px 10px 5px;
  display:block;
  width:200px;
  border:none;
  border-bottom:1px solid #3E4B51;
  margin: 0 auto;
}

.button{
  background-color: #4C565C;
  color: white;
  width: 200px;
  color: white;
  font-size: 16px;
  height: 40px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
.button:hover{
  background-color: white;
  color: #4C565C;
  border: 1px solid #4C565C;
}
.occasion-container{
  display: flex;
  margin: 0 auto;
  width: 80%;
  flex-flow: row wrap;
  justify-content: space-around;
  justify-content: center;
  align-items: center;
}

@media (min-width: 1390px) {
  .container-top-border{
    height: 55px;
  }
  input{
    margin: 0;
  }
  .email{
    margin-right: 20px;
  }
  .form-flex{
    display: flex;
    justify-content: center;

  }
}
@media (min-width: 1800px) {
  .container-top-border{
    height: 65px;
  }
}
</style>
