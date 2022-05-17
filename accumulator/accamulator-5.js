let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let number2 = []
for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0){
        number2.push(number[i])
    }

}
console.log(number2)