function formDenetle(){
    var Ad=document.getElementById('ad').value;
    var labelAd=document.getElementById('labelAd');
    var Soyad=document.getElementById('soyad').value;
    var labelSoyad=document.getElementById('labelSoyad');
    var Mesaj=document.getElementById('mesaj').value;
    var labelMesaj=document.getElementById('labelMesaj');
    var Hata=document.getElementById('hata');
    if(!(isNaN(Ad))){
        labelAd.style.backgroundColor="#fb3640";
        Hata.style.visibility="visible";
    }
   
    if(!(isNaN(Soyad))){
        labelSoyad.style.backgroundColor="#fb3640";
        Hata.style.visibility="visible";
    }
   
    if(Mesaj==""){
        labelMesaj.style.backgroundColor="#fb3640";
        Hata.style.visibility="visible";
    }
   
    if(isNaN(ad) && isNaN(Soyad) && Mesaj != ""){
        return true;
    }
    else{
        return false;
    }
}



 var btn=document.querySelector("button[type=reset]");
 btn.addEventListener("click",function temizle(){
    
    document.querySelector("#labelAd").style.backgroundColor="aqua";
    document.querySelector("#labelSoyad").style.backgroundColor="aqua";
    document.querySelector("#labelMesaj").style.backgroundColor="aqua";

    document.querySelector("#hata").style.visibility="visible";
    hata.style.visibility="hidden";
});
// btn. .onclick()=temizle();
// var x= document.querySelector("button[type=reset]").click(){
//     temizle();
// };

// document.querySelector("button[type=reset]").click(){temizle();}
