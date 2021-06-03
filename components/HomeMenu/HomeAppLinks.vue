<template>
<div class="menuToggle">
  <div class="footer-menu-container">
      <div class="footer-menu">
         <div class="col_2">
            <div>
              <h3 class="title">Over ons</h3>
            </div>
            <ul>
              <li><a href="/overons">Wie wij zijn</a></li>
              <li><a href="/handmade">Handmade</a></li>
              <li><a href="/nieuws">D&Ø Magazine</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
         </div>
         <div class="col_3">
           <div>
             <a href="/boten"><h3 class="title">Boten</h3></a>
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
             <h3 class="title">Werf</h3>
           </div>
           <ul>
              <li><a href="/jachthaven">Over de werf</a></li>
              <li><a href="/jachthaven#Onderhoud">Onderhoud</a></li>
              <li><a href="/jachthaven#Winterstalling">Winterstalling</a></li>
            </ul>
         </div>
         <div class="col_5">
           <div>
             <h3 class="title">D&Ø Shop</h3>
           </div>
           <ul>
            <li><a href="/occasions">Occasions</a></li>
            <li><a href="/onderdelen">Onderdelen</a></li>
            </ul>
         </div>
         <div class="col_6">
           <img src="@/assets/img/14.jpeg" alt="haven" class="nav-image">
        </div>
      </div>
    </div>

    <div class="mobile-container">
      <div class="mobile-menu">
      <button class="MobileMenu-title"><a class="MobileMenu-title" href="/">Home</a></button>
      <button @click="isOpenOverOns = !isOpenOverOns" class="MobileMenu-title one">Over ons</button>
      <div v-if="isOpenOverOns" class="FooterMenu-box">
        <a class="MobileMenu-link" href="/overons">Wie wij zijn</a><br>
        <a class="MobileMenu-link" href="/handmade">Handmade</a><br>
      </div>
      <button @click="isOpenBoten = !isOpenBoten" class="MobileMenu-title two">Boten</button>
      <div v-if="isOpenBoten" class="FooterMenu-box">
        <a class="MobileMenu-link" href="/boten">Alle boten</a><br>
        <a class="MobileMenu-link" href="/boten/raptor">D&Ø Raptor</a><br>
        <a class="MobileMenu-link" href="/boten/crafter">D&Ø Crafter</a><br>
        <a class="MobileMenu-link" href="/boten/marshall">Marshall</a><br>
        <a class="MobileMenu-link" href="/boten/moonraker">Moonraker</a><br>
      </div>
      <button @click="isOpenJachthaven = !isOpenJachthaven" class="MobileMenu-title three">Werf</button>
      <div v-if="isOpenJachthaven" class="FooterMenu-box">
        <a class="MobileMenu-link" href="/jachthaven">De werf</a><br>
                <a class="MobileMenu-link" href="/jachthaven#Onderhoud">Onderhoud</a><br>
        <a class="MobileMenu-link" href="/jachthaven#Winterstalling">Winterstalling</a><br>
      </div>
      <button class="MobileMenu-title"><a class="MobileMenu-title" href="/nieuws">D&Ø Magazine</a></button>
      <button @click="isOpenShop = !isOpenShop" class="MobileMenu-title three">D&Ø Shop</button>
      <div v-if="isOpenShop" class="FooterMenu-box">
        <a class="MobileMenu-link" href="/occasions">Occasions</a><br>
        <a class="MobileMenu-link" href="/onderdelen">Onderdelen</a><br>
      </div>
      <button class="MobileMenu-title"><a class="MobileMenu-title" href="/contact">Contact</a></button>
      <div class="icon-container">
      <a href="https://www.facebook.com/davyorsted"><i class="fab fa-facebook-f"></i></a>
      <a href="https://www.instagram.com/davyorsted/?hl=nl"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
    isOpenOverOns: false,
    isOpenBoten: false,
    isOpenJachthaven: false,
    isOpenShop: false,
    }
  }
}
</script>

<style scoped>
*{
  list-style: none;
}
li a:active{
  text-decoration: underline;
}
.fa-facebook-f,
.fa-instagram{
  font-size: 45px;
  color: white;
  margin: 30px;
}
.icon-container{
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-menu{
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
}
.material-icons{
  font-size: 50px;
  color: white;
}

.nav-image{
  width: 90%;
  height: auto;
  display: none;
}
.MobileMenu-title{
  font-size: 28px;
  color: white;
  font-family:  "FuturaStd";
  margin: 15px;
  background: none;
  border: none;
  width: 100%;
}
.MobileMenu-title:active,
.MobileMenu-title:hover{
  color: #A89B8C;
}
.one:after,
.two::after,
.three::after {
  content: '\276F';
  color: white;
  float: right;
  font-size: 15px;
  margin-top: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
}

.MobileMenu-link{
  font-size: 16px;
  color: white;
  font-family: "FuturaStd";
  margin-top: 10px;
  height: 10px;
  text-align: center;
  width: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
}
/* .FooterMenu-box{
  height: 100px;
} */
.footer-menu{
  margin: 0 auto;
}
.footer-menu-container{
  display: none;
}
.footer-menu-container .footer-menu .title {
 height: 40px;
 line-height: 1.52;
 color: white;
 margin-bottom: 10px;
 margin-top: 20px;
 margin-left: 30px;
}
.footer-menu-container .footer-menu .title a{
 color: white;
}
ul li{
   margin-left: 30px;
}
ul li:active,
ul li:focus{
  color: red;
}
.footer-menu-container .footer-menu ul li a{
  font-size: 12px;
  font-weight: 500;
  line-height: 2;
  letter-spacing: 1px;
  color: white;
}

@media (min-width: 768px) {
  li a{
    display: block;
  }
  .footer-menu-container .footer-menu .title {
   margin-top: 0px;
  }
  .footer-menu-container{
    display: block;
  }
  .mobile-container{
    display: none;
  }
  .footer-menu{
   display: grid;
   grid-template-columns: repeat(6, minmax(0, 1fr));
   grid-template-rows: repeat(2, minmax(0, 1fr));
   width: 100%;
   margin-bottom: 20px;
   margin-top: 30px;
  }
  .footer-menu > .col_2{
   grid-column: 1 / span 2;
   grid-row: 1;
  }
  .footer-menu > .col_3{
   grid-column: 3 / span 2;
   grid-row: 1;

  }
  .footer-menu > .col_4{
   grid-column: 5 / span 2;
   grid-row: 1;
  }
  .footer-menu-container{
     padding: 0 20px;
     margin-left: 20px;
  }
  .footer-menu-container .footer-menu ul li a{
    font-size: 15px;
    line-height: 2.4;
  }
  .footer-menu-container .footer-menu ul li a:hover,
  .footer-menu-container .footer-menu .title a:hover
  {
    text-decoration: underline;
  }
  .footer-menu-container a{
    color:#53B2C8;
  }
  .nav-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}

@media (min-width:1200px) {
  li a{
    display: block;
  }
  .footer-menu-container .footer-menu .title {
   margin-top: 0px;
  }
  .nav-image{
    width: 350px;
    height: auto;
    display: block;
  }
  .footer-menu{
   grid-template-rows: repeat(1, minmax(0, 1fr));
   margin-top: 50px;
  }
  .footer-menu > .col_2{
   grid-column: 1 / span 1;
   grid-row: 1;
  }
  .footer-menu > .col_3{
   grid-column: 2 / span 1;
   grid-row: 1;
  }
  .footer-menu > .col_4{
   grid-column: 3 / span 1;
   grid-row: 1;
  }
  .footer-menu > .col_5{
   grid-column: 4 / span 1;
   grid-row: 1;
  }
  .footer-menu-container{
     padding: 0 30px;
     margin-left: 120px;
  }
  ul{
    width: 200px;
  }
}
@media (min-width: 1800px) {
  .nav-image{
    width: 500px;
  }
}
</style>
