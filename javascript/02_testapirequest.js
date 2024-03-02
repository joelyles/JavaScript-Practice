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

    console.log(peopleArray);
}

callSwapi();

/*  const retSwapi = async () => {
    data = await callSwapi();
    swapiData.swapiList = data;
    container.innerHTML = JSON.stringify(data);
}

retSwapi(); */