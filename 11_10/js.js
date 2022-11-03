let a = prompt("Столица КР")
if(a === "Bishkek"){
    alert('correct');
}else {
    alert("incorrect");
}

let x = prompt("who are you?");
if (x === 'admin'){
    b = prompt("password");
}else if(x === 'user'){
    alert("go out");
}else {
    alert("NO")
}
if(b === "bilibob"){
    alert("correct");
}else if(b === 123){
    alert('Nice try');
}else {
    alert("go out");
}