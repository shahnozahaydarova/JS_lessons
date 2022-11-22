a = window.location.protocol

if (a=='https:'){
    alert("Siz xavfsiz saytga kirdingiz undan bemalol foydalanishingiz mumkin.")
    console.log("Xavfsiz.")
}
else if(a=='http:'){
    alert("Sayt xavfsiz emas.")
    console.log("xavfsiz emas.")
}
else if (a=="file:"){
    alert("Sayt internetga joylanmagan.")
    console.log("Bog'lanmagan.")
}
else{
    console.log("Dasturda kamchilik bor.")
}