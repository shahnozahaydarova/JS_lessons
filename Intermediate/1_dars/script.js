a = prompt('Ismingizni kiriting')
b = prompt('Familiyangizni kiriting:')
c = prompt("Yoshingizni kiriting: ")
d = prompt("Rasmingizni url manzilini kiriting: ")
document.getElementById("s1").innerHTML = `<i>${a}</i>`
document.getElementById("s2").innerHTML = `<b>${b}</b>`
document.getElementById("s3").innerHTML = `<a href="">${c}</a>`
document.getElementById("s4").innerHTML = `<img src="${d}">`