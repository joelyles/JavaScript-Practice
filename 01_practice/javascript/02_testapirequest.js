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
    const planetArray = jsonSwapiData.results.map(results => {
        return results.birth_year;
    })

for ( i = 0; i < 10; i++) {
        let myNum = i;
        const addList = `<li>${peopleArray[myNum]}'s birth year is ${planetArray[myNum]}</li> \b`;
        document.querySelector('.new-list').insertAdjacentHTML('beforeend', addList);
    }
    console.log(peopleArray);
}

callSwapi();

/*  const retSwapi = async () => {
    data = await callSwapi();
    swapiData.swapiList = data;
    container.innerHTML = JSON.stringify(data);
}

retSwapi(); */