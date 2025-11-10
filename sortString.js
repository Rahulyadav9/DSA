const products = [
    "Samsung Galaxy S23",
    "Apple iPhone 15",
    "Apple aPhone 15",
    "Google Pixel 8",
    "OnePlus 11 Pro",
    "Sony Xperia 5 V",
    "Motorola Edge 40",
    "Xiaomi 13 Ultra",
    "Realme GT Neo 5",
    "Asus ROG Phone 7",
    "Nokia X30 5G"
];
//selection sorting 
for (let i = products.length - 1; i >= 0; i--) {
    let largest = i;
    for (let j = 0; j < i; j++) {
        if (products[j].toLowerCase() > products[largest].toLowerCase()) {
            largest = j;
        }
    }
    [products[i], products[largest]] = [products[largest], products[i]]

}
console.log(products)
