//class creation
class Hotel {

    constructor(name,address) {
        this.name = name;
        this.address = address;
    }
    checkAvailability(total_rooms,booked_rooms)
    {
        return total_rooms-booked_rooms
    }
}

//object creation
let sedona = new Hotel("Sedona", "Yangon");
console.log(sedona.name + "," + sedona.address);
console.log(sedona.checkAvailability(200,56));

//sum1
class Student{
    
    constructor(name,email,address){
        this.name=name;
        this.email=email;
        this.address=address;
    }
    calculateAge(birth_year,current_year)
    {
        return current_year-birth_year
    }

}

let student1=new Student("Ni Ni","nini123@outlook.com","Mdy");
let student2=new Student("Hla Hla","hla2@gmail.com","Ygn");
console.log("Student Ni Ni ="+student1.calculateAge(1993,2020));
console.log("Student Hla Hla ="+student2.calculateAge(1998,2020));
var age = student1.calculateAge(1993, 2020);
if (age>=60){
    console.log("Retire");
}
else if(age>=40){
    console.log("Mature");
}
else if (age >= 25) {
    console.log("in workplace");
}
else if (age >= 16) {
    console.log("university student");
}
else {
    console.log("High student");
} 

//new obj date insertion
var byear=new Date("1993-07-18");
var cyear=new Date();
console.log(student1.calculateAge(byear.getFullYear(),cyear.getFullYear()));



//constucting Date object and get function method
var date1=new Date();
console.log(date1.getDate());
console.log(date1.getFullYear() + "," + date1.getMonth());
console.log(date1.getFullYear()+ "," + date1.getMonth()+ "," + date1.getHours() + "," + date1.getMinutes());

//obj birthdate
var birthdate=new Date("1990/02/20");
console.log(birthdate.getFullYear());

//set function method
var date2=new Date("03-20-1996");
console.log(date2.getMonth());
date2.setFullYear("2000");
console.log("year "+date2.getFullYear());
date2.setMonth(11);
console.log("Month "+date2.getMonth());
date2.setMonth(12);// 12 means the number of month(index)
console.log("Month " + date2.getMonth());