<template lang="html">
  <div class="image-grid">
    <div class="image-content">
      <figure>
      <img src="@/assets/img/3b.jpeg" alt="Image grid van het maken van de boten van Davy&Orsted">
      </figure>
    </div>
    <div class="image-content">
      <figure>
      <img src="@/assets/img/3a.jpeg" alt="Image grid van het maken van de boten van Davy&Orsted">
      </figure>
    </div>
    <div class="image-content">
      <figure>
      <img src="@/assets/img/7.jpeg" alt="Image grid van het maken van de boten van Davy&Orsted">
      </figure>
    </div>
    <div class="image-content">
      <figure>
      <img src="@/assets/img/6.jpeg" alt="Image grid van het maken van de boten van Davy&Orsted">
      </figure>
    </div>
    <div class="image-content">
      <figure>
        <img src="@/assets/img/4.jpeg" alt="Image grid van het maken van de boten van Davy&Orsted">
      </figure>
    </div>
    <div class="image-content">
      <figure>
        <img src="@/assets/img/8a.jpeg" alt="Image grid van het maken van de boten van Davy&Orsted">
      </figure>
    </div>
    <div class="image-content">
      <figure>
        <img src="@/assets/img/8c.jpeg" alt="Image grid van het maken van de boten van Davy&Orsted">
      </figure>
    </div>
  </div>

</template>

<style lang="css" scoped>
.image-grid{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  height: 300px;
}
.image-content:nth-of-type(1){
  display: none;
}
.image-grid > figure{
  position: relative;
}
.image-content > figure > img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
figure{
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%
}

@media (min-width: 768px) {
  .image-grid{
    height: auto;
  }
}

@media (min-width: 1390px) {
  .image-grid{
    grid-template-columns: repeat(7, minmax(0, 1fr));
    grid-template-rows: repeat(4, minmax(0, 1fr));
    height: 600px;
    border-radius: 0.5rem;
    margin-bottom: 2rem;
  }
  .image-content:nth-of-type(1){
    grid-column: 1 / span 1;
    grid-row: 1 / span 4;
    display: block;
  }
  .image-content:nth-of-type(2){
    grid-column: 2 / span 2;
    grid-row: 1 / span 2;
  }
  .image-content:nth-of-type(3){
    grid-column: 4 / span 2;
    grid-row: 1 / span 2;
  }
  .image-content:nth-of-type(4){
    grid-column: 6 / span 2;
    grid-row: 1 / span 2;
  }
  .image-content:nth-of-type(5){
    grid-column: 2 / span 2;
    grid-row: 3 / span 2;
  }
  .image-content:nth-of-type(6){
    grid-column: 4 / span 2;
    grid-row: 3 / span 2;
  }
  .image-content:nth-of-type(7){
    grid-column: 6 / span 2;
    grid-row: 3 / span 2;
  }
  .image-content{
    position: relative;
    overflow: hidden;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
}
</style>
