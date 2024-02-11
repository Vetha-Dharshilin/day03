//  Use the same rest countries and print all countries names, regions sub-regions and populations

var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all");

request.send();

request.onload = function () {
    var result = JSON.parse(request.response);

    // Check if the response is an array
    if (Array.isArray(result)) {
        // Iterate through each country and log its flag URL
        result.forEach(function (country) {
            if (country.flags && country.flags.svg) {
                console.log(country.name.common + ": " + country.flags.svg);
            }
        });
    } else {
        console.error("Invalid response format");
    }
};