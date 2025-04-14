<template>
<div class="AboutUsPage">
 <h1><img src="../img/About-us.png" alt="create"></h1>
</div>
<section>
    <div class="mainAboutUs">
     <h1>{{ $t('forms.about_us.txt_main_h1') }}</h1><p> Create <span> {{ $t('forms.about_us.txt_main_p') }}</span> </p>  
    </div>
    <div class="why-coose-us">
      <h4>{{ $t('forms.about_us.txt_whyCooseUs_h2') }}</h4>
      <div class="why-coose-us-block">
       <div>
        <h5>{{ $t('forms.about_us.txt_whyCooseUs1_h4') }}</h5>
        <p>{{ $t('forms.about_us.txt_whyCooseUs1_p') }}</p>
       </div>
       <div>
        <h5>{{ $t('forms.about_us.txt_whyCooseUs2_h4') }}</h5>
        <p>{{ $t('forms.about_us.txt_whyCooseUs2_p') }}</p>
       </div>
       <div>
        <h5>{{ $t('forms.about_us.txt_whyCooseUs3_h4') }}</h5>
        <p>{{ $t('forms.about_us.txt_whyCooseUs3_p') }}</p>
       </div>
       <div>
        <h5>{{ $t('forms.about_us.txt_whyCooseUs4_h4') }}</h5>
        <p>{{ $t('forms.about_us.txt_whyCooseUs4_p') }}</p>
       </div>
      </div>
    </div>
    </section>
  <section class="AboutUs-img">
    <h1>{{ $t('forms.about_us.txt_img_text') }}</h1>

 </section>  
 <div class="our-services">
      <h4>{{ $t('forms.about_us.txt_services_h2') }}</h4>
      <ul>
        <li>{{ $t('forms.about_us.txt_services_li1') }}</li>
        <li>{{ $t('forms.about_us.txt_services_li2') }}</li>
        <li>{{ $t('forms.about_us.txt_services_li3') }}</li>
        <li>{{ $t('forms.about_us.txt_services_li4') }}</li>
      </ul>
</div>
</template>
<script>
export default {
    name: "AboutUsPage",
    data() {
        return {

        }
    }
}
</script>
<style>
.AboutUsPage {
    background-image: url('../img/aboutus-img.png');
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
.AboutUsPage h1 {
    padding-top: 250px;
    cursor: pointer;
    transition: all .6s ease;
    @media (max-width: 900px) {
        padding-top: 100px;
    }
}
.AboutUsPage h1 img {
    @media (max-width: 1200px) {
     width: 70%;
    }
}
.mainAboutUs {
    padding: 50px 10% 20px 10%;
    @media (max-width: 900px) {
    padding: 20px 10%;
} 
}
.mainAboutUs h1 {
    text-align: center;
    font-size: 40px;
    color: #EE6300;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    padding-bottom: 20px;
    transition:  all .6s ease;
    @media (max-width: 900px) {
    font-size: 24px;
    padding-bottom: 10px;
} 
}
.mainAboutUs h1:hover {
    color: #fab17e;
}
.mainAboutUs span {
    text-align: center;
    font-size: 24px;
    color: #272727;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    padding-bottom: 20px;
    transition:  all .6s ease;
    @media (max-width: 900px) {
    font-size: 16px;
    padding-bottom: 10px;
    text-align: start;
} 
}
.mainAboutUs p {
    font-size: 26px;
    color: #EE6300;;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    @media (max-width: 900px) {
    font-size: 16px;
    padding-bottom: 10px;
    text-align: start;
} 
}
.why-coose-us {
    padding: 50px 10% 20px 10%;
    @media (max-width: 900px) {
    padding: 20px 5%;
} 
}
.why-coose-us h4 {
    text-align: center;
    font-size: 32px;
    color: #272727;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    padding-bottom: 20px;
    transition:  all .6s ease;
    @media (max-width: 900px) {
    font-size: 24px;
} 
}
.why-coose-us h4:hover {
    color: #fab17e;
}
.why-coose-us-block {
display: flex;
justify-content: center;
@media (max-width: 900px) {
     flex-direction: column;
    }

}
.why-coose-us-block div {
    width: 300px;
    margin: 20px;
    @media (max-width: 900px) {
     width: 90%;
     margin: 10px 5%;
    }
}
.why-coose-us-block div h5 {
    text-align: center;
    font-size: 26px;
    color: #EE6300;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    padding-bottom: 10px;
    transition:  all .6s ease;
    @media (max-width: 900px) {
    font-size: 20px;
    text-align: start;
} 
}
.why-coose-us-block div p {
    text-align: center;
    font-size: 18px;
    color: #272727;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    padding-bottom: 20px;
    @media (max-width: 900px) {
    font-size: 16px;
    padding-bottom: 10px;
    text-align: start;
} 
}
.AboutUs-img {
    background-image: url('../img/about-us-img2.png');
    background-size: cover;
    background-attachment: fixed;
    background-blend-mode: multiply;
    background-color: #2d2d2d75;
    text-align: center;
    align-items: center;
    height: 600px;
    @media (max-width: 900px) {
        height: 300px;
        background-position: center;
} 
}
.AboutUs-img h1{
    color: antiquewhite;
    font-size: 32px;
    color: antiquewhite;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    align-self: center;
    transition: all .6s ease;
    padding: 280px 20%;
    @media (max-width: 900px) {
        font-size: 18px;
        padding: 110px 10%;
} 
}
.AboutUs-img h1:hover {
    color: #EE6300;
    transform: scale(1.1);
}
.our-services {
    margin: 50px 10%;
    @media (max-width: 900px) {
    margin: 20px 5%;
} 

}
.our-services h4 {
    text-align: center;
    font-size: 32px;
    color: #EE6300;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    padding-bottom: 20px;
    transition:  all .6s ease;
    @media (max-width: 900px) {
    font-size: 22px;
    padding-bottom: 10px;
    text-align: start;
} 
}
.our-services h4:hover {
    color: #fab17e;
}
.our-services li {
    list-style: circle;
    font-size: 20px;
    padding-bottom: 20px;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    @media (max-width: 900px) {
    font-size: 18px;
    padding-bottom: 10px;
} 
}
</style>