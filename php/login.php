<?php

error_reporting(0);

if(isset($_POST['login'])){
    $kulAd="b201210064@sakarya.edu.tr";
    $sifre="b201210064";
    $kullaniciAdi=$_POST["kullaniciAdi"];
    $parola=$_POST["parola"];
    if($kullaniciAdi!="" && $parola!=""){
        if($kullaniciAdi==$kulAd && $parola==$sifre){
            echo "Hoşgeldiniz <br><hr>";
            echo "$kullaniciAdi";
        }
        else{
            header("Location:../html/login.html");
        }
    }
    else{
        header("Location:../html/login.html");
    }
}
else {
    header("Location:../html/login.html");
}
?>
