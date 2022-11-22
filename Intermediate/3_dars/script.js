ism = prompt("Ismingizni kiriting:")
familiya = prompt("Familiyangizni yozing:")
rang = prompt("Ism va familiya tekstining rangini kiriting ingliz tilida: ")
olcham = prompt("Ism va familiya tekstining o'lchamini kiriting: ")
document.getElementById("s1").innerHTML = `<b>${ism}</b>`
document.getElementById('s2').innerHTML =   `<b>${familiya}</b>`
document.getElementById("s1").style.color = `${rang}`
document.getElementById("s1").style.fontSize = `${olcham}px`
document.getElementById("s2").style.color = `${rang}`
document.getElementById("s2").style.fontSize = `${olcham}px`



