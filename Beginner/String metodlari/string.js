a = 'string metodlari bilan tanishish.'
console.log(a)
console.log("Bu length metodi o'zgaruvchi uzunligini chiqarib beradi: ",a.length)
console.log("bu slice metodi tekstni bizga kerak joyini chiqaradi 0dan 9gacha chiqaradi: ",a.slice(0 ,9))
console.log("slice bilan substr metodlari deyarli bir xil faqat substring manfiy qabul qimaydi:   ",a.substring(8))
console.log("Bu substring metodi bunda 1sondan boshlab ikkinchi son marta harfni chiqarib beradi: ",a.substr(2,9))

b = a.replace("bilan tanishish" ,"replace yordamida a o'zgauvchi o'zgartirildi.")
console.log(b)
