var num1=2;
switch (num1) {
    case 5:console.log("it is 5");      
        break;
    case 6:console.log("it is 6");break;

    default:console.log("It is something");
}

switch (num1) {
    case 1:document.getElementById("display").style.color="red";
        
        break;
    case 2: 
        document.getElementById("display").innerHTML="Number 2";
        document.getElementById("display").style.color = "green";
        document.getElementById("display").style.backgroundColor = "Yellow";
    break;
    default:document.getElementById("display").style.backgroundColor="Yellow";
}