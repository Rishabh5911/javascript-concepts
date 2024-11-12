// let person = {
//     firstName : 'Rishabh',
//     lastName : 'Pokhriyal',
//     contact : 9999999999,

//     getName : function(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// console.log(person.getName());

//constructor fn - it gives us a base blue print which we can use to make objects.

// function Person(firstName,lastName,phoneNumber){
//     this.fname = firstName,
//     this.lname = lastName,
//     this.contact = phoneNumber
// }



// class keyword
class Person{
    constructor(firstName,lastName,phoneNumber){
        this.fname = firstName;
        this.lname = lastName;
        this.contact = phoneNumber;    
    }

    getContact(){
        return `${this.contact}`;
    }
}

// adding methods to the prototype of the Person class
Person.prototype.getFullName = function() {
    return `${this.fname} ${this.lname}`;
};

Person.prototype.getPersonDetails = function() {
    return {
        firstName: this.fname,
        lastName: this.lname,
        contact: this.contact
    };
};


let p1 = new Person('Rishabh','Pokhriyal',999999999);
console.log(p1);

