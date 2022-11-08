/*
1) Дан ul, в нем несколько li. Под ul сделайте кнопку, по нажатию на которую
в конец ul будет добавляться новый li с текстом 'пункт'*/
const btn  = document.querySelector('#btn');
const ul = document.querySelector('#ul');

const newLi = (txt) =>{
    let li = document.createElement("li")
    li.innerText = "Пункт";
    ul.append(li);
}
btn.addEventListener('click', newLi);
