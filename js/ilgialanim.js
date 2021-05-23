$(document).ready (function(){
  
  function getData(){
  var url = "https://fcc-weather-api.glitch.me/api/current?";
  var latitude;
  var longitude;
  var havaDurumUrl;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
   latitude = position.coords.latitude;
   longitude = position.coords.longitude;
   havaDurumUrl = (url + "lat=" + latitude +  "&lon=" + longitude);
  
      	$.ajax({
				url:havaDurumUrl,
        dataType:'json',
				success: function(result){

					$("#place").text(result.name);
					$("#country").text(result.sys.country);
					$("#weatherMain").text(result.weather[0].main);
					$("#weatherDescription").text(result.weather[0].description);
					$("#weatherIcon").html("<img src= weatherIcon>" );
					$("#temperature").text(result.main.temp);
					$("#tempMin").text(result.main.temp_min);
      
				
          
      var havaresmi = result.weather[0].main;
      
    switch(havaresmi){
       case 'Clouds':
              day = "Hava durumu bulutludur";
             $("#durumimg").attr("src","http://bit.ly/2E5erjr");
              break;
       case 'Rains':
              day = "Hava durumu yağmurludur";
        $("#durumimg").attr("src","http://bit.ly/2seoEo4");
              break;
        case 'Clear':
              day = "Hava durumu açık";
        $("#durumimg").attr("src","http://bit.ly/2sh2hhV");
              break;
  }
  document.getElementById('baslik').innerHTML=day;
        
          var c = result.main.temp_min;
          function convertF(celsius){
            var fahrenheit;
            fahrenheit = (celsius * (9/5)) + 32;
            return fahrenheit;
          }
          
          
            $("#unit").on("click",function(){
              if($("#unit").html()==="Fahrenheit göster!"){
              var fahren = convertF(c);
               fahren = Math.round(fahren);
              $("#tempMin").text(fahren);
              $("#unitLabel").text("\u2109")
              $("#unit").html("Fahrenheit göster!");
                } else {
                  $("#tempMin").text(c);
                  $("#unit").html("Fahrenheit göster!");
                   $("#unitLabel").text("\u2103")
                }
               });
      
				}
			});
      });
    };
  }
  getData();
  

  });
 
