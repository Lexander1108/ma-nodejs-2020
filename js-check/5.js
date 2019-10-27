// Відібрати парні цифри та вивести одним рядком.
// Очікуваний результат:
// 2468

const data = '21345A67098'
let string = ''

for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 == 0 && data[i] > 0) {
        string += data[i]
    }
}
console.log(string)