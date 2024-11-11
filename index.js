console.log("hello world");

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  static comparazione(utente1, utente2) {
    if (utente1.age > utente2.age) {
      return "utente uno è più grande di utente due ";
    } else if (utente1.age < utente2.age) {
      return "utente uno è più piccolo di utente due";
    } else if (utente1.age === utente2.age) {
      return "hanno la stessa eta";
    } else {
      return "inserisci un utente";
    }
  }
  comparaCon(utente) {
    if (this.age > utente.age) {
      return "utente uno è più grande di utente due ";
    } else if (this.age < utente.age) {
      return "utente uno è più piccolo di utente due";
    } else if (this.age === utente.age) {
      return "hanno la stessa eta";
    } else {
      return "inserisci un utente";
    }
  }
}

const utente1 = new User("Gabriele", "Lucaralli", 20, "Giulianello");
const utente2 = new User("angelo", "Lucarelli", 42, "Giulianello");

console.log(User.comparazione(utente1, utente2));
console.log(utente2.comparaCon(utente1));

const name = document.getElementById("name");
const owner = document.getElementById("owner");
const age = document.getElementById("age");
const breed = document.getElementById("breed");

const myForm = document.getElementById("form");

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  uguale(pet) {
    return this.ownerName === pet.ownerName;
  }
}

const pets = [];

myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const pet = new Pet(name.value, owner.value, age.value, breed.value);
  pets.push(pet);
  console.log(pet);
});

const buttonControl = document.getElementById("controllo");

buttonControl.addEventListener("click", function (e) {
  console.log(pets[0].uguale(pets[1]));
});

// const larry = new Pet("Larry", "Martino", "Dog", "A ne so");
// const parry = new Pet("Parry", "Rachele", "Dog", "A ne so");
// const terry = new Pet("Tarry", "Martino", "Dog", "A ne so");

// console.log(larry.uguale(terry));
