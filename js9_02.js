
//using parameter function
var items=["apple","orange","grape"];
var items_qty=[2,3,4.5];
var items_price=[1800,1500,2000];

var totalcost=calculateCost(items_qty,items_price);//(parameters)
document.getElementById("display").innerHTML="total cost is"+totalcost;

function calculateCost(qty,price)
{
    var total = qty[0] * price[0] + qty[1] * price[1] + qty[2] * price[2];
    return total; //return value
}

//sum 1
var current_year=[2020];
var birth_year=[1993,1994];

var age = findAge(current_year, birth_year);
document.getElementById("display1").innerHTML="Age :"+age;

function findAge(current_year,birth_year)
{
    var age=2020-1993;
    return age;
}
//sum2
 var total_rooms=[20];
 var booked_rooms=[5];

var available_rooms = checkAvailability(total_rooms, booked_rooms);
document.getElementById("display2").innerHTML="Available rooms : "+available_rooms;

 function checkAvailability(total,booked)
 {
     var available_rooms=total-booked;
     return available_rooms;
 }
