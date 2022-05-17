let namesIntocode = ["alvi", "hamzat", "zelim", "muhammad", "ramzan", "musa", "djabrail", "halid", "visxan", "movsar"]
let accumulator = []
for (let i = 0; i < namesIntocode.length; i++) {
    if (namesIntocode[i][0] === "a") {
        accumulator.push(namesIntocode[i])
    }
}
console.log(accumulator)