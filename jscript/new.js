// let productname=prompt('please enter your product name')
// if(productname=='pepsi'){
//     console.log(productname+' available ');
// }else{
//     console.log(productname+' N/A');
// }

// let purchaseprice=parseInt(prompt('please enter your purchase price'))
// if(purchaseprice==150){
//     console.log(purchaseprice+' accepted ');
// }else{
//     console.log(purchaseprice+' declined ');
// }

// let sellingprice=parseInt(prompt('please enter your selling price'))
// if(sellingprice==200){
//     console.log(sellingprice+' accepted ');
// }else{
//     console.log(sellingprice+' declined');
// }

// let profit=sellingprice-purchaseprice
// console.log(`${sellingprice}-${purchaseprice}=${profit}`)
// console.log('profit was made')


let product=prompt(' your product name ');

let price=parseInt(prompt('your purchase price'));

let sale=parseInt(prompt('your selling price'))

let profit=sale-price
console.log(`${sale}-${price}=${profit}`)

console.log(`${product} was sold with a profit of ${profit}`);