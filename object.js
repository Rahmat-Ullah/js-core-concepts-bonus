const student = {
    name: 'rahmat',
    id: 23,
    address: 'uttora',
    isSingle: true,
    friends: ['sami', 'kami', 'rami', 'rani'],
    car: {
        brand: 'toyota',
        price: 34567888,
        made: 2022,
        manufacturer: {
            name: 'toyota',
            ceo: 'ami',
            country: 'japan'
        }

    }
}

console.log(student.car.manufacturer.ceo);