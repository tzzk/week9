//object;

//Constructing Objects
var student={
    name:"Thiri",
    age:20,
    address:"Mdy",
    university:"TU"
}
console.log(student.name);
console.log(student.age);
console.log(student.address);
console.log(student.university);


//sum1
var hotel={
    name:"Chatrium",
    address:"Ygn",
    total_rooms:50,
    booked_rooms:20
}

console.log(hotel.total_rooms);
var Available_rooms = checkroom(hotel.total_rooms, hotel.booked_rooms);
console.log(Available_rooms);
document.getElementById("display").innerHTML="Total room = "+Available_rooms;

function checkroom(total, booked) {
    var available_rooms = total - booked;
    return available_rooms;
}

//sum2 (Using Checkavailability key)
var hotel1={
    name:"Sedona",
    address:"Ygn",
    phone:099788465,
    total_rooms:200,
    booked_rooms:88,
    checkAvailability:function(){
        return this.total_rooms-this.booked_rooms;
    }
}

console.log(" available rooms " +hotel1.checkAvailability());

//sum3(using calculateSpeed()
var car={
    name:"Belta",
    model: 2007,
    fuel:"disel",
    distance_mile:400,
    time_hr:6,
    calculateSpeed:function(){
        return this.distance_mile/this.time_hr;
    }
}
console.log(" Speed of car "+car.calculateSpeed());

//Object using constructor function

function Hotel(name,address,phone){  //this is constructor function
    this.name=name;
    this.address=address;
    this.phone=phone;

}
var sedona=new Hotel("Sedona","Mdy","098888657");//this is object 
var swam=new Hotel("Swam","Mdy","09785553690");
console.log(sedona.name+","+sedona.address);
console.log(swam.name+","+swam.address);
