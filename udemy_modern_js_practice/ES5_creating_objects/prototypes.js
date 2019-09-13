// PART 1: Prototypes Explained

//Object.prototype
//Person.prototype

// Person constructor
function Person1(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calculateAge = function(){
    //   const diff =  Date.now() - this.birthday.getTime();
    //   const ageDate = new Date(diff);
    //   return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
  }
  
  // Calculate age
  Person1.prototype.calculateAge = function(){
    const diff =  Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  
  // Get full name
  Person1.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
  }
  
  // Gets Married
  Person1.prototype.getsMaried = function(newLastName){
    this.lastName = newLastName;
  }
  
  const john = new Person1('John', 'Doe', '8-12-90');
  const mary = new Person1('Mary', 'Johnson', 'March 20 1978');
  
  console.log(mary);
  
  console.log(john.calculateAge());
  
  console.log(mary.getFullName());
  
  mary.getsMaried('Smith');
  
  console.log(mary.getFullName());
  
  console.log(mary.hasOwnProperty('firstName'));
  console.log(mary.hasOwnProperty('getFullName'));


  ///////////////////////////////////////////////////////////////////////////////////////

  // PART 2: Prototypal Inheritance

  // Person constructor
function Person2(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  // Greeting
  Person2.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
  
  const p1 = new Person2('Jess', 'Smith');
  
  console.log(p1.greeting());
  
  // Customer constructor
  function Customer(firstName, lastName, phone, membership) {
    Person2.call(this, firstName, lastName);
  
    this.phone = phone;
    this.membership = membership;
  }
  
  // Inherit the Person prototype methods
  Customer.prototype = Object.create(Person2.prototype);
  
  // Make customer.prototype return Customer()
  Customer.prototype.constructor = Customer;
  
  // Create customer
  const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');
  
  console.log(customer1);
  
  // Customer greeting
  Customer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
  }
  
  console.log(customer1.greeting());

  ///////////////////////////////////////////////////////////////////////////////////////

  //PART 3: Using Object.create()

  const personPrototypes = {
    greeting: function() {
      return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName) {
      this.lastName = newLastName;
    }
  }
  
  const linda = Object.create(personPrototypes);
  linda.firstName = 'Linda';
  linda.lastName = 'Williams';
  linda.age = 30;
  
  linda.getsMarried('Thompson');
  
  console.log(linda.greeting());
  
  const brad = Object.create(personPrototypes, {
    firstName: {value: 'Brad'},
    lastName: {value: 'Traversy'},
    age: {value: 36}
  });
  
  console.log(brad);
  console.log(brad.firstName);
  console.log(linda)
  
  console.log(brad.greeting());