//  DOM - take elements from the documents to the js page

let tableGym = document.querySelector("#gym-list");
let muscleUserInput = document.querySelector("#muscleUser");
let APICOPY = [];
// the class Gym with the functions
class Gym {
  constructor() {}
  // the function to take info from the API
  axiosFunc() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "5de0722db1msh3b14a48dea3e7a1p15c8bajsn2288cf021295",
        "X-RapidAPI-Host": "musclejp.p.rapidapi.com",
      },
    };
    axios
      .get("https://musclejp.p.rapidapi.com/get-tous", options)
      .then((response) => {
        APICOPY = response.data;
        console.log(APICOPY);
        this.showData(APICOPY);
      });
  }
  // the function that show the data in a table 
  showData(web) {
    for (let i = 0; i < web.length; i++) {
      tableGym.innerHTML += `
      <tr class=""><td scope="row">${i + 1}</td>
      <td scope="row">${web[i].nom}</td>
      ${this.muscleName(i)} 
      <td scope="row">${web[i].cible}</td>
      <td scope="row">${web[i].equipement}</td>
      <td scope="row"><img src="${web[i].img}" alt="" style="width: 150px;"></td></tr>`;
    }
  }
//  function that change the muscle name from french to english
  muscleName(x) {
    if (x < 8) {
      return `<td scope ="row">Bras</td>`;
    } else if (7 < x && x < 11) {
      return `<td scope ="row"></td>`;
    } else if (10 < x && x < 22) {
      return `<td scope ="row">Rear Hand</td>`;
    } else if (21 < x && x < 41) {
      return `<td scope ="row">Shoulders</td>`;
    } else if (40 < x && x < 56) {
      return `<td scope ="row">Upper Chest</td>`;
    } else if (55 < x && x < 79) {
      return `<td scope ="row">Back</td>`;
    } else if (78 < x && x < 100) {
      return `<td scope ="row">Feet</td>`;
    } else if (99 < x && x < 104) {
      return `<td scope ="row">Hamstring/td>`;
    } else if (103 < x && x < 106) {
      return `<td scope ="row">Lower Back</td>`;
    } else if (105 < x && x < 108) {
      return `<td scope ="row">Tibias</td>`;
    } else if (107 < x && x < 109) {
      return `<td scope ="row">Balancing</td>`;
    } else if (x == 109) {
      return `<td scope ="row">Feet</td>`;
    } else {
      return `<td scope ="row">Stomach</td>`;
    }
  }
  // the function that filter the table by input 
  filterByUser(userInput){
    tableGym.innerHTML =` <thead>
    <tr class=""><th scope="col">Number
    </th><th scope="col">Exercise Name</th><th scope="col">Muscle</th><th scope="col">Part of the muscle
    </th><th scope="col">Equipment</th><th scope="col">Example</th></tr></thead>`;
    let filterMuscleByUser = APICOPY.filter(function (muscle){
      return muscle.partie.startsWith(userInput);
    })
    this.showData(filterMuscleByUser);
  }
}
// the event of the input with filter 
muscleUserInput.addEventListener("keyup",function(){
  let userInputLowerCase = muscleUserInput.value.toLowerCase();
  const FilterMuscle = new Gym().filterByUser(userInputLowerCase);
  return FilterMuscle;
})
const planOne = new Gym().axiosFunc();
console.log(planOne);






