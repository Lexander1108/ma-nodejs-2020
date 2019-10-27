// Написати код, який перевіряв би поля об’єкта на відповідність даних до наступних умов:

const user = {
    firstName: 'John', // string
    lastName: 'Doe', // string
    rate: 0.86, // number in range 0..1
    address: { // not empty object or null
        line1: '15 Macon St', // string
        line2: '', // string
        city: 'Gotham' // string
    },
    phoneNumbers: [ // array containing at least 1 element
        {
            type: 'MOBILE', // string, limited to MOBILE | LINE | VOIP
            number: '(555) 555-1234' // string in specific format
        },
        {
            type: 'LINE',
            number: '(555) 555-5678'
        }
    ]
};

function userCheck (user){
    try {
        const { firstName, lastName, rate, address, phoneNumbers } = user;
        const { line1, line2, city} = address

        if (typeof firstName !== 'string') {
            return false
        } 

        if (typeof lastName !== 'string') {
            return false
        }

        if (typeof rate !== 'number' || user.rate > 1 || user.rate < 0) {
            return false
        }

        if (typeof address !== 'object' && address !== null) {
            console.log('address')
            return false
        }

        if (typeof line1 !== 'string') {
            return false
        }

        if(typeof line2 !== 'string') {
            return false
        }

        if (typeof city !== 'string') {
            return false
        }

        if ( Array.isArray(phoneNumbers) == false && phoneNumbers.lenght == 0) {
            return false
        }

        const invalidPhone = phoneNumbers.find((phone) => {
            if (
                typeof phone.type !== 'string' ||
                phone.type !== 'MOBILE' && 
                phone.type !== 'LINE' && 
                phone.type !== 'VOIP'
            ) {
                return phone
            }
            const phoneNumberMatch = phone.number.match(/\(\d\d\d\) \d\d\d-\d\d\d\d/)
            if (phone.number !== phoneNumberMatch[0]) {
                console.log(phone.number)
                return phone
            }
        })
        
        if (invalidPhone) {
            return false
        }

        return true
        }
catch (mistake) {
    return false
    }
}

const isUserValid = userCheck(user);
console.log({ isUserValid })