<template>
<div class="Smmpage">
 <h1><img src="../img/SMMpromotion.png" alt="create"></h1>
</div>
<section>
    <div class="mainSmm">
        <h3>{{ $t('forms.smm.txt_block1_h3') }}</h3> <p>{{ $t('forms.smm.txt_block1_about') }}</p>
    </div>
    <div class="what-we-do">
      <h4>{{ $t('forms.smm.txt_block1_h4') }}</h4>
      <ul>
        <li>{{ $t('forms.smm.txt_block1_li1') }}</li>
        <li>{{ $t('forms.smm.txt_block1_li2') }}</li>
        <li>{{ $t('forms.smm.txt_block1_li3') }}</li>
        <li>{{ $t('forms.smm.txt_block1_li4') }}</li>
        <li>{{ $t('forms.smm.txt_block1_li5') }}</li>
      </ul>
    </div>
    </section>
    <div class="block-img">
        <h2>{{ $t('forms.smm.txt_block_img_h2') }}</h2>
    </div>
    <section>
    <div class="what-we-do">
            <h3>{{ $t('forms.smm.txt_block2_h3') }}</h3>
            <h4>{{ $t('forms.smm.txt_block2_h4') }}</h4>

    <div class="smm-block2">
        <div>
        <img src="../img/icon.png" alt="">
        <h5>{{ $t('forms.smm.txt_block2_h5') }}</h5>
        <p>{{ $t('forms.smm.txt_block2_p1') }}</p>
    </div>
    <div>
        <img src="../img/icon.png" alt="">
        <h5>{{ $t('forms.smm.txt_block2_2h5') }}</h5>
        <p>{{ $t('forms.smm.txt_block2_2p1') }}</p>
    </div>
    </div>
    </div>
    </section>
    <section class="text-price-smm">
    <div><h4>{{ $t('forms.smm.txt_text_price') }}</h4></div><br>
    <a href="/price"><button>{{ $t ('forms.smm.txt_block_price_btn') }} <i class="fa-solid fa-arrow-right"></i></button></a>
</section>
</template>
<script>
export default {
    name: "SmmPage",
    data() {
        return {

        }
    }
}
</script>
<style>
.Smmpage {
    background-image: url('../img/main-smm.png');
    background-size: cover;
    background-attachment: fixed;
    background-blend-mode: multiply;
    background-color: #2d2d2dd3;
    text-align: center;
    height: 800px;
    @media (max-width: 900px) {
        height: 200px;
        background-size: 120%;
        background-color: #2d2d2d6b;
}
}
.Smmpage h1 {
    padding-top: 350px;
    cursor: pointer;
    transition: all .6s ease;
    @media (max-width: 900px) {
        padding-top: 110px;
    }
}
.Smmpage h1:hover {
    transform: scale(1.05)
}
.Smmpage h1 img{
    @media (max-width: 1200px) {
     width: 80%;
    }
}
.mainSmm {
    padding: 50px 10%;
    @media (max-width: 900px) {
        padding: 30px 5% 10px 5%;
    }
}
.mainSmm  h3 {
    font-size: 38px;
    color: #EE6300;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    padding-bottom: 10px;
    transition:  all .6s ease;
    @media (max-width: 900px) {
       font-size: 30px;
       font-weight: 600;
    }
}
.mainSmm  h3:hover {
    color: #fab17e;
}
.mainSmm p {
    font-size: 24px;
    color: #272727;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    @media (max-width: 900px) {
        font-size: 18px;
    }
}

.what-we-do {
    padding: 50px 10%;
    text-align: center;
    @media (max-width: 900px) {
        padding: 20px 5%;
      
    }
}
.what-we-do  h3 {
    text-align: center;
    font-size: 36px;
    color: #EE6300;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    padding-bottom: 30px;
    transition:  all .6s ease;
    @media(max-width: 900px) {
      font-size: 28px;
      text-align: start;
      font-weight: 600;
    }
}
.what-we-do  h3:hover {
    color: #fab17e;
}
.what-we-do  h4 {
    font-size: 30px;
    color: #2b2b2b;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    padding-bottom: 40px;
    transition:  all .6s ease;
    @media(max-width: 900px) {
      font-size: 20px;
      padding-bottom: 20px;
      text-align: start;
      color: #aa4904;
    }
}
.what-we-do  h4:hover {
    color: #fab17e;
    @media (max-width: 900px) {
        color: #EE6300;
    }
}
.what-we-do li {
    text-align: start;
    list-style: circle;
    font-size: 20px;
    color: #272727;
    font-family: "Raleway", sans-serif;
    padding-bottom: 10px;
    font-weight: 400;
    @media (max-width: 900px) {
        margin-left: 20px;
    }
}
.smm-block2 {
    display: flex;
    justify-content: center;
    gap: 40px;
    @media(max-width: 900px) {
        flex-direction: column;
        gap: 20px;
    }
}

.smm-block2 div {
    width: 390px;
    @media(max-width: 900px) {
        width: 100%;
        padding: 20px 0%;
    
}}
.smm-block2 div h5 {
    font-size: 22px;
    color: #EE6300;
    font-family: "Raleway", sans-serif;
    padding-bottom: 20px;
    font-weight: 400;
    @media(max-width: 900px) {
    text-align: start;
    font-weight: 600;
    color: #aa4904;
}

}
.smm-block2 p {
    font-size: 18px;
    color: #272727;
    font-family: "Raleway", sans-serif;
    padding-bottom: 20px;
    font-weight: 400;
    @media(max-width: 900px) {
    text-align: start;
    font-size: 16px;
    padding-bottom: 0px;
}
}
.smm-block2 img {
        width: 120px;
        height: 120px;
        padding: 40px;
        cursor: pointer;
        transition:  all .6s ease;
        @media(max-width: 900px) {
        width: 70px;
        height: 70px;
        padding: 20px;
}
        
}
.smm-block2 img:hover {
    transform: rotate(15deg) scale(1.04);
}

.block-img {
    height: 600px;
    background-image: url('../img/smm-img.png');
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    background-blend-mode: multiply;
    background-color: rgba(0, 0, 0, 0.376);
    color: antiquewhite;
    font-family: "Raleway", sans-serif;
    @media(max-width: 900px) {
      height: 280px;
      background-size: 120%;
      background-color: rgba(0, 0, 0, 0.772);
    }
}
.block-img h2 {
    padding: 200px 20%;
    text-align: center;
    font-size: 34px;
    font-weight: 400;
    transition: all .6s ease;
    @media(max-width: 900px) {
      font-size: 18px;
      text-align: start;
      padding: 60px 5%;
    }
}
.block-img h2:hover {
    color: #fab17e;
    transform: scale(1.03);
}
.text-price-smm {
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 60px 20%;
        @media(max-width: 900px) {
        padding: 20px 5% 30px 5%;
        text-align: start;
    }
}
.text-price-smm h4 {
       font-size: 28px;
        color: #333333;
        font-weight: 400;
        font-family: "Raleway", sans-serif;
        text-align: center;
        transition: all .6s ease;
        @media(max-width: 900px) {
        font-size: 22px;
        font-weight: 500;
        text-align: start;
    }
}
.text-price-smm h4:hover {
        color: #EE6300;
        transform: scale(1.05);
}
.text-price-smm button {
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
.text-price-smm button i {
        margin-left: 20px;
        font-size: 20px;
        font-weight: 300;
}
.text-price-smm button:hover {
      color: #f89045;
      border-bottom: 2px solid #f89045;
      transform: scaleX(1.1);
}

</style>