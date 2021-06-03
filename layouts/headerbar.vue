<template lang="html">
  <div class="">
    <div class="navbar-fixed">
      <div class="mobile-menu">
    <TheHeader />
    <TheSideNav />
      </div>
    <header class="header">
      <a href="/" class="test">
      <img src="@/assets/img/logo-1.png"
      alt="Davy&Ørsted logo"
      class="header-logo">
      </a>
    </header>
    <div class="blok-one">
      <div class="container-top-border">
      <nav>
      <ul>
          <li><a href="/overons">Over ons</a>
            <ul>
                <li><a href="/handmade">Hand made</a></li>
            </ul>
          </li>

          <li><a href="/boten">Boten</a>
          <!-- First Tier Drop Down -->
          <ul>
              <li><a href="/boten/raptor">D&Ø Raptor</a></li>
              <li><a href="/boten/crafter">D&Ø Crafter</a></li>
              <li><a href="/boten/moonraker">Moonraker</a></li>
              <li><a href="/boten/marshall">Marshall</a></li>
          </ul>
          </li>
          <li><a href="/jachthaven">De Werf</a>
          <!-- First Tier Drop Down -->
          <ul>
              <li><a href="/jachthaven#Onderhoud">Onderhoud</a></li>
              <li><a href="/jachthaven#Winterstalling">Winterstalling</a></li>
          </ul>
          </li>
          <li><a href="/nieuws">D&Ø Magazine</a></li>
          <li><a >Shop</a>
          <!-- First Tier Drop Down -->
          <ul>
              <li><a href="/occasions">Occasions</a></li>
              <li><a href="/onderdelen">Onderdelen</a></li>
          </ul>
          </li>

          <li><a href="/contact">Contact</a></li>
      </ul>
  </nav>
    </div>
    </div>
      </div>
    <main>
      <Nuxt />
    </main>
    <FooterMenu />
    <Footer />
  </div>
</template>

<script>
import TheHeader from '@/components/Menu/TheHeader'
import TheSideNav from '@/components/Menu/TheSideNav'
import FooterMenu from '@/components/Footer/FooterMenu'
import Footer from '@/components/Footer/Footer'
export default {
  components: {
    TheHeader,
    TheSideNav,
    FooterMenu,
    Footer
  }
}
</script>

<style lang="css" scoped>
nav{
  display: none;
}
.container-top-border{
  width: 100vw;
  height: 35px;
  background-color: #3E4B51;
}
.test{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
  .header{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .test{
    text-align: center;
  }
  .header-logo{
    width: 50%;
  }


/*MEDIA QUERIES*/
/*-------------------*/
@media (min-width: 500px) {
  .header{
    height: 60px;
  }
  .header-logo{
    width: 35%;
  }
}
@media (min-width: 768px) {
  .header{
    height: 60px;
  }
  .header-logo{
    width: 25%;
  }
}

@media (min-width: 1390px) {
  .header{
    height: 80px;
  }
  .header-logo{
    width: 20%;
  }
  .container-top-border{
    height: 60px;
  }
  .mobile-menu{
    display: none;
  }
  nav {
  	background-color: #3E4B51;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  nav ul {
  	padding: 0;
    margin: 0;
  	list-style: none;
  	position: relative;
    z-index: 100;
  	}

  nav ul li {
  	display:inline-block;
  	background-color: #3E4B51;
  	}

  nav li,
  nav a {
  	display:block;
  	padding:0 10px;
  	color:#FFF;
  	font-size:20px;
  	line-height: 60px;
  	text-decoration:none;
  }

  nav li:hover {
  	background-color: #000000;
  }

  /* Hide Dropdowns by Default */
  nav ul ul {
  	display: none;
  	position: absolute;
  	top: 60px; /* the height of the main nav */
  }

  /* Display Dropdowns on Hover */
  nav ul li:hover > ul {
  	display:inherit;
  }

  /* Fisrt Tier Dropdown */
  nav ul ul li {
  	width:170px;
  	float:none;
  	display:list-item;
  	position: relative;
  }
}

@media (min-width: 1800px) {
  .header{
    height: 107px;
  }
  .header-logo{
    height: 33px;
    width: 300px;
  }
  .container-top-border{
    height: 65px;
  }
}

</style>
