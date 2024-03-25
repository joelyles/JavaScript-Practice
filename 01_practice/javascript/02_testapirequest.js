

const swapiData = {
    swapiList: []
}

const callSwapi = async () => {
    const response = await fetch("https://swapi.dev/api/people/");
    const jsonSwapiData = await response.json();
    const peopleArray = jsonSwapiData.results.map(results => {
        return results;
    });
// lines 14 and 15 - ByteGrad GET Data From API & Display youtube video
//    const addList = `<li>${peopleArray[randomNum]}</li>`;
//    document.querySelector('.new-list').insertAdjacentHTML('beforeend', addList);

    const birthYear = jsonSwapiData.results.map(results => {
        return results.birth_year;
    })

for ( i = 0; i < peopleArray.length; i++) {
        let myNum = i;
        const addList = `<li>${peopleArray[myNum].name}'s birth year is <span class="year">${birthYear[myNum]}</span></li> \b`;
        document.querySelector('.new-list').insertAdjacentHTML('beforeend', addList);
}
console.log(peopleArray, birthYear);
console.log(peopleArray[0].name, peopleArray[0].birth_year);

}

callSwapi();



/* const input = document.querySelector('.input');
const submit = document.querySelector('.submit');

submit.addEventListener('click', () => {
    
    if (input.value.toString() === birthYear[myNum]){
        console.log(yes);
    }
    console.log(input.value.toString());
}); 

const container = document.querySelector('.container');
const input = document.querySelector('input');
const submit = document.querySelector('.submit');

submit.addEventListener('click', function() {

    if (input.value.toString() === birthYear[i]){
        container.textContent = 'hello';
        console.log(yes);
    }
    console.log(input.value);
}); */