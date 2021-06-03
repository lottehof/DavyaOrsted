<template lang="html">
  <section class="contact">
    <section class="contact-container">
      <div class="container-content">
        <div class="content-box">
              <!-- <img src="@/assets/img/17a.jpeg" alt="" class="contact-image"> -->
          <h2 class="davyOrsted">Davy&Ørsted</h2>
          <div class="DOborder"></div>
          <p><a class="contact-info" onclick="window.location.href='https://www.google.com/maps/place/Davy+en+%C3%98rsted/@52.3334536,4.8458888,17z/data=!4m5!3m4!1s0x47c5e1e58ec01133:0x54c6c7fa2f3ec933!8m2!3d52.3328226!4d4.849228'">Boeierspad 24</a></p>
          <p><a class="contact-info" onclick="window.location.href='https://www.google.com/maps/place/Davy+en+%C3%98rsted/@52.3334536,4.8458888,17z/data=!4m5!3m4!1s0x47c5e1e58ec01133:0x54c6c7fa2f3ec933!8m2!3d52.3328226!4d4.849228'">1081 KE Amsterdam</a></p>
          <p class="grey-contact"><a class="grey-contact-info" onclick="window.location.href='mailto:info@davy-orsted.nl'">info@davy-orsted.nl</a></p>
          <p><a class="contact-info" href="tel://+31653244451">06 53 24 44 51</a></p>



        </div>
      </div>
      <div class="container-content">
        <h2 class="contact-title">Contact ons</h2>
        <form method="post" name="contact" data-netlify-recaptcha="true" data-netlify="true"  action="/thank-you">
          <div class="group">
            <input id="name" type="text" name="Naam" placeholder="Naam" >
          </div>
          <div class="group">
            <input id="email" type="text" name="e-mail" placeholder="E-mail" >
          </div>
          <div class="group">
            <label for="phoneno">Telefoonnummer</label>
            <input id="phoneno" type="text" name="phoneNO" placeholder="Telefoonnummer" >
          </div>
          <div class="group">
            <label for="message">Bericht</label>
            <textarea id="message" rows="8" name="message" cols="80" placeholder="Bericht"></textarea>
          </div>
          <div class="group">
            <div data-netlify-recaptcha="true"class="recaptcha" ></div>
          </div>
          <div class="group">
            <input class="form-button" type="submit" value="Versturen" />
          </div>
          <small>
            <p class="small">This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
          </small>
        </form>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  layout: 'headerbar',
}
</script>

<style lang="css" scoped>
/* .contact-image{
  width: 300px;
  height: 100px;
} */
label{
  display: none;
}
.container-top-border{
  width: 100vw;
  height: 35px;
  background-color: #3E4B51;
}
.contact{
  width: 100vw;
}
.form-button:hover{
  border-radius: 20px;
}

.fa-instagram{
  color: #4c565c;
  font-size: 24px;
}
.contact-start{
  background-color: #2A393F;
  width: 100vw;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.contact-container{
  height: 100%;
}
.content-box{
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 70%;
}
.container-title{
  font-size: 24px;
}
.container-info{
  font-size: 14px;
  padding: 0 20px;
}
.container-title,
.container-info{
  text-align: center;
  color: white;
  margin: 0 auto;
}
.container-content:nth-of-type(1){
  display: flex;
  justify-content: center;
  background-color: #4C565C;
}
.container-content{
  height: 80vh;
}
.davyOrsted{
  text-transform: uppercase;
  color: white;
  font-weight: 500;
  margin-top: 50px;
}
.DOborder{
  height: 10px;
  width: 280px;
  background-color: #97A0A7;
  border-style: none;
}
.contact-info{
  font-size: 22px;
  color: white;
  cursor: pointer;
  border: none;
}
.grey-contact-info{
  color: #97A0A7;
  font-size: 22px;
}
.form-button{
  width: 300px;
  background-color: #2A393F;
  color: white;
  font-size: 16px;
  text-transform: uppercase;
  height: 50px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
.container-content:nth-of-type(2){
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  height: auto;
}
.contact-title{
  font-size: 24px;
  margin-top: 20px;
  font-weight: 500;
}
.group 			  {
  margin-bottom:20px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

input,
textarea,
.recaptcha{
  font-size:18px;
  padding:10px 10px 10px 5px;
  display:block;
  width: 100%;
  border:none;
  margin: 0 auto;
}
input, textarea{
    border-bottom:1px solid #ACADAF;
}

.small{
  margin: 0 auto;
  width: 80%;
}

@media (min-width: 768px) {
  .contact-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .container-content:nth-of-type(1){
    height: 100%;
  }
  .container-title{
    font-size: 30px;
  }
  .contact-title{
    font-size: 26px;
  }
}
@media (min-width: 900px) {
  .container-top-border{
    height: 55px;
  }
  .blok-title{
    height: 55px;
  }
}

@media (min-width: 1390px) {
  .container-top-border{
    height: 55px;
  }
  .container-title{
    font-size: 32px;
  }
  .contact-title{
    font-size: 30px;
    margin-top: 50px;
  }
  .container-info{
    font-size: 16px;
    padding: 0 20px;
  }
  .recaptcha{
    width: 60%;
  }
  input, textarea{
    width: 60%;
  }
  .small{
    float: right;
  }
}

@media (min-width: 1800px) {
  .container-top-border{
    height: 65px;
  }
  .blok-title{
    height: 65px;
  }
}
</style>
