//1.Create a request variable

var request = new XMLHttpRequest();

//2.Create a new Connection

request.open('GET', "https://restcountries.eu/rest/v2/all", true); 

/* NOTE:By giving true,you make the above line asynchronous.So that,if there's any problem in 
receiving data from the above URL, the rest of the program execution wouldn't be affected/stopped */

//3.Send the Connection

request.send();

//4. Register an event listener,once the data is ready,the function will be executed

request.onload = function () {
    
    let countryData = JSON.parse(this.response);
    for (let country of countryData)
    {
        console.log(country.flag);
        
    }
}