const hello = () => {
    let message = "Hello , JavaScript"
    return message;
}

let result = hello();
console.log(result);


const numCube = num => {
    let result = num ** 3;
    console.log(result);
}
numCube( 5);
numCube( 65);


const getName = (uName = "guest") => {
    let str = `Hello ${uName}`;
    console.log(str);
}
let name = "Vasiliy";
getName(name);
getName();


const doubleNums = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        newArr.push(arr[i] * 2);

    }
    return newArr;
}
