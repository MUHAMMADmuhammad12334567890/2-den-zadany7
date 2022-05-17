let number = [-1, 2, 3,-4, 5, 6, -7, 8, 9, 10]
let accumulator = 0;
let i = 0;
while (i < number.length) {
    if (number[i] > 0) {
accumulator += number[i]
    }
    i++
}
console.log(accumulator)