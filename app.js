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
            //console.log(json);
            const countryArr = [];
            countryArr['name'] = json[0].name;
            countryArr['capital'] = json[0].capital;
            countryArr['region'] = json[0].region;
            countryArr['languages'] = json[0].languages[0].name;
            countryArr['flag'] = json[0].flag;
            
            countryArr.join();
            console.log(countryArr);
            
    //         //Add HTML that includes the JSON data
            countryList.innerHTML = 
            `<ul class="card">
                <img class = "card-image" src=${countryArr.flag}>
                <h1 class = "card-name"> Name: ${countryArr.name}</h1>
                <h2 class = "card-capital"> Capital: ${countryArr.capital}</h2>
                <h2 class = "card-region"> Region: ${countryArr.region}</h2>
                <h2 class = "card-language"> Language: ${countryArr.languages}</h2>
            <ul>`
        });
    });


    //TODO: need to generate a random number that corresponds to the index of the API array and displays it 
    // let fruitArray = ["Apples", "Bananas", "Pears"];
    // let randomFruit = fruitArray[Math.floor(Math.random()*fruitArray.length)];
    // console.log(randomFruit);