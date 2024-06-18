const Person = {
  name: "Tommy",
  age: 32,
  greet: function () {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  },
};

// const newPerson = {
//   name: "Abbie",
//   age: 25,
// };

// const anotherPerson = {
//   name: "Kofi",
//   age: 19,
// };

// Applying greet() using call()
// const callNewPerson = Person.greet.call(Person);

// Applying greet() using apply()
// const callPerson = Person.greet.apply(Person);

// Applying greet() using bind()
const callPersonFunc = Person.greet.bind(Person);

// callPersonFunc();

const button = document.getElementById("thisBtn");

const arrowHandleClick = () => {
  console.log(this.id);
  console.log(this.textContent);
};

button.addEventListener("click", arrowHandleClick);

function handleClick() {
  console.log(this.id);
  console.log(this.textContent);
}
