//variable
var x=20; 
var y=10;

//Data Types => Number, Boolean, String, Array

console.log("Welcome");
//print("Welcome");
document.write("Hello");


console.log(x+y);//30
console.log(x-y);//10
console.log(x/y);//20/10 => 2
console.log(x%y);//20 % 10 => 0

x+=10;
console.log(x) // x=x+10 => 30
x-=10;
console.log(x); // x=x-10 => 20

console.log(x++); // post increment x=x+1;

console.log(x);

console.log(++x); // pre increment

console.log(x);

a=10;
b=20;
console.log(a>b); //false
console.log(a<b); //true
console.log(a==b); //false
console.log(a>=b); //false a>b or a==b => 0 or 0 => 0
console.log(a<=b); //true  a<b or a==b => 1 or 0 => 1 

// 1 && 1 => 1
console.log(a>b &&  a<=b);  // 0 && 1 => 0 //false
console.log(a<=b && a!=b); // 1 && 1 => 1 //true

// 0 or 0 => 0
console.log(a>b | a<=b);  // 0 or 1 => 1

a=90;
if(a==10){
  console.log("A");
}
else{
    console.log("K")
}

a=50;
if(a==10){  
    console.log("A");
}
else if(a==20){
      console.log("B")
}
else if(a==50){
    console.log("C")
}
else{
    console.log("exit")
}

// salary less than 10000 , 10% bonus
// 10000 and above but less than 20000 20% bonus
// 20000 and above but less than 30000 30% bonus
// 30000 and above 40% bonus



salary = 12000
var bonus=0;
if(salary >=0 && salary<10000){
   bonus = Number(0.1 * salary);
   salary = salary + bonus;
   console.log(salary);
}
else if(salary >=10000 && salary<20000){
    bonus = Number(0.2 * salary); //2400
    salary = salary + bonus;
    console.log(salary);
 }

