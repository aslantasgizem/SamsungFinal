<template>
    <div>

        <div class="canlıdestek">
      <img src="http://www.infomobil.com.tr/wp-content/uploads/2017/08/samsung-logo.jpg" alt="logo" class="logo1" >
      <h1 class="logo2">Canlı Destek</h1>
    </div>
    <div class="canlıdestek2">
        <div class="canlıdestek3" style="text-align:left;font-family:Arial, Helvetica, sans-serif;font-size: 14px;">Değerli müşterimiz;<br>
          Samsung olarak aşağıdaki kategorilerde sizlere Canlı Destek hizmeti sağlamaktan mutluluk duyuyoruz.<br>
          Size daha iyi bir hizmet sunabilmek için ise görüşmeye başlamadan önce ad, telefon numarası gibi bazı bilgilerinizi rica edeceğiz.<br>
          Canlı Destek Görüşmesine bağlanabilmeniz için web tarayıcınızın JAVA eklentisinin aktif olması gerektiğini de hatırlatmak isteriz.
              
        </div>
        
    </div>
    <hr/>
  
    <!--slider foto galeri-->
   
      <!--Müşteri bilgisi div'i-->
      <div class="canlıdestek5">
        <h3 class="canlıdestek6">Müşteri Bilgisi</h3>
        <!--İsim yazma kısmı-->
        <div class="canlıdestek7" >
        <label for="adsoyad" style="font-family:Palatino Linotype" >Ad</label><label for="yıldız" style="color: red;width: 1100px;" >(*)</label>
        <input type="text" name="adsoyad1" id="adsoyad1" required>
      </div>
      <br>
      <!--Soyadı kısmı-->
      <div class="canlıdestek7" >
          <label for="adsoyad" style="font-family:Palatino Linotype" >Soyad</label><label for="yıldız" style="color: red;width: 1100px;" >(*)</label>
          <input type="text" name="adsoyad1" id="adsoyad1" required>
        </div>
        <br>
        <!--E-posta kısmı-->
        <div class="canlıdestek7" >
            <label for="adsoyad" style="font-family:Palatino Linotype" >E-posta</label><label for="yıldız" style="color: red;width: 1100px;" >(*)</label>
            <input type="text" name="adsoyad1" id="adsoyad1" required>
          </div>
          <br>
          <!--Telefon numarası kısmı-->
          <div class="canlıdestek7" >
              <label for="adsoyad" style="font-family:Palatino Linotype" >Cep Telefonu Numarası</label><label for="yıldız" style="color: red;width: 900px;" >(*)</label>
              <input type="text" name="adsoyad1" id="adsoyad1" required>
              <p style="font-size: 11px;" >Numaranız 0 ile başlamalı ve 11 hane olmalıdır.</p>
            </div>
            <!--Ürün model kodu kısmı-->
            <div id="canlıdestek8" >
                <label for="adsoyad" style="width: 1000px;font-family:Palatino Linotype;">Ürün Model Kodu(Opsiyonel)</label>
                <input type="text" name="adsoyad1" id="adsoyad1" required>
                <!--Arama butonu kısmı.Butona basıldığında vue ile mesaj çıkmaktadır.-->
                <button  v-on:click="greet" ><i class=" fa fa-search"></i></button>
            </div>
            <!--serinumarası kısmı-->
            <div class="canlıdestek9">
                <label for="adsoyad" style="width: 1000px;font-family:Palatino Linotype;" >Seri Numarası (Opsiyonel)</label>
                <input type="text" name="adsoyad1" id="adsoyad1" required>
            </div>
            <!--Satın alma tarihi kısmı-->
            <div class="canlıdestek10" >
                <label for="adsoyad"  style="width: 1000px;font-family:Palatino Linotype;" >Satın alma tarihi (Opsiyonel)</label>
                <!--Selectbox kısmı-->
                <select>
                    <option value="volvo">Seçiniz</option>
                    <option value="saab">1 yıl</option>
                    <option value="opel">1-2 yıl</option>
                    <option value="audi">2 yıl üzeri</option>
                    <option value="saab">bilinmiyor</option>
                </select>
            </div>
            <!--Destek talep kısmı-->
            <div class="canlıdestek11" >
                <label for="destek" style="font-family:Palatino Linotype"  >Destek talebinizin nedeninden kısaca bahseder misiniz?</label>
                <label for="destek1" style="color: red;">(*)</label>
                <textarea rows="6" cols="50" style="margin-top: 20px;"></textarea>

            </div>
      </div>
      <div class="canlıdestek12" >
          <label for="destek1" style="color: red;">(*)</label>
          <label for="alanlar1" style="font-size: 11px;font-family:Palatino Linotype;" >Doldurulması zorunlu alanlar</label>
      </div>
      <div class="canlıdestek13">
          <input type="checkbox" name="vehicle1" ><a href="#"> Samsung Gizlilik Sözleşmesini</a> onaylayınız.<br>
      </div>
      <!--Butona basıldığında vue ile mesaj çıkmaktadır.-->
      <div id="canlıdestek14">
        <button v-on:click="greet" class="baslat">Başlat</button>
      </div>
      <!--yararlı bağlantılar kısmı-->
      <div class="canlıdestek15">
        <h4 style="margin-left: 610px;margin-top: 30px;font-size: 16px;" >Yararlı Bağlantılar</h4>
        <div class="canlıdestek17" >
          <!--Buton kısmı-->
        <button class="canlıdestek16" >FOTA</button>
        <button class="canlıdestek16">Canlı Destek</button>
        <button class="canlıdestek16">SmartSwitch</button>
      </div>

      </div>
   <div style="height: 60px;"></div>
    </div>
</template>
<style  scoped>
.logo1{
    margin-left: 400px;
    margin-top: 80px;
    width: 20%;
}
.logo2{
    color: #0e4194;
    margin-top: -75px;
    margin-left: 700px;
    font-weight: bold;
}
.canlıdestek2{
    margin-left: 300px;
    margin-top: 50px;
}

/*resimli slider*/
#slide {
    display: flex;
    overflow: hidden;
    align-items: flex-start;
}
  
.container {
    padding-left: 50px;
    width: 1200px;
    padding-bottom: 100px;
}
  
.prev {
    margin-left: -1350px;
    margin-top: -80px;
    cursor: pointer;
}
  
.next {
    display: inline-block;
    cursor: pointer;
    margin-top: -30px;
}

.control {
    position: absolute;
    bottom: 25;
    right: 30px;
}
  
  
#slide > div {
    min-width: 250px;
    padding-right: 20px;
    box-sizing: border-box;
    overflow: hidden;
}
  
#slide > div > img {
    height: 100px;
    width: 150px;
    display: block;
}
  
#slide > div > div {
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 30px;
    padding-bottom: 40px;
    color: #FFFFFF;
    background: #212121;
}
  
#slide > div > div > h6 {
      margin: 0;
      font-size: 16px;
}
  
#slide > div > div > p {
      margin-top: 10px;
      margin-bottom: 0;
      font-size: 14px;
}
/*resimli slider bitiş*/

.canlıdestek5{
    background: #f3f5f8;
    height: 370px;
    width: 100%;
    border-style: solid;
    border-color: darkgrey ;
    border-width: 1px;
}
.canlıdestek6{
    font-weight: bold;
    font-size: 18px;
    margin-left: 650px;
}
.canlıdestek7{
    margin-left: 200px;
    margin-top:-20px;
}
#adsoyad1{
    border-radius: 6px;
    border-color: #dddddd;
    
}
#canlıdestek8{
    margin-left: 520px;
    margin-top: -200px;
}
.canlıdestek9{
    margin-left: 520px;
}
.canlıdestek10{
    margin-left: 520px;
}
.canlıdestek11{
    margin-left: 1000px;
    margin-top: -150px;
}
.canlıdestek12{
    margin-left: 200px;
    
}
.canlıdestek13{
    margin-left: 550px;
    margin-top: 30px;
}
.baslat{
    background: darkblue;
    padding: 14px 120px;
    border-radius: 8px;
    color: #fff;
    margin-left: 550px;
    margin-top: 10px;
}
.canlıdestek16{
    padding: 7px 120px;
    border: 1px solid #FF8C00 ;
    background-color: #fff;
    color: #FF8C00 ;
    font-weight: bold;
    border-radius: 6px;
}
.canlıdestek17{
    margin-left: 230px;
   
}
</style>

