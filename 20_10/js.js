
let arr = [];
let pushArr = (name , num) => {
   for (let i =0; i < num;i++){
       arr.push(name);
   }
   return arr;
}
let res = pushArr(5, 10);
console.log(res);


//
// let array = [1 , 2, 3, ];
// let revArr = (arr) =>{
//     return  arr.reverse();
//
// }
// let res = revArr(array);
// alert(res);
//
/*

let a = toNumber(prompt());
for (let i = 0; i < a.length; i++){
    if(+a[i] > 0){
        alert("Plus");
    }else if(+a[i] < 0){
        alert("Minus")
    }else if (+a[i] === 0){
        break;
    }
}
*/
