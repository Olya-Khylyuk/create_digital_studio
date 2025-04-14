<template>
    <header>
      <div class="logo"><a href="/"><img src="./img/LOGO.png" alt="" style="width: 160px; @media(max-width: 900px) {
        width: 80px;
    }"></a></div>
      <div class="menu" ref="menu">
      <button class="btn-menu" @click="showMenu = !showMenu"><i class="fa-solid fa-bars"></i></button>
      <div id="hidden-menu" :class="{ show: showMenu }">
    <div class="">
      <button class="btn-x" @click="showMenu = false"> <i class="fa-solid fa-xmark"></i></button>
    </div>
     <div>
      <ul><li><router-link to="/" @click="showMenu = false">{{ $t('forms.nav.txt_main_page') }}</router-link></li>
        <li> <router-link to="/services" @click="showMenu = false">{{ $t('forms.nav.txt_services') }}</router-link></li>
        <li> <router-link to="/price" @click="showMenu = false">{{ $t('forms.nav.txt_price') }}</router-link></li>
        <li> <router-link to="/seo" @click="showMenu = false">{{ $t('forms.nav.txt_seo') }}</router-link></li>
        <li> <router-link to="/disign" @click="showMenu = false">{{ $t('forms.nav.txt_disign') }}</router-link></li>
        <li> <router-link to="/sites" @click="showMenu = false">{{ $t('forms.nav.txt_sites') }}</router-link></li>
        <li> <router-link to="/smm" @click="showMenu = false">{{ $t('forms.nav.txt_smm') }}</router-link></li>
    
    </ul></div>
    <div class="lng">
     <button @click="changeLanguage('en'); showMenu = false" class="lng-btn-en" :class="['lng-btn', { 'active': currentLanguage === 'en' }]">ENG </button>
     <button @click="changeLanguage('ua'); showMenu = false" class="lng-btn-ua" :class="['lng-btn', { 'active': currentLanguage === 'ua' }]">UA </button>
     <button @click="changeLanguage('pl'); showMenu = false" class="lng-btn-pl" :class="['lng-btn', { 'active': currentLanguage === 'pl' }]">PL</button>
    </div>
  </div>
  </div>
  </header>
  <div class="route"><router-view/></div>
  <div class="btn-telegram"><button><img src="./img/Telegram.png" alt=""></button></div>
  <footer>
     <div class="footer">
      <div class="link">
        <a href="/aboutus"><p>{{ $t('forms.footer.txt_about_us') }}</p></a>
        <a href="/cooperation"><p>{{ $t('forms.footer.txt_terms_cooperation') }}</p></a>
      </div>
      <div class="social">
        <a href="" target="_blank" alt=""><img src="./img/linkedin_icon.png"></a>
        <a href="https://www.instagram.com/create_digital_studio/" target="_blank"><img src="./img/instagram_icon.png" alt=""></a>
        <a href="https://www.behance.net/olyako1" target="_blank" alt=""><img src="./img/behance_icon.png" alt=""></a>
      </div>
    </div>
    <p>All rights reserved &copy;</p>
  </footer>
</template>

<script>
export default {
  components: {
    // Modal,
  },
  name: 'App', 
  data(){
    return {
      currentLanguage: this.$i18n.locale,
      showMenu: false
    }
  },
    methods: {
    changeLanguage(lang) {
    this.currentLanguage = lang;  // Оновлюємо локаль і зберігаємо її
    this.$i18n.locale = lang;     // Змінюємо локаль для i18n
    localStorage.setItem('lang', lang);  // Зберігаємо мову в localStorage
    window.loa
  },
   // Функція для перемикання видимості меню
   toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    // Функція для обробки кліків поза меню
    closeMenuIfClickedOutside(event) {
      const menuElement = this.$refs.menu;
      if (menuElement && !menuElement.contains(event.target)) {
        this.showMenu = false;
      }
    },
    methods: {
    
  },
  },
  mounted() {
    // Додаємо слухач події для кліків на весь документ, коли компонент змонтовано
    document.addEventListener('click', this.closeMenuIfClickedOutside);


  },
  beforeUnmount(){
    // Видаляємо слухач події перед знищенням компонента
    document.removeEventListener('click', this.closeMenuIfClickedOutside);
  }
  }
 
</script>

<style>
template {
  background-color: antiquewhite;
}
.route {
  background-color: #FDFCF8;
}

header {
  width: 100%;
  margin: 0px;
  display: flex;
  background-color: #fdfcf8e7;
  padding: 4px 5%;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  position: fixed;
}
ul {
  list-style: none;
}
.logo {
  margin-left: 80px;
  transition: all .6s ease;
  cursor: pointer;
  @media(max-width: 900px) {
        margin-left: 10px;
      }
}
.logo:hover {
  transform: scaleX(1.06);
}
.lng {
  position: absolute;
  bottom: 20px;
  text-align: center;
  display: flex;
  text-align: center;
  justify-content: center;
}
.lng button {
  background: none;
  border: none;
  outline: none;
  font-size: 20px;
  color: #EE6300;
  margin-right: 12px;
  cursor: pointer;
}
.lng button.active {
  border-bottom: 2px solid #EE6300;
}
.btn-menu {
position: absolute;
right: 15%;
top: 14px;
outline: none;
background: none;
border: none;
font-size: 26px;
color: #EE6300;
transition: all .6s ease;
cursor: pointer;
}
.menu button:hover {
  color: #e68743;
  transform: scale(1.03);
}
#hidden-menu div {
   display: flex;
   justify-content: center;
   margin-top: 10px;
   padding-left: 20px;
   padding-top: 10px;
   z-index: 900;
}
#hidden-menu div li {
  margin: 20px;
  font-size: 20px;
  text-align: center;
}
#hidden-menu {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: -400px;
  width: 400px;
  height: 100%;
  background-color: #FDFCF8;
  color: white;
  transition: right 0.5s ease-in-out;
  border-left: 1px solid #e3854217;
}
#hidden-menu.show {
  right: 0;
}
.btn-x {
  cursor: pointer;
  position: absolute;
  float: right;
 outline: none;
 background: none;
 border: none;
 font-size: 28px;
 right: 20px;
 color: #EE6300;
 transition: all .6s ease;
 @media(max-width: 900px) {
        top: 0px;
        right: 20px;
      }

}
.btn-x:hover {
  color: #e38542;
  transform: scaleX(1.1);
}
#hidden-menu li a {
  border-bottom: 2px solid rgba(192, 192, 192, 0);
  color: #753100;
  text-decoration: none;
  font-family: "Raleway", sans-serif;
  font-size: 20px;
  font-weight: 400;
  transition: all .6s ease;
}
#hidden-menu li a:hover {
  color: #EE6300;
}
.btn-telegram {
  position: fixed;
  bottom: 40px;
  right: 40px;
  @media (max-width:900px) {
    bottom: 20px;
  }
}
.btn-telegram button {
  background-image: url('./img/Telegram.png');
  background-color: rgba(250, 235, 215, 0.315);
  background-size: cover;
  width: 70px;
  height: 70px;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  @media (max-width:900px) {
    width: 50px;
    height: 50px;
  }
}
.btn-telegram button img {
  width: 70px;
  animation: pulse 1.5s infinite;
  @media (max-width:900px) {
    width: 50px;
  }
  
}
@keyframes pulse {
  0% {
    transform: scale(1, 1);
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}
footer {
  background-image: url('./img/footer.png');
  background-attachment: fixed;
  background-size: cover;
  background-position: end;
  background-blend-mode: multiply;
  background-color: #333333b2;
  text-align: center;
  padding-bottom: 10px;
  color: antiquewhite;
  font-weight: 400;
  font-family: "Raleway", sans-serif;
}
.footer {
  padding: 100px;
  display: flex;
  justify-content: space-around;
  @media (max-width:900px) {
    flex-direction: column;
    gap: 20px;
  }
}
.link {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  font-family: "Raleway", sans-serif;
  text-decoration: none;
  
}
.link a {
  text-decoration: none;
  color: antiquewhite;
  margin-bottom: 0px;
  transition: all .6s ease;
  @media (max-width:900px) {
    margin-bottom: 20px;
  }
}
.link a:hover {
  transform: scaleX(1.05);
  color: #e68743;
}
.social img {
  width: 50px;
  margin-right: 20px;
  margin-bottom: 20px;
  transition: all .6s ease;
  @media (max-width:900px) {
    width: 40px;
  }
}
.social img:hover {
  transform: rotate(5deg) scale(1.1);
}
</style>
