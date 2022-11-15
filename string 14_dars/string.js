let a =  `Astersning yana bir turi - ajoyib va yorqin ko'rinadigan Cosmia. 
Kosmosning go'zal ranglari har qanday bog'ni o'zgartiradi, unga tazelik va yangilanish elementlari kiradi.`
b = a.includes("yorqin")

if (b == true) {
    console.log("Index raqami: ",a.indexOf("yorqin"),"da boshlanadi va ",a.indexOf(" ko'rinadigan"),"da tugaydi.")
}
else if (b == true){
    console.log("Ma'lumot topilmadi.")
}