//Function chapter
function findAverage(){
    var sub1=70;
    var sub2=86;
    var sub3=55;
    var average=(sub1+sub2+sub3)/3;
    var message = "sub1 " + sub1;
    message += "<br> sub 2 is "+ sub2;
    message += "<br> sub 3 is "+ sub3;
    document.getElementById("display").innerHTML= message+"<br> Average marks(in marks) are "+average;
}

findAverage();
//2
function findTotal() {
    var item1 = 20;
    var item1_price = 3890;
    var item2 = 10;
    var item2_price = 2387;
    var item3 = 40;
    var item3_price = 2300;
    var totalitem = item1 + item2 + item3;
    var totalcost = (item1 * item1_price) + (item2 * item2_price) + (item3 * item3_price);
    document.getElementById("item").innerHTML = "Total quanitity of items is " + totalitem + "<br>" + "Total cost is " + totalcost;
    //message
    //var message="total quanitiy of items is "+(item1 + item2 + item3);
    //message +="Total cost "+(item1 * item1_price) + (item2 * item2_price) + (item3 * item3_price);
    //document.getElementById("item").innerHTML = message;
   

}

findTotal();
//3 Using Array

function findCostArray(){
    var items=[20,10,40];
    var items_price=[3890,2387,2300];
    var message = "no of items are " + (items[0] + items[1] +items[2]);
    document.getElementById("message").innerHTML =message;
}
findCostArray();


function findtotalcost()
{
    var name=["apple","oil","shirt"];
    var number = [4, 3, 20];
    var cost = [265, 1850, 4500];
    var message =name[0] +"   "+ (number[0]*cost[0]);
    message +="<br>" +  name[1] + "   " + (number[1] * cost[1]);
    message += "<br>" +  name[2] + "   " + (number[2] * cost[2]);
   

    document.getElementById("cost").innerHTML=message;
}
findtotalcost();                                                                                        