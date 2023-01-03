//EXO 4------------------------------------

/*function test() {
    let lastname = document.querySelector('#lastname').value
    let firstname = document.querySelector('#firstname').value
    let city = document.querySelector('#city').value
    console.log(lastname, firstname, city)
    window.alert(`
        Nom : ${lastname}
        Prénom : ${firstname}
        Ville : ${city}
        `)
}
*/

//EXO5--------------------------
/*
function multi(){
    let firstNumber = parseInt(document.querySelector("#firstNumber").value)
    let secondNumber = parseFloat(document.querySelector("#secondNumber").value)
    alert(firstNumber*secondNumber)
}
*/


//EXO 6--------------------------------
/*
function divide(){
    let firstNumber = document.querySelector("#firstNumber").value
    let secondNumber = document.querySelector("#secondNumber").value
    alert(firstNumber%secondNumber)
}
*/

//EXO 7-------------------------------------
/*
function calcul() {
    let shoeSize = document.querySelector("#shoeSize").value
    let yearOfBirth = document.querySelector("#yearOfBirth").value
    alert((((((shoeSize*2)+5)*50)-yearOfBirth)+1766))
}
*/


//EXO 8 ---------------------------------------------------
/*
function calc() {
    let age = document.querySelector("#age").value
    alert (age>18? 'Vous êtes majeur' : 'Vous êtes mineur')
}
*/

//EXO 9 -------------------------------------------------
/*
function table() {
    let num = document.querySelector("#num").value
    let div = document.querySelector('.response')
    div.innerHTML += "<br>"
    for (let i=1; i<11; i++){
        div.innerHTML += `${num} x ${i} = ${num*i} <br>`
    }
}
*/

//EXO 10-----------------------------------------------------------
/*
function letters() {
    let word = document.querySelector("#word").value
    let div = document.querySelector('.response')
    div.innerHTML += "<br>"
    // for (let i=0; i<word.length; i++){
    //     div.innerHTML += word[i] + "<br>"
    // }
    word.split('').forEach(letter => (div.innerHTML += `${letter} <br>`))
}
*/

// EXO 11 --------------------------------------------------
/*
function compare() {
    let num = document.querySelector("#num").value
    if (num<5){
        alert('Votre nombre est inférieur à 5')
    } else if (num == 5) {
        alert('Votre nombre est égale à 5')
    } else {
        alert('Votre nombre est supérieur à 5')
    }
}
*/

// EXO 12 --------------------------------------------------

function squa() {
    let num = document.querySelector("#num").value
    alert(`Le carré de ${num} est ${num**2}`)
}