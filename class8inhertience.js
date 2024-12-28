//https://www.geeksforgeeks.org/javascript-inheritance/
//i
// nheritance is the method through which the objects inherit the properties and the methods from the other objects. It enables code reuse and structuring of relationships between objects, creating a hierarchy where a child object can access features of its parent object. Inheritance in JavaScript can be achieved in the following ways:

//Table of Content of inhertitence


//1Prototypal Inheritance
//2.Classical Inheritance
//3.Functional Inheritance

//2.classical inhertence 
class automobile {
    constructor(name, cc) {
        this.name = name;
        this.cc = cc;
    }
    engine() {
        console.log(`${this.name} 
      has ${this.cc} engine`);
    }
}

class car extends automobile {
    engine() {
        console.log(this.name,
            &quot;has &quot;, this.cc, &quot;cc engine&quot;);
    }
}

let carz = new car('Rex', &quot;1149&quot;);
carz.engine();
//using super keyword for claasical inhertience
class Automobile {
    constructor(name) {
        this.name = name;
    }

    engine() {
        console.log(this.name,
            &quot;has &quot;, this.cc, &quot;cc engine&quot;);
    }
}

class Car extends Automobile {
    constructor(name, cc) {
        super(name);

        // Additional properties for
        // the Car class
        this.cc = cc;
    }

    engine() {
        // the 'engine' method of the parent
        // class using 'super'
        super.engine();

        console.log(this.name,
            &quot;has &quot;, this.cc, &quot;cc engine&quot;);
    }
}

let carz = new Car('Rexton', '1500');
carz.engine();
//



