const Person = {
  name: "Tommy",
  age: 32,
  greet: function () {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  },
};

const person2 = {
  name: "John",
  age: 25,
};

const person3 = {
  name: "Abbie",
  age: 18,
};

// Applying greet() using call()
const callNewPerson = Person.greet.call(Person);

// Applying greet() using apply()
const callPerson = Person.greet.apply(Person);
const callOtherPerson = Person.greet.apply(person2);

// Applying greet() using bind()
const callPersonFunc = Person.greet.bind(Person);

// callPersonFunc();

// private data and closures and this
/**
 * `this` inside the increment method does not refer
 * to the closure's environment but rather to the object
 * that is being returned by the outer function.
 *
 */
function createCounter() {
  let count = 0;

  return {
    increment: function () {
      this.count++;
      console.log(this.count);
    },
    getCount: function () {
      return this.count;
    },
  };
}

// let counterObj = createCounter();
// counterObj.increment();
// createCounter().increment();
// createCounter().increment();
// console.log(createCounter().getCount());
createCounter();
