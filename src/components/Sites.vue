<template>
<div class="Sitespage">
 <h1><img src="../img/WebsiteCreation.png" alt="create"></h1>
</div>
<section class="mainDesign">
        <h1>{{ $t('forms.sites.txt_main_h1') }}</h1> <p>{{ $t('forms.sites.txt_main_text') }}</p> <p>{{ $t('forms.sites.txt_main_text2') }}</p> <p>{{ $t('forms.sites.txt_main_text3') }}</p>
        <a class="price-btn" href="/price"><button>{{ $t ('forms.smm.txt_block_price_btn') }} <i class="fa-solid fa-arrow-right"></i></button></a>
</section>
<div class="block-img-sites">
       <img src="../img/img-sites.png" alt="">
       <h1>{{ $t('forms.sites.txt_main_img_h1') }}</h1>
</div>
<section class="mainSites-lending">
    <h1>{{ $t('forms.sites.txt_lending_h1') }}</h1> 
    <div class="lending">
        <div>{{ $t('forms.sites.txt_lending_text') }}</div>
        <div>{{ $t('forms.sites.txt_lending_text2') }}</div>
        <div>{{ $t('forms.sites.txt_lending_text3') }}</div>
        <div>{{ $t('forms.sites.txt_lending_text4') }}</div>
        <div>{{ $t('forms.sites.txt_lending_text5') }}</div> 
    </div>
    </section>
    <div class="block-img-sites2">
        <h1><img src="../img/txt-home.png" alt=""></h1>
       <!-- <img src="../img/sites-img2.png" alt=""> -->
</div>
<section class="mainSites-support">
    <h1>{{ $t('forms.sites.txt_support_h2') }}</h1> 
    <div class="support">
        <div>{{ $t('forms.sites.txt_support_text') }}</div>
        <div>{{ $t('forms.sites.txt_support_text2') }}</div>
        <div>{{ $t('forms.sites.txt_support_text3') }}</div>
        <div>{{ $t('forms.sites.txt_support_text4') }}</div>
    </div>
    </section>
    <div class="consultation">
<form method="POST">
    <h4>{{ $t('forms.home.txt_consultation_h4')}}</h4>
    <input :placeholder="$t('forms.home.txt_input_name')"/><input :placeholder="$t('forms.home.txt_input_phone')"/><br>
    <button>{{ $t('forms.home.txt_btn_consultation') }}</button>
</form>
</div>
</template>
<script>
export default {
    name: "SitesPage",
    data() {
        return {

        }
    }
}
</script>
<style>
.Sitespage {
    background-image: url('../img/bg-sites.png');
    background-size: cover;
    background-attachment: fixed;
    background-blend-mode: multiply;
    background-color: #2d2d2dd3;
    text-align: center;
    height: 800px;
    @media (max-width: 900px) {
        height: 200px;
        background-size: 100%;
}
}
.Sitespage h1 {
    padding-top: 350px;
    cursor: pointer;
    transition: all .6s ease;
    @media (max-width: 900px) {
        padding-top: 100px;
    }
}
.Sitespage h1:hover {
    transform: scale(1.05)
}
.Sitespage h1 img{
    @media (max-width: 1200px) {
     width: 50%;
    }
}
.block-img-sites {
    background-image: url('../img/img-sites.png');
    background-size: cover;
    background-attachment: fixed;
    background-blend-mode: multiply;
    background-color: #2d2d2d32;
    text-align: center;
    height: 600px;
    @media(max-width: 900px) {
       height: fit-content;
       margin-bottom: 10px;
       align-items: center;
    }
}
.block-img-sites img {
    display: none;
    @media(max-width: 900px) {
       display: flex;
       width: 100%;
    }
}
.block-img-sites h1 {
    padding: 200px 20%;
    color: antiquewhite;
    font-size: 38px;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    padding-bottom: 20px;
    transition:  all .6s ease;
    @media(max-width: 900px) {
        font-size: 20px;
        margin-top: -160px;
        z-index: 1;
        padding: 10px 10%;
    }
}
.block-img-sites h1:hover {
    color: #fab17e;
    transform: scale(1.06);
}
.mainSites-lending {
    padding: 50px 10%;
    @media(max-width: 1200px) {
    margin: 30px 0px;
    padding: 40px 5%;
    }
}
.mainSites-lending h1 {
    font-size: 38px;
    color: #EE6300;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    padding-bottom: 20px;
    transition:  all .6s ease;
    @media(max-width: 1200px) {
        font-size: 28px;
        font-weight: 600;
    }
}
.mainSites-lending h1:hover {
    color: #fab17e;
    cursor: pointer;
    transform: scaleY(1.02);
}
.mainSites-lending .lending {
    gap: 20px;
    display: flex;
    font-size: 20px;
    color: #272727;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    padding-bottom: 16px;
    @media(max-width: 1200px) {
        font-size: 16px;
        flex-direction: column;
    }
}
.mainSites-lending .lending  div {
    padding: 10px;
    border: 2px solid #EE6300;
    border-radius: 2px;
    transition:  all .5s ease;
}
.mainSites-lending .lending  div:hover {
    color: antiquewhite;
    cursor: pointer;
    border-radius: 20px;
    background-color: #EE6300;
    transform: scale(1.03);
}
.block-img-sites2 {
    background-image: url('../img/sites-img2.png');
    background-size: cover;
    background-attachment: fixed;
    background-blend-mode: multiply;
    background-color: #2d2d2dd2;
    text-align: center;
    height: 400px;
    @media(max-width: 900px) {
       height: fit-content;
       margin-bottom: 10px;
    }
}
.block-img-sites2 img {
    width: 70%;
    margin-top: 150px;
    @media(max-width: 900px) {
    margin: 30px 0px;
       width: 90%;
    }
}
.block-img-sites2 h1 {
    z-index: 1;
}
.mainSites-support {
    padding: 50px 10%;
    @media(max-width: 1200px) {
    margin: 30px 0px;
    padding: 20px 5%;
    }
}
.mainSites-support  h1 {
    font-size: 38px;
    color: #EE6300;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    padding-bottom: 20px;
    transition:  all .6s ease;
    @media(max-width: 1200px) {
        font-size: 24px;
        font-weight: 600;
    }
}
.mainSites-support  h1:hover {
    color: #fab17e;
    cursor: pointer;
    transform: scaleY(1.02);
}
.mainSites-support .support {
    gap: 20px;
    display: flex;
    font-size: 20px;
    color: #272727;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    padding-bottom: 16px;
    @media(max-width: 1200px) {
        font-size: 16px;
        flex-direction: column;
    }
}
.mainSites-support .support div {
    padding: 10px;
    border: 2px solid #EE6300;
    border-radius: 2px;
    transition:  all .5s ease;
}
.mainSites-support .support div:hover {
    color: antiquewhite;
    cursor: pointer;
    border-radius: 20px;
    background-color: #EE6300;
    transform: scale(1.03);
}
</style>