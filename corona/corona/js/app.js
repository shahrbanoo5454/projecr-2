const apiKey = "188589:626bd5fc7c4f54.58860129";

const UnitedStates = document.getElementById('UnitedStates');
const India = document.getElementById('India');
const Brazil = document.getElementById('Brazil');
const UnitedKingdom = document.getElementById('UnitedKingdom');
const France = document.getElementById('France');
const Russia = document.getElementById('Russia');
const Turkey = document.getElementById('Turkey');
const Colombia = document.getElementById('Colombia');
const Spain = document.getElementById('Spain');
const Iran = document.getElementById('Iran');


const country = document.getElementById('country')
const cases = document.getElementById('cases')
const deaths = document.getElementById('deaths')
const recovered = document.getElementById('recovered')

let check = 0;

UnitedStates.addEventListener('click', () =>{
    check = 1;
    getResult()
})

India.addEventListener('click', () =>{
    check = 2;
    getResult()
})

Brazil.addEventListener('click', () =>{
    check = 3;
    getResult()
})

UnitedKingdom.addEventListener('click', () =>{
    check = 4;
    getResult()
})

France.addEventListener('click', () =>{
    check = 5;
    getResult()
})

Russia.addEventListener('click', () =>{
    check = 6;
    getResult()
})

Turkey.addEventListener('click', () =>{
    check = 7;
    getResult()
})

Colombia.addEventListener('click', () =>{
    check = 8;
    getResult()
})

Spain.addEventListener('click', () =>{
    check = 9;
    getResult()
})

Iran.addEventListener('click', () =>{
    check = 10;
    getResult()
})



function getResult(){
    loadJSON("GET", `https://one-api.ir/corona/?token=${apiKey}` , displayResult)
}

function loadJSON(method , url , callback){
    var xhr = new XMLHttpRequest;
    xhr.open(method , url);
    xhr.onreadystatechange = function() {
        if(this.status === 200 && this.readyState === 4){
            callback(JSON.parse(this.response));
        }
    }
    xhr.send();
}

function displayResult(response) {
    if(check === 1) {
        country.innerHTML = `${response.result.entries[0].country}`;
        cases.innerHTML = `${response.result.entries[0].cases}`;
        deaths.innerHTML = `${response.result.entries[0].deaths}`;
        recovered.innerHTML = `${response.result.entries[0].recovered}`;
    }

    if(check === 2) {
        country.innerHTML = `${response.result.entries[1].country}`;
        cases.innerHTML = `${response.result.entries[1].cases}`;
        deaths.innerHTML = `${response.result.entries[1].deaths}`;
        recovered.innerHTML = `${response.result.entries[1].recovered}`;
    }

    if(check === 3) {
        country.innerHTML = `${response.result.entries[2].country}`;
        cases.innerHTML = `${response.result.entries[2].cases}`;
        deaths.innerHTML = `${response.result.entries[2].deaths}`;
        recovered.innerHTML = `${response.result.entries[2].recovered}`;
    }

    if(check === 4) {
        country.innerHTML = `${response.result.entries[3].country}`;
        cases.innerHTML = `${response.result.entries[3].cases}`;
        deaths.innerHTML = `${response.result.entries[3].deaths}`;
        recovered.innerHTML = `${response.result.entries[3].recovered}`;
    }

    if(check === 5) {
        country.innerHTML = `${response.result.entries[4].country}`;
        cases.innerHTML = `${response.result.entries[4].cases}`;
        deaths.innerHTML = `${response.result.entries[4].deaths}`;
        recovered.innerHTML = `${response.result.entries[4].recovered}`;
    }

    if(check === 6) {
        country.innerHTML = `${response.result.entries[5].country}`;
        cases.innerHTML = `${response.result.entries[5].cases}`;
        deaths.innerHTML = `${response.result.entries[5].deaths}`;
        recovered.innerHTML = `${response.result.entries[5].recovered}`;
    }

    if(check === 7) {
        country.innerHTML = `${response.result.entries[6].country}`;
        cases.innerHTML = `${response.result.entries[6].cases}`;
        deaths.innerHTML = `${response.result.entries[6].deaths}`;
        recovered.innerHTML = `${response.result.entries[6].recovered}`;
    }

    if(check === 8) {
        country.innerHTML = `${response.result.entries[7].country}`;
        cases.innerHTML = `${response.result.entries[7].cases}`;
        deaths.innerHTML = `${response.result.entries[7].deaths}`;
        recovered.innerHTML = `${response.result.entries[7].recovered}`;
    }

    if(check === 9) {
        country.innerHTML = `${response.result.entries[8].country}`;
        cases.innerHTML = `${response.result.entries[8].cases}`;
        deaths.innerHTML = `${response.result.entries[8].deaths}`;
        recovered.innerHTML = `${response.result.entries[8].recovered}`;
    }

    if(check === 10) {
        country.innerHTML = `${response.result.entries[10].country}`;
        cases.innerHTML = `${response.result.entries[10].cases}`;
        deaths.innerHTML = `${response.result.entries[10].deaths}`;
        recovered.innerHTML = `${response.result.entries[10].recovered}`;
    }
}
        

