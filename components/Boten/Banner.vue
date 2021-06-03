<template lang="html">
  <div class="calltoactionbanner">
    <div>
      <section class="calltoaction-text" v-html="$options.filters.markdown(blok.calltoaction_text)"></section>
      <input class="calltoaction-button" type="submit" name="" value="Contact ons" onclick="window.location.href='mailto:info@davy-orsted.nl'">
    </div>
  </div>

</template>

<script>
export default {
    props: ['blok'],
}
</script>

<style lang="css" scoped>
.calltoactionbanner{
  background-color: #E0E0DD;
  height: auto;
  padding: 20px 0px;
  width: 100vw;
  text-align: center;
}
.calltoaction-text{
  width: 100%;
  margin: 0 auto;
  font-weight: 600;
  text-align: center;
  margin-bottom: 5px;
  color: #2A393F;
  /* padding: 16px 20px 20px 30px; */
  /* height:  120px; */
}

.calltoaction-button{
  width: 150px;
  background-color: #2A393F;
  color: white;
  text-transform: uppercase;
  border: none;
  height: 50px;
  margin: 0 auto;
  display: inline-block;
    border-radius: 5px;
}
.calltoaction-button:hover{
  border-radius: 50px;
  transition: all 0.3s ease 0s;
}
/*MEDIA QUERIES*/
/*--------------------*/
@media (min-width: 768px) {
  .calltoaction-text {
    width: 100%;
    font-size: 18px;
  }
}

@media (min-width: 1200px) {

  .calltoaction-text{
    line-height: 1.8;
    font-weight: 600;
    font-size: 16px;
  }
  .calltoaction-button{
    width: 170px;
  }
}
</style>
