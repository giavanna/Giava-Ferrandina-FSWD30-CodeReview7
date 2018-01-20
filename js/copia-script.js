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

  // we define a method in the Media class
  render() {
    let msg = `
       <div class="">
          <img class="imgbackground" src="${this.photo}">
          <p><b><i>Name: ${this.name}</b></i></p>
          <p><b><i>Surname: ${this.surname}</b></i></p>
          <p><b>Age: ${this.age}</b></p>
          <p><b>Gender: ${this.gender}</b></p>
          <p><b>In Relation: ${relation(this.inRelation)}</b></p>
          <p><b><button type= "button" onClick= ${like(this.like)}>Like</button>${this.like}</b></p> 
      </div>
      `;
    return msg;
  }
}

class Man extends Persons {
  constructor(photo, name, surname, age, gender, inRelation, like, favouriteSport) {
    super(photo, name, surname, age, gender, inRelation, like); // calling parent constructor
    this.favouriteSport = favouriteSport;
  }

  // overwrite parent class method
  render() {
    let msg = `
         <div class="man-background">
          <img class="imgbackground" src="${this.photo}">
          <p><b><i>Name: ${this.name}</b></i></p>
          <p><b><i>Surname: ${this.surname}</b></i></p>
          <p><b>Age: ${this.age}</b></p>
          <p><b>Gender: ${this.gender}</b></p>
          <p><b>In Relation: ${relation(this.inRelation)}</b></p>
          <p><b><button type= "button" onClick=liking("prova")>Like</button>${this.like}</b></p>  
          <p><b>Favourite Sport: ${this.favouriteSport}</b></p>
        </div>
        `;
    return msg;

  }
}

class Woman extends Persons {
  // new constructor
  constructor(photo, name, surname, age, gender, inRelation, like, favouriteAnimal) {
    super(photo, name, surname, age, gender, inRelation, like); // calling parent constructor
    this.favouriteAnimal = favouriteAnimal;
  }

  // overwrite parent class method
  render() {
    let msg = `
         <div class="woman-background">
          <img class="imgbackground" src="${this.photo}">
          <p><b><i>Name: ${this.name}</b></i></p>
          <p><b><i>Surname: ${this.surname}</b></i></p>
          <p><b>Age: ${this.age}</b></p>
          <p><b>Gender: ${this.gender}</b></p>
          <p><b>In Relation: ${relation(this.inRelation)}</b></p>
          <p><b><button type= "button" onClick= ${this.like += 1}>Like</button>${this.like}</b></p>
          <p><b>Favourite Animal: ${this.favouriteAnimal}</b></p>  
        </div>
        `;
    return msg;

  }

}

var personsList = [
  new Man("img/boy1.800x1000.jpg", "John", "Doe", 25, "Male", true, "Surfing"),
  new Woman("img/girl1.800x1000.jpg", "Jane", "Doe", 31, "Female", false,"Dogs"),
  new Man("img/tom.jpg", "Tom", "Pattison", 32, "Male", false, "Skating"),
  new Woman("img/claudia.jpg", "Claudia", " Walls", 28, "Female", true, "Cats"),
  new Man("img/max.jpg", "Max", "Eichenberger", 27, "Male", false, "Tennis"),
  new Woman("img/katrin.jpg", "Katrin", "Berger", 31, "Female", true, "Turtles"),
  new Man("img/martin.jpg", "Martin", "Robinson", 34, "Male", false, "Motorsports"),
  new Woman("img/simona.jpg", "Simona", "Parker", 35, "Female", true, "Horses"),
  new Man("img/danie.jpg", "Daniel", "Carutti", 33, "Male", false, "Jogging"),
  new Woman("img/eva.jpg", "Eva", "Collins", 27, "Female", false, "Tigers"),
  new Man("img/francesco.jpg", "Francesco", "Delponte", 24, "Male", true, "Tennis"),
  new Woman("img/sandra.jpg", "Sandra", "Grandi", 29, "Female", true, "Dogs"),
  new Man("img/david.jpg", "David", "Pit", 36, "Male", false, "Ice Hockey"),
  new Woman("img/margot.jpg", "Margot", "Robbie", 31, "Female", false, "Passerines"),
  new Man("img/edoard.jpg", "David", "Gordon", 19, "Male", false, "Horse"),
  new Woman("img/Irina.jpg", "Irina", "Byers", 33, "Female", true, "Rabbits"),
  new Man("img/ron.jpg", "Ron", "Pitt", 36, "Male", false, "Climbing"),
  new Woman("img/miranda.jpg", "Miranda", "Kerr", 32, "Female", false, "Cats"),
  new Man("img/georg.jpg", "Georg", "Clint", 32, "Male", true, "Canoe"),
  new Woman("img/caroline.jpg","Caroline", "Pleron", 28, "Female", true, "Lions"),
  new Man("img/james.jpg", "James", "Brandon", 26, "Male", false, "Boxing"),
  new Woman("img/barbara.jpg","Barbara", "Perroni", 29, "Female", false, "Dogs"),
  new Man("img/simon.jpg", "Simon", "Torner", 25, "Male", true, "Tennis"),
  new Woman("img/sara.jpg","Sara", "Brandling", 29, "Female", false, "Cats"),
];

//function liking(test) {
  //this.like +=1;
  //console.log(test);
//}

function relation() {
  if(this){
    return "Yes"
    }

    else {
      return "No"
    }
  }

function all() {
  let bigList = document.getElementById("bigList");
  for (let i = 0; i < personsList.length; i++) {
    bigList.innerHTML += personsList[i].render();
  }
}

function showOnlyMan() {
  let bigList = document.getElementById("bigList");
  for (let i = 0; i < personsList.length; i++) {

    if (personsList[i].constructor.name == "Man") {
    bigList.innerHTML += personsList[i].render();
    }
  }
}

function showOnlyWoman() {
  let bigList = document.getElementById("bigList");
  for (let i = 0; i < personsList.length; i++) {

    if (personsList[i].constructor.name == "Woman") {
    bigList.innerHTML += personsList[i].render();
    }
  }
}

function showPersonUnder30() {
  let bigList = document.getElementById("bigList");
  for (let i = 0; i < personsList.length; i++) {

    if (personsList[i].age < 30) {

      bigList.innerHTML += personsList[i].render();
    }

  }
}

function showPersonOver30() {
  let bigList = document.getElementById("bigList");
  for (let i = 0; i < personsList.length; i++) {

    if (personsList[i].age > 30) {

      bigList.innerHTML += personsList[i].render();
    }

  }
}
