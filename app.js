const countryList = document.getElementById("countryList");
const country = document.getElementById("randomCountry");
let scoreHTML = document.getElementById("score");
const countryNamesArr = [];

//TODO: ITERATE THROUGH "ALL" API, GET COUNTRY NAME, AND PUSH TO NEW ARRAY
fetch(`https://restcountries.com/v3.1/all`).then(function (response) {
    //Access THE JSON IN THE RESPONSE
    response.json().then(function (json) {

        //forEach Loop
        json.forEach(myFunction);
        function myFunction(eachCountry) {
            let countryNames = eachCountry.name.common;
            countryNamesArr.push(countryNames);
        };
        // console.log(countryNamesArr);
    });
});

// const countryArray = ["Afghanistan", "Åland Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh",
// "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia (Plurinational State of)", "Bonaire, Sint Eustatius and Saba", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", 
// "United States Minor Outlying Islands", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cabo Verde", "Cayman Islands", "Central African Republic", 
// "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo (Democratic Republic of the)", "Cook Islands", "Costa Rica", "Croatia", "Cuba", "Curaçao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", 
// "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories",
// "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See", "Honduras", "Hong Kong", "Hungary", 
// "Iceland", "India", "Indonesia", "Côte d'Ivoire", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic",
// "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Macedonia (the former Yugoslav Republic of)", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", 
// "Mauritius", "Mayotte", "Mexico", "Micronesia (Federated States of)", "Moldova (Republic of)", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", 
// "Niger", "Nigeria", "Niue", "Norfolk Island", "Korea (Democratic People's Republic of)", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestine, State of", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", 
// "Portugal", "Puerto Rico", "Qatar", "Republic of Kosovo", "Réunion", "Romania", "Russian Federation", "Rwanda", "Saint Barthélemy", "Saint Helena, Ascension and Tristan da Cunha", "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin (French part)", 
// "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten (Dutch part)", "Slovakia", "Slovenia", "Solomon Islands", 
// "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Korea (Republic of)", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard and Jan Mayen", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", 
// "Tanzania", "United Republic of,Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom of Great Britain and Northern Ireland", 
// "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela (Bolivarian Republic of)", "Viet Nam", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"];

function randomCountryGen() {

    //USES "countryNamesArr" GENERATED FROM API
    randomCountry = countryNamesArr[Math.floor(Math.random() * countryNamesArr.length)];

     fetch(`https://restcountries.com/v3.1/name/${randomCountry}?fullText=true`).then(function (response) {
    //fetch(`https://restcountries.com/v3.1/name/Mexico`).then(function (response) {
        // Access the JSON in the response
        response.json().then(function (json) {
            //console.log(json);

            countryArr = [];
            countryArr['name'] = json[0].name.common;
            countryArr['capital'] = json[0].capital[0];
            countryArr['subregion'] = json[0].subregion;
            countryArr['languages'] = json[0].languages;
            countryArr['flags'] = json[0].flags.png;
            //console.log(countryArr);

            // TODO: ADD HTML WITH JSON DATA
            //comment out name when in full game
            countryList.innerHTML =
                `<ul class="card">
                    <img class = "card-image" src=${countryArr.flags}>
                    <li class = "card-name"> Name: ${countryArr.name}</li>
                    <li class = "card-capital"> Capital: ${countryArr.capital}</li>
                    <li class = "card-region"> Region: ${countryArr.subregion}</li>
                    <li class = "card-language"> Language: ${Object.values(countryArr.languages)}</li>
                <ul>
                <div class=learnMore>
                    <a href="https://en.wikipedia.org/wiki/${randomCountry}" target="_blank">learn more</a>
               </div>`
        });
        document.getElementById('countryGuessInput').value = '';
        document.getElementById("countryGuessInput").focus();
    });
}

//Contain instead of equals
//function to remove special characters from input and guess
function countryGuessFunction() {
    let text;
    countryGuessInput = document.getElementById("countryGuessInput").value;
    randomCountry = randomCountry.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');

    if (randomCountry.includes("ô")) {
        randomCountry = randomCountry.replace("ô", "o");

    } else if (randomCountry.includes("Å")) {
        randomCountry = randomCountry.replace("Å", "A");

    } else if (randomCountry.includes("ç")) {
        randomCountry = randomCountry.replace("ç", "c");

    } else if (randomCountry.includes("é")) {
        randomCountry = randomCountry.replace("é", "e");

    } else if (randomCountry.includes(" Federated States of")) {
        randomCountry = randomCountry.replace(" Federated States of", "");

    } else if (randomCountry.includes(" Islamic Republic of")) {
        randomCountry = randomCountry.replace(" Islamic Republic of", "");

    } else if (randomCountry.includes(" Bolivarian Republic of")) {
        randomCountry = randomCountry.replace(" Bolivarian Republic of", "");

    } else if (randomCountry.includes(" Republic of")) {
        randomCountry = randomCountry.replace(" Republic of", "");

    } else if (randomCountry.includes(" Plurinational State of")) {
        randomCountry = randomCountry.replace(" Plurinational State of", "");

    } else if (randomCountry.includes(" Dutch part")) {
        randomCountry = randomCountry.replace(" Dutch part", "");

    } else if (randomCountry.includes(" French part")) {
        randomCountry = randomCountry.replace(" French part", "");

    } else if (randomCountry.includes(" Democratic Republic of the")) {
        randomCountry = randomCountry.replace(" Democratic Republic of the", "");

    } else if (randomCountry.includes(" Democratic Peoples Republic of")) {
        randomCountry = randomCountry.replace(" Democratic People's Republic of", "");

    } else if (randomCountry.includes("Peoples Democratic Republic")) {
        randomCountry = randomCountry.replace("Peoples Democratic Republic", "");

    } else if (randomCountry.includes(" State of")) {
        randomCountry = randomCountry.replace(" State of", "");

    } else if (randomCountry.includes("the former Yugoslav")) {
        randomCountry = randomCountry.replace("the former Yugoslav", "");

    } else if (randomCountry.includes(" U.S.")) {
        randomCountry = randomCountry.replace(" U.S.", "");

    } else if (randomCountry.includes(" British")) {
        randomCountry = randomCountry.replace(" British", "");

    } else if (randomCountry.includes(" Sint Eustatius and Saba")) {
        randomCountry = randomCountry.replace(" Sint Eustatius and Saba", "");

    } else if (randomCountry.includes(" Malvinas")) {
        randomCountry = randomCountry.replace(" Malvinas", "");
    }

    // randomCountry = randomCountry.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
    // randomCountry = randomCountry.replace("ô", "o");
    // randomCountry = randomCountry.replace("Å", "A");
    // randomCountry = randomCountry.replace("ç", "c");
    // randomCountry = randomCountry.replace("é", "e");
    // randomCountry = randomCountry.replace(" (Federated States of)", "");
    // randomCountry = randomCountry.replace(" (Islamic Republic of)", "");
    // randomCountry = randomCountry.replace(" (Bolivarian Republic of)", "");
    // randomCountry = randomCountry.replace(" (Republic of)", "");
    // randomCountry = randomCountry.replace(" Republic of", "");
    // randomCountry = randomCountry.replace(" (Plurinational State of)", "");
    // randomCountry = randomCountry.replace(" (Dutch part)", "");
    // randomCountry = randomCountry.replace(" (French part)", "");
    // randomCountry = randomCountry.replace(" (Democratic Republic of the)", "");
    // randomCountry = randomCountry.replace(" (Democratic People's Republic of)", "");
    // randomCountry = randomCountry.replace("People's Democratic Republic", "");
    // randomCountry = randomCountry.replace(", State of", "");
    // randomCountry = randomCountry.replace(" (the former Yugoslav Republic of)", "");
    // randomCountry = randomCountry.replace(" (U.S.)", "");
    // randomCountry = randomCountry.replace(" (British)", "");
    // randomCountry = randomCountry.replace(", Sint Eustatius and Saba", "");
    // randomCountry = randomCountry.replace(" (Malvinas)", "");

    console.log(randomCountry);

    if (randomCountry.toLowerCase().includes(countryGuessInput.toLowerCase()) &&  countryGuessInput.toLowerCase() !== "") {
        text = `<p> Correct! </p>`;
        document.getElementById("correct-incorrect").style.display = 'block';
        disappearElement();
        document.getElementById("countryGuessInput").focus();

    } else {
        text = `<p> Try Again! </p>`;
        //comment out name when in full game
        countryList.innerHTML =
            `<ul class="card">
                    <img class = "card-image" src=${countryArr.flags}>
                    <li class = "card-name"> Name: ${countryArr.name}</li>
                    <li class = "card-capital"> Capital: ${countryArr.capital}</li>
                    <li class = "card-region"> Region: ${countryArr.subregion}</li>
                    <li class = "card-language"> Language: ${Object.values(countryArr.languages)}</li>
                <ul>`
        document.getElementById("correct-incorrect").style.display = 'block';
        disappearElement();
        document.getElementById("countryGuessInput").focus();
    }
    document.getElementById("correct-incorrect").innerHTML = text;
}

//disappear element
function disappearElement() {
    setTimeout(function () {
        document.getElementById("correct-incorrect").style.display = 'none';
    }, 1000);
}

//Score 
let score = 0;

function scoreKeeper() {
    if (randomCountry.toLowerCase().includes(countryGuessInput.toLowerCase())) {
        score += 10;
        document.getElementById("score").innerHTML = "score: " + score;
        randomCountryGen();
    } else if (countryGuessInput.toLowerCase() !== randomCountry.toLowerCase()) {
        score -= 1;
        document.getElementById("score").innerHTML = "score: " + score;
    }
}


//Countdown Timer Function
function countdown(minutes) {
    let seconds = 60;
    let mins = minutes

    function tick() {
        let counter = document.getElementById("counter");
        let currentMinutes = mins - 1
        seconds--;
        //Ternary Operator(?): Assigns a value to a variable based on a condition.
        counter.innerHTML = currentMinutes.toString() + ":" + (seconds < 10 ? "0" : "") + seconds.toString() + "s";
        if (seconds > 0) {
            setTimeout(tick, 1000);
        } else if (mins > 1) {
            countdown(mins - 1);
        } else if (seconds <= 0) {
            counter.innerHTML = "TIME'S UP!"
            document.getElementById("randomCountryButton").disabled = true;
            document.getElementById("randomCountryButton").style.cursor = "none";
            document.getElementById("randomCountryButton").style.color = "#666666";
            document.getElementById("randomCountryButton").style.backgroundColor = "#cccccc";
        }
    }
    tick();
}

