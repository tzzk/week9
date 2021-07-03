var gpa = 3;

if (gpa < 4 && gpa >= 3.5) {
    console.log("Gpa : Grade A");
}
else if (gpa < 3.5 && gpa >= 3) {
    console.log("Gpa : Grade B");
}
else if (gpa < 3 && gpa >= 2.5) {
    console.log("Gpa : Grade C");
}
else if (gpa < 2.5) {
    console.log("Grade D");
}
}

    calculateAge(birth_year,current_year)
    {
        return current_year-birth_year
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