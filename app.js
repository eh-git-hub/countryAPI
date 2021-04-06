const countryList = document.getElementById("countryList");

//Test
// let msg = "Hello, World!"
// console.log(msg);

//TODO: need to add an onclick method that activates the function random when clicked
//TODO: connect API and display info. 
// for (let i = 0; i <= countryArr.length; i++){
    
// }

fetch("https://restcountries.eu/rest/v2/name/United States of America").then( function(response) {
    // fetch("https://restcountries.eu/rest/v2/all").then( function(response) {
        // Access the JSON in the response
        response.json().then( function(json) {
            // console.log(json);
            const countryArr = [];
                countryArr['name'] = json[0].name;
                countryArr['capital'] = json[0].capital;
                countryArr['region'] = json[0].region;
                countryArr['languages'] = json[0].languages[0].name;
                countryArr['flag'] = json[0].flag;
            
            // countryArr.join();
            console.log(countryArr);
            
    //         //Add HTML that includes the JSON data
            countryList.innerHTML = 
            `<ul class="card">
                <img class = "card-image" src=${countryArr.flag}>
                <li class = "card-name"> Name: ${countryArr.name}</li>
                <li class = "card-capital"> Capital: ${countryArr.capital}</li>
                <li class = "card-region"> Region: ${countryArr.region}</li>
                <li class = "card-language"> Language: ${countryArr.languages}</li>
            <ul>`
        });
    });


    //TODO: need to generate a random number that corresponds to the index of the API array and displays it 
    let countryArray = ["United States of America", "Afghanistan", "Åland Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola"];
    
    function randomCountryGen(){
        let country = document.getElementById("randomCountry");
        let randomCountry = countryArray[Math.floor(Math.random()*countryArray.length)];
        
        country.innerHTML = 
            `<p class="randomCountry">${randomCountry}</p>`
        
        return randomCountry;
    }
    