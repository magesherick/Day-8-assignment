//Write a “person” class to hold all the details.

class Person {
    constructor(Name,Age,Gender,DOB,Address){
       this.Name = Name;
       this.Age = Age;
       this.Gender = Gender;
       this.DOB = DOB;
       this.Address = Address;

    }       
 }               
const Magesh = new Person("Magesh",21,"Male","19-02-2000","Chennai TamilNadu");
const Muthu = new Person("Muthu", 21, "Male", "20-10-1999", "Madurai TamilNadu" )
console.log(Magesh);
console.log(Muthu);