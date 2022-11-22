console.log("1. Arifmetik operatorlar.")
var a = 12
var b = 40
console.log("Yig'indi: ",a+b)
console.log("Ayirma: ",a-b)
console.log("Ko'paytma: ",a*b)
console.log("Bo'linma: ",a/b)
console.log("B'linmaning qoldig'i: ",a%40)
console.log("Inkrinimatsiya-birinchi sonni bittaga oshiradi: ",++a)
console.log("Dekriminatsiya-birinchi sonni bittaga kamaytiradi: ",--a)


console.log("2. Taqqoslash operatorlari.")
var c = 10
let d = 5
var e = '10'
console.log(c>d)
console.log(c==e)
console.log(c===d)
console.log(d<e)


console.log("3. Mantiqiy operatorlar.")
var a = 3
var b = 45
console.log((a==b) && (a<=b))
console.log((a<b) && (b>=a))
console.log((a==b) || (a<=b))
console.log((a<b) || (b>=a))
console.log(a>b)

console.log("4. Belgilash operatorlari.")
var a = 32
var b = 23
console.log(a+=b)
console.log(a-=b)
console.log(a*=b)
console.log(a/=b)
console.log(a%=b)

console.log("Uchlik operatorlari.")
var a = 17
var b = 13
c = a < b ? "birinchi_son_kichik" : "birinchi_son_katta"
console.log(c)

console.log("Shart operatorlari.")
a = 12
b = 24
if (a>b){
    console.log("a son b dan katta")
}
else if (a == b){
    console.log("a son b ga teng.")
}
else {
    console.log("a son b dan kichik.")
}