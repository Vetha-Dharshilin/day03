//use the rest countries API URL -> https://restcountries.com/v3.1/all and display al the country flags in the console

//Step 01: Create a XML-HTTP Object
var request =  new XMLHttpRequest();
//Step 02: Open a Request
request.open("GET","https://restcountries.com/v3.1/all")
//Step 03:Kikstart a  request
request.send();
//step 04:
//once the data successfully received from the server
// server status code is 200
//data coming from the server is of type string
// we ae converting string to Object
request.onload = function(){
var res = JSON.parse(request.response);
console.log(res);
//Print the flag name, as well as area for countries
for(var i =0;i<res.length;i++){
    console.log(res[i].flag);
}
}

