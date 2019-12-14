<template>

  <VueFaqAccordion 
    :items="myItems"
  />
</template>

<script>
import VueFaqAccordion from 'vue-faq-accordion'

export default {
  components: {
    VueFaqAccordion
  },
  data () {
    return {
      myItems: [
          {
            title: ' Üye Olma',
            value: 'Shop.samsung.com/tr’ye üye olarak Samsung ürünlerine 7 gün 24 saat dilediğiniz yerden ve dilediğiniz zaman ulaşabilir, online alışverişin rahatlığını yaşarken kampanyalarımızdan herkesten önce haberdar olabilirsiniz. Üye olmak için sayfanın en üstünde bulunan “Üye Ol” butonuna tıklayarak sizden istenen bilgileri doldurmanız ve şifrenizi belirlemeniz yeterlidir.',
          },
          {
            title: 'Üyelik İptali',
            value: ' Web sitemizin en üstünde yer alan kullanıcı alanından üye girişinizi yaptıktan sonra “müşteri bilgilerim” sayfasından üyelik bilgilerinizi silebilirsiniz. Sipariş vermek istediğinizde yeniden üye olmanız gerekecektir.',
          },
          {
            title: 'Nasıl Sipariş Verebilirim ?',
            value: ' Satın almak istediğiniz ürün için "Sepete Ekle" butonuna bastığınızda ürün sepetinize eklenecektir. “Alışverişi Tamamla” butonuna tıkladığınızda teslimat bilgileri ekranına gelirsiniz. Teslimat ve fatura adresi bilgilerini doldurduktan sonra “Devam Et” butonuna bastığınızda ödeme bilgileri ekranına ulaşırsınız. Kredi kartı bilgilerinizi girdikten sonra “Siparişi Onayla” butonuna sadece bir defa tıklayarak siparişinizi onaylayabilirsiniz. Kurumsal fatura siparişleri için Vergi Dairesi ve Vergi Numarasının girilmesi zorunludur.',
          },
          {
            title: ' Sipariş Bilgilerimi Nasıl Görebilirim?',
            value: ' Siparişiniz onaylandığında sipariş numarası ekranda görünecektir. Ayrıca sipariş bilgilerinize ”Siparişlerim” sayfasından da ulaşabilirsiniz. Shop.samsung.com/tr’den satın aldığınız ürünlerin kargo takibi, değişim, iade ve servis gönderi işlemleri için sipariş numaranız gerekmektedir.',
          },
          {
            title: ' Siparişimi Değiştirebilir / İptal Edebilir Miyim?',
            value: ' Siparişinizi teslim aldıktan sonra “Mesafeli Sözleşmeler Yönetmeliği” gereğince ürününüzü 14 gün içinde iade edebilirsiniz.*(*Sadece shop.samsung.com.tr üzerinden yapılan alımlarda geçerlidir.)Sipariş/ürün iptali için bize haftanın her günü saat 08:00-20:00 arası 444 77 11 nolu Müşteri Destek Hattımızdan veya http://www.samsung.com/tr/support/erms1/ adresindeki iletişim formundan ulaşabilirsiniz.İadeler orjinal kutu/ambalajı ve faturasıyla birlikte yapılmalıdır. Ürünler ve bütün standart aksesuarları hasarsız, kullanılmamış ve tam olarak gönderilmelidir. Telefon, taşınabilir ve görüntülü elektronik cihazlar vb. için ürün ekranında yer alan koruma bandı çıkarılmamış olmalıdır.',
          },
          {
            title: ' Kargo ve Teslimat',
            value: 'Siparişiniz onaylandıktan sonra e-faturanız e-posta adresinize gönderilecektir. Ürününüz kargo firmasına teslim edildiğinde kargo takip bilgileri size SMS ve e-posta aracılığıyla iletilecektir.Satın almış olduğunuz ürün/ürünlerin siparişten teslimata kadar tüm aşamalarını "Siparişlerim" adımından takip edebilir veya 444 77 11 nolu telefondan Samsung Müşteri Hizmetleri Servisimizden bilgi alabilirsiniz.',
          },
          {
            title:  'Siparişim elime ne zaman ulaşır?',
            value: ' Shop.Samsung’dan Türkiye’nin her yerine teslimat yapılmaktadır. Ürünlerinizin teslimatı Samsung Electronics Türkiye güvencesi altında anlaşmalı olduğumuz kargo firmaları tarafından yapılmaktadır. Teslimatlar sipariş sırasında belirtmiş olduğunuz teslimat adresinde size veya sizin tarafınızdan belirlenmiş olan 2. kişiye (sadece kimlik ibrazı karşılığı) yapılmaktadır.Hafta içi saat 14:00’e kadar ürünler stokta ise aynı gün işlem görürler. Bu saatlerin dışında verilen siparişler ise ilk iş günü içinde işleme alınırlar. Hazırda bulunmayan ya da sipariş üzerine üretimi yapılan ürünlerin gönderimleri ise en geç siparişin verildiği günden sonraki 3 iş günü içerisinde kargo firmasına teslim edilir. Kargo firmaları sipariş etmiş olduğunuz ürünleri resmi tatil ve pazar günleri dışında kalan tüm günlerde (cumartesi dahil) teslim edilebilmektedir.Kargo firmalarının teslim süreleri bölgeye göre değişebilmekte olup ortalama 1-4 iş günüdür. Kargoda bulunan siparişlerinizin o anda hangi aşamada olduğunu öğrenmek isterseniz "Siparişlerim" adımından takip edebilirsiniz.Her türlü soru ve görüşleriniz için Samsung Çağrı Merkezinden 444 77 11 veya http://www.samsung.com/tr/support/erms1/ İletişim Formu’ndan bize ulaşabilirsiniz. Büyük Hacimli Ürünler / Beyaz Eşya vb. kategorilerde yer alan ürünlerde kargo teslimatları evinize kadar yapılmaktadır. İçinde farklı ürün gruplarının (cep telefonu, hoparlör, buzdolabı vb) yer aldığı siparişlerde, farklı kargo teslimatları yapılabilecektir. Siparişiniz size ulaştığında, Yetkili servis kurulumu gerektirmeyen cep telefonu vb. ürünlerde, kargo ambalajında sorun yoksa bile kargo paketini kontrol etmeniz faydalı olacaktır. Paket içeriğinde herhangi bir yanlışlık varsa ya da ürünler hasar görmüşse kargo görevlisine hasar tespit tutanağı hazırlatıp Çağrı Merkezimizle iletişime geçmelisiniz.Kurulumu yetkili servis tarafından yapılacak olan ürünlerde ürünün ambalajını açmadan kurulum için Samsung çağrı merkezi 444 77 11 ile irtibata geçiniz. Yetkili Servis dışında açılan ürünler garanti kapsamı dışında kalabilmektedir. Kurulumunun ardından sorun çıkarsa servis raporu hazırlatarak Çağrı Merkezimizle iletişime geçebilirsiniz.',
          },
          {
            title: 'Teslimat esnasında adresimde bulunmamam durumunda?',
            value: 'Shop.samsung.com/tr’ye üye olarak Samsung ürünlerine 7 gün 24 saat dilediğiniz yerden ve dilediğiniz zaman ulaşabilir, online alışverişin rahatlığını yaşarken kampanyalarımızdan herkesten önce haberdar olabilirsiniz. Üye olmak için sayfanın en üstünde bulunan “Üye Ol” butonuna tıklayarak sizden istenen bilgileri doldurmanız ve şifrenizi belirlemeniz yeterlidir.',
          },
          {
            title: 'Faturamın teslimatı nereye yapılacak?',
            value: 'Kargo sorumlusu size kargo şirketinin telefon numarasını içeren bir haber formu bırakacaktır. Haber formunun bırakılmasını takip eden iş günü itibariyle aynı adrese ikinci uğrama gerçekleştirilecektir. Teslim edilemeyen siparişler iade alınacaktır.',
          },
          {
            title: 'Ödeme Ve Güvenlik',
            value: ' Siparişinize istinaden ürününüz size irsaliye ile ulaştırılacak, faturanız ise belirtmiş olduğunuz e-posta adresinize e-fatura olarak gönderilecektir.',
          },
          {
            title: ' SSL',
            value: ' Sitemizde güvenliğinizi sağlamak için ziyaretçi ve site arasında gerçekleşen haberleşmede "256 bitlik Rapid SSL sertifikası” kullanılmaktadır. "Secure Sockets Layer” kısaltması olarak adlandırılan SSL ,Sunucu ile istemci arasındaki iletişimin şifrelenmiş şekilde yapılabilmesine imkan veren standartlaşmış bir teknolojidir.Sitemizdeki güvenli ortamda yapacağınız alışveriş işlemlerinde siz ve kredi kartını size tahsis eden banka haricinde hiçbir kişi , kurum ve kuruluş tarafından bilgilerinize ulaşamamaktadır.Kart bilgilerinize sitemiz tarafından dahi erişilememektedir. Kredi kart bilgileriniz e-mail veya benzeri yöntemlerle iletilmez, doğrudan banka POS sistemine iletilir.Kredi kartı bilgilerinin siteden bankaya aktarılması ile ilgili güvenlik, Bankanın sunduğu maksimum güvenlik ile gerçekleşmektedir. Sözkonusu güvenliğin çok sayıda bileşenin yanında CVV2 /CVC2 kodu da çalıntı kart veya kart bilgileri ile alışverişe karşı önlem olarak sitemizde kullanılmaktadır.',
          },
          {
            title: 'Müşteri Satış Sözleşmesi Nedir?',
            value: 'Müşteri Satış Sözleşmesi, 6502 sayılı "Tüketicinin korunması hakkındaki kanun" gereğince müşteri haklarını tanımlamak ve korumak amacıyla hazırlanmıştır. İlgili kanun gereği internet üzerinden alışveriş yapan müşterilerin bu sözleşmeyi elektronik ortamda kabul etmesi gerekmektedir. Müşteri Satış Sözleşmesi kabul edilmeden samsung.com.tr aracılığıyla alışveriş yapılamamaktadır. Mesafeli Sözleşmeler Yönetmeliğine buraya tıklayarak ulaşabilirsiniz.',
          },
          {
            title: 'Garanti Koşulları',
            value: ' Garanti süreleri ve koşulları ile ilgili aşağıda yer alan bilgiler kılavuz özelliği taşımakta olup, değişiklik gösterebilir. Garanti süresi ürünün tüketiciye teslim tarihinden itibaren başlar. Garanti uygulaması sırasında değiştirilen ürünün garanti süresi, satın alınan ürünün kalan garanti süresi ile sınırlıdır. Servis noktalarımıza onarım amaçlı girişi olan ürünlerin azami tamir süresi 20 iş günüdür. Tüketicinin ürünü kullanma kılavuzunda yer alan hususlara aykırı kullanmasından kaynaklanan arızalar garanti kapsamı içerisinde değerlendirilmez. Samsung ürününüzle ilgili teknik yardım almak için Samsung Yetkili Servis merkezlerini ziyaret edebilir, ya da Müşteri Hizmetleri merkezimiz ile temasa geçebilirsiniz (444 77 11). Ürününüzün garanti belgesi, faturasının fotokopisi ile model ve seri numarasını belirterek daha kısa sürede yardım alabilirsiniz.Garanti Süreleri:Cep Telefonu: 2 yılBluetooth Kulaklık: 2 yılTelevizyon ve Ev Sinema Sistemleri: 2 yılBulaşık Makinesi: 3 yıl (01.06.2014 ten itibaren)Mikrodalga Fırın: 2 yılElektrik Süpürgesi: 2 yılSet üstü Ocak, Davlumbaz ve Fırın: 2 yılMonitör: 2 yılBuzdolabı: 3 yıl (01.10.2011 itibariyle)Çamaşır Makinesi: 3 yıl (01.10.2011 itibariyle)Klima: 3 yıl (01.06.2012 itibariyle)Bu tarih öncesinde satışı yapılan ürünlerin geçerli olan garanti süresi 2 yıldır.Size en yakın yetkili servisimizi buradan ya da 444 77 11 no’lu Çağrı Merkezimizden öğrenebilirsiniz.',
          },
      
        

          
        ]
    }
  }
}

</script>
