<template>
  <div>
    <main class="main-content">
      <Nuxt />
    </main>
    <FooterMenu />
    <Footer />
  </div>
</template>

<script>
import FooterMenu from '@/components/Footer/FooterMenu'
import Footer from '@/components/Footer/Footer'
export default {
  components: {
    FooterMenu,
    Footer
  }
}
</script>

<style>
*, *::before, *::after{
  box-sizing: border-box;
}

*, *::before,
*::after {
  margin: 0;
  padding: 0;
  text-decoration: none;
  box-sizing: border-box;
  list-style: none;
}
hr{
  margin: 0;
  padding: 0;
}
body{
  font-family: 'Raleway', sans-serif;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  margin: 0;
  width: 100%;
}
h1{
  font-family: 'Baskerville', sans-serif;
  font-size: 36px;
  white-space: pre-line;
}
h2{
  font-size: 30px;
  font-family: 'Baskerville', sans-serif;
}

h3{
  font-family: 'Baskerville', sans-serif;
  font-size: 22px;
  white-space: pre-line;
}
h4{
  font-family: 'Baskerville', sans-serif;
  font-size: 20px;
  white-space: pre-line;
}
h5{
  font-size: 16px;
  white-space: pre-line;
}
p{
  font-size: 14px;
  line-height: 2.29;
  white-space: pre-line;
}
a{
  font-size: 12px;
  white-space: pre-line;
}
.post-content a{
  color: #3e4b51;
  text-decoration: underline;
  font-size: 14px;
}
.handmade-section-two > ul{
  font-size: 14px;

}
.handmade-section-two > ul li::before{
  content: "+";
  margin-right: 13px;
}

.handmade-section-two >ul  li {
  width: 100%;
  margin-bottom: 16px;
  margin-left: 3px;
  font-size: 14px;
}
.post-preview-text > ul{
  list-style: none;
  padding: 0;
}
.post-preview-text > ul li::before{
    content: "+";
    margin-right: 13px;
}

.second-overons-text .post-content h3{
  font-family: "Raleway", sans-serif;
}
@media (min-width: 768px) {
  .post-content p,
  .post-content p a{
    font-size: 16px;
  }
}

@media (min-width: 1390px) {
  .calltoaction-text p,
  .calltoaction-button{
    font-size: 18px;

  }
}

</style>
