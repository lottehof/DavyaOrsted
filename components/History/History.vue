<template lang="html">
  <div class="history">
    <div class="quote">
      <h1 class="quote-text">{{ blok.title }}</h1>
    </div>
    <div class="history-container">
      <div class="history-content">
        <figure>
          <img class="history-image" :src="blok.image" alt="jachthaven Davy&Orsted">
        </figure>
      </div>
      <div class="history-content">
        <div class="history-text">
          <p>{{ blok.content }}
            <a href="/overons">LEES MEER ></a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="css" scoped>
.history{
  width: 100vw;
  height: auto;
  margin-bottom: 30px;
}
.quote{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 55px;
  margin-top: 35px;
  width: 90%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Baskerville', sans-serif;
}
.quote-text{
  height: 82px;
  font-size: 20px;
  text-align: center;
  color: #3e4b51;
}
.history-image{
  background-size: cover;
  width: 100vw;
  height: 300px;
  background-repeat: no-repeat;
}
.history-text{
  height: auto;
  padding: 16px 20px 20px 30px;
  font-weight: 500;
  line-height: 2.43;
  color: #3e4b51;
}
.history-text > p {
  padding-bottom: 25px;
}
a{
  color: #3e4b51;
  text-decoration: none;
}
.history-container{
  width: 100vw;
  height: auto;
  background-color: rgba(203, 203, 197, 0.4);
  border-radius: 0.5rem;
}

@media (min-width: 500px) {
  .quote{
    margin-bottom: 5px;
    margin-top: 45px;
  }
  .history-image{
    height: 400px;
  }
}
@media (min-width: 1000px) {
  .history-image{
    height: 500px;
  }
}

@media (min-width: 1300px) {
  .quote-text{
    font-size: 36px;
  }
  .quote{
    margin-bottom: 25px;
    margin-top: 65px;
  }
}

@media (min-width: 1350px) {
  .history-container{
    height: 665px;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    margin-bottom: 2rem;
  }

  .history-content:nth-of-type(1){
    grid-column: 1 / span 3;
  }
  .history-content:nth-of-type(2){
    grid-column: 4 / span 2;
  }
  .history-text{
    padding: 32px 40px 40px 63px;
    width: 600px;
  }
  .history-image{
    width: 100%;
    height: 665px;
  }
  .quote-text{
    width: 100vw;
    height: 82px;
  }
  .quote{
    margin-bottom: 80px;
    margin-top: 85px;
    width: 100vw;
  }
}

@media (min-width: 1700px) {
  .history-text{
    width: 679px;
    height: 600px;
  }
}
</style>
