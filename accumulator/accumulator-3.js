let stingJsName = ["JavaScript", "HTML", "CSS", "Python"]
let nameLangPrograms = []
for (let i = 0; i < stingJsName.length; i++) {
    if (stingJsName[i].length < 3) {
        nameLangPrograms.push(stingJsName[i])
    }
}
console.log(nameLangPrograms)