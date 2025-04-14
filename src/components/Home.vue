<template>
<div class="main-page">
 <h1><img src="../img/CREATE.png" alt="create"></h1>
 <p>{{ $t('forms.home.txt_main_txt') }}</p>
 <img class="round-animation" src="../img/round-animation.png">
</div>
<section class="animation-first-linear"><div class="animation-css">
<h2>{{ $t('forms.home.txt_markue_first' )}}</h2>
<p>{{ $t('forms.home.txt_markue_second' )}}</p>
</div>
</section>
<section class="services">
    <h1>{{ $t('forms.home.txt_services_h1') }}</h1>
    <a href="/sites"><div style="display: flex; flex-direction: column;">
        <div class="block-services">
            <div style="text-align: start;">
            <div>
                <h2>{{ $t('forms.home.txt_block-Services-h2') }}</h2>
            <p>{{ $t('forms.home.txt_block-Services-li1') }}</p>
            <p>{{ $t('forms.home.txt_block-Services-li2') }}</p>
            <p>{{ $t('forms.home.txt_block-Services-li3') }}</p>
            <p>{{ $t('forms.home.txt_block-Services-li4') }}</p>
            </div>
    </div>
    <div class="srv-img"></div>
 </div>
</div>
</a>
    <a href="/design"><div style="display: flex; flex-direction: column;">
        <div class="block-services2">
            <div class="srv-img2"></div>
            <div style="text-align: start;">
            <div>
                <h2>{{ $t('forms.home.txt_services_design_h2') }}</h2>
            <p>{{ $t('forms.home.txt_services_design_li1') }}</p>
            <p>{{ $t('forms.home.txt_services_design_li2') }}</p>
            <p>{{ $t('forms.home.txt_services_design_li3') }}</p>
            <p>{{ $t('forms.home.txt_services_design_li4') }}</p>
            </div>
    </div>
 </div>
</div>
</a>
    <a href="/seo"><div style="display: flex; flex-direction: column;">
        <div class="block-services">
            <div style="text-align: start;">
            <div>
                <h2>{{ $t('forms.home.txt_services_seo_h2') }}</h2>
            <p>{{ $t('forms.home.txt_services_seo_li1') }}</p>
            <p>{{ $t('forms.home.txt_services_seo_li2') }}</p>
            <p>{{ $t('forms.home.txt_services_seo_li3') }}</p>
            <p>{{ $t('forms.home.txt_services_seo_li4') }}</p>
            </div>
    </div>
    <div class="srv-img3"></div>
 </div>
</div>
</a> 
    <a href="/smm"><div style="display: flex; flex-direction: column;">
        <div class="block-services2">
            <div class="srv-img4"></div>
            <div style="text-align: start;">
            <div>
                <h2>{{ $t('forms.home.txt_services_smm_h2') }}</h2>
            <p>{{ $t('forms.home.txt_services_smm_li1') }}</p>
            <p>{{ $t('forms.home.txt_services_smm_li2') }}</p>
            <p>{{ $t('forms.home.txt_services_smm_li3') }}</p>
            <p>{{ $t('forms.home.txt_services_smm_li4') }}</p>
            </div>
    </div>
 </div>
</div>
</a> 
</section>
<div class="consultation">
<button type="button" data-bs-toggle="modal" data-bs-target="#formCall">{{ $t('forms.home.txt_make_work_together_btn') }}</button>
<div class="modal fade" id="formCall" tabindex="-1" aria-labelledby="formCallLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <form action="#">
          <div class="modal-header">
            <div class="logo"><a href="/"><img src="../img/LOGO.png" alt="" style="width: 160px;"></a></div>
            <button type="button" class="btn-x" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <div class="modal-body">
            <h1 id="formCallLabel">{{ $t('forms.home.txt_consultation_h4')}}</h1>
            <form @submit.prevent="handleSubmit">
           <input type="text" v-model="form.name" :placeholder="$t('forms.home.txt_input_name')" required />
           <input type="tel" v-model="form.phone" :placeholder="$t('forms.home.txt_input_phone')" required/><br>
           </form>
          </div>
          <div class="modal-footer">
            <button type="submit" >{{ $t('forms.home.txt_btn_consultation') }}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
<section class="block-why-we">
    <h2>{{ $t('forms.home.txt_why_us') }}</h2>
    <div class="all-why-we">
    <div class="why_we">
        <img src="../img/icon.png" alt="">
        <p>{{ $t('forms.home.txt_why_us1') }}</p>
    </div>
    <div class="why_we">
        <img src="../img/icon.png" alt="">
        <p>{{ $t('forms.home.txt_why_us2') }}</p>
    </div>
    <div class="why_we">
        <img src="../img/icon.png" alt="">
        <p>{{ $t('forms.home.txt_why_us3') }}</p>
    </div>
    </div>
</section>
<section class="create-logo-img section" v-for="(section, index) in sections" 
  :key="index"
  :ref="el => (sectionRefs[index] = el)">
    <div class="content"
    :class="{ 'visible' : isVisible[index] }"
    >
        {{ section }}
        <img :src="logo" alt="logo">
    </div>
</section>
<div class="examples-logos">
    <div><span><img src="../img/logos/Logo.png" alt=""></span>
         <span><img src="../img/logos/LogoEnergy.png" alt=""></span>
         <span><img src="../img/logos/LogoMebelnik.png" alt=""></span>
         <span><img src="../img/logos/LogoTB.png" alt=""></span>
         <span><img src="../img/logos/LogoMariaRozhko.png" alt=""></span>
         <span><img src="../img/logos/LogoVR.png" alt=""></span>
         <span><img src="../img/logos/Vector.png" alt=""></span>
         <span><img src="../img/logos/LogoVK.png" alt=""></span>
         <span><img src="../img/logos/LogoBaker.png" alt=""></span>
    </div>
    

</div>



<section>
    <div class="bill-gates">
        <div>
            <h1>{{ $t('forms.home.txt_block-bill-gates') }}</h1>
             <p>{{ $t('forms.home.txt_block-bill-gates-p') }}</p>
        </div>
    </div>
</section>
<div class="animation-css2">
<h2>{{ $t('forms.home.txt_animation1' )}}</h2><h2>{{ $t('forms.home.txt_animation2' )}}</h2><h2>{{ $t('forms.home.txt_animation3' )}}</h2>
</div>
<section class="advanteges">
    <h1>{{ $t('forms.home.txt_block_advanteges_h1') }}</h1>
    <div class="block-advanteges">
        <div><img src="../img/PersonCheckFill.png" alt="" style="width: 60px;"><p>{{ $t('forms.home.txt_block_advanteges1') }}</p></div>
        <div><img src="../img/basket.png" alt="" style="width: 60px;"><p>{{ $t('forms.home.txt_block_advanteges4') }}</p></div>
        <div><img src="../img/marketing.png" alt="" style="width: 60px;"><p>{{ $t('forms.home.txt_block_advanteges5') }}</p></div>
        <div><img src="../img/ShieldFillCheck.png" alt="" style="width: 60px;"><p>{{ $t('forms.home.txt_block_advanteges2') }}</p></div>
        <div><img src="../img/PersonWorkspace.png" alt="" style="width: 60px;"><p>{{ $t('forms.home.txt_block_advanteges3') }}</p></div>
    </div>
</section>
<section class="make-work-together">
    <h1><img src="../img/txt-home.png" alt=""></h1>
    <button type="button" data-bs-toggle="modal" data-bs-target="#formCall" >{{ $t('forms.home.txt_make_work_together_btn') }}</button>
    <div class="modal fade" id="formCall" tabindex="-1" aria-labelledby="formCallLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <form action="#">
          <div class="modal-header">
            <button type="button" class="btn-x" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="handleSubmit">
           <input type="text" v-model="form.name" :placeholder="$t('forms.home.txt_input_name')" required />
           <input type="tel" v-model="form.phone" :placeholder="$t('forms.home.txt_input_phone')" required/><br>
           </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn-modal-primary">{{ $t('forms.home.txt_make_work_together_btn') }}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
<section class="text-price">
    <div><h4>{{ $t('forms.home.txt_text_price') }}</h4></div><br>
    <a href="/price"><button>{{ $t ('forms.home.txt_text_price_btn') }} <i class="fa-solid fa-arrow-right"></i></button></a>
</section>


<!-- <div class="modal fade" id="formCall" tabindex="-1" aria-labelledby="formCallLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <form action="#">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="formCallLabel">Modal form</h1>
            <button type="button" class="btn-x" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <div class="modal-body">
           <div></div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn-modal-primary" @click="allert()">save</button>
            <button type="button" class="btn-modal-secondary" data-bs-dismiss="modal">close</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#formCall"
          >Show modal window</button> -->

</template>
<script>
import { reactive, onMounted, ref } from 'vue';
import axios from 'axios';
import logo from '../assets/create-logo.png'
export default {
    name: "HomePage",
    data() {
        return {
        form: {
        name: '',
        phone:''
      }}
      
    },
     setup() {
        const sections = [''];
        const isVisible = reactive([]);
        const sectionRefs = ref([]);

        onMounted(() => {
          sections.forEach(() => isVisible.push(false));

            const options = {
                root: null,
                threshold: 0.1,
            };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = sectionRefs.value.indexOf(entry.target);
                    if (index !== -1 ) {
                        isVisible[index] = true;
                    }
                }
            });
        }, options);
        sectionRefs.value.forEach((section) => { 
            if(section) observer.observe(section)});
    });
        return {
            sections,
            isVisible,
            sectionRefs,
            logo
        };
    },
    methods: {
    async allert(){
        alert("Data save")
    },
    async handleSubmit() {
      // Формуємо текст повідомлення
      const text = `Нове повідомлення від ${this.form.name} (телефон - ${this.form.phone})`;

      try {
        // Викликаємо API Telegram
        const response = await axios.post(`https://api.telegram.org/bot7741339810:AAGDvpKD_ZuQmFH2KWb6fMSbNl5MPeBM9h0/sendMessage`, {
          chat_id: '@create_digital_studio',  // або ваш chat_id
          text: text,
          phone: Number
        });

        // Якщо все вдалося
        if (response.data.ok) {
          alert('Повідомлення відправлено!');
        } else {
          alert('Щось пішло не так.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Сталася помилка при відправці повідомлення.');
      }
    }
  }
}
</script>
<style scoped>
.main-page {
    background-image: url('../img/1.png');
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-blend-mode: multiply;
    background-color: #2d2d2daa;
    text-align: center;
    height: 800px;
    @media(max-width: 900px) {
        height: 290px;
        background-position: start;
        background-size: 40%;
    }
}
/* .main-page::after {
    width: 100%;
    height: 150px;
    background-color: #FDFCF8;
    border-radius: 20%;
    bottom: -50px;
    z-index: 1;
} */
.round-animation {
    display: none;
    @media(max-width: 900px) {
        display: block;
        width: 30%;
        position: relative;
        left: 30px;
        top: 26px;
        animation: rotate 20s linear infinite;
    }
}
@keyframes rotate {
      0% {
        transform: rotate(0deg); /* Початкове положення: за межами зліва */
      }
      25% {
        transform: rotate(90deg); /* Початкове положення: за межами зліва */
      }
      50% {
        transform: rotate(180deg); /* Початкове положення: за межами зліва */
      }
      100% {
        transform: translateX(360deg); /* Кінцеве положення: за межами справа */
      }
    }
.main-page h1 {
    padding-top: 300px;
    cursor: pointer;
    transition: all .6s ease;
    @media(max-width: 900px) {
        padding-top: 120px;
    }
}
.main-page h1:hover {
    transform: scaleX(1.05);
    opacity: 0.8;
}
.main-page h1 img{
    @media (max-width: 1200px) {
        display: none;
}}

.main-page p {
    font-family: "Raleway", sans-serif;
    color: white;
    font-size: 24px;
    padding-left: 300px;
    margin-top: 30px;
    font-weight: 400;
    @media (max-width: 1200px) {
        font-size: 28px; 
        font-weight: 600;
        color: #EE6300;
        padding: 0px 10% 0px 10%;
    }
}
.animation-first-linear {
    margin: -100px -40px 40px -20px;
    width: 150%;
    background: #f4c9abe5;
    transform: rotate(-5deg);
}
.animation-first-linear .animation-css {
    width: 100%;
    margin: 40px auto;
    height: 140px;
    font-family: "Raleway", sans-serif;
    animation: moveText 30s linear infinite;
    z-index: 0;
    @media(max-width: 900px) {
        display: none;
    }
}
@keyframes moveText {
      0% {
        transform: translateX(100%); /* Початкове положення: за межами зліва */
      }
      100% {
        transform: translateX(-100%); /* Кінцеве положення: за межами справа */
      }
    }
@keyframes moveText2 {
      0% {
        transform: translateX(-100%); /* Початкове положення: за межами зліва */
      }
      100% {
        transform: translateX(100%); /* Кінцеве положення: за межами справа */
      }
    }
    .animation-css h2 {
        text-align: center;
        font-size: 90px;
        color: #EE6300;
        /* opacity: 0.2; */
        font-weight: 600;
    }


    .animation-css p {
     color: #333333;
     margin-top: -50px;
     /* margin-left: 140px; */
     font-size: 24px;
     font-weight: 700;
     text-align: center;
    }
    .animation-css2 {
    width: 120%;
    margin: 40px auto;
    font-family: "Raleway", sans-serif;
    animation: moveText 30s linear infinite;
    z-index: 0;
    font-size: 40px;
    display: flex;
    gap: 80PX;
    color: #e49258;
    opacity: 0.2;
    text-align: start;
    @media(max-width: 900px) {
     display: none;
    }

    }
    

    .block-why-we {
        height: 600px;
        background-image: url('../img/3.png');
        background-size: cover;
        background-attachment: fixed;
        background-blend-mode: multiply;
        background-color: #2d2d2d5c;
        text-align: center;
        color: antiquewhite;
        padding: 30px;
        @media(max-width: 1200px) {
        padding: 30px 20px;
        background-position: center;
        height: fit-content;
    }
    }

    .block-why-we h2{
        font-size: 60px;
        font-family: "Raleway", sans-serif;
        font-weight: 400;
        padding-bottom: 30px;
        transition: all .6s ease;
        color: #fab17e;
        @media(max-width: 1200px) {
        font-size: 26px;
    }
    }
    .block-why-we h2:hover {
        cursor: pointer;
        transform: scale(1.1);
        color: #EE6300;
        
    }
    .block-why-we .all-why-we {
        display: flex;
        justify-content: center;
        gap: 30px;
        @media(max-width: 900px) {
        gap: 10px;
        flex-wrap: wrap;
        justify-content: start;
    }
    }
    .block-why-we .why_we {
        font-family: "Raleway", sans-serif;
        width: 420px;
        padding: 20px;
        font-size: 22px;
        line-height: 140%;
        display: block;
        @media(max-width: 900px) {
       display: flex;
       width: 100%;
       padding: 10px 2%;
       font-size: 14px;
       align-items: self-start;
       text-align: start;

    }
    }
    .block-why-we .why_we  img {
        width: 120px;
        /* height: 120px; */
        padding-bottom: 40px;
        margin-bottom: 20px;
        cursor: pointer;
        transition:  all .6s ease;
        animation: rotate 20s linear infinite;
        @media(max-width: 900px) {
        width: 50px;
        /* height: 50px; */
        margin-right: 30px;
        animation: none;


    }
    }
    /* .block-why-we .why_we  img:hover {
        transform: rotate(15deg) scale(1.04);
        
    } */
    .create-logo-img {
        margin: 40px 20%;
        @media(max-width: 900px) {
            margin: 20px 10%;
        }
    }
     .create-logo-img img {
       width: 80%;
       transition: all .6s ease;
     }
     .create-logo-img img:hover {
        transform: scale(1.05);
        opacity: 0.9;
     }
     .section {
        
        display: flex;
        justify-content: center;
        align-items: center;
    
     }
     .content {
        text-align: center;
        justify-content: center;
        align-items: center;
        width: 100%;
        opacity: 0;
        transform: translateY(50px);
        transition: all 2s ease;
     }
     .content.visible {
       
        opacity: 1;
        transform: translateY(0);
     }
     .examples-logos {
        width: 140%;
        background-color: #fab17e;
        padding: 30px;
        text-align: start;
        @media(max-width: 1200px) {
        padding: 10px;
    }
     }
     .examples-logos div {
        display: flex;
        gap: 30px;
        align-items: center;
        justify-content: start;
        animation: moveText 30s linear infinite;
        @media(max-width: 1200px) {
        animation: moveText 60s linear infinite;
    }
     }
     .examples-logos div img {
        width: 30%;
        cursor: pointer;
        margin: 0px;
        transition: all .6s ease;
        @media(max-width: 1200px) {
        width: 40%;
        margin: 0px;
    }
     }
     .examples-logos div img:hover {
        transform: scale(1.7);
     }
    .services {
        text-align: center;
        font-family: "Raleway", sans-serif;
        padding: 40px;
        @media(max-width: 1200px) {
        padding: 10px;
        padding-top: 120px;
    }
    }
    .services a {
        text-decoration: none;
        padding-left: 0px;
        margin-left: 0px;
    }

    .services h1 {
        font-family: "Raleway", sans-serif;
        font-weight: 400;
        color: #EE6300;
        font-size: 40px;
        padding-bottom: 30px;
        @media(max-width: 1200px) {
        font-size: 20px;
        font-weight: 600;
        padding-bottom: 10px;


    }
    }
 

    .block-services {
       padding: 20px;
       display: flex;
       margin: 20px 5%;
       align-items: center;
       border: 1px solid #fab27e00;
       transition: all .6s ease;
       cursor: pointer;
       @media(max-width: 900px) {
       padding: 10px;
       margin: 10px 5%;
       flex-direction: column-reverse;
    }
    }
    .block-services:hover {
        background-color: rgba(246, 239, 229, 0.163);
        border-radius: 3px;
        border: 1px solid #fab27e1f;
        transform: scale(1.02);

    }
    .block-services div {
        margin-right: 20px;
        align-items: center;
        width: 50%;
        height: 320px;
        align-content: center;
        @media(max-width: 900px) {
        height: 230px;
        margin-right: 0px;
        width: 100%;
    }
    }
    .block-services2 {
       text-decoration: none;
       padding: 20px;
       display: flex;
       margin: 20px 5%;
       align-items: center;
       border: 1px solid #fab27e00;
       transition: all .6s ease;
       cursor: pointer;
       @media(max-width: 900px) {
       padding: 10px;
       flex-direction: column;
    }
    }
    .block-services2:hover {
        background-color: rgba(246, 239, 229, 0.163);
        border-radius: 3px;
        border: 1px solid #fab27e1f;
        transform: scale(1.02);

    }
    .block-services2 div {
        margin-right: 20px;
        align-items: center;
        width: 50%;
        height: 320px;
        align-content: center;
        @media(max-width: 900px) {
        height: 220px;
        margin-right: 10px;
        width: 100%;
    }
    }
    .srv-img {
    background-image: url('../img/services1.png');
    background-size: cover;
    background-position: center;
    margin-right: 20px;
    @media(max-width: 900px) {
       margin-right: 0px;
       margin-bottom: 20px;

    }
    }
    .srv-img2 {
    background-image: url('../img/services2.png');
    background-size: cover;
    background-position: center;
    margin-right: 20px;
    @media(max-width: 900px) {
       margin-right: 10px;
       margin-bottom: 20px;
    }
    }
    .srv-img3 {
    background-image: url('../img/services3.png');
    background-size: cover;
    background-position: center;
    margin-right: 20px;
    @media(max-width: 900px) {
       margin-right: 0px;
       margin-bottom: 20px;
    }
    }
    .srv-img4 {
    background-image: url('../img/services4.png');
    background-size: cover;
    background-position: center;
    margin-right: 20px;
    @media(max-width: 900px) {
       margin-right: 10px;
       margin-bottom: 20px;
    }
    }
    .block-services h2 {
        font-size: 28px;
        font-weight: 400;
        padding-bottom: 10px;
        color: #e49258;
        transition: all .6s ease;
        cursor: pointer;
        @media(max-width: 900px) {
        font-size: 22px;
        padding-bottom: 10px;
        font-weight: 500;
    }
    }
    .block-services h2:hover {
        color: #EE6300;
        transform: scaleY(1.02);
    }
    .block-services p {
        padding-bottom: 0px;
        color: #333333;
        font-size: 20px;
        @media(max-width: 900px) {
        font-size: 16px;
        padding-bottom: 0px;
        
    }
    }
    .block-services2 h2 {
        font-size: 28px;
        font-weight: 400;
        padding-bottom: 10px;
        color: #e49258;
        transition: all .6s ease;
        cursor: pointer;
        @media(max-width: 900px) {
        padding-bottom: 10px;
        font-size: 22px;
        font-weight: 500;
    }
    }
    .block-services2 h2:hover {
        color: #EE6300;
        transform: scaleY(1.02);
    }
    .block-services2 p {
        padding-bottom: 0px;
        color: #333333;
        font-size: 20px;
        @media(max-width: 900px) {
        font-size: 16px;
        padding-bottom: 0px;
    }
    }
    .bill-gates {
        width: 100%;
        background-image: url('../img/5.png');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        background-blend-mode: multiply;
        background-color: #2d2d2da7;
        height: 600px;
        color: antiquewhite;
        font-family: "Raleway", sans-serif;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: auto 20%;
        @media(max-width: 900px) {
           height: 400px;
           text-align: start;
           padding: auto 20%;
         }
    }
    .bill-gates div {
        width: 70%;
        @media(max-width: 900px) {
           width: 90%;
         }
    }
    .bill-gates h1 {
        color: #fab17e;
        font-size: 50px;
        font-weight: 400;
        margin-bottom: 30px;
        cursor: pointer;
        transition: all .6s ease;
        @media(max-width: 900px) {
           font-size: 24px;
           font-weight: 600;
           margin-bottom: 10px;
         }
    }
    .bill-gates h1:hover{
        color: #EE6300;
        transform: scale(1.04);
    }
    .bill-gates p {
        font-size: 20px;
        line-height: 140%;
        @media(max-width: 900px) {
           font-size: 16px;
           padding-top: 10px;
         }
    }
    .advanteges {
        display: block;
        text-align: center;
        margin-top: 70px;
        @media(max-width: 900px) {
            margin-top: 30px;
         }
    }
    .advanteges h1 {
        display: block;
        font-size: 40px;
        font-weight: 400;
        font-family: "Raleway", sans-serif;
        color: #EE6300;
        padding: 30px auto;
        cursor: pointer;
        transition: all .6s ease;
        @media(max-width: 900px) {
           font-size: 20px;
           margin: 10px 10%;
           font-weight: 600;
           padding-top: 10px;
         }
    }
    .advanteges h1:hover {
        transform: scale(1.05);
        color: #e49258;
    }
    .block-advanteges {
        margin: 40px 10%;
        display: flex;
        justify-content: space-around;
        @media(max-width: 900px) {
        flex-direction: column;
        margin: 10px 10%;
         }
    }
    .block-advanteges div {
        margin: 30px auto;
        font-size: 20px;
        font-weight: 400;
        width: 250px;
        font-family: "Raleway", sans-serif;
        transition: all .6s ease;
        @media(max-width: 900px) {
          font-size: 18px;
    
         }

    }
    .block-advanteges div:hover {
        transform: scaleX(1.02);
        opacity: 0.9;
    }
    .block-advanteges div img {
        margin-bottom: 20px;
    }

    .make-work-together {
        height: 600px;
        padding-top: 200px;
        font-family: "Raleway", sans-serif;
        text-align: center;
        background-image: url('../img/make-work-together.png');
        background-attachment: fixed;
        background-size: cover;
         background-position: end;
         background-blend-mode: multiply;
         background-color: #3333338f;
         color: antiquewhite;
         @media(max-width: 900px) {
            background-size: unset;
            background-position: start;
            height: fit-content;
            padding: 30px 10px;
            background-image: url('../img/make-work-together.png');
         }
    }
    .make-work-together h1 {
        padding: 30px;
        font-size: 50px;
        font-weight: 400;
        transition: all .6s ease;
        cursor: pointer;
        @media(max-width: 900px) {
           padding: 10px;
         }
    }
    .make-work-together h1 img {
        width: 80%;
        @media(max-width: 1200px) {
       width: 90%;
    }
    }
    .make-work-together h1:hover {
        color: #EE6300;
        transform: scale(1.06);
        @media(max-width: 1200px) {
            color: #333333;
     }
    }
    .make-work-together button {
        padding: 10px 20px;
        background-color: #EE6300;
        border: none;
        border-radius: 6px;
        margin: 10px;
        color: antiquewhite;
        font-size: 20px;
        transition: all .6s ease;
        @media(max-width: 1200px) {
        font-size: 16px;
        padding: 6px 20px;
    }
    }
    .make-work-together button:hover {
        background: #f89045; 
        cursor: pointer;
        transform: scale(1.05);
    }
    .text-price {
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 200px 20%;
        @media(max-width: 900px) {
           padding: 40px 10%;
           text-align: start;
         }
    }
    .text-price h4 {
        font-size: 28px;
        color: #333333;
        font-weight: 400;
        font-family: "Raleway", sans-serif;
        text-align: center;
        transition: all .6s ease;
        @media(max-width: 900px) {
           font-size: 18px;
           text-align: start;
         }
    }
    .text-price h4:hover {
        color: #EE6300;
        transform: scale(1.05);
    }
    .text-price button {
        color: #EE6300;
        cursor: pointer;
        outline: none;
        background: none;
        border: none;
        font-size: 20px;
        font-weight: 500;
        font-family: "Raleway", sans-serif;
        border-bottom: 2px solid #ee630000;
        transition: all .6s ease;
    }
    .text-price button i {
        margin-left: 20px;
        font-size: 20px;
        font-weight: 300;
    }
    .text-price button:hover {
      color: #f89045;
      border-bottom: 2px solid #f89045;
      transform: scaleX(1.1);
    }
    .consultation {
        text-align: center;
        font-family: "Raleway", sans-serif;
        padding: 50px;
        @media(max-width: 900px) {
        margin: 10px 10%;
        padding: 20px 0px;

    }
        
    }
    .modal-content .modal-header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        @media(max-width: 900px) {
            padding: 10px 10%;
        }
    }
    
    .modal-content .btn-x {
        background: none;
        border: none;
        color: #EE6300;
        @media(max-width: 900px) {
          position: relative;
          right: -70px;
        }

    }
    .modal-content .btn-x i {
        font-size: 24px;
        font-weight: 600;
    }
    .modal-content .btn-x:hover {
        background: none;
        border: none;
        color: #fab17e;
        transform: scale(1.1);
    }
    .modal-content h1 {
        font-size: 32px;
        font-weight: 400;
        color:#484646;
        @media(max-width: 900px) {
       font-size: 24px;

    }
    }
    .modal-content .modal-footer {
        display: flex;
        /* justify-content: center; */
        align-items: center;
    }
    .modal-content button {
        @media(max-width: 900px) {
       font-size: 16px;

    }
    }

    .consultation button {
        padding: 10px 20px;
        background-color: #EE6300;
        border: none;
        border-radius: 6px;
        margin-top: 10px;
        color: antiquewhite;
        font-size: 20px;
        transition: all .6s ease;
        @media(max-width: 900px) {
        padding: 10px 20px;
        margin: 10px 5%;
        border-radius: 2px;
        width: 100%;
        font-size: 16px;
    }
    }
    .consultation button:hover {
        background: #f89045; 
        cursor: pointer;
        transform: scale(1.05);
    }
    .consultation input {
        background: none;
        cursor: pointer;
        font-size: 16px;
        font-family: "Raleway", sans-serif;
        outline: none;
        border: none;
        width: 90%;
        border-bottom: 1px solid #e4925890;
        margin: 20px;
        padding: 4px;
        @media(max-width: 900px) {
        margin: 10px 0px;
        width: 90%;
        padding: 10px;
        border: 1px solid #e4925890;
        border-radius: 2px;;
    }

    }
   
</style>





