<template>
    
    <div>
         <hr> <!--Horizontal çizgi-->
    <h5 style="color: grey; text-decoration: none; margin-left: 45px; font-family:'Times New Roman', Times, serif"> Home / Erişilebilirlik / Web Erişilebilirliği  </h5>
    <hr>


     <h4 style="color:black; margin-left:65px; margin-top: 40px;">Erişilebilirlik</h4>


     <h5 style="margin-left: 1050px; margin-top: -30px;"> WEB ERİŞİLEBİLİRLİĞİ</h5>
     
     
     <!--<img src="photos/weberisebilirligi.png" style="margin-top: 30px;"/>-->
     <div style="height:85px; background-color:black"> 
        <a style="margin-left: 150px; color:white; margin-top:0px; " href="GlobalNavigasyon.html"> <h5 class="global" style="margin-left: 150px;"> GLOBAL NAVİGASYON  </h5>
            <a href="Erisilebilirlik.html" > <h5 class="arama" style="margin-left: 600px; margin-top: -25px;  color:white;">  ARAMA  </h5>
               <a href="BaglantiyiAtla.html"> 
                 <h5 class="baglantı" style="margin-left: 950px; margin-top: -25px;  color:white;">  BAĞLANTIYI ATLA  </h5> </a>
            </a></a>
       
    </div>

        <h1 style="margin-left: 500px; margin-top: 80px; color: black; font-size: 45px;" ><b>Küresel Navigasyon Kılavuzu</b></h1>
        <p  style="margin-left: 560px; font-size: 15px;">Web Sitemizdeki Küresel Navigasyon Çubuğunun Kullanımı </p>

     <h2 style="margin-top: 150px; margin-left: 320px; color: black;"><b>Küresel Navigasyon Çubuğumuzdaki alt menülerin bulunması</b></h2>

<!--1. Galeri-->
<div id="app" >
            <ul class="navigator">
              <li @click="prevSlide" style="background-color: grey;"> &laquo; </li>
              <li @click="changeSlide(1)" style="background-color: grey;"></li>
              <li @click="changeSlide(2)" style="background-color: grey;"></li>
              <li @click="changeSlide(3)" style="background-color: grey;"></li>
              <li @click="changeSlide(4)" style="background-color: grey;"></li>

              <li @click="nextSlide" style="background-color: grey;"> &raquo; </li>
            </ul>
            <div class="slider-container">
              <ul class="slider" :style="styleObject">
                <li class="green slide"></li>
                <li class="blue slide"></li>
                <li class="grey slide"></li>
                <li class="red slide"></li>

              </ul>
            </div>
          </div>

<h2 style="margin-top: 70px; margin-left: 280px; color: black;"><b>Mobil Küresel Navigasyon Çubuğumuzdaki alt menülerin bulunması</b></h2>

<!--2. Galeri-->
<div id="app1" >
        <ul class="navigator1">
          <li @click="prevSlide" style="background-color: grey;"> &laquo; </li>
          <li @click="changeSlide(1)" style="background-color: grey;"></li>
          <li @click="changeSlide(2)" style="background-color: grey;"></li>
          <li @click="changeSlide(3)" style="background-color: grey;"></li>
          <li @click="changeSlide(4)" style="background-color: grey;"></li>
          <li @click="changeSlide(5)" style="background-color: grey;"></li>
          <li @click="changeSlide(6)" style="background-color: grey;"></li>
          <li @click="changeSlide(7)" style="background-color: grey;"></li>
          <li @click="nextSlide" style="background-color: grey;"> &raquo; </li>
        </ul>
        <div class="slider1-container1">
          <ul class="slider1" :style="styleObject">
            <li class="green1 slide1"></li>
            <li class="blue1 slide1"></li>
            <li class="grey1 slide1"></li>
            <li class="red1 slide1"></li>
            <li class="orange1 slide1"></li>
            <li class="purple1 slide1"></li>
            <li class="purple11 slide1"></li>
          </ul>
        </div>
      </div>
</div>


</template>
<style  scoped>
/* margin kullanılarak resimler ve ikonların yerleri belirtildi. */
/*Samsung Logo*/
img.sms{
	margin-left:50px;
	margin-top:-85px;
}

/*sepet ikonu*/
img.icon2{
	margin-top:-95px;
	margin-left:420px
}
/*Üyelik dropdown ikonu*/
img.icon1{
	margin-top:35px;
	margin-left:450px
}

/*Ücretsiz Kargo İkonu*/
img.a1 {
	margin-left:110px;
}
/*14 gün iade ikonu*/
img.a2 {
	margin-left:230px;
}
/*kargo takibi ikonu*/
img.a3{
	margin-left:220px;
}
/* Ücretsiz Kargo*/
span.b1{
	font-size:13pt;
}
/*14 Gün Koşulsuz İade*/
span.b2{
	font-size:13pt;
}
/*24/7 Kargo Takibi*/
span.b3{
	font-size:13pt;
}

p.text-shop{
	margin-left:430px;
	font-size:10.5pt;
	margin-top:20px

}


  body {
      font-family: Arial, Helvetica, sans-serif;
      line-height: 3em;
    }
 
   /* Ürün bölmelerinin çerçevesiz olarak görünmesi */
  .gallery {
    border: 0px solid #ccc;
  }
  
 /* Ürün bölmelerinin yerleri ve büyüklükleri ayarlandı */
  .responsive {
    padding: 0 6px;
    float: left;
    width: 24.99999%;
    margin-left:80px;
  }
/*Ürünlerin bulunduğu kategori*/
  .kategori2{
    margin-top: 50px;

  }
  .satirboslugu{

    height: 110px;
  }
  .bosluk{

    line-height: 50px;
  }
  /*Altmenü alanı1*/
  .footer{
    background: #e9e9e9;
    color: #000;
    height: 450px;
    width: 100%;
    position: relative /* normal şekilde dizilirler */
    
}
.footer.footer-content{
    border: 1 px solid #ccc;
    height: 350px;
    display: flex;  /* soldan sağa yatay olarak esnek şekilde  */


}
.footer  .footer-content .footer-section{
    flex: 1;
    border: 1 px solid #000;
    padding: 25px;

}
/* linklerin öğe işaretleri yok. (Yazıların başlarında yuvarlak veya herhangi bir ikon yok)*/
.altmenu1{
    list-style-type: none;
   
}
.altmenu1-a{
	color: #75787b;
	text-decoration: none;
    display: block; /*Alt satıra geçmesi için*/
    font-family: SamsungOne;
    font-weight: 400;
    font-size: 13px;
    line-height: 1.71;
	
}
/* Alt menünün içindeki linklerin font özelliklerni belirler*/
.site{
    margin-bottom: 0;
    font-family: SamsungOne;
    font-size: 16px;
    line-height: 2.0;
    color: #000;
}

/* Alt menüyü içeren footer kısmında ki divlerin yerlerini , büyüklüklerini belirler.*/

.footer  .footer-content .footer-section-siteharitası{
    width: 200px;
    padding: 20px;
    position: relative;
    float: left;
}
/* Alt menüyü içeren footer kısmında ki divlerin yerlerini , büyüklüklerini belirler.*/
.footer  .footer-content .footer-section-siteharitası{
    width: 200px;
    padding: 20px;
    position: relative;
    float: left;


}
/* Alt menüyü içeren footer kısmında ki divlerin yerlerini , büyüklüklerini belirler.*/
.footer  .footer-content .footer-section-faydalıbilgiler{
    width: 200px;
    padding: 20px;
    position: relative;
    float: left;
}
/* Alt menüyü içeren footer kısmında ki divlerin yerlerini , büyüklüklerini belirler.*/
.footer  .footer-content .footer-section-destek{
    width: 200px;
    padding: 20px;
    position: relative;
    float: left;

}
/* Alt menüyü içeren footer kısmında ki divlerin yerlerini , büyüklüklerini belirler.*/
.footer  .footer-content .footer-section-sosyalmedya{
    width: 300px;
    padding: 20px;
    position: relative;
    float: left;

}

/* Facebook ikonunun yerini ve büyüklüğünü ayarlıyor.*/
.facebook{
    height: 15%;
    width: -55%;
    padding: 10px;
    position: relative;
    float: left;
}
/* Twitter ikonunun yerini ve büyüklüğünü ayarlıyor.*/
.twitter{
    height: 15%;
    width: -55%;
    padding: 10px;
    position: relative;
    float: left;

}
/* Youtube ikonunun yerini ve büyüklüğünü ayarlıyor.*/
.youtube{
    height: 15%;
    width: -55%;
    padding: 10px;
    position: relative;
    float: left;

}
/* İnstagram ikonunun yerini ve büyüklüğünü ayarlıyor.*/
.instagram{
    height: 15%;
    width: -55%;
    padding: 10px;
    position: relative;
    float: left;

}

/* Bu kısım Telefonlar-Tabletler-Televizyonlar tab'ının bulunduğu divin konumunu belirliyor*/
.container {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding-right: 7.5px;
    padding-left: 7.5px;
}


/* Telefonlar-Tabletler-Televizyonlar tab'ını ortalar. */
#shop-homepage-tabs {
    justify-content: center;
    
}
/* Telefonlar-Tabletler-Televizyonlar tab'ının alt çizgisi siler */
.nav-tabs {
    border-bottom: 0px solid #dee2e6;
}
/* Telefonlar-Tabletler-Televizyonlar tab'ını konumlandırıyor. */
.nav {
    display: -ms-flexbox;
    display: flex; /* soldan sağa yatay olarak esnek şekilde  */
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none; /* öğe işaretleri yok. */
}
/*Altmenü alanı2. Footer2 div'i ile oluşturulan alt kısma renklendirme ve boyutlandırma işlemleri yapıldı. */
.footer2{
    background: #3f3f3f;
    color: #000;
    height: 450px;
    position: relative;
}
/* Alt menüde yazılan linklerin font özellikleri belirlendi*/
.altmenu-a{
	color: #ccc;
	text-decoration: none;
    display: block; /*Alt satıra geçmesi için*/
    font-family: SamsungOne;
    font-weight: 400;
    font-size: 13px;
    line-height: 1.71;
	
}

.altmenu{
    list-style-type: none; /* Yazıların başında öğe işaretleri yok.*/
   
}
.footer2  .footer2-content .footer2-section{
    flex: 1;
    border: 1 px solid #000;
    padding: 40px;

}
/*Kredi kartı iconlarının boyutlarını ve yerlerini belirler.*/
/*visa ikon*/
.vısa{
    height: 45px;
    width:60px;
    top:150px;
    position: relative;
    float: left;
}
/*Mastercard ikon*/
.mastercard{
    height: 45px;
    width:60px;
    top:150px;
    position: relative;
    float: left;
}
/*americanexpress ikon*/
.amerıcanexpress{
    height: 45px;
    width:60px;
    top:150px;
    position: relative;
    float: left;
}
/*payu ikon*/
.payu{
    height: 45px;
    width:60px;
    top:150px;
    position: relative;
    float: left;
}

/* Kredi kartı ikonlarının içinde bulunduğu div. Margin div'in konumunu belirliyor */
.footerı2-ımage{
    margin-left: 70px;
}

.footer2-text{
    margin-top: -115px;
    margin-right: 300px;
}
/* footer2-text div'inin içindeki paragrafın yazı tipi, konumu ve büyüklüğünün düzenlemesi.  */
.altmenuyazı{
    color: #929292;
    font-family: SamsungOne;
    font-weight: 400;
    font-size: 12px;
    margin: 5px 0;
    text-align: right;
    
}
.button {
    margin-bottom: 0;
    border-radius: 0 global-radius global-radius 0;
  
  
}
/* Email type'ını içinde bulunduran div.Burada email type'ının konumlandırılması yapıldı. */
.databinding{
    margin-top: 40px;
    margin-left: 900px;

}
/* Altmenuyazı class'ını içinde bulunduran div. Class'ın konumlandırılması yapıldı. */
.footer2-text2{
    margin-top: 0px;
    margin-right: 150px;
}

/* Email kutucuğunun üzerinde bulunan kaydol adlı link.*/
.kaydol{
    list-style-type: none; /* Yazıların başında öğe işaretleri yok.*/
    font-family: SamsungOne; /* Yazı tipi*/
    text-decoration: none; /* Alt yazı yok.*/
    color: #000;
    

}
/* İçinde checkbox ve label bulunduran div. Konumlandırma yapıldı.*/
.robotdegilim{
    background: #fff;
    margin-top: 55px;
    margin-left: 900px;
    height: 70px;
    width: 300px;


}


/* designed by linkine font özellikleri verildi ve konumlandırma yapıldı .*/
.designed-a{
    color: #ccc;
	text-decoration: none;
    display: block; /*Alt satıra geçmesi için*/
    font-family: SamsungOne;
    font-weight: 400;
    font-size: 13px;
    margin-left: 1000px;
    margin-top: 40;
   
    
}
/* designedby class'ının içindeki img class. Burada eklenen resme konumlandırma ve boyutlandırma yapıldı.*/
.kreatif{

    height: 35;
    width: 35;
    margin-left: 1105px;
    margin-top:-35px;
}


/* Reference : https://designmodo.com/create-css3-mega-menu/ */

/* Resetleme */
.nav2,
.nav2 a,
.nav2 ul,
.nav2 li,
.nav2 div,
.nav2 form,
.nav2 input {
	margin: 0;
	padding: 0;
	border: none;
    outline: none;
    

}


/*Alt çizgiyi kaldırıyor. */
.nav2 a { text-decoration: none; }

.nav2 li { list-style: none; }

/* Menu Container */
.nav2 {
	display: inline-block; /*Yan yana dizilmeleri için*/
	position: relative;
	cursor: default;
    z-index: 500;
}

/* Menü List */
.nav2 > li {
	display: block; /*Alt satıra geçmesi için*/
    float: left;
    
}

/* Menü Links */
.nav2 > li > a {
	position: relative;
	display: block; /*Alt satıra geçmesi için*/
	z-index: 510;
	height: 54px;
	padding: 0 20px;
	line-height: 54px;
	
	font-family: Helvetica, Arial, sans-serif;
	font-size: 12px;
	color: #000000;
	text-shadow: 0 0 1px rgba(0,0,0,.35);

	background: #ffffff;
	border-left: 1px solid white;
	border-right: 1px solid white;


}

.nav2 > li:hover > a { background:white;  }



/* Menu Dropdown */
.nav2 > li > div {
	position: absolute;
	display: block; /*Alt satıra geçmesi için*/
	width: 100%;
	top: 50px;
	left: 0;

	opacity: 0;
	visibility: hidden;
	overflow: hidden;

	background: #ffffff;
	border-radius: 0 0 3px 3px;

}

/* Bu kısımda kategorinin üzerine mouse gelmeden önce alt kategorilerin gizli kalması için gerekli CSS kodları yazıldı.*/
.nav2 > li:hover > div {
	opacity: 1;
	visibility: visible;
	overflow: visible;
}

/* Menu Content Styles */
.nav2 .nav2-column {
	float: left;
	width: 20%;
	padding: 2.5%;
}

.nav2 .nav2-column h3 {
	margin: 20px 0 10px 0;
	line-height: 18px;
	
	font-family: Helvetica, Arial, sans-serif;
	
	font-size: 14px;
	color: #372f2b;
	text-transform: uppercase; /* Yazıyı büyük harflerle göstermesi için */
}
/*Üst kategori*/
.nav2  { color: white; }

.nav2 .nav2-column li a {
	display: block;
	line-height: 26px;
	
	font-family: Helvetica, Arial, sans-serif;
	
	font-size: 13px;
	color: #888888;
}

.nav2 .nav2-column li a:hover { color:white; }

.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table; /*Göüntüyü table ile istenilen şekle getirdik*/
   
  }
  /*İç içe olan öğelerin divin yer özellikleri tanımlandı.*/
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
    height: 30px;
  }
  /* Modal içindeki kısımların kapsayan alanın şekillendirilmesi.*/
  .modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }
  /* Kalıcı bir başlık içeren modal için bir başlık tanımlar*/
  .modal-header h3 {
    margin-top: 0;
    color: #000;
  }
  /*Metin, görüntüler ve formları yani asıl yerleri içerir*/
  .modal-body {
    margin: 20px 0;
  }
  
  
  /* İl değiştirme modal'ında bulunan ekranı kapatma butonu (X) için gerekli konumlandırma ve boyutlandırma yapıldı.*/
  .modal-default-button {
    color: white;
    background-color: black;
    float: right;
    margin-right:-55px;
    margin-top: -60px;
    border-radius: 20px; /* Yuvarlaklığı belirleme*/
    -moz-border-radius: 10px; /* Yuvarlaklığı belirleme*/
    -webkit-border-radius: 10px; /* Yuvarlaklığı belirleme*/
    
  }



/*Sepet iconunun üzerinde bulunan ve arttir fonksiyonuna bağlı olarak artan buton */
  input[type="button"]{
    width: 30px;
    height: 30px;
    border:none;
    font-size:20px;
    background: white;
    color:#E7E7E7;
    }

    
.button{
   
    border: none;
    color: white;
    margin-left: 40px;
    font-size: 14px ; 
    border-radius: 20px;
    margin-top: 0px; 
    transition-duration: 0.4s; /* Kapatma butonuna bastıktan sonra sayfanın kapanması için gerekli süre*/
    display: inline-block;
    font-family: cursive;
   
}
/* Sepete Ekle butonu*/
.button2 {
    background-color: white; 
    color: black; 
    border: 1px solid #000;
    width: 150px;
    
}
/* Reference: https://www.w3schools.com/css/css3_buttons.asp */
/* Mouse butonun üzerine gelince renk değiştirme */
.button2:hover {
    background-color: #008CBA;
    color: white;
}

.button3 {
    background-color: white; 
    color: black; 
    border: 1px solid #000;
    width: 50px;
    
}
  /* Mouse butonun üzerine gelince renk değiştirme */
.button3:hover {
    background-color: #008CBA;
    color: white;
}

/*menu5 dropdown menüsünün konumlandırılması ve boyutlandırılması */
.menu5{   
    position:absolute;
    z-index: 20; /* Dropdown menünün slider kısmının altında kalmaması için yazıldı.*/
    background: #fff;
    height: 40px;
    width: 50px;
    margin-left:500px;
	margin-top:-90px;
}
/*İçinde uye ol, uye girisi, sifremi unuttum ve istek listesi linklerini barındıran class.*/
.uyegirisi1{
    float: left;
    position: relative;
    transition: all .3s ease 1s;
    margin-bottom:15px;
    margin-left:250px;
    
}
.uyegirisi{
    display: block;
    font-size: 14px;
    color: #000;
    padding: 0 15px;
    line-height: 50px;
    border-right: 1px solid rgba(0, 0, 0, .1);
    
}
/* İçinde üyelik için bulunan 4 linkin kategorisi. Konumlandırılması, boyutlandırılması ve gizliliği ayarlandı.*/
.uyegirisi2{
    background: #fff;
    width: 150px;
    position: absolute;
    margin-top: 35px;
    margin-left: 350px;
   opacity: 0; /*Opaklık*/
   transition: 250ms all; /*Geçiş Süresi*/
   visibility: hidden; /*Gizlilik*/
   position:absolute; 
   z-index:2; /* Kategori Slider menünün altında kalmasın.*/
   border: 1px solid #ccc;
   

}
/*Üye Ol, Üye Girişi, Şifremi Unuttum ve İstek Listesi linklerinin classı*/
.uyegirisi3{
    display: block; /*Alt Satıra Geçmesi için */
    padding: 7px 10px;
    color: #000;
    font-size: 12px;
    text-decoration: none;
    
}

.uyegirisi1:hover .uyegirisi2{
    opacity: 1;
    visibility: visible;
    top: 50px;
}


/*  menu12 adlı div'in içinde bulunan kişisel bilgiler, iletişim bilgileri ve seçenekler 
divleri için alan yükseliği belirtildi. */

.menu12{
    height: 1650px;
}


/* ÜYE OL yazısının font özellikleri belirlendi.*/
.sayfabaslıgı3{
    font-family: "SamsungSharpSans-Regular";
    font-size: 22px;
    font-weight: normal;
    box-sizing: inherit; 
    line-height: 60px;
    text-align: center;  /* Konumlandırma ortada*/  
}
/* Kişisel Bilgiler yazısının font özellikleri belirlendi.*/
.kisiselbilgiler{
   font-family: Georgia, serif;
   text-align: center;
   margin-top: 50px;
}
/* Cinsiyet, Ad ,Soyad, Eposta formlarının içinde bulunduğu div. Boyutlandırma ve konumlandırma yapıldı.*/
.kisiselbilgiler2{
    background-color: #f9f9f9;
    height: 300px;
    width: 1300;
    margin-left: 120px;
}
/* Cinsiyet yazısının font özellikleri.*/
.cinsiyet{
    margin-left: 280px;
    padding: 55;
    width: 30;
}
/*İçinde radio buttonları bulunduran div'in konumlandırılması*/
.buton1{
    margin-top: -70px;
    margin-left: 380px;
}

.kadınbuton{
    
    margin-left: 120px;
    margin-top: -80px;
    position: relative;
}
.erkekbuton{
    position: relative;
}

/* Ad text'inin boyutlandırılması ve konumlandırılması.*/
.ad{
    margin-left: 30px;
    margin-top: 10px;
    height: 40px;
    width: 400px;
}
/* Adı: yazısının konumlandırılması.*/
.ad1{
    margin-left: 350px;
    float: left;
}
/* * işaretine renk verildi ve konumlandırıldı */
.zorunlualan, .zorunlualan1, .zorunlualan2 , .zorunlualan3 , .zorunlualan6, .zorunlualan7{
    color: red;
    float:right;
    margin-right: 400px;
    
}
/* Soyad text'inin boyutlandırılması ve konumlandırılması.*/
.soyad{
    margin-right: 160px;
    margin-top: 10px;
    height: 40px;
    width: 400px;
}
/* Soyadı: yazısının konumlandırılması.*/
.soyad1{
    margin-left: 350px;
    float: left;
}
/* posta text'inin boyutlandırılması ve konumlandırılması.*/
.posta{
    margin-left: 10px;
    margin-top: 20px;
    height: 40px;
    width: 400px;
}
/* E-posta: yazısının konumlandırılması.*/
.posta1{
    margin-left: 350px;
    float: left;
}
/* İletişim Bilgileri yazısını içinde bulunduran div*/
.iletisimbilgileri{
    font-family: Georgia, serif;
    text-align: center;
    margin-top: 50px;
}
/*Telefon: yazısını ve text'ini içereren div. Boyutlandırma ve konumlandırma yapıldı.*/
 .iletisimbilgileri2{
    background-color: #f9f9f9;
    height: 110;
    width: 1300;
    margin-left: 120px;
}
.text-box single-line{
    white-space: nowrap
}
.telefon{
    margin-left: 10px;
    margin-top: 10px;
    height: 40px;
    width: 400px;
}
.telefon1{
    margin-left: 350px;
    float: left;
}
.secenekler{
    font-family: Georgia, serif;
    text-align: center;
    margin-top: 50px;
}
.secenekler2{
    background-color: #f9f9f9;
    height: 400;
    width: 1300;
    margin-left: 120px;
}
/* İçinde label ve checkbox bulunan divin boyutlandırılması ve konumlandırılması*/
.bültenler1{

    background-color: #fff;
    height: 130px;
    width: 700px;
    margin-left: 420px;
    border-style: solid; 
    border-width: 0.5px;
    border-color: #ccc;
}
/* Bültenler: yazısının konumlandırılması.*/
.bültenler{
    margin-left: 350px;
    float: left;
}
/*Bültenler1 divinin içinde yer alan yazının ait olduğu class'ın font özellikleri */
.bülten2{
    background-color: #f9f9f9;
    height: 200;
    width: 1300;
    font-family: "Georgia, serif"; /*Yazı tipi*/
    font-size: 14px;   
    
}
/*Kullanıcı Sözleşmesi: yazısının font özellikleri, boyutlandırılması ve konumlandırılması.*/
.sözlesme{
    font-family: Georgia, serif;
    margin-top: 50px;
    margin-left: 280px;
    width: 150;
}
/*İçinde link,checkbox bulunduran label.  */
.sözlesme2{
    background-color: #fff;
    height: 100px;
    width: 500px;
    margin-left: 460px;
    top:0;
    border-style: solid; /*Çerçeveyi çizgi ile belirginleştirme*/
    border-width: 0.5px;
    border-color: #ccc;
}
/*Label içindeki link verilen yazının siyah renkte olması*/
.altmenu-sözlesme{
    color: #000;
}
/*Gizlilik Sözleşmesi: yazısının font özellikleri, konumlandırılması ve boyutlandırılması*/
.gizlilik{
    font-family: Georgia, serif;
    margin-top: 50px;
    margin-left: 260px;
    width: 200;
   
}
/* Gizlilik ile ilgili yazının boyurlandırılması ve konumlandırılması. */
.gizlilik2{
    background-color: #fff;
    height: 100px;
    width: 500px;
    margin-left: 440px;
    border-style: solid; /*Çerçeveyi çizgi ile belirginleştirme*/
    border-width: 0.5px;
    border-color: #ccc; 
}
/*Kullanıcı ve Gizlilik Sözleşmesi ile alakalı yazıların rengi*/
.altmenu-sözlesme{
    color: #000;
}
/*Şifre yazısı için gerekli font özellikleri ve konumlandırma*/
.sifre{
    font-family: Georgia, serif;
    text-align: center;
    margin-top: 50px;
}
/* Şifre, Şifre Tekrarı ve Ben robot değilim kısımlarını içeren div'in boyutlandırılıp konumlandırılması*/
.sifre2{
    background-color: #f9f9f9;
    height: 270;
    width: 1300;
    margin-left: 120px;
}
/*Şifre girilmesi için gerekli text*/
.sifree{
    margin-left: 30px;
    margin-top: 10px;
    height: 40px;
    width: 400px;
}
/*Şifre: yazısının konumlandırılması. */
.sifree1{
    margin-left: 350px;
    float: left;
}
/*Şifre tekrarının girilmesi için gerekli text*/
.sifretekrar{
    margin-left: 22px;
    margin-top: 10px;
    height: 40px;
    width: 400px;
}
/*Lütfen şifrenizi tekrar giriniz: yazısının konulandırılması*/
.sifretekrar1{
    margin-left: 200px;
    float: left;
}
/* İçinde checkbox,img ve ben robot değilim label'i olan div.*/
.robotdegilim0{
    background: #fff;
    margin-top: 45px;
    margin-left: 500px;
    height: 70px;
    width: 300px;
    border: 0.1px solid #ccc;
}
/*Robot değilim resminin konumlandırılması ve boyutlandırılması.*/
.robotdegilimresim2{
    height: 60px;
    width: 70px;
    margin-left: 220px;
    margin-top: -65px;
}
/*Kaydet butonunun bulunduğu div.*/
.kaydet{
    margin-left: 600px;
    margin-bottom: 10px;
    
    
} 
/*Kaydet Linki*/
.kaydet2{
    text-decoration: none;
    color:#ccc;
   
}
/*Kaydet butonunun özellikleri. */
.kaydet1{
    background-color: #120a8f ; 
    color: black; 
    border: 1px solid #120a8f ;
    border-radius: 20px;
    padding: 15px 170px;
    
   
}
/*Mouse butonun üzerine gelince yazının ve butonun renklerinin değişmesi.(Hover: mouse işlemi için)*/
.kaydet1:hover{
    background-color: #fff;
    color: #000;
}

/*Üye Girişi Sayfasındaki başlık*/
.sayfabaslıgı1{
    font-family: "SamsungSharpSans-Regular";
    font-size: 22px;
    font-weight: normal;
    box-sizing: inherit;
    line-height: 60px;
    text-align: center;
    
}
.yeniüye1{
    font-size: 20px;
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    text-align: center;
    font-weight: 20;
    
}
.yeniüye{
    height: 150px;
    width: 600px;
    margin-left: 100px;
    
}
.yeniüye2{
    margin: 0 0 30px;
    border-top: 1px solid #e6e6e6;
    background-color: #f9f9f9;
    padding: 30px;
    line-height: 22px;
    height: 150px;
    width: 600px;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";;

}
/*Üye Ol butonu*/
.üyeol1{
    background-color: #120a8f ; 
    color: black; 
    border: 2px solid #120a8f ;
    border-radius: 20px;
    padding: 15px 170px;
}
  /*Mouse butonun üzerine gelince butonun rengi değişir*/
  .üyeol1:hover {
    background-color: #fff;
    color: #000;
}
/*Üye Ol butonunu kapsayan div*/
.üyeol{
    margin-left: 100px;
}
/*Üye Ol linki*/
.üyeol2{
    text-decoration: none;
    color:#ccc;
    
}
.üyegirisi1{
    font-size: 20px;
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    text-align: center;
    font-weight: 20;
}
.üyegirisi{
    height: 150px;
    width: 600px;
    margin-left: 745px;
    margin-top: -170px;
}
.üyegirisi2{
    border-top: 1px solid #e6e6e6;
    background-color: #f9f9f9;
    padding: 90px;
    line-height: 22px;
    height: 380px;
    width: 600px;
}

/* Email type */
.input-group-field{
    margin-left: 80px;
    margin-top: -50px;
    height: 40px;
    width: 400px;
}

/*Sifre type*/
.input-group-field2{
    margin-left: 80px;
    margin-top: -40px;
    height: 40px;
    width: 400px;
}

/*Checkbox type*/
.input-group-field3{
    margin-left: 100px;
    margin-top: 70px;
}

.benihatırla2{
    margin-left: 120px;
    margin-top: -20px;
}

.sifremiunuttum{
    text-decoration: none;
    color: #000;
    margin-left: 300px;
    
}
/* Link'e renk vermek için yazıldı*/
.sifremiunuttum:visited{
    color: #000;
}
/* Mouse yazının üzerine gelince renk değişikliği */
.sifremiunuttum:hover{
    color: cornflowerblue;
}
.sifremiunuttum1{
    margin-top: -15px;
}
/* İçinde checkbox,img ve label bulunduran div. Konumlandırma yapıldı.*/
.robotdegilim1{
    background: #fff;
    margin-top: 45px;
    margin-left: 100px;
    height: 70px;
    width: 300px;
    border: 0.1px solid #ccc;
}
/*giris butonunu içinde bulunduran div.*/
.giris{
    margin-left: 100px;
    margin-bottom: -30px;
    
}
/*giris linki*/
.giris2{
    text-decoration: none;
    color:#ccc;
}
/*giris butonu*/
.giris1{
    background-color: #120a8f ; 
    color: black; 
    border: 2px solid #120a8f ;
    border-radius: 20px;
    padding: 15px 170px;
    margin-top: 130px;
    
}
/*Mouse'un butonun üzerine gelince renk değiştirmesi*/
.giris1:hover{
    background-color: #fff;
    color: #000;
}
.robotdegilimresim4{
    height: 45px;
    width: 55px;
    margin-left: 230px;
    margin-top: -50px;
}
.altmenüler{
    margin-top: 500px;
}

.sifreunutma{
    margin: 0 0 30px;
    border-top: 1px solid #e6e6e6;
    background-color: #f9f9f9;
    padding: 50px;
    line-height: 22px;
    height: 300px;
    width: 1100px;
    margin-left:180px;
    margin-top: 50px;
}
.sifremiunuttum2{
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    margin-left: 200px;
    margin-top: 10px;
}
.epostaadresi{
    margin-left: 10px;
    margin-top: 25px;
    height: 40px;
    width: 400px;
}
.epostaadresi1{
    margin-left: 160px;
    float: left;
    margin-top: 32px;
}

.robotdegilim2{
    background: #fff;
    margin-top: 45px;
    margin-left: 330px;
    height: 70px;
    width: 300px;
    border: 0.1px solid #ccc;
}
/*Şifremi hatırlat butonunu içinde bulunduran div*/
.sifre5{
    margin-left: 500px;
    margin-bottom: 10px;
    
}
/*Şifremi Hatırlat linki*/
.sifremihatırlat1{
    text-decoration: none;
    color:#ccc;
}
/*Şifremi hatırlat butonu*/
.sifremihatırlat{
    background-color: #120a8f ; 
    color: black; 
    border: 2px solid #120a8f ;
    border-radius: 20px;
    padding: 15px 170px;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 15;
    margin-top: 100px;
}
/* Mouse'un butonun üzerine gelince renk değiştirmesi */
.sifremihatırlat:hover{
    background-color: #fff;
    color: #000;
}
.robotdegilimresim3{
    height: 40;
    width: 50;
    margin-left: 20px;
}
.onecıkantv{
    height: 3250px;
}
.breadcrumb{
    margin: 0;
    padding: 5px 10px;
    background-color: transparent;
    display: flex;
    flex-wrap: wrap;
    margin-top: -30px;
    margin-left: 20px;
}
.breadcrumb li {
    display: inline-block;
    
}
.anasayfa5{
    font-family:Georgia, 'Times New Roman', Times, serif;
    text-decoration: none;
    color: #000000;
}
.avurunleri{
    color: darkblue;
}
.anasayfa6{
    font-family:Georgia, 'Times New Roman', Times, serif;
    color: #000000;
    text-decoration: none;
}
.kategoriler1{
    position: relative;
    margin: 0 0 10px;
    border-bottom: 1px solid #ddd;
    background: #fff;
    font-size: 18px;
    color: #444;
    cursor: pointer;
    width: 200px;
    margin-left: 80px;
    text-decoration: none;
    margin-top: 110px;
}

.kategoriler{
    width: 430px;
    margin-top: -3100px;
}
.kategoriler2{
    margin-left: 50px;
    margin-top: 20px;


}
.panel2{
    text-decoration: none;
    color: #000;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.panel2:hover{
    color: rgb(42, 42, 173);
}
.fıyat1{
    list-style-type: none;
    text-decoration: none;
    margin-left: 90px;
    border-bottom: 1px solid #ddd;
    width: 220px;
}
.fıyat2{
    color: #444;
}
.fıyat2:hover{
    color: #444;
}
.fıyat3{
    margin-left: 100px;
}
.onecıkanbaslık{
    margin-top: 50px;
    margin-left: 400px;
    font-size: 40px;
    width: 700px;
    font-weight: bold;
}
.onecıkanbaslık1{
    margin-left: 400px;
    font-weight: bold;
    
}
.onecıkanbaslık2{
    margin-left: 420px;
    margin-top: -50px;
}
.example2{
    margin-left: 1100px;
    margin-top: -40px;
    height: 20px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    border: 1px solid white;
    
}

.urunler1{
    margin-left: 400px;
    margin-top: 80px;
    width: 300px;
}
.urunler2{
    margin-left: 800px;
    margin-top:-305px;
    width: 300px;
}
.panel5{
    padding: 0 18px;
    background-color: white;
    display: none;
    overflow: hidden;
}

#verticle {
    border-left: 1px solid #ccc;
    height: 200px;
    position: absolute;
    left: 25%;
    margin-left: -2px;
    margin-top: -60px;
}
.mserisi-ozellikler1{
    margin-left: 150px;
    margin-top: -550px;
}
.mserisi-ozellikler2{
    margin-left: 550px;
    margin-top: -110px;
}
.mserisi-ozellikler3{
    margin-left: 900px;
    margin-top: -110px;
}
.mserisi-ozellikler4{
    margin-left: 1200px;
    margin-top: -110px;
}
.uekranp1{
    margin-top: -1400px;
    margin-left: 300px;
}
.tasarım1{
    margin-top: 1000px;
    font-size: 55px;
    font-weight: bold;
    margin-left: 370px;
}
.tasarım2{
    margin-left: 350px;
    margin-top: 50px;
}
.uclukamera{
    width: 400px;
    height: 600px;
    margin-top: 100px;
    margin-left: 150px;
}
.uclukamera3{
    margin-left: 750px;
    margin-top: -650px;
}
.ultragenis{
    width: 900px;
    font-size: 80px;
    font-weight: bold;
    margin-left: 350px;
}
.ultragenis2{
    margin-top: 100px;
    margin-left: 350px;
    font-size: 16px;
}

.ultragenis4{
    background:url(https://images.samsung.com/is/image/samsung/tr-feature---184096045) ;
    height: 90px;
    width: 90px;
    margin-left: 600px;
    margin-top: 80px;
}
.ultragenis5{
    
    height: 90px;
    width: 90px;
    margin-left: 200px;
    margin-top: 80px;
}
.odakkamera{
    width: 1000px;
    font-size: 80px;
    font-weight: bold;
    margin-left:300px;
    margin-top: 100px;
}
.odakacik{
    
    height: 90px;
    width: 90px;
    margin-left: 780px;
    margin-top: 60px;
}
.odakkapali{
  
    height: 90px;
    width: 90px;
    margin-left: 600px;
    margin-top: -135px;
}
.güc{
    width: 800;
    color: #636363;
    font-size: 10px;
    margin-left: 300px;
    margin-right: 300px;
}
.parmakizi2{
    margin-left: 200px;
    margin-top: -100px;
    width: 300px;
}
.parmakizi{
    margin-left: 100px;
}
.yuztanıma2{
    width: 300px;
    margin-left:200px;
    margin-top: -100px;
}
/*Açılır kapanır footer */
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to  {
    opacity: 0;
}
.mserisi-ozellik17{
    background: #f7f7f7;
    height: 800px;
    width: 1350px;
    margin-left: 100px;
    margin-top: 50px;
}
.fiyat{
    position: fixed;
    bottom: 0;
    background: #ffff;
    width: 100%;
    margin-top: 150px;
}
.anaekran{
    margin-top: 100px;
    margin-left:200px;
    width: 400px;
}
.anakeran2{
    
    margin-top: 300px;
    margin-left: 270px;
    width: 300px;
}
.anaekran3{
    
    width: 400px;
    margin-top: -400px;
    margin-left: 800px;
}
.anaekran4{
   
    width: 400px;
    margin-left: 800px;
    margin-top: 200px;
}
/*Galaxy m serisi detay sayfasındaki açılır kapanır div için oluşturulan buton*/
.accordion3{
    background: #f7f7f7;
    color: #f7f7f7;
    cursor: pointer;
    padding: 5px;
    width: 250px;
    text-align: left;
    border: 0.5px solid white;
    outline: none;
    transition: 0.4s;
    font: 15px Lato, sans-serif;
    text-decoration: none;
    list-style-type: none;
    margin-left: 600px;
    margin-top: -150px;
}

.mserisiozellik18{
    background: #E7E7E7;
    width:1350px ;
    height: 4300px;
    margin-left: 80px;
}
#mserisi-ozellikler19{
    height: 100px;
    width: 1350px;
    margin-left: 100px;
    margin-top: 0px;
    background:#E7E7E7 ;
}
#sarb{
    list-style-type: none;
    text-decoration: none;
}
#sarb:hover{
    text-decoration: none;
}

.html, .body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0; padding: 0;
    font-family: sans-serif;
    text-align: center;
  }
  
.active:after {
content: "\2796"; /* Unicode character for "minus" sign (-) */
}

.galaxym{

height: 2000px;
}



.mobilsag{
margin-top: -750px;
margin-left: 600px;
width: 800px;
height: 800px;
}

.mobilbtns{
background-color: white;
width: 170px;
height: 80px;
border: 1px solid #ccc;
}
.mobilbtns1{
background-color: white;
width: 170px;
height: 80px;
border: 1px solid blue;
}

.mobilbtns:hover{

border: 1px solid black;
}
.mobilbtns2{
background-color: white;
width: 530px;
height: 80px;
border: 1px solid blue;
}

.mobilbtns3{
background-color: white;
width: 530px;
height: 80px;
border: 1px solid #ccc;
}
.mobilbtns3:hover{

border: 1px solid black;

}


.mobilbtns4{
background-color: white;
width: 450px;
height: 80px;
border: 1px solid #ccc;
}
.mobilbtns4:hover{

border: 1px solid black;

}


.renkbtns{

width: 170px;
height: 190px;
background-color: white;
border: 1px solid #ccc;


}

.renkbtns:hover{

border: 1px solid black;

}
.renkbtns1{

width: 170px;
height: 190px;
background-color: white;
border: 1px solid blue;

}
.nasilcalisilir{

color: #888888;
}


img.d1 {

margin-left:120px;
width: 50px;
height: 50px;
}
/*14 gün iade ikonu*/
img.d3 {
margin-top: -100px;
margin-left:60px;
width: 40px;
height: 40px;
}
/*kargo takibi ikonu*/
img.d5{
margin-top: -190px;
margin-left:400px;
width: 40px;
height: 40px;
}
/* Ücretsiz Kargo*/
span.d2{
font-size:8pt;
margin-left: 90px;

}
/*14 Gün Koşulsuz İade*/
span.d4{
font-size:8pt;
margin-left: 210px;
margin-bottom: 300px;
}
/*24/7 Kargo Takibi*/
span.d6{
font-size:8pt;
margin-left: 370px;
}

p.text-shop1{
margin-left:370px;
font-size:8pt;
margin-top:20px

}

/*telefon destek css */
.telefon1{
    margin-left:5px;
    width: 1000px;
}
.telefon4{

    border: 1px solid #808080;
    height: 750px;
    width: 95%;
    margin-left: 40px;

}
.telefon5{
    margin-left: 80px;
    margin-top: -70px;
    
}
.accordion4{
    cursor: pointer;
    outline: none;
    transition: 0.4s;
    font: 15px Lato, sans-serif;
    width: 200px;
    
}
.panel4{
    padding: 0 18px;
    background-color: white;
    display: none;
	overflow: hidden;
}
.canlıdestek2{
    margin-left: 80px;
    margin-top: -50px;
}
.eposta2{
    margin-left: 80px;
    margin-top: -45px;
}
.footer{
    background: #e9e9e9;
    color: #000;
    height: 250px;
    width: 2000;
    position: relative;
    margin-right: 500px;
    
    
    
}
/*yeni footer*/
.footer3{
    background: #e9e9e9;
    color: #000;
    height: 350px;
    width: 100%;
    position: relative; /* normal şekilde dizilirler */
   
}
.footer3.footer-content{
    border: 1 px solid #ccc;
    height: 350px;
    display: flex;  /* soldan sağa yatay olarak esnek şekilde  */


}
.footer3  .footer-content .footer-section{
    flex: 1;
    border: 1 px solid #000;
    padding: 25px;

}
.footer3  .footer-content .footer-section-siteharitası{
    width: 200px;
    padding: 50px;
    position: relative;
    float: left;
    margin-left: 75px;
    margin-top: 50px;
}
/* Alt menüyü içeren footer kısmında ki divlerin yerlerini , büyüklüklerini belirler.*/
.footer3  .footer-content .footer-section-siteharitası{
    width: 200px;
    padding: 20px;
    position: relative;
    float: left;
    margin-top: 50px;


}
/* Alt menüyü içeren footer kısmında ki divlerin yerlerini , büyüklüklerini belirler.*/
.footer3  .footer-content .footer-section-faydalıbilgiler{
    width: 200px;
    padding: 20px;
    position: relative;
    float: left;
    margin-top: 50px;
}
/* Alt menüyü içeren footer kısmında ki divlerin yerlerini , büyüklüklerini belirler.*/
.footer3  .footer-content .footer-section-destek{
    width: 200px;
    padding: 20px;
    position: relative;
    float: left;
    margin-top: 50px;

}
/* Alt menüyü içeren footer kısmında ki divlerin yerlerini , büyüklüklerini belirler.*/
.footer3  .footer-content .footer-section-sosyalmedya{
    width: 300px;
    padding: 20px;
    position: relative;
    float: left;
    margin-top: 50px;

}
.fhak{
    background: #e9e9e9;
    color: #000;
    height: 80px;
    width: 100%;
    font-size: 12px;
    line-height: 12px;


}
.altmenüler{
    border: 1px solid #808080;
    margin-top: -20px;

}
.altmenu2{
    list-style-type: none;
   
}
.altmenu2-a{
	color: #696969;
	text-decoration: none;
    display: block; /*Alt satıra geçmesi için*/
    font-family: SamsungOne;
    font-weight: 400;
    font-size: 13px;
    line-height: 1.71;
	
}
.footer4{
    background: #525252;;
    color: #000;
    height: 70px;
    position: relative;
}

/*e-posta*/
.anasayfa7{
    font-family:Georgia, 'Times New Roman', Times, serif;
    color: gray;
    text-decoration: none;
}
.anasayfa8{
    font-family:Georgia, 'Times New Roman', Times, serif;
    text-decoration: none;
    color: gray;
}
.anasayfa9{
    font-family:Georgia, 'Times New Roman', Times, serif;
    text-decoration: none;
    color: gray;
}
.eposta3{
    width: 100%;
    margin-left:0px;
}
.geneldestek{
    background-color: #f7f7f7;
    height: 270px;
    width: 400px;
    margin-left: 300px;
    margin-top: -100px;
}
.geneldestek1{
    margin-top: 30px;
    margin-left: 50px;
}
.button5 {
    background-color: #f7f7f7;
    color: black;
    border: 2px solid #000;
    border-radius: 20px;
    width: 250px;
    margin-top: 50px;
    font-family: 'Times New Roman', Times, serif;
}
.button5:hover {
    background-color: #000;
    color: white;
}
.geneldestek2{
    background-color: #f7f7f7;
    height: 270px;
    width: 400px;
    margin-left: 710px;
    margin-top: -420px;
}
/*1. Galeri için stil düzenleme */
  .slider-container { 
    overflow: hidden; 
    width:75% ; height: 540px; 
    position: absolute; top: 50%; left: 50%; 
    transform: translate(-50%, -50%);
    margin-top:1000px ;
    margin-left: -80px;
  }

    /*1. Slider için değiştirme çubuğu*/
  .navigator { 
      text-align: center; display: inline-block; margin: 15px auto; overflow: hidden; padding-bottom: 10px; 
      margin-top:600px ;
      margin-left: 500px; }
  .navigator li { 
    float: left;
    color: #ecf0f1; 
    border-radius: 50%; 
    padding: 7px 11px; 
    margin: 0 10px; cursor: pointer;
    box-shadow: 0 3px 17px rgba(0,0,0,.3);
    transition: all .32s ease;
    position: relative;
   
  }
/*2. Galeri için stil düzenleme */
  .slider1-container1 { 
    overflow: hidden; 
    width:75% ; height: 420px; 
    position: absolute; top: 50%; left: 50%; 
    transform: translate(-50%, -50%);
    margin-top:1800px ;
    margin-left: -100px;
  }

    /*2. Slider için değiştirme çubuğu*/
  .navigator1 { 
      text-align: center; display: inline-block; margin: 15px auto; overflow: hidden; padding-bottom: 10px; 
      margin-top:600px ;
      margin-left: 500px; }
  .navigator1 li { 
    float: left;
    color: #ecf0f1; 
    border-radius: 50%; 
    padding: 7px 11px; 
    margin: 0 10px; cursor: pointer;
    box-shadow: 0 3px 17px rgba(0,0,0,.3);
    transition: all .32s ease;
    position: relative;
   
  }
</style>