// Написати функцію, що огортає setTimeout() в Promise. При виклику вона приймає один параметр —
// кількість мілісекунд. Функція повертає Promise, що має перейти в стан resolved через задану кількість
// мілісекунд.

console.log('Start')
function timeOutToPromise(time) {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve()
          }, time)
    })
}

timeOutToPromise(5000)
    .then(() => console.log('Done!'))


