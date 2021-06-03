<template lang="html">
  <section class="boten">
    <hr>
    <h1 class="title">Boten</h1>
    <div class="test">
    <section class="post-preview-holder">
    <BootPostPreview
    v-for="bootpost in bootposts"
    :key="bootpost.id"
    :title="bootpost.title"
    :excerpt="bootpost.previewText"
    :thumbnailImage="bootpost.thumbnailUrl"
    :id="bootpost.id"/>
  </section>
</div>
</section>
</template>

<script>
import BootPostPreview from '@/components/Blog/BootPostPreview'
export default {
  layout: 'headerbar',
  components: {
    BootPostPreview

  },
  asyncData(context) {
    return context.app.$storyapi.get('cdn/stories', {
      version: process.env.NODE_ENV == "production" ? "published" : 'draft',
      starts_with: 'boten/'
    }).then(res => {
      console.log(res);
      return { bootposts: res.data.stories.map(boten => {
        return {
          id: boten.slug,
          title: boten.content.titel,
          previewText: boten.content.korte_beschrijving,
          thumbnailUrl: boten.content.thumbnail
          }
        })
      };
    });
  }
}
</script>

<style lang="css" scoped>
.boten{
  width: 100vw;
  min-height: 100vh;
  position: relative;
  z-index: 0;
}
.test{
  width: 100%;
  margin: 0 auto;
}
.title{
  text-align: center;
  font-size: 30px;
  margin: 15px 0px;
  text-transform: uppercase;
}
.post-preview-holder{
  width: 350px;
  margin: auto;
}

@media (min-width: 768px) {
  .test{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .post-preview-holder{
    width: auto;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
}
@media (min-width: 1400px) {
  .test{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .post-preview-holder{
    width: auto;
    margin: auto;
    display: grid;
    margin-top: 30px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
  }
  .title{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
}


</style>
