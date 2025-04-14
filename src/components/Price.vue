<template>
<div class="Pricepage">
 <h1><img src="../img/PriceList.png" alt="create"></h1>
</div>
<div class="price">
 <!-- <h1>{{ $t('forms.price.txt_h1') }}</h1> -->
 <div class="price-blocks">
     <div class="p-block">
          <h2>{{ $t('forms.price.txt_site_h2') }}</h2>
          <div><p>{{ $t('forms.price.txt_site_1') }}</p><span>{{ $t('forms.price.txt_site_p1') }}</span></div>
          <div><p>{{ $t('forms.price.txt_site_2') }}</p><span>{{ $t('forms.price.txt_site_p2') }}</span></div>
          <div><p>{{ $t('forms.price.txt_site_3') }}</p><span>{{ $t('forms.price.txt_site_p3') }}</span></div>
          <div><p>{{ $t('forms.price.txt_site_4') }}</p><span>{{ $t('forms.price.txt_site_p4') }}</span></div>
     </div>
 </div>
 <div class="price-blocks">
     <div class="p-block">
          <h2>{{ $t('forms.price.txt_design_h2') }}</h2>
          <div><p>{{ $t('forms.price.txt_design_1') }}</p><span>{{ $t('forms.price.txt_design_p1') }}</span></div>
          <div><p>{{ $t('forms.price.txt_design_2') }}</p><span>{{ $t('forms.price.txt_design_p2') }}</span></div>
          <div><p>{{ $t('forms.price.txt_design_3') }}</p><span>{{ $t('forms.price.txt_design_p3') }}</span></div>
          <div><p>{{ $t('forms.price.txt_design_4') }}</p><span>{{ $t('forms.price.txt_design_p4') }}</span></div>
          <div><p>{{ $t('forms.price.txt_design_5') }}</p><span>{{ $t('forms.price.txt_design_p5') }}</span></div>
          <div><p>{{ $t('forms.price.txt_design_6') }}</p><span>{{ $t('forms.price.txt_design_p6') }}</span></div>
     </div>
 </div>
 <div class="price-blocks">
     <div class="p-block">
          <h2>{{ $t('forms.price.txt_seo_h2') }}</h2>
          <div><p>{{ $t('forms.price.txt_seo_1') }}</p><span>{{ $t('forms.price.txt_seo_p1') }}</span></div>
     </div>
 </div>
 <div class="price-blocks">
     <div class="p-block">
          <h2>{{ $t('forms.price.txt_smm_h2') }}</h2>
          <div><p>{{ $t('forms.price.txt_smm_1') }}</p><span>{{ $t('forms.price.txt_smm_p1') }}</span></div>
          <div><p>{{ $t('forms.price.txt_smm_2') }}</p><span>{{ $t('forms.price.txt_smm_p2') }}</span></div>
          <div><p>{{ $t('forms.price.txt_smm_3') }}</p><span>{{ $t('forms.price.txt_smm_p3') }}</span></div>
          <div><p>{{ $t('forms.price.txt_smm_4') }}</p><span>{{ $t('forms.price.txt_smm_p4') }}</span></div>
     </div>
 </div>
</div>
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
</template>
<script>
import { reactive, onMounted, ref } from 'vue';
import axios from 'axios';
import logo from '../assets/create-logo.png'
export default {
    name: "PricePage",
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
<style>
.Pricepage {
    background-image: url('../img/price.png');
    background-size: cover;
    background-attachment: fixed;
    background-blend-mode: multiply;
    background-color: #2d2d2d75;
    text-align: center;
    height: 600px;
    @media (max-width: 900px) {
        height: 200px;
        background-position: 20%;
}
}
.Pricepage h1 {
    padding-top: 250px;
    cursor: pointer;
    transition: all .6s ease;
    @media (max-width: 900px) {
        padding-top: 100px;
    }
}
.Pricepage h1 img {
    transition: all .6s ease;
    @media (max-width: 1200px) {
     width: 70%;
    }
}
.Pricepage h1 img:hover {
    transform: scale(1.05);
}
.price {
margin: 40px 10%;
font-family: "Raleway", sans-serif;
@media (max-width: 1200px) {
    margin: 20px 2%;
    }
}
.price h1 {
   font-size: 40px;
}
.price-blocks {
   padding: 20px;
   transition: all .6s ease;
   border-radius: 2px;
   border: 2px solid #f0b28600;
   @media (max-width: 1200px) {
    padding: 10px 2%;
    }
}
/* .price-blocks:hover {
    background: linear-gradient(rgb(247, 226, 198), #e49258);
   border-radius: 2px;
   border: 2px solid #f0b286;
} */
.price-blocks h2 {
    font-size: 40px;
    color: #EE6300;
    font-weight: 400;
    margin-bottom: 20px;
    cursor: pointer;
    padding: 0px 10px;
    transition: all .6s ease;
    @media (max-width: 1200px) {
    font-size: 26px;
    font-weight: 600;
    }
}
.price-blocks h2:hover {
    color: #e49258;
    transform: scaleY(1.05);
}
.p-block  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    border: 1px solid #f9e0ce00;
    border-radius: 10px;
    padding: 10px;
    transition: all .10s ease;
    cursor: pointer;
    @media (max-width: 1200px) {
        align-items: start;
    }
}
.p-block  div:hover {
    background: linear-gradient(antiquewhite, rgba(247, 226, 198, 0.59), #f4ceb2cd);
    border: 1px solid #fad4b9;
}
.p-block div p {
width: 80%;
   color: rgb(32, 32, 32);
   font-size: 24px;
   @media (max-width: 1200px) {
    font-size: 18px;
    margin-right: 10px;
    }
}
.p-block div span {
    text-align: end;
    width: 20%;
    font-family: "Montserrat", sans-serif;
   color: #EE6300;
   font-weight: 600;
   font-size: 30px;
   @media (max-width: 1200px) {
    font-size: 22px;
    }
}
.consultation {
    @media (max-width: 1200px){    margin: 0px;  width: 90%;
}}
</style>