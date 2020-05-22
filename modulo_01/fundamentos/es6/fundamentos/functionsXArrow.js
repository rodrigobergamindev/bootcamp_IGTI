function sum (a, b) {
    return a + b
}

const sum2 = (a,b) => a + b //return, chaves e a palavra reservada function são implícitos

//default parameters

const sum3 = (a = 10, b =2) => a + b

console.log(sum3(11))