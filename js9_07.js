//looping
var students=["mg mg","hla hla","david","nilar"];
//for 
for(var x=0;x<students.length;x++){
    console.log(students[x]);
}
var city=["Mandalay","Yangon","Magway","Sittwe","Myitkyina"];
for(var x=0;x<city.length;x++){
    console.log(city[x]);
}

var marks=[44,55,75,23];
for(var x=0;x<marks.length;x++){
    if(marks[x]>=40){
        console.log("pass");
    }
}

//while loop
var mark=[55,70,59,20,45];
//1.giving initialization
var i=0;
while (i<mark.length){ //number of times(index)
    if(mark[i]>=40){
        console.log("pass");
    }
    else
    {
        console.log("fail");
    }
    i++; //3.increment to next index
}
//d0....while loop
var gpa=[3.5,2,4,3];
var index=0;//giving initialization
do{
    console.log(gpa[index]);
    index++//3.increment to next index
}
while(index<gpa.length);//number of itmes