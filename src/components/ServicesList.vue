<template>
<div class="services-block">
    <div class="services-page">
        <h1>{{ $t('forms.home.txt_services_h1') }}</h1>
        <img class="round-animation" src="../img/round-animation.png">

</div>
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

</div>
</template>
<script>
import axios from 'axios';
export default {
    name: "ServicesList",
    data() {
        return {
        form: {
        name: '',
        phone:''
      }}
    },
    methods: {
    async handleSubmit() {
      // Формуємо текст повідомлення
      const text = `Нове повідомлення від ${this.form.name} (телефон - ${this.form.phone})`;

      try {
        // Викликаємо API Telegram
        const response = await axios.post(`https://api.telegram.org/bot7741339810:AAGDvpKD_ZuQmFH2KWb6fMSbNl5MPeBM9h0/sendMessage`, {
          chat_id: '@create_digital_studio',  // або ваш chat_id
          text: text
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
<style>
.services-page {
    background-image: url('../img/1.png');
    background-size: cover;
    background-attachment: fixed;
    background-blend-mode: multiply;
    background-color: #2d2d2daa;
    background-position: center;
    text-align: center;
    height: 500px;
    @media (max-width: 1200px) {
        height: 280px;
}
}
.services-page h1 {
    color: antiquewhite;
    padding-top: 250px;
    cursor: pointer;
    transition: all .6s ease;
    font-family: "Raleway", sans-serif;
    font-size: 60px;
    font-weight: 400;
    @media (max-width: 1200px) {
    font-size: 26px;
    font-weight: 500;
    padding: 140px 10% 0px;
    }
}
.services-page  h1:hover {
    color: #EE6300;;
    transform: scale(1.05)
}
.services-page p {
    color: antiquewhite;
    padding-top: 30px;
}
</style>