const a = [[1,2],["Python","Java script"],['dasturlash tili','bauzer tili'],['django',"react,vue,angular"],["7ta","2ta"],["OOP"],["def","function"],["list","massiv"]]
q = window.prompt(`Sizga qaysi dasturlash tili haqida ma'lumot kerak:
                1==python 
                2==javascript `,'1 ')
console.log(q)

if (q==1) {
    console.log(a[0][0],a[1][0],a[2][0],"freamworklari: ",a[3][0],"asosiy datatype soni: ",a[4][0],a[5],"asosida tuzilgan "," funksiya belgilanishi",a[6][0],"listlaring nomlanishi",a[7][0])
}
else if(q==2){
    console.log(a[0][1],a[1][1],a[2][1],"freamworklari: ",a[3][1],"asosiy datatype soni: ",a[4][1],a[5],"asosida tuzilgan "," funksiya belgilanishi",a[6][1],"listlaring nomlanishi",a[7][1])
}
else{
    alert("Bunday ma'lumot topilmadi.")
}

