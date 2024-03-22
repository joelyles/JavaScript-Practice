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
    const addList = `<li>${peopleArray[0]}<li>`;
    document.querySelector('.new-list').insertAdjacentHTML('beforeend', addList);

    console.log(peopleArray);
}

callSwapi();

/*  const retSwapi = async () => {
    data = await callSwapi();
    swapiData.swapiList = data;
    container.innerHTML = JSON.stringify(data);
}

retSwapi(); */