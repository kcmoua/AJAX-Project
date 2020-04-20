$(".button").click( () => {  // on click function for the button
    let zipCode = $("#zipcode").val();  // stores the input from the textbox into a variable

    $.get("https://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&appid=569c92bb68ebf620a1a5106b1e8fccac", (weatherInfo) => {  // link to the weather API and gets the data
        console.log(weatherInfo);  // console log the object to show it's content
        let weather = weatherInfo.weather[0].main;
        let lat = weatherInfo.coord.lat;
        let lon = weatherInfo.coord.lon;

        switch(weather){
            case "Thunderstorm":
                $("img").attr("src", "https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-23-128.png");
                break;
            case "Rain" || "Drizzle":
                $("img").attr("src", "https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-31-128.png");
                break;
            case "Snow":
                $("img").attr("src", "https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-24-128.png");
                break;
            case "Mist" || "Fog":
                $("img").attr("src", "https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-27-128.png");
                break;
            case "Clear":
                $("img").attr("src", "https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-01-128.png");
                break;
            case "Clouds":
                $("img").attr("src", "https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-22-128.png");
                break;
            // case "Smoke":
            //     $("img").attr("src", "");
            //     break;
            // case "Haze":
            //     $("img").attr("src", "");
            //     break;
            // case "Dust":
            //     $("img").attr("src", "");
            //     break;
            // case "Sand":
            //     $("img").attr("src", "");
            //     break;
            // case "Ash":
            //     $("img").attr("src", "");
            //     break;
            // case "Squall":
            //     $("img").attr("src", "");
            //     break;
            // case "Tornado":
            //     $("img").attr("src", "");
            //     break;   
        }

        $(".pageWeather").text("Weather: " + weather);  // print onto html element <p> the weather for the zip code from the object
        $.get("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=569c92bb68ebf620a1a5106b1e8fccac", (timeInfo) => {
            setInterval(function(){
            let time = moment();
            let timeZone = timeInfo.timezone;
            let currentTime = time.tz(timeZone).format('h:mm:ssA')
            $(".pageTime").text("Current Time: " + currentTime);
            }, 0);
        })
    })
})