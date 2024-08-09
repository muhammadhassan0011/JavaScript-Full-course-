"use strict";
/*
///// --------------_________  What is Object-Oriented Progaming  _______________-------/>>////////////////////////////////////////////////////////
//  OOP is a programming paradigram based on the concept of objects ;
// we use objects to model( describe ) real-world or abstract features
// The 4 pillars of OOP are still valid ...: 
// 1 : Abstraction  .. 2) Encapsulation  3> Inheritance  4>  Polymorphism ...

// 1>  Abstraction : Ignoring or Hiding detail that don't matter, allowing us to get an overview prespective of the thing we are implementing .. istead of messing with details that don't really matter to our implementation. 

// 2) Encapsulation : keeping properties and methods private inside the class, so they are not accessible from outside the class. Some methods can be sxposed as a public interface(API) . 

//  3> Inheritance : Making all properties and methods of a certain class available to a child class, forming a hierarchial relationship between classes. This helps us to reuse common logic and to model real-World relationships.. 

//  4> Polymorphism :  A child class can overWrite a method it inherited from a parent class (its more complex that that , but enough for our purpose)....

// All objects are linked to Prototypes ... 
*/

//

/*
////////////// ---------------------____ : Constructor Function and The new Operator ______------=========///////////////////////////////
// Difference between regular Function & Constructor Function  is that we call it with (new) operator : -- Arrow func will not work as func Constructor Cuz it DoesN't have this keyword :
const Person = function (firstName, birthYear) {
  //   console.log(this); // Person {}
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Like properties , ADDing (METHODS):
  //   // never create method inside of a constructor func...
  //   this.calcAge = function () {
  //     console.log(2024 - this.birthYear);
  //   };  INstead we use : ( PROTOTYPES )  >> PROTOTYPES-inheritance
};
const hassan = new Person("Hassan", 2003);
console.log(hassan); //  Person {firstName: 'Hassan', birthYear: 2003}

//Behind the scenes, there have been four steps ...
// 1. New empty object is created ..
// 2. function is called , this = {}  So this keyword will be equal to new empty OBJ
// 3. {} linked to prototype ...
// 4. function automatically returns empty Obj from the beginning {} returned from the constructure func...

const hussain = new Person("Hussain", 2006);
const alizay = new Person("Alizay", 2009);
console.log(hussain, alizay);
const jay = "jay";
//  Operator to test data :
console.log(hussain instanceof Person); // true
console.log(jay instanceof Person); // false

//---------------______________ : Prototypes : ____________________---------------------//////////////////////////////
// =====> All the objects that are created through (Person): Constructor Func.. will inheriate So they will get excess to all the Properties that are defined on (Person.prototype)
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};
hussain.calcAge();
alizay.calcAge();
// it works because any-Object has Excess to the  Methods and properties from its Prototype and we can confirm it by Special property (.__proto)
console.log(hussain.__proto__);
console.log(hussain.__proto__ === Person.prototype); // true  : Prototype of hussain object is essentialy the Prototype property of the Constructure Func...
//  Person.prototype is not the prototype of Person ...
console.log(Person.prototype.isPrototypeOf(hussain)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false
// Person.prototype is the prototype of hussain : --  But not the prototype of Person
//.prototypreOfLinkedObjects

// Setting Properties on prototypes ... =>> it has excess because of its prototype ==>
Person.prototype.species = "Homo Species";
console.log(hussain.species, alizay.species);

console.log(hussain.hasOwnProperty("firstName")); // true // this works cuz of (Prototype Chain)...
console.log(hussain.hasOwnProperty("species")); // False

// ALL objects in Js has its OwnPrototype : ===>
// (__) is a short-cut to write a new object : ---

//_________________________ : PROTOTYPAL INHERITANCE AND THE PROTOTYPE CHAIN : ___________________________________________///////////////////////////////////

// __________________________ :: PROTOTYPAL INHERITANCE on Built-In Objects : _________________________________//////////////////////////////////////////////
console.log(alizay.__proto__); // Top of the prototype chain ..
console.log(hussain.__proto__.__proto__);
console.log(hussain.__proto__.__proto__.__proto__); // null

console.dir(Person.prototype.constructor);

const arr = [1, 1, 23, 80, 23, 45, 7, 6, 7, 80];
console.log(arr.__proto__);
console.log(Array.prototype);
console.log(arr.__proto__ === Array.prototype); //  true

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
}; // But this  is a bad idea do this in Real World :  <== Project ==>
console.log(arr.unique());

const h1 = document.querySelector("h1");
console.dir(h1);

console.dir((x) => x * 1);
// function itself is also an object, So it also has a prototype : ===>
*/

//

/*
// _____________________________ : Challenge # 1 : ____________________________________//////////////////////////////////////////
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
const bmwCar = new Car("BMW", 120);
const mercedesCar = new Car("Mercedes", 95);
console.log(bmwCar);
console.log(mercedesCar);

Car.prototype.accelerate = function () {
  //   this.speed = this.speed + 10;
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed} km/h`);
};
bmwCar.accelerate();
bmwCar.accelerate();
bmwCar.accelerate();
bmwCar.brake();
bmwCar.brake();
bmwCar.accelerate();

// mercedesCar.accelerate();
// mercedesCar.brake();
// So the accelerate and brake method are able to manuplate the speed ...
*/

/*
//  ___________________________________ : ES6 CLASSES : _________________________________________________ ////////////////////////////////
// : ES6 CLASSES :    allows us to do same thing but with a nicer and modren syntax , dont work like traditional classes like( Java or C++ ) ...

// class expression
// const PersonClass = class {};
// class decleration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  } // Meethods will be add to the PROTOTYPE == >
  // Instance Methods : ---- >
  calcAge() {
    console.log(2024 - this.birthYear);
  }
  greet() {
    console.log(`hey ${this.fullName}! How are you:)`);
  } // works the same as Below prototype_func.. code
  get age() {
    return 2024 - this.birthYear;
  } // like an other method that we set on Prototype __

  // imp when we try to set a property that already exists :
  set fullName(name) {
    // Both setter and constructor func are trying to set the exact same property name :
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name !`);
  }
  get fullName() {
    return this._fullName;
  }
  // Static  Method : ===>
  static hey() {
    console.log("Hey There $$");
    console.log(this);
  }
}
// all we have to do is to write the methods in side the class but outside the constructure , then they automatically be added to the prototype Property
const alizay = new PersonCl("Alizay Shah", 2008);
console.log(alizay);
alizay.calcAge(); // 16
console.log(alizay.age);

console.log(alizay.__proto__ === PersonCl.prototype); // true

// PersonCl.prototype.greet = function () {
//   console.log(`hey ${this.firstName}! How are you:)`);
// };
alizay.greet();
// Proofs that the class really just hide the true nature of prototypal inheritance in javaScript ...

// 1: Classes are not hoisted
// 2. Classes are first-class citizens means :=> (can pass them into functions / also return them from functions)
// Classes are executed in strict mode ...
// 3. Classes are executed in strick mode ...

const wealter = new PersonCl("Walter white", 2024);
console.log(wealter);
// ___________________________________ : SETTERS AND GETTERS : -__________________/////////////////////////////////////////////////////
//  we dont need to use getters or setters,  but sometimes its nice to be able to use these features ... specially when we need a validation like  this by the time we ar4e creating a new object ...
const account = {
  owner: "Hassan",
  movements: [1, 2, 4, 5, 6, 7, 8],

  get lastest() {
    // getters
    return this.movements.slice(-1).pop();
  },
  set lastest(mov) {
    // setters
    this.movements.push(mov);
  },
};
console.log(account.lastest);

account.lastest = 50;
console.log(account);
///_____________________ _  : Static Method____//////////////////////////_________
PersonCl.hey(); // Static Method___

////////______________________________ : OBJECT.CREATE : _______________________________/////////////////////////////////////////////////
// Take away : OBJECT.CREATE : Creates a new Object, and the prototype of that Object will be the Object that we passed in :--->
const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },
  init(firstName, birthYear) {
    /// looks like constructor func but nothing to do with constructor func
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = "steaven";
steven.birthYear = 2002;
steven.calcAge(); // 2022

console.log(steven.__proto__ === PersonProto); // true ... exactly the Object that we specified up here ...
const sarah = Object.create(PersonProto);
// calling init :--
sarah.init("Sarah", 1979);
sarah.calcAge(); // 45 
*/

//

/*
//////________________________________________ : Challenge # 2 : ___________________________________?????????????????????????????????/////
// 1. converting into ES6 class :
class Car {
  constructor(make, speed) {
    this.make = make; // Ford
    this.speed = speed; // 120
  }
  accelerate() {
    //   this.speed = this.speed + 10;
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }
  // _____________
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
const ford = new Car("Ford", 120);
console.log(ford.speedUS); // 75
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.accelerate();
ford.speedUS = 50;
console.log(ford); // Car {make: 'Ford', speed: 80}  80 = 50 times 1.6 :>
*/

//

/*
//________ : Inheritance Between "Classes": Constructor Functions : ____________________________________________________////////////////////////
// Object.prototype sits on the top of the Prototype chain ...
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName; // this voilates the (Dont repeat yourSelf) principle : ==>
  // this.birthYear = birthYear;
  // Instead of simply calling the Person func here, we need to manually set the this keyword as well...  So we use (call) Method : =>
  Person.call(this, firstName, birthYear);
  this.course = course;
}; //  IN This : we want the student and person to be connected : ---

// Linking Prototypes : ===>// we have to create this connection here before we add anyMore methods to the prototype Object of stdent..
Student.prototype = Object.create(Person.prototype); // Student.prototype object is now an object that inherits from Person.prototype =
// Student.prototype = Person.prototype;  mORE logical but : Cant work
Student.prototype.introduce = function () {
  console.log(
    `My name is ${this.firstName} and I study ${this.course} in year of ${this.birthYear}`
  );
};

const mike = new Student("Mike", 2020, "Computer Science");
console.log(mike);
mike.introduce();
mike.calcAge();
console.log(mike instanceof Student); // true
console.log(mike instanceof Person); // true
console.log(mike instanceof Object); // true
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
*/

//

/*
/// ___________________________________ : Challenge # 3 : _________________________________________/////////////////////////////////////
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  //   this.speed = this.speed + 10;
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  // Not manually define but instead call the parent class : ==>
  Car.call(this, make, speed);
  this.charge = charge;
};
// Linking the Prototype :===>
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo; //  90
}; //  EV {make: 'tesla', speed: 120, charge: 23} :

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--; // decrease by 1 %
  console.log(
    `${this.make} going at ${this.speed} km/h, with the charging of ${this.charge}`
  );
};
//  4> Polymorphism :  A child class can overWrite a method it inherited from a parent class (its more complex that that , but enough for our purpose)....

const tesla = new EV("tesla", 120, 23);
tesla.chargeBattery(90);
console.log(tesla); //  EV {make: 'tesla', speed: 120, charge: 90}
console.log(tesla.accelerate());
console.log(tesla.brake());
console.log(tesla.accelerate());
console.log(tesla.accelerate());
console.log(tesla.brake());

//  Works like polymorphysim .... ==>
*/

/*
///  _________________ : Inheritance Between "Classes": ES6 Classes : _________________________ ?/////////////////////////////////////////
//  More Convienient and More used in the Real World :==> ES6 classes 
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  } // Meethods will be add to the PROTOTYPE === >
  // Instance Methods : ---- >
  calcAge() {
    console.log(2024 - this.birthYear);
  }
  greet() {
    console.log(`hey ${this.fullName}! How are you:)`);
  } // works the same as Below prototype_func.. code
  get age() {
    return 2024 - this.birthYear;
  } // like an other method that we set on Prototype __

  // imp when we try to set a property that already exists :
  set fullName(name) {
    // Both setter and constructor func are trying to set the exact same property name :
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name !`);
  }
  get fullName() {
    return this._fullName;
  }
  // Static  Method : ===>
  static hey() {
    console.log("Hey There $$");
    // console.log(this);
  }
}
// To make this student class inherit from the person class, we need to do is to say extends : Links the Prototypes (Behind the seens) : ==>
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // PersonCl.call()// Here we dont need to manually call :  Instead ==>
    super(fullName, birthYear); // ==> Always needs to happen first :)
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    //  can say : this calaAge method here is shadowing the one that is in the parent class ...
    console.log(
      `I am ${
        2024 - this.birthYear
      } Years old, but as a student I feel more like ${
        2024 - this.birthYear + 10
      }`
    );
  } extends
}
const alizay = new StudentCl("Alizay Shah", 2008, "Computer Science");
console.log(alizay);
alizay.introduce(); // My name is Alizay Shah and I study Computer Science
alizay.calcAge(); // 16, I am 16 Years old, but as a student I feel more like 26
//  THIS Macanisam that we explored here can actually be very problematic and dangerous in the Real-World :==)
*/

/*
//________________________ : IHERITANCE BETWEEN `CLASSES`: OBJECT.CREATE :____________________________/////////////////////////////////////////////
// 3 WAY of Implementing Object Orientied Programing :
const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },
  init(firstName, birthYear) {
    /// looks like constructor func but nothing to do with constructor func
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
// want to add new OBJ in the Middle of the Chain : SO : student inherit directly from person : ===>
const StudentProto = Object.create(PersonProto); // Now we can use this to create new Students : ==>
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(
    `My name is ${this.firstName} and I study ${this.course} at the year of ${this.birthYear}`
  );
};
const jay = Object.create(StudentProto); // student.proto OBJ is now the Prototype off the jay Object :)
jay.init("Jay", 2010, "Computer Science");
jay.introduce();
jay.calcAge(); //  14

// in This VIRSION : we don't even worry about constructors anymore, also not about prototype properties,not about new operator : ===>
// Really just objects linked to another objects :) More Convienient and More used in the Real World :==> ES6 classes ( Real World )
*/

//
/*
// _______________________________ : ANOTHER CLASS EXAMPLE : ____________________________________ ////////////////////////////////////////
class Account {
  // constructor(owner, currency, pin, movements) : {instead we Do ==>
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    // protected property :
    this._movements = []; // does not make property truely private :
    this.locale = navigation.language;

    console.log(`thanks for opening this account, ${owner}`);
  }
  // Public interface
  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }
  withdrawal(val) {
    this.deposit(-val);
  }
  _aproveLoan(val) {
    // methid to check if loan should be aproved : =>
    return true;
  } // this is kind of internal method that only requestLoan method should be able to use ==> really need data encapsulation & data privacy :>
  requestLoan(val) {
    if (this._aproveLoan(val)) {
      this.deposit(val);
      console.log(`Loan aproved`);
    }
  }
}
const acc1 = new Account("Hassan", "EUR", 1111);
// //if we want to do deposits :===>
// acc1.movements.push(250);
// // if we want to do Withdrawal :===>
// acc1.movements.push(-250);
acc1.deposit(250);
acc1.withdrawal(70);
acc1.requestLoan(1000);
// acc1.aproveLoan(1000);
console.log(acc1);
console.log(acc1.getMovements());
console.log(acc1._pin);

//

// ________________  : ENCAPSULATION: PROTECTED PROPERTIES AND METHODS :________________________________________///////////////////////////////
//  : ENCAPSULATION: MEANS to some properties and methods private inside the class so they are not accessible from outside of the class., then the rest of the methods are basically exposed as a public interface, which we can also call API. :
//  Advantages :1_) To prevent Code from outside of a class to accidentally manipulate  or data inside the class.
// 2) when we expose only a small interface soa small API consisting only of few public methods then we can change all the other internal methods with more confidence ...

// this lecture we basically fake encapsulation by simply using a convention..
*/

/*
// ________________  : ENCAPSULATION Private Class Fields and Methods  : ________________________________________///////////////////////////////
// Class Fields Proposals : STAGE 3 ==>
// four kinds of fields and methods:=>
// 1> Public Fields
//  Private Fields
// Public Methods
// Private Methods
// (there is alos static versions) :)

class Account {
  //1> Public Fields ( instances )
  locale = navigator.language;
  // these public fields are gonna be present on all the instances that we are creating through the class. SO: they are not on the prototype ==> Imp :

  // 2> Private Fields :  Properties are really truly not acessible from the outside > syntax :#   ( instances )
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // protected property :
    // this._movements = []; // does not make property truely private :
    // this.locale = navigation.language;
    console.log(`thanks for opening this account, ${owner}`);
  }
  // Public interface  / Methods :_
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdrawal(val) {
    this.deposit(-val);
    return this;
  }
  // this is kind of internal method that only requestLoan method should be able to use ==> really need data encapsulation & data privacy :>
  requestLoan(val) {
    // if (this.#aproveLoan(val)) {
    if (this._aproveLoan(val)) {
      this.deposit(val);
      console.log(`Loan aproved`);
      return this;
    }
  }
  // Static
  static helper() {
    console.log("Helper!");
  }

  // 4) Private Methods : No Browser Supports this :
  // #aproveLoan(val) {
  _aproveLoan(val) {
    // methid to check if loan should be aproved : =>
    return true;
  }
}
const acc1 = new Account("Hassan", "EUR", 1111);
// //if we want to do deposits :===>
// acc1.movements.push(250);
// // if we want to do Withdrawal :===>
// acc1.movements.push(-250);
acc1.deposit(250);
acc1.withdrawal(70);
acc1.requestLoan(1000);
// acc1.aproveLoan(1000);
console.log(acc1);
console.log(acc1.getMovements());
console.log(acc1._pin);
Account.helper(); // Static only works like that :)

// console.log(acc1.#movements); not accessible
// console.log(acc1.#pin);  Not accessible
// console.log(acc1.#aproveLoan(100)); sees this as private class field and not as method. methods are not really implemented in google Chrome :)

// _____________________________: Chaining Method : __________//////////
// bY chaining these methods we could first filter an array, then map the result and finally reduce the results of the map, all in one line of CODE:
acc1.deposit(300).deposit(500).withdrawal(35).requestLoan(1000).withdrawal(500); // for chaining we have to put (return this) in every method :
console.log(acc1.getMovements());
*/

//

//////////////////// ______________________ : Challenge # 4 : ________________________________________////////////////////////////////////
class CarCl {
  constructor(make, speed) {
    this.make = make; // Ford
    this.speed = speed; // 120
  }
  accelerate() {
    //   this.speed = this.speed + 10;
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h `);
    return this;
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
    return this;
  }
  // _____________
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  // 1) Creating EVCl  child class of the CarCl class
  // 2) privating the charge property:
  #charge;
  constructor(make, speed, charge) {
    // Not manually define but instead call the parent class : ==>
    // Car.call(this, make, speed);
    super(make, speed); // just works like call :
    this.#charge = charge; // will be private
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo; //  90
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--; // decrease by 1 %
    console.log(
      `${this.make} going at ${this.speed} km/h, with the charging of ${
        this.#charge
      }`
    );
    return this;
  }
}
// Linking the Prototype :=== >
// EVCl.prototype = Object.create(CarCl.prototype);

// Linking the Prototype :=== >
// EV.prototype = Object.create(Car.prototype);
const ravian = new EVCl("Ravian", 120, 23);
console.log(ravian);
// console.log(ravian.#charge);

// 3 : ==> Chaining all the methods :
ravian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(ravian.speedUS);
console.log(ravian.speed);
