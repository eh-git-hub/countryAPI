const countryList = document.getElementById("countryList");

//Test
// let msg = "Hello, World!"
// console.log(msg);

//TODO: connect API and display info. 
//TODO: need to generate a random number that corresponds to the index of the API array and displays it 
//TODO: need to add an onclick method that activates the function random when clicked

    fetch("https://restcountries.eu/rest/v2/name/United States of America").then( function(response) {
       // Access the JSON in the response
       response.json().then( function(json) {
           console.log(json);
           const countryArr = {};
           countryArr['name'] = json[0].name;
           countryArr['capital'] = json[0].capital;
           countryArr['region'] = json[0].region;
           countryArr['languages'] = json[0].languages[0].name;
           countryArr['flag'] = json[0].flag;

           console.log(countryArr);
        
           //Add HTML that includes the JSON data
            countryList.innerHTML = 
           `<ul class="card">
                <img class = "card-image" src=${countryArr.flag}>
                <h1 class = "card-name"> Name: ${countryArr.name}</h1>
                <h2 class = "card-capital"> Capital: ${countryArr.capital}</h2>
                <h2 class = "card-region"> Region: ${countryArr.region}</h2>
                <h2 class = "card-language"> Language: ${countryArr.languages}</h2>
            <ul>
           `
       });
    });