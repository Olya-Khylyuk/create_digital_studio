<template>
<div class="Cooperationpage">
 <h1><img src="../img/cooperation.png" alt="create"></h1>
</div>
<section>
    <div class="mainCooperation">
        <h1>{{ $t('forms.cooperation.txt_main_h1') }}</h1> <p>{{ $t('forms.cooperation.txt_main_p') }}</p>
    </div>
    <div class="what-we-do-cooperation">
      <h4>{{ $t('forms.cooperation.txt_main_consultation') }}</h4>
      <ul>
        <li>{{ $t('forms.cooperation.txt_main_consultation_li1') }}</li>
        <li>{{ $t('forms.cooperation.txt_main_consultation_li2') }}</li>
      </ul>
    </div>
    <div class="what-we-do-cooperation">
      <h4>{{ $t('forms.cooperation.txt_main_contract') }}</h4>
      <ul>
        <li>{{ $t('forms.cooperation.txt_main_contract_li1') }}</li>
        <li>{{ $t('forms.cooperation.txt_main_contract_li2') }}</li>
      </ul>
    </div>
    <div class="what-we-do-cooperation">
      <h4>{{ $t('forms.cooperation.txt_main_design') }}</h4>
      <ul>
        <li>{{ $t('forms.cooperation.txt_main_design_li1') }}</li>
        <li>{{ $t('forms.cooperation.txt_main_design_li2') }}</li>
      </ul>
    </div>
    <div class="what-we-do-cooperation">
      <h4>{{ $t('forms.cooperation.txt_main_testing') }}</h4>
      <ul>
        <li>{{ $t('forms.cooperation.txt_main_testing_li1') }}</li>
        <li>{{ $t('forms.cooperation.txt_main_testing_li2') }}</li>
      </ul>
    </div>
    <div class="what-we-do-cooperation">
      <h4>{{ $t('forms.cooperation.txt_main_support') }}</h4>
      <ul>
        <li>{{ $t('forms.cooperation.txt_main_support_li1') }}</li>
        <li>{{ $t('forms.cooperation.txt_main_support_li2') }}</li>
      </ul>
    </div>
</section>
<div class="mainCooperation">
    <h1>
        {{ $t('forms.cooperation.txt_text_h3') }}
    </h1>
</div>
</template>
<script>
export default {
    name: "CooperationPage",
    data() {
        return {

        }
    }
}


</script>
<style>
.Cooperationpage {
    background-image: url('../img/cooperation-img.png');
    background-size: cover;
    background-attachment: fixed;
    background-blend-mode: multiply;
    background-color: #2d2d2d75;
    text-align: center;
    height: 600px;
    @media (max-width: 900px) {
        height: 300px;
}
}
.Cooperationpage h1 {
    padding-top: 250px;
    cursor: pointer;
    transition: all .6s ease;
    @media (max-width: 900px) {
        padding-top: 150px;
    }
}
.Cooperationpage h1:hover {
    transform: scale(1.05)
}
.Cooperationpage h1 img{
    @media (max-width: 1200px) {
     width: 50%;
    }
}

.mainCooperation {
    padding: 50px 10% 20px 10%;
}
.mainCooperation h1 {
    text-align: center;
    font-size: 32px;
    color: #EE6300;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    padding-bottom: 20px;
    transition:  all .6s ease;
}
.mainCooperation h1:hover {
    color: #fab17e;
}
.mainCooperation p {
    font-size: 24px;
    color: #272727;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
}
.what-we-do-cooperation{
    padding: 20px 10%;
}
.what-we-do-cooperation h4 {
    font-size: 24px;
    text-align: start;
    color: #EE6300;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    padding-bottom: 10px;
    transition:  all .6s ease;
}
.what-we-do-cooperation h4:hover {
    color: #fab17e;

}
.what-we-do-cooperation li {
    font-size: 20px;
    color: #272727;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    list-style: circle;
}
</style>