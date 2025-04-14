<template>
<div class="Designpage">
 <h1><img src="../img/DesignServices.png" alt="create"></h1>
</div>
<section class="mainDesign">
        <h1>{{ $t('forms.design.txt_main_h1') }}</h1> <p>{{ $t('forms.design.txt_main_text') }}</p> <p>{{ $t('forms.design.txt_main_text2') }}</p>
        <a class="price-btn" href="/price"><button>{{ $t ('forms.smm.txt_block_price_btn') }} <i class="fa-solid fa-arrow-right"></i></button></a>
</section>
<div class="block-img2">
       <img src="../img/design-img.png" alt="">
</div>
<section class="mainDesign">
    <h1>{{ $t('forms.design.txt_logo_h1') }}</h1> 
    <ul>
        <li>{{ $t('forms.design.txt_logo_li1') }}</li>
        <li>{{ $t('forms.design.txt_logo_li2') }}</li>
        <li>{{ $t('forms.design.txt_logo_li3') }}</li>
        <li>{{ $t('forms.design.txt_logo_li4') }}</li>
        <li>{{ $t('forms.design.txt_logo_li5') }}</li>
    </ul>
    </section>
<div class="block-img3">
       <img src="../img/design-img2.png" alt="">
</div>
<section class="mainDesign">
    <h1>{{ $t('forms.design.txt_logo_step_h1') }}</h1> 
    <ul>
        <li>{{ $t('forms.design.txt_logo_step1') }}</li>
        <li>{{ $t('forms.design.txt_logo_step2') }}</li>
        <li>{{ $t('forms.design.txt_logo_step3') }}</li>
        <li>{{ $t('forms.design.txt_logo_step4') }}</li>
        <li>{{ $t('forms.design.txt_logo_step5') }}</li>
    </ul>
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
<section class="text-price-smm">
    <div><h4>{{ $t('forms.design.txt_text_price') }}</h4></div><br>
    <a href="/price"><button>{{ $t ('forms.smm.txt_block_price_btn') }} <i class="fa-solid fa-arrow-right"></i></button></a>
</section>
</template>
<script>
export default {
    name: "DesignPage",
    data() {
        return {

        }
    }
}
</script>
<style>
.Designpage {
    background-image: url('../img/design.png');
    background-size: cover;
    background-attachment: fixed;
    background-blend-mode: multiply;
    background-color: #2d2d2dd3;
    text-align: center;
    height: 800px;
    @media (max-width: 900px) {
        height: 200px;
        background-size: 110%;
        background-color: #2d2d2d56;
}
}
.Designpage h1 {
    padding-top: 350px;
    cursor: pointer;
    transition: all .6s ease;
    @media (max-width: 900px) {
        padding-top: 110px;
    }
}
.Designpage h1:hover {
    transform: scale(1.05)
}
.Designpage h1 img{
    @media (max-width: 1200px) {
     width: 70%;
    }
}
.mainDesign {
    padding: 50px 10%;
    @media (max-width: 1200px) {
     padding: 30px 5%;;
    }
}
.mainDesign h1 {
    font-size: 38px;
    color: #EE6300;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    padding-bottom: 20px;
    transition:  all .6s ease;
    @media(max-width: 900px) {
        font-size: 26px;
        font-weight: 600;
    }
}
.mainDesign h1:hover {
    color: #fab17e;
}
.mainDesign p {
    font-size: 24px;
    color: #272727;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    padding-bottom: 30px;
    @media(max-width: 900px) {
        font-size: 18px;
    }
}
.mainDesign li {
    
    font-size: 22px;
    color: #272727;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    padding-bottom: 16px;
    @media(max-width: 900px) {
        font-size: 18px;
    }
}
.block-img2{
    background-image: url('../img/design-img.png');
    background-size: cover;
    background-attachment: fixed;
    text-align: center;
    height: 800px;
    @media(max-width: 900px) {
       background: none;
       height: 230px;
    }
}
.block-img2 img {
    display: none;
    @media(max-width: 900px) {
       display: flex;
       width: 100%;
    }
}
.block-img3{
    background-image: url('../img/design-img2.png');
    background-size: cover;
    background-attachment: fixed;
    text-align: center;
    height: 800px;
    @media(max-width: 900px) {
       background: none;
       height: 230px;
    }
}
.block-img3 img {
    display: none;
    @media(max-width: 900px) {
       display: flex;
       width: 100%;
    }
}
.price-btn button {
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
.price-btn  button i {
        margin-left: 20px;
        font-size: 20px;
        font-weight: 300;
}
.price-btn button:hover{
    color: #f89045;
      border-bottom: 2px solid #f89045;
      transform: scaleX(1.1);
}

</style>