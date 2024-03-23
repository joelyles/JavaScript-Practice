const container = document.querySelector('.container');

const swapiData = {
    swapiList: []
}

const callSwapi = async () => {
    const response = await fetch("https://swapi.dev/api/people/");
    const jsonSwapiData = await response.json();
    const peopleArray = jsonSwapiData.results.map(results => {
        return results.name;
    });
// lines 14 and 15 - ByteGrad GET Data From API & Display youtube video
//    const addList = `<li>${peopleArray[randomNum]}</li>`;
//    document.querySelector('.new-list').insertAdjacentHTML('beforeend', addList);

/* for (i = 0; i < 10; i++){
    let myNum = i;
    console.log(myNum);
} */
    /* const jsonSwapiPlanet = await response.json(); */
    const birthYear = jsonSwapiData.results.map(results => {
        return results.birth_year;
    })



for ( i = 0; i < peopleArray.length; i++) {
        const input = document.querySelector('.input');
        const submit = document.querySelector('.submit');
        let myNum = i;
        const addList = `<li>${peopleArray[myNum]}'s birth year is ${birthYear[myNum]}</li> \b`;
        document.querySelector('.new-list').insertAdjacentHTML('beforeend', addList);

/*     submit.addEventListener('click', function() {
    
        if (input.value === peopleArray[myNum]){
            console.log(yes);
        }
        console.log(input.value);
    }); */
}
    console.log(peopleArray);
}

callSwapi();

/* const input = document.querySelector('.input');
const submit = document.querySelector('.submit');

submit.addEventListener('click', () => {
    
    if (input.value.toString() === birthYear[myNum]){
        console.log(yes);
    }
    console.log(input.value.toString());
}); */