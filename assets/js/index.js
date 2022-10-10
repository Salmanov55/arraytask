let employees = [
    {
      name: "Ali",
      age: 19
    },
    {
      name: "Nihat",
      age: 19
    },
    {
      name: "Həsən",
      age: 19
    },
    {
      name: "Babək",
      age: 20
    },
  ];
      
  employees.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  
  console.log(employees);



const numbers = [1, 3, 18, 100, 37];
const over18 = numbers.filter(myFunction);

document.getElementById("demo1").innerHTML = over18;

function myFunction(value, index, array) {
  return value > 18;
}


const ages = [33, 7, 18, 28];
document.getElementById("demo2").innerHTML = ages.every(checkAge);

function checkAge(age) {
  return age > 18;
}


const numerals = [3, 18, 20, 35];
let someOver18 = numbers.some(myFunction);

document.getElementById("demo3").innerHTML = someOver18;

function myFunction(value, index, array) {
  return value > 18;
}


const numberss = [4, 9, 16, 25, 109];
let find = numbers.find(myFunction);

document.getElementById("demo4").innerHTML = find;

function myFunction(value, index, array) {
  return value > 18;
}