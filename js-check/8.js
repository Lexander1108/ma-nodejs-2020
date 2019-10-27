// Створіть клас Планета.
// Конструктор класу повинен приймати назву та діаметр планети, а також викликати метод класу для
// підрахунку об'єму планети (припустимо, що планета це сфера).
// Також клас повинен мати метод, що виводить в консоль назву планети та її об'єм.
// Приклад: Планета *** має об'єм *** .
// Створити ще один клас Земля, унаслідуватися від класу

class Planet {
    constructor( title, diameter){
        this.title = title
        this.diameter = diameter
    }
    get volume(){
        return (4/3) * Math.PI * (this.diameter/2)**3
    }
    toString(){
        return `Planet ${this.title} has volume ${this.volume}`
    }
}

class Earth extends Planet {
    constructor(diameter){
        super('Earth', diameter)
    }
}

const mars = new Planet ('Mars', 6779)
console.log(mars)

const earth = new Planet ('Earth', 12742000)
console.log(earth + '')