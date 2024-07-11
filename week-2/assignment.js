//Assignment1
function max(numbers){
	let maxNum = numbers[0];
    for (let i = 1; i < numbers.length; i++){
        if ( numbers[i] > maxNum ){
            maxNum = numbers[i];
        }
    }
    return maxNum;
}
console.log(max([1, 2, 4, 5])); // expected output: 5
console.log(max([5, 2, 7, 1, 6])); // expected output: 7
//Assignment2
function calculate2(args) {
    let output = ''
    let keys = Object.keys(args);
    // let n1 = args[keys[0]];
    // let n2 = args[keys[1]];
    // let op = args[keys[2]];
    let { n1, n2, op } = args; 
    if ( op === "+" ){
        output = n1 + n2
    }else if ( op === "-" ){
        output = n1 - n2
    }else{
        output = "Not supported"
    }
    return output;
}
console.log(calculate2({ n1: 2, n2: 3, op: '+' })); // expected output: 5
console.log(calculate2({ n1: 5, n2: 2, op: '-' }));  // expected output: 3
console.log(calculate2({ n1: 1, n2: 6, op: 'x' }));  // expected output: 'Not supported'
//Assignment3
function calculate3(data) {
    let keys = Object.keys(data);
	let discount = data[keys[0]];
    let products = data[keys[1]];
    let totalPrice = 0;
    for( let i = 0; i < products.length; i++ ){
        let price = products[i].price;
        let discountedPrice = price * (1 - discount);
        totalPrice += discountedPrice;
    }
    return totalPrice;
}
const discountedPrice = calculate3({
	discount: 0.1,
	products: [
		{
			name: "Product 1",
			price: 100
		},
		{
			name: "Product 2",
			price: 700
		},
		{
			name: "Product 3",
			price: 250
		}
	]
});
console.log(discountedPrice) // show the total price of all products after applying a discount
//Assignment4
//Request1
const header = document.querySelector('.header');
header.addEventListener('click', () => {
    header.textContent = 'Have a Good Time!'
});
//Request2
const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('show');
    menuBtn.style.display = 'none';
});
closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
    menuBtn.style.display = 'block';
});
//Request3
const cta = document.querySelector('.btn');
const box = document.querySelector('.hidden-box');
function adjustBoxDisplay() {
    if (window.innerWidth < 500) {
        box.style.display = 'flex';
    } else {
        box.style.display = 'grid';
    }
}
cta.addEventListener('click', () => {
    box.style.display = 'block'; 
    adjustBoxDisplay();
});
window.addEventListener('resize', () => {
    if (box.style.display !== 'none') {
        adjustBoxDisplay();
    }
});