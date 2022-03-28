
$(document).ready(function(){
	$('#searchWeather').click(function(){
	
		var city = $("#city").val();
		
		if(city != ''){
			$.ajax({
				
				url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" + 
				"&APPID=c46197112d07804a8ecde3b402390a47",
				type: "GET",
				dataType: "jsonp",
				success: function(data){
					showCurrent(data);
					get5Day(data.id);
					
					$("#city").val('');
				}
			});
			
			
			
			
			
			
		}else{
			$("#error").html("<div class='alert alert-danger alert-dismissable'> <a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Field cannot be empty</div>")
		}
		
	});
});

const d = new Date();
let hour = d.getHours();
document.getElementById("hour") = hour;



function showCurrent(data){
	//current temp 
	var mainTemp = data.main.temp;
	mainTemp = mainTemp.toFixed();
	alert(mainTemp);	
	
	//min temp 
	var minTemp = data.main.temp_min;
	minTemp = minTemp.toFixed();
	
	
	var maxTemp = data.main.temp_max;
	maxTemp = maxTemp.toFixed();
	
	
$("#showCurrent").html(

	"<h2>Current Weather for " + name + ", " + data.sys.country + "</h2>" +
	//"<h3><strong>Id </strong>: "+ data.id +"</h3>"	+
	
	"<h3><strong>Current Temperature</strong>: "+ mainTemp +"</h3>" + 
	
	"<h3><strong>Condition</strong>: </h3>" +
	"<h3><strong>Description</strong>: " + data.weather[0].main + "<img src='http://openweathermap.org/img/w/" + data.weather[0].icon+ ".png'> </h3>" +
	//"<h3><strong>Description</strong>: "+ data.weather[0].description +"</h3>" +
	
	"<h3><strong>Min Temperature</strong>: "+ minTemp +"</h3>" +
	"<h3><strong>Max Temperature</strong>: "+ maxTemp + "</h3>" +
	
	"<h3><strong>Pressure</strong>: "+ data.main.pressure +"</h3>" +
	"<h3><strong>Humidity</strong>: "+ data.main.humidity +"</h3>" 
	
	

	);
}
function get5Day(id){
	//alert("hello get 5 day" + id);
	$.ajax({
			
		url: 'http://api.openweathermap.org/data/2.5/forecast?id=' + id + "&units=imperial&APPID=0776a7347c28d9ffd9b01109429eaff1",
				type: "GET" ,
				dataType: "jsonp" ,
				success: function(data) {
					show5day(data);
				}
			});


}
function show5day(data) {

	var d3 = new Date();
	d3.setDate(d3.getDate() + 2);
 
 var d4 = new Date();
	d4.setDate(d4.getDate() + 3);
	
	var d5 = new Date();
	d5.setDate(d5.getDate() + 4);
	


// 	//alert("5 day");
$("#show5day").html(

	"<h2> Todays Forcast: </h2>"	+
	"<p> " + data.list[0].main.temp + " / " + data.list[0].main.temp + "</p>"  +

	"<h2> Tomorrows  Temperature: </h2>" +
	"<p> " + data.list[1].main.temp + " / " + data.list[1].main.temp + "</p>"  +
	
	"<h2>" + d3 + " Temperature: </h2> " + 
	 "<h2>" +  data.list[2].main.temp_min + "/" + data.list[2].main.temp_max + "</h2>" +
	 
	 "<h2>" +d4+ " Temperature: " +
	 "<p>" + data.list[3].main.temp_min +  "/" + data.list[3].main.temp_max + "</p>" +

	"<h2>" +d5+ " Temperature: </h2>" +
	"<p>" + data.list[4].main.temp_min + "/" + data.list[4].main.temp_max + "</p>" +
	
	"<p> Calculations done @ : " + data.list[0].dt_txt + "</p>"
	);
	
}



// $(function () {
// 	var isMetric = false;
// 	var locationUrl = "";
// 	var weatherString = "";
// 	var language = "en"; 
// 	var apiKey = "y8hul3d5vTj3CnU0cZxBPB4F2NRzg5NG";
// 	
// 	//look up city user searches for 	
// 	var CityLookUp = function (freetext) {
// 		//locationURL = "http://apidev.accuweather.com/locations/v1/search?q=" + freeText + "&apikey=" + apiKey;
// 		// ajax call 
// 	
// 	}
// 
// 	
// 	//location Current condition (location key) 
// 	
// 	
// 
// 
// 	//pressing enter
// 	$("#SearchTextBox").keypress(function (z) {
// 		if ((z.which && z.which == 13) || (z.keyCode && z.keyCode == 13)) {
// 			var text = $("#SearchTextBox").val();
// 			CityLookUp(text);
// 			return false;
// 		} else {
// 			return true;
// 		}
// 	});
// 	
// 	//search botton 
// 	$("#SearchButton").click(function () {
// 		var text = $("#SearchTextBox").val();
// 			CityLookUp(text);
// 	});
// });
// 		
		
		
		
		
