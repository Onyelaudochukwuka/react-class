for (let i = 0; i < 30; i++) {
    fetch(`https://swapi.dev/api/people/${i}/`)
        .then(response => response.json())
        .then(data => data && addData(data))
        .catch(err => console.log(err))
        .finally(() => console.log("done"))
}
const div = document.getElementById("div");
const addData = ({name,homeworld, gender}) => {
    const p = document.createElement("p");
    p.innerHTML = `Name: ${name} <br />
     Homeworld: ${homeworld} </br>
     Gender: ${gender}
      `;
    div.appendChild(p);
}