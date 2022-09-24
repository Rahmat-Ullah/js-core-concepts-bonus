const numbers = [12, 23, 34, 45, 56, 67];

// for(let i = 0; i<numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

for(const number of numbers){
    console.log(number);

}

const products = [
    {id: 1, name: 'phone', price: 12000},
    {id: 2, name: 'laptop', price: 34000},
    {id: 3, name: 'phone', price: 24000},
    {id: 4, name: 'desktop', price: 54000},
    {id: 5, name: 'phone', price: 64000}
];

// for(const product of products){
//     console.log(product);
// }

function matchedProducts(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.includes(search)){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'phone')
console.log(result);