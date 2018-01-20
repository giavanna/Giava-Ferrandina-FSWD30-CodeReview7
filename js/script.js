
class Persons {

  constructor(photo, name, surname, age, gender, inRelation, like) {
    this.photo = photo;
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender;
    this.inRelation = inRelation;
    this.like = like;
  }

 
  do() {
    let msg = `
       <div class="">
          <img class="imgbackground" src="${this.photo}">
          <p class="description"<b><i>Name: ${this.name}</b></i></p>
          <p class="description"<b><i>Surname: ${this.surname}</b></i></p>
          <p class="description"<b>Age: ${this.age}</b></p>
          <p class="description"<b>Gender: ${this.gender}</b></p>
          <p class="description"<b>In Relation: ${relation(this.inRelation)}</b></p> 
          <p class="numberhearth"><b><button class="likebuttom" type= "button" onClick="">Like</button> ${(this.like)}</b><img class="myhearth" src="img/heart-7.png"></p> 
      </div>
      `;
    return msg;
  }
}

class Man extends Persons {
  constructor(photo, name, surname, age, gender, inRelation, favouriteSport, like) {
    super(photo, name, surname, age, gender, inRelation, like); // calling parent constructor
    this.favouriteSport = favouriteSport;
  }

  do() {
    let msg = `
         <div class="man-background">
          <img class="imgbackground" src="${this.photo}">
          <p class="description"><i>Name:<b>${this.name}</b></i></p>
          <p class="description"><i>Surname:<b> ${this.surname}</b></i></p>
          <p class="description"><i>Age:<b> ${this.age}</b></i></p>
          <p class="description"><i>Gender:<b> ${this.gender}</b></p>
          <p class="description"><i>In Relation:<b> ${relation(this.inRelation)}</b></i></p>  
          <p class="description"><i>Favourite Sport:<b> ${this.favouriteSport}</b></i></p>
          <p class="numberhearth"><b><button class="likebuttom" type= "button" onClick="">Like</button> ${(this.like)}</b><img class="myhearth" src="img/heart-7.png"></p> 
        </div>
        `;
    return msg;

  }
}

class Woman extends Persons {
  // new constructor
  constructor(photo, name, surname, age, gender, inRelation,favouriteAnimal, like) {
    super(photo, name, surname, age, gender, inRelation, like); // calling parent constructor
    this.favouriteAnimal = favouriteAnimal;
  }


  do() {
    let msg = `
         <div class="woman-background">
          <img class="imgbackground" src="${this.photo}">
          <p class="description"><i>Name:<b> ${this.name}</b></i></p>
          <p class="description"><i>Surname:<b> ${this.surname}</b></i></p>
          <p class="description"><i>Age:<b> ${this.age}</b></i></p>
          <p class="description"><i>Gender:<b> ${this.gender}</b></p>
          <p class="description"><i>In Relation:<b> ${relation(this.inRelation)}</b></i></p>
          <p class="description"><i>Favourite Animal:<b> ${this.favouriteAnimal}</b></i></p> 
          <p class="numberhearth"><b><button class="likebuttom" type= "button" onClick="">Like</button> ${(this.like)}</b><img class="myhearth" src="img/heart-7.png"></p> 
        </div>
        `;
    return msg;
  }

}

var personsList = [
  new Man("img/boy1.800x1000.jpg", "John", "Doe", 25, "Male", true, "Surfing", 0),
  new Woman("img/girl1.800x1000.jpg", "Jane", "Doe", 31, "Female", false,"Dogs", 0),
  new Man("img/tom.jpg", "Tom", "Pattison", 32, "Male", false, "Skating", 0),
  new Woman("img/claudia.jpg", "Claudia", " Walls", 28, "Female", true, "Cats", 0),
  new Man("img/max.jpg", "Max", "Eichenberger", 27, "Male", false, "Tennis", 0),
  new Woman("img/katrin.jpg", "Katrin", "Berger", 31, "Female", true, "Turtles", 0),
  new Man("img/martin.jpg", "Martin", "Robinson", 34, "Male", false, "Motorsports", 0),
  new Woman("img/simona.jpg", "Simona", "Parker", 35, "Female", true, "Horses", 0),
  new Man("img/danie.jpg", "Daniel", "Carutti", 33, "Male", false, "Jogging", 0),
  new Woman("img/eva.jpg", "Eva", "Collins", 27, "Female", false, "Tigers", 0),
  new Man("img/francesco.jpg", "Francesco", "Delponte", 23, "Male", true, "Tennis", 0),
  new Woman("img/sandra.jpg", "Sandra", "Grandi", 29, "Female", true, "Dogs", 0),
  new Man("img/david.jpg", "David", "Pit", 36, "Male", false, "Ice Hockey", 0),
  new Woman("img/margot.jpg", "Margot", "Robbie", 31, "Female", false, "Passerines", 0),
  new Man("img/edoard.jpg", "David", "Gordon", 25, "Male", false, "Horse", 0),
  new Woman("img/Irina.jpg", "Irina", "Byers", 33, "Female", true, "Rabbits", 0),
  new Man("img/ron.jpg", "Ron", "Pitt", 36, "Male", false, "Climbing", 0),
  new Woman("img/miranda.jpg", "Miranda", "Kerr", 32, "Female", false, "Cats", 0),
  new Man("img/georg.jpg", "Georg", "Clint", 32, "Male", true, "Canoe", 0),
  new Woman("img/caroline.jpg","Caroline", "Pleron", 28, "Female", true, "Lions", 0),
  new Man("img/james.jpg", "James", "Brandon", 26, "Male", false, "Boxing", 0),
  new Woman("img/barbara.jpg","Barbara", "Perroni", 29, "Female", false, "Dogs", 0),
  new Man("img/simon.jpg", "Simon", "Torner", 25, "Male", true, "Tennis", 0),
  new Woman("img/sara.jpg","Sara", "Brandling", 29, "Female", false, "Cats", 0),
];



function relation(test) {
  if(test){
    return "Yes"
    }
    else {
      return "No"
    }
  }

function liking(test) {
  this.like +=1;
  return(test);
}


function all() {
  let bigList = document.getElementById("bigList");
  for (let i = 0; i < personsList.length; i++) {
    bigList.innerHTML += personsList[i].do();
  }
}

function showOnlyMan() {
  let bigList = document.getElementById("bigList");
  for (let i = 0; i < personsList.length; i++) {

    if (personsList[i].constructor.name == "Man") {
    bigList.innerHTML += personsList[i].do();
    }
  }
}

function showOnlyWoman() {
  let bigList = document.getElementById("bigList");
  for (let i = 0; i < personsList.length; i++) {

    if (personsList[i].constructor.name == "Woman") {
    bigList.innerHTML += personsList[i].do();
    }
  }
}

function showPersonUnder30() {
  let bigList = document.getElementById("bigList");
  for (let i = 0; i < personsList.length; i++) {

    if (personsList[i].age < 30) {

      bigList.innerHTML += personsList[i].do();
    }

  }
}

function showPersonOver30() {
  let bigList = document.getElementById("bigList");
  for (let i = 0; i < personsList.length; i++) {

    if (personsList[i].age > 30) {

      bigList.innerHTML += personsList[i].do();
    }

  }
}

function like() {
  Persons[personsList].likes +=1;
  document.getElementById("liking" + personsList).innerHTML = Persons[personsList].likes;
};
