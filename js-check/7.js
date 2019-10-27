// Дано 2 масиви, Овочі та Фрукти:
// const vegetables = ['potato', 'tomato', 'cucumber'];
// const fruits = ['apple', 'pineapple', 'banana'];
// Зробити за допомогою if без використання циклів пошук до якого масиву належить значення 'cucumber',
// вивівши в консоль назву масиву.
// Зробити ту саму задачу за допомогою switch / case .

const vegetables = ['potato', 'tomato', 'cucumber']
const fruits = ['apple', 'pineapple', 'banana']
const searchItem = 'cucumber'

if (vegetables.includes(searchItem)) {
    console.log('This is if else: ')
    console.log('vegetables')
} else {
    console.log('This is if else: ')
    console.log('fruits')
} 

switch (vegetables.includes(searchItem)) {
    case true:
        console.log('This is switch case: ')
        console.log('vagetables')
        break
    case false:
        console.log('This is switch case: ')
        console.log('fruits')
}