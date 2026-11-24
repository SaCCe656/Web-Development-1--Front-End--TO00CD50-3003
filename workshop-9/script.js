const apiKey = ""; // <-- Add your API key here

let tempChart = null;
let forecast = [];
let chartData = {};
let city = "Helsinki";

const language = document.documentElement.lang === "en" ? "en" : "fi";


// Fetch weather forecast using OpenWeatherMap API.
async function getForecast(city, apiKey) {
    const locations = await axios.get("https://api.openweathermap.org/geo/1.0/direct", {
        params: { q: city, limit: 1, appid: apiKey }
    });

    const place = locations.data[0];

    if (!place) return [];

    const response = await axios.get("https://api.openweathermap.org/data/2.5/forecast", {
        params: {
            lat: place.lat,
            lon: place.lon,
            units: "metric",
            appid: apiKey
        }
    });

    return response.data.list;
}


// Read user input and fetch weather data.
async function haeSaa() {
    const searchCity = document.querySelector("#kaupunki").value.trim();
    const apiKey = document.querySelector("#apiKey").value.trim();

    // Check if the input fields are empty.
    if (searchCity === "") {
        alert("Enter a city name.");
        return;
    }

    if (apiKey === "") {
        alert("Enter an API key.");
        return;
    }

    try {
        forecast = await getForecast(searchCity, apiKey);

        if (forecast.length === 0) {
            alert("City not found");
            return;
        }

        city = searchCity;

        console.log(forecast);

        // Get timestamps and temperatures from the forecast.
        const labels = forecast.map((item) => item.dt_txt);
        const temperatures = forecast.map((item) => item.main.temp);

        // Store data for reuse.
        chartData = { labels, temperatures };

        // Show the city name above the chart.
        document.querySelector("#cityName").textContent = city;

        // Update the chart.
        paivitaKaavio();

    } catch (error) {
        alert("Failed to fetch weather forecast");
        console.error(error);
    }
}


// Draw the weather chart using Chart.js.
function piirraKaavio(labels, data, city, type) {
    const ctx = document.getElementById("tempChart").getContext("2d");

    // Destroy the previous chart.
    if (tempChart) {
        tempChart.destroy();
    }

    // Create a new chart.
    tempChart = new Chart(ctx, {
        type: type,
        data: {
            labels: labels,
            datasets: [
                {
                    label: `${language === "en" ? "Temperature" : "Lämpötila"} (${city}) °C`,
                    data: data,
                    borderWidth: 2,
                    borderColor: "rgb(75, 192, 192)",
                    backgroundColor: "rgba(75, 192, 192, 0.5)",
                    fill: false,
                    tension: 0.3
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });
}


// Update the chart using previously fetched data.
function paivitaKaavio() {

    // Do not draw a chart before data has been fetched.
    if (!chartData.labels) {
        return;
    }

    const type = document.getElementById("chartType").value;

    piirraKaavio(
        chartData.labels,
        chartData.temperatures,
        city,
        type
    );
}


// Connect the search button to the weather function.
document.querySelector("#haeSaaPainike").addEventListener("click", haeSaa);


// jQuery weather animation.
$("#haeSaaPainike").on("click", function () {
    $("#saaYllatys").stop(true, true).hide()
        .fadeIn(4000).delay(5000).fadeOut(8000);
});
