// Вивести позиції (не індекси) букв “о” і прибрати всі “l” з тексту.
// let text = 'Hello World!';
// Очікуваний результат:
// 5
// 8
// Heo Word!

let text = 'Hello World!'

function displaySymbolPositionInText(text, symbol) {
    let lastIndex = 0;

    while (lastIndex !== -1) {
        lastIndex = text.indexOf(symbol, lastIndex + 1)

        if (lastIndex !== -1) {
            console.log(lastIndex + 1)
        }
    }
}

displaySymbolPositionInText(text, 'o')

console.log(text.replace(/[l]/gim,''))