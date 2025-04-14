<template>
    <div class="Seopage">
 <h1><img src="../img/SEOpromotion.png" alt="create"></h1>
</div>
<section>
    <div class="mainSeo">
        <h3>{{ $t('forms.seo.txt_block1_h3') }}</h3> <p>{{ $t('forms.seo.txt_block1_p') }}</p>
    </div>
    <div class="what-we-do-seo">
      <h3>{{ $t('forms.seo.txt_block2_h4') }}</h3>
      <ul>
        <li>{{ $t('forms.seo.txt_block2_li1') }}</li>
        <li>{{ $t('forms.seo.txt_block2_li2') }}</li>
        <li>{{ $t('forms.seo.txt_block2_li3') }}</li>
        <li>{{ $t('forms.seo.txt_block2_li4') }}</li>
        <li>{{ $t('forms.seo.txt_block2_li5') }}</li>
      </ul>
    </div>
</section>
<section class="seo-img section" v-for="(section, index) in sections" 
  :key="index"
  :ref="el => (sectionRefs[index] = el)">
  <div class="content"
    :class="{ 'visible' : isVisible[index] }"
    >
     {{ section }}
    <img src="../img/seo.png" alt="seo">
  </div>
</section>
<section>
    <div class="seo-block3">
      <h4>{{ $t('forms.seo.txt_block3_h4') }}</h4>
      <ul> <h5>{{ $t('forms.seo.txt_block3_ul') }} </h5>
        <li>{{ $t('forms.seo.txt_block3_li1') }}</li>
        <li>{{ $t('forms.seo.txt_block3_li2') }}</li>
        <li>{{ $t('forms.seo.txt_block3_li3') }}</li>
        <li>{{ $t('forms.seo.txt_block3_li4') }}</li>
        <li>{{ $t('forms.seo.txt_block3_li5') }}</li>
      </ul>
    </div>
</section>
<section class="seo-img2">
    <img src="../img/seo2.png" alt="seo">
</section>
<section>
    <div class="seo-block3">
      <h4>{{ $t('forms.seo.txt_block4_h4') }}</h4>
      <ul> <h5>{{ $t('forms.seo.txt_block4_ul') }} </h5>
        <li>{{ $t('forms.seo.txt_block4_li1') }}</li>
        <li>{{ $t('forms.seo.txt_block4_li2') }}</li>
        <li>{{ $t('forms.seo.txt_block4_li3') }}</li>
        <li>{{ $t('forms.seo.txt_block4_li4') }}</li>
        <li>{{ $t('forms.seo.txt_block4_li5') }}</li>
      </ul>
    </div>
</section>
</template>
<script>
import { reactive, onMounted, ref } from 'vue';
export default {
    name: "SeoPage",
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
            sectionRefs
        };
    },
}
</script>
<style>
.Seopage {
    background-image: url('../img/1.png');
    background-size: cover;
    background-attachment: fixed;
    background-blend-mode: multiply;
    background-color: #2d2d2dc5;
    background-position: center;
    text-align: center;
    height: 600px;
    @media (max-width: 900px) {
        height: 200px;
        background-color: #2d2d2d57;
        background-size: 120%;
}
}
.Seopage h1 {
    padding-top: 250px;
    cursor: pointer;
    transition: all .6s ease;
    @media (max-width: 900px) {
        padding-top: 110px;
    }
}
.Seopage h1:hover {
    transform: scale(1.05)
}
.Seopage h1 img{
    @media (max-width: 1200px) {
     width: 70%;
    }
}
.mainSeo {
    padding: 50px 10%;
    @media (max-width: 1200px) {
     padding: 20px 5%;
    }
}
.mainSeo  h3 {
    font-size: 28px;
    color: #EE6300;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    padding-bottom: 10px;
    transition:  all .6s ease;
    @media (max-width: 1200px) {
     font-size: 26px;
     font-weight: 500;
    }
}
.mainSeo  h3:hover {
    color: #fab17e;
}
.mainSeo p {
    font-size: 20px;
    color: #272727;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    @media (max-width: 1200px) {
     font-size: 18px;
    }
}

.what-we-do-seo {
    padding: 50px 10%;
    @media (max-width: 1200px) {
     padding: 20px 10% 30px 10%;
    }
}
.what-we-do-seo h3 {
    font-size: 30px;
    color: #EE6300;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    padding-bottom: 20px;
    transition:  all .6s ease;
    @media (max-width: 1200px) {
     color: #EE6300;
    }
}
.what-we-do-seo  h4:hover {
    color: #fab17e;
}
.what-we-do-seo li {
    list-style: circle;
    font-size: 20px;
    color: #272727;
    font-family: "Raleway", sans-serif;
    padding-bottom: 10px;
    font-weight: 400;
    @media (max-width: 900px) {
     font-size: 16px;
    }
}
.seo-img {
    align-items: center;
    height: 800px;
    background-image: url('../img/seo.png');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    width: 100%;
    @media (max-width: 900px) {
        align-items: center;
        height: 300px;
        background: none;

}}
.seo-img img {
    display: none;
    width: 100%;
    @media (max-width: 900px) {
    display: flex;
    height: 250px;
}
}
.seo-img2 {
    height: 800px;
    background-image: url('../img/seo2.png');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    width: 100%;
    @media (max-width: 900px) {
     align-items: center;
     height: 200px;
     background: none;

}}
.seo-img2 img {
    display: none;
    width: 100%;
    @media (max-width: 900px) {
   display: flex;
   height: 200px;
}
}

.seo-block3 {
    padding: 50px 10%;
    @media (max-width: 1200px) {
     padding: 20px 10% 30px 10%;
    }
}
.seo-block3 h4 {
    font-size: 30px;
    color: #EE6300;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    padding-bottom: 20px;
    transition:  all .6s ease;
    @media (max-width: 1200px) {
     font-weight: 500;
     font-size: 26px;
     font-weight: 600;
    }
}
.seo-block3 h4:hover {
    color: #fab17e;
}
.seo-block3 ul h5 {
    font-size: 22px;
    color: #923d00;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    margin-bottom: 20px;
    transition:  all .6s ease;
    @media (max-width: 1200px) {
     font-size: 18px;
    }
}
.seo-block3 li {
    list-style: circle;
    font-size: 20px;
    color: #272727;
    font-family: "Raleway", sans-serif;
    padding-bottom: 10px;
    font-weight: 400;
    @media (max-width: 1200px) {
     font-size: 16px;
    }
}

</style>