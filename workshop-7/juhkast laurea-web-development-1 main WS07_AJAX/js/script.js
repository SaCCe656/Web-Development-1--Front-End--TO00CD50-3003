console.log("JavaScript toimii!");

var text = '{ "employees" : [' +
'{ "firstName":"John", "lastName":"Doe" },' +
'{ "firstName":"Anna", "lastName":"Smith" },' +
'{ "firstName":"Peter", "lastName":"Jones" } ]}';

var data = JSON.parse(text);

//console.log(data.employees[2].firstName);

//Tehtävä 1

// Funktio joka näyttää vain nimet
function showNames() {
    document.getElementById("jsondata").innerHTML = "";

    for (var i = 0; i < data.employees.length; i++) {
       document.getElementById("jsondata").innerHTML +=
       (data.employees[i].firstName + " " + data.employees[i].lastName + "<br>");
    }
}
// Funktio joka näyttää kaikki tiedot
function showDetails() {
    document.getElementById("jsondata").innerHTML = "";

    for (var i = 0; i < data.employees.length; i++) {
        document.getElementById("jsondata").innerHTML +=
            "First name: " + data.employees[i].firstName + "<br>" +
            "Last name: " + data.employees[i].lastName + "<br><br>";
    }
}


//Tehtävä 2

//Funktio joka hakee raaka-datan
function loadData() {
    fetch("https://www.omdbapi.com/?s=star+wars&apikey=cbbc6750")
        .then(response => response.text())
        .then(data => {
            console.log(data);
        
            document.getElementById("rawdata").innerHTML = data

        });
}

//funktio hakee datan ja parse
function loadParse() {
    document.getElementById("rawdata").innerHTML = "";
    fetch("https://www.omdbapi.com/?s=star+wars&apikey=cbbc6750")
        .then(response => response.json())
        .then(data => {
            console.log(data);
        
            for (var i = 0; i< data.Search.length; i++) {
                document.getElementById("rawdata").innerHTML +=
                    data.Search[i].Title + "<br>";
            }
        });
}

//tehtävä 3

function fetchweather() {


    var city = document.getElementById("city").value;

    console.log(city);

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=") //Requires own api key to work
        .then(response => response.json())
        .then(data => {
            console.log(data);
            
            document.getElementById("weatherdata").innerHTML = ("Temperature " + data.main.temp + " °C<br>")
            document.getElementById("weatherdata").innerHTML += ("Humidity " + data.main.humidity + " %<br>")
            document.getElementById("weatherdata").innerHTML += ("Cloud coverage " + data.clouds.all + " %<br>")
        });
}

function searchWeather() {

    var city = document.getElementById("citysearch").value;

    console.log(city);

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=") //Requires own api key to work
        .then(response => response.json())
        .then(data => {
            console.log(data);
            
            document.getElementById("weatherdata").innerHTML = ("Temperature " + data.main.temp + " °C<br>")
            document.getElementById("weatherdata").innerHTML += ("Humidity " + data.main.humidity + " %<br>")
            document.getElementById("weatherdata").innerHTML += ("Cloud coverage " + data.clouds.all + " %<br>")
        });
}

