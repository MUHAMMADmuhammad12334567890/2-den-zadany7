let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let number2 = []
let i = 0;
while (i < number.length) {
    if (number[i] % 2 !== 0) {
        number2.push(number[i])
    }
    i++
}
console.log(number2)