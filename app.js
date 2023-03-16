// API à utiliser pour les images de chiens: https://dog.ceo/api/breeds/image/random

function randomDog(){
    let doggieImage = document.getElementById("dogsAPI");
    fetch ('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json())
        .then(json => doggieImage.src = json.message);
}

function clickBtn(){
    let doggieBtn = document.getElementById("doggieBtn");
    doggieBtn.addEventListener("click", randomDog);
}

document.addEventListener("DOMContentLoaded", () =>{
    randomDog();
    clickBtn();
})
