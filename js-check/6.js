// Дзеркально об’єднати два масиви в один через одне значення і вивести новий масив в консоль.
// const first = [1, 2, 3, 4, 5];
// const second = [6, 7, 8, 9, 0];
// Очікуваний результат:
// [5, 0, 4, 9, 3, 8, 2, 7, 1, 6]

const first = [1, 2, 3, 4, 5];
const second = [6, 7, 8, 9, 0];

function mirrorConcate (array1, array2) {
    let a = array1.reverse()
    let b = array2.reverse()
    let c = []
    for (let i = 0; i < a.length; i++) {
        c.push(a[i])
        c.push(b[i])
    }
    return c
}

console.log(mirrorConcate(first, second) )