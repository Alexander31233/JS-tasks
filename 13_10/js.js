let userSalaries = ['Ella', 'Sophia', 'Ellie'];
alert(userSalaries[1]);
alert(userSalaries[2]);

let obj = {
    a: 5,
    b: 6,
    c:10
}
let all = 0;
for (let key in obj){
    all += obj[key];
}
alert(all);


let data = false;
let number = data === true ? 3 : 5;
console.log(number);