const products = [
    'Samsung Tv',
    'Honor 7a',
    'Real me 3  pro',
    'Lenovo laptop',
    'Dell Laptop',
    'Phone'
];

const searchKey = 'tv';
const output = [];

// search str using indexOf()
// for (const product of products) {
//     if (product.toLowerCase().indexOf(searchKey.toLowerCase()) != -1) {
//         // output.push(product);
//     }
// }
// console.log(output);

// search str using includes()

// for (const product of products) {
//     if (product.toLowerCase().includes(searchKey.toLowerCase())) {
//         output.push(product);
//     }
// }
// console.log(output);

// search str using startsWith()

// for (const product of products) {
//     if (product.toLowerCase().startsWith(searchKey.toLowerCase())) {
//         output.push(product);
//     }
// }

// console.log(output);

// search str using endsWith()

for (const product of products) {
    if (product.toLowerCase().endsWith(searchKey.toLowerCase())) {
        output.push(product);
    }
}

console.log(output);