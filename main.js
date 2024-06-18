const Person = {
  name: "Tommy",
  age: 32,
  greet: function () {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  },
};

const newPerson = {
  name: "Abbie",
  age: 25,
};

const anotherPerson = {
  name: "Kofi",
  age: 19,
};

// Applying greet() using call()
// const callNewPerson = Person.greet.call(newPerson);
// const callAnotherPerson = Person.greet.call(anotherPerson);

// Applying greet() using app()
const appliedPerson = Person.greet.apply(newPerson);
const appliedAnotherPerson = Person.greet.apply(anotherPerson);
