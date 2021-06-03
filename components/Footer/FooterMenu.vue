<template lang="html">
  <div class="wrapper">
    <div class="footer-menu-container">
      <div class="footer-menu">
        <div class="col_1">
          <div>
            <h4 class="title">Schrijf je in voor onze nieuwsbrief</h4>
          </div>
          <form action="https://app.us1.list-manage.com/subscribe/post?u=7366f87e6c3f60d49a9d7ef07&amp;id=14e7f66ee5" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
          <div class="group">
          	<label for="mce-FirstName">Voornaam</label>
          	<input type="firstname" value="" name="FirstName" class="required first name" placeholder="Voornaam" id="mce-FirstName">
            <span class="highlight"></span>
            <span class="bar"></span>
          </div>
          <div class="group">
            <label for="mce-EMAIL">E-mail</label>
            <input type="email" value="" name="EMAIL" class="required email" placeholder="E-mail" id="mce-EMAIL">
            <span class="highlight"></span>
            <span class="bar"></span>
          </div>
          	<div id="mce-responses" class="clear">
          		<div class="response" id="mce-error-response" style="display:none"></div>
          		<div class="response" id="mce-success-response" style="display:none"></div>
          	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_7366f87e6c3f60d49a9d7ef07_14e7f66ee5" tabindex="-1" value=""></div>
              <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" hidden></div>
          </form>
        </div>
        <div class="col_2">
          <div>
            <h4 class="title">Algemeen</h4>
          </div>
          <ul>
            <li><a href="/jachthaven#Winterstalling">Winterstalling</a></li>
            <li><a href="/handmade">Handmade</a></li>
            <li><a href="/nieuws">D&Ø Magazine</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div class="col_3">
          <div>
            <h4 class="title">Boten</h4>
          </div>
          <ul>
            <li><a href="/boten/raptor">D&Ø Raptor</a></li>
            <li><a href="/boten/crafter">D&Ø Crafter</a></li>
            <li><a href="/boten/marshall">Marshall</a></li>
            <li><a href="/boten/moonraker">Moonraker</a></li>
          </ul>
        </div>
        <div class="col_4">
          <div>
            <h4 class="title">About</h4>
          </div>
          <ul>
            <li><a href="/overons">Wie wij zijn</a></li>
            <li><a href="/jachthaven">De werf</a></li>
            <li><a href="/occasions">Occasions</a></li>
            <li><a href="/onderdelen">Onderdelen</a></li>
          </ul>
        </div>
        <div class="col_5">
          <div>
            <h4 class="title">Contact</h4>
          </div>
          <ul>
            <li><a href="tel://+31653244451">+31(6)53244451</a></li>
            <li><a onclick="window.location.href='mailto:info@davy-orsted.nl'">info@davy-orsted.nl</a></li>
            <li><a onclick="window.location.href='https://www.google.com/maps/place/Davy+en+%C3%98rsted/@52.3334536,4.8458888,17z/data=!4m5!3m4!1s0x47c5e1e58ec01133:0x54c6c7fa2f3ec933!8m2!3d52.3328226!4d4.849228'">Davy 	&amp; Orsted</a></li>
            <li><a onclick="window.location.href='https://www.google.com/maps/place/Davy+en+%C3%98rsted/@52.3334536,4.8458888,17z/data=!4m5!3m4!1s0x47c5e1e58ec01133:0x54c6c7fa2f3ec933!8m2!3d52.3328226!4d4.849228'">Boeierspad 24, 1081 KE Amsterdam Netherlands</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="FooterMenu-Mobile">
      <div class="form">
        <h4 class="form-title">Schrijf je in voor onze nieuwsbrief</h4>
        <form action="https://app.us1.list-manage.com/subscribe/post?u=7366f87e6c3f60d49a9d7ef07&amp;id=14e7f66ee5" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
          <label for="mce-EMAIL">E-mail</label>
          <input type="email" value="" name="EMAIL" class="required email" placeholder="E-mail" id="mce-EMAIL">
          <span class="highlight"></span>
          <span class="bar"></span>
          <div id="mce-responses" class="clear">
            <div class="response" id="mce-error-response" style="display:none"></div>
            <div class="response" id="mce-success-response" style="display:none"></div>
          </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_7366f87e6c3f60d49a9d7ef07_14e7f66ee5" tabindex="-1" value=""></div>
            <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" hidden></div>
        </form>
      </div>

      <button @click="isOpenAlgemeen = !isOpenAlgemeen" class="FooterMenu-title">Algemeen</button>
      <div v-if="isOpenAlgemeen" class="FooterMenu-box">
        <a class="FooterMenu-link" href="/overons">Winterstalling</a><br>
        <a class="FooterMenu-link" href="/handmade">Handmade</a><br>
        <a class="FooterMenu-link" href="/nieuws">D&Ø Magazine</a><br>
        <a class="FooterMenu-link" href="/contact">Contact</a><br><br>
      </div>
      <hr>

      <button @click="isOpenBoten = !isOpenBoten" class="FooterMenu-title">Boten</button>
      <div v-if="isOpenBoten" class="FooterMenu-box">
        <a class="FooterMenu-link" href="/boten/raptor">D&Ø Raptor</a><br>
        <a class="FooterMenu-link" href="/boten/crafter">D&Ø Crafter</a><br>
        <a class="FooterMenu-link" href="/boten/marshall">Marshall</a><br>
        <a class="FooterMenu-link" href="/boten/moonraker">Moonraker</a><br><br>
      </div>
      <hr>

      <button @click="isOpenAbout = !isOpenAbout" class="FooterMenu-title">About</button>
      <div v-if="isOpenAbout" class="FooterMenu-box">
        <a class="FooterMenu-link" href="/overons">Wie wij zijn</a><br>
        <a class="FooterMenu-link" href="/jachthaven">De werf</a><br>
                <a class="FooterMenu-link" href="/occasions">Occasions</a><br>
        <a class="FooterMenu-link" href="/onderdelen">Onderdelen</a><br><br>
      </div>
      <hr>

      <button @click="isOpenContact = !isOpenContact" class="FooterMenu-title">Contact</button>
      <div v-if="isOpenContact" class="FooterMenu-box">
        <a class="FooterMenu-link" href="tel://+31653244451">+31(6)53244451</a><br>
        <a class="FooterMenu-link" onclick="window.location.href='mailto:info@davy-orsted.nl'">info@davy-orsted.nl</a><br>
        <a class="FooterMenu-link" onclick="window.location.href='https://www.google.com/maps/place/Davy+en+%C3%98rsted/@52.3334536,4.8458888,17z/data=!4m5!3m4!1s0x47c5e1e58ec01133:0x54c6c7fa2f3ec933!8m2!3d52.3328226!4d4.849228'">Davy &amp; Orsted</a><br>
        <a class="FooterMenu-link" onclick="window.location.href='https://www.google.com/maps/place/Davy+en+%C3%98rsted/@52.3334536,4.8458888,17z/data=!4m5!3m4!1s0x47c5e1e58ec01133:0x54c6c7fa2f3ec933!8m2!3d52.3328226!4d4.849228'">Boeierspad 24, 1081 KE Amsterdam Netherlands</a><br><br>
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
    isOpenAlgemeen: false,
    isOpenBoten: false,
    isOpenAbout: false,
    isOpenContact: false,
    }
  }
}
</script>

<style lang="css" scoped>
*{
  list-style: none;
}
a{
  font-size: 18px;
  font-family: "FuturaStd";
}
label{
  display: none;
}
.wrapper .navbar {
  background: #222222;
  height: 65px;
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;

}
.footer-menu-container{
  display: none;
   padding: 0 30px;
   margin-top: 30px;
}
.footer-menu-container .footer-menu .title{
 height: 40px;
 line-height: 1.52;
 color: #4c565c;
}
.footer-menu ul li a{
  height: 260px;
  font-size: 15px;
  font-weight: 500;
  line-height: 2.4;
  letter-spacing: 1px;
  color: #acadaf;
}
.footer-menu-container .footer-menu ul li a:hover{
  text-decoration: underline;
}
.footer-menu-container a{
  color:#53B2C8;
}
.col_1{
  max-width: 600px;
}
.group 			  {
  position:relative;
  margin-bottom:20px;
  width: 210px;
}
input 				{
  font-size:18px;
  padding:10px 10px 10px 5px;
  display:block;
  width:200px;
  border:none;
  border-bottom:1px solid #3E4B51;
}
input:focus{
  outline:none;
}
.highlight {
  position:absolute;
  height:60%;
  width:100px;
  top:25%;
  left:0;
  pointer-events:none;
  opacity:0.5;
}
input:focus ~ .bar:before, input:focus ~ .bar:after {
  width:50%;
}
.highlight {
  position:absolute;
  height:60%;
  width:100px;
  top:25%;
  left:0;
  pointer-events:none;
  opacity:0.5;
}
.bar{
  position:relative;
  display:block;
  width:300px;
}
.bar:before, .bar:after 	{
  content:'';
  height:2px;
  width:0;
  bottom:1px;
  position:absolute;
}
.bar:before {
  left:50%;
}
.bar:after {
  right:50%;
}
::placeholder	{
  color: rgba(217, 216, 214, 0.5);;
  font-size:18px;
  position:absolute;
  pointer-events:none;
  left:5px;
  top:10px;
  line-height: 1.78;
}
ul{
  width: 200px;
}
.form{
  width: 100%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 40px;
}
.form-title{
  color: #4C565C;
  margin-top: 50px;
}
form{
  position:relative;
  margin-bottom:20px;
  width: 210px;
}
.FooterMenu-Mobile{
  margin-bottom: 40px;
}
.FooterMenu-title {
  font-family: 'Baskerville';
  font-size: 21px;
  background-color: #fff;
  color: #4C565C;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  transition: 0.4s;
}
.FooterMenu-title:after {
  content: '\276F';
  color: #4C565C;
  float: right;
  font-size: 15px;
  margin-left: 5px;
  text-transform: uppercase;
}
.FooterMenu-box{
  background-color: white;
  width: 98%;
}
.FooterMenu-link{
  padding-left: 18px;
  display: block;
  color: gray;
  animation-name: menu-arrow;
  animation-duration: 4s;
}
.FooterMenu-link:hover{
  text-decoration: underline;
}

@media (min-width: 750px) {
  .FooterMenu-Mobile{
    display: none;
  }
  .footer-menu-container{
    display: block;
  }
  .footer-menu{
   display: grid;
   grid-template-columns: repeat(6, minmax(0, 1fr));
   grid-template-rows: repeat(3, minmax(0, 1fr));
   width: 100%;
   margin-bottom: 20px;
  }
  .footer-menu > .col_1{
   grid-column: 1 / span 3;
   grid-row: 1;
  }
  .footer-menu > .col_2{
   grid-column: 4 / span 1;
   grid-row: 1;
  }
  .footer-menu > .col_3{
   grid-column: 1 / span 1;
   grid-row: 2;
  }
  .footer-menu > .col_4{
   grid-column: 4 / span 1;
   grid-row: 2;
  }
  .footer-menu > .col_5{
   grid-column: 1 / span 5;
   grid-row: 3;
  }
  .group:nth-of-type(1){
    display: block;
  }
  input{
    border-bottom:1px solid rgba(217, 216, 214, 0.5);
  }
}

@media (min-width:1200px) {
  form{
    display: flex;
    margin: 0;
    width: 100px;
  }
  .footer-menu{
   grid-template-rows: repeat(2, minmax(0, 1fr));
  }
  .footer-menu > .col_2{
   grid-column: 1 / span 1;
   grid-row: 2;
  }
  .footer-menu > .col_3{
   grid-column: 2 / span 1;
   grid-row: 2;
  }
  .footer-menu > .col_4{
   grid-column: 3 / span 1;
   grid-row: 2;
  }
  .footer-menu > .col_5{
   grid-column: 4 / span 1;
   grid-row: 2;
  }
}
@media (min-width: 1600px) {
  .footer-menu{
   grid-template-rows: repeat(1, minmax(0, 1fr));
  }
  .footer-menu > .col_1{
   grid-column: 1 / span 2;
   grid-row: 1;
  }
  .footer-menu > .col_2{
   grid-column: 3 / span 1;
   grid-row: 1;
  }
  .footer-menu > .col_3{
   grid-column: 4 / span 1;
   grid-row: 1;
  }
  .footer-menu > .col_4{
   grid-column: 5 / span 1;
   grid-row: 1;
  }
  .footer-menu > .col_5{
   grid-column: 6 / span 1;
   grid-row: 1;
  }
}

</style>
