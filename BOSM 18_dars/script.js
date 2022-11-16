a = window.prompt(`Sizga qaysi dasturlash tilining url manzili kerak `,'python yoki js')

if (a.toLowerCase() == 'python'){
    window.open('https://www.python.org/')
}
else if (a.toLowerCase() == 'js'){
    window.open('https://ru.wikipedia.org/wiki/JavaScript')
}
else{
    alert("Bunday ma'lumot topilmadi.")
}