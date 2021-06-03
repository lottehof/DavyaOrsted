<template>
  <section class="nieuwsbrief">
    <div class="nieuwsbrief-container">
      <h1 class="nieuwsbrief-container-title">D&Ø Magazine</h1>
      <div class="content">
        <!-- <p class="nieuwsbrief-container-content">Lees hier de laatste nieuw</p> -->
      </div>
    </div>
    <section class="post-preview-holder">
      <PostPreview
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :excerpt="post.previewText"
        :thumbnailImage="post.thumbnailUrl"
        :id="post.id"/>
    </section>
  </section>
</template>

<script>
import PostPreview from '@/components/Blog/PostPreview'

export default {
  layout: 'headerbar',
  components: {
    PostPreview,
  },
  asyncData(context) {
    return context.app.$storyapi.get('cdn/stories', {
      version: process.env.NODE_ENV == "production" ? "published" : 'draft',
      starts_with: 'nieuws/'
    }).then(res => {
      console.log(res);
      return { posts: res.data.stories.map(bp => {
        return {
          id: bp.slug,
          title: bp.content.title,
          previewText: bp.content.summary,
          thumbnailUrl: bp.content.image
        }
      })
    };
  });
},
}
</script>

<style scoped>
.nieuwsbrief{
  min-height: 100vh;
  width: 100vw;
  margin-bottom: 100px;
}

.container-top-border{
  width: 100vw;
  height: 45px;
  background-color: #3E4B51;
}
.nav-title{
  height: 45px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nieuwsbrief-container-title{
  font-size: 36px;
  width: 100%;
  text-align: center;
  color: #010000;
  white-space: pre-line;
  margin-top: 20px;
}
.content{
  display: flex;
  align-items: center;
  justify-content: center;
}
.nieuwsbrief-container-content{
  width: 90%;
  height: auto;
  font-size: 16px;
  padding:20px;
  text-align: center;
}
.post-preview-holder{
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  flex-wrap: wrap;
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
