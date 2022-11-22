alert("Consolega kiring.")

h_yil = 2022
t_yil = 2012
c = h_yil - t_yil
if (c >= 16 && c <= 18){
    console.log("Siz hozir",c,"yoshdasiz.Pasport olish uchun ariza topshirishingiz mumkin.")
}
else if ( c>=18) {
    console.log("Siz hozir",c,"yoshdasiz.Pasport olgansiz va O'zbekiston fuqarosisiz.")
} 
else{
    console.log("Siz hozir",c,"yoshdasiz.",18-c,"yildan keyin pasport olishingiz mumkin.")
}