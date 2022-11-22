a = prompt("Ismingizni kiriting: ")
b = prompt("Familiyangizni kiriting: ")
d = prompt("tug'ilgan yilingizni kiriting: ")
c = prompt("Consolega kiring.", 'ok')
e = 2022 - d
function kirish(a,b,e){
    console.log("Assalomu alaykum.Hurmatli ",a,b)
    if (e >= 18){
        console.log("Siz ",e,"yoshdasiz va saytimizga kirishingiz mumkin.")
    }
    else if(e < 18) {
        console.log("Siz ", e,"yoshdasiz,saytimizga 18 yoshdan kattalar kirishi mumkin.")
    }
}

kirish(a,b,e)