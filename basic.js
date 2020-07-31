const name = 'Chansopon';
let height = 175;
let isMale = true;
let city = null;
let bigNumber = 10n;

console.log(name, height, isMale, city, bigNumber);

const person = {
    name: 'Chansopon',
    height: 175,
    city: 'Bangkok'
}

console.log(person);
console.log(person.name, person.height, person.city);

person.height = 180;
console.log(person.height);

person.weight = 68;
console.log(person);

const numbers = [5, 10, 15, 20];
console.log(numbers);
console.log(numbers[2]);

numbers.push(25);
console.log(numbers);

numbers.pop(25);
console.log(numbers);

numbers.unshift(1);
console.log(numbers);

numbers.shift();
console.log(numbers);

let result = 10 + 5 * 2 / 2;
console.log(result);

let password = 'aaaaaaaa';
if (password === '') {
    console.log('password is required!');
} else if (password.length >= 8 && password.length <= 12) {
    console.log('password is valid!');
} else {
    console.log('password is innvalid!');
}

function calculateVat(money, vat) {
    return money * vat / 100;
}

const totalVat = calculateVat(100, 7);
console.log(totalVat);

const totalVat10 = calculateVat(100, 10);
console.log(totalVat10);

for (let counter = 0; counter < 10; counter++) {
    if (counter % 2 !== 0) {
        continue;
    }
    console.log(counter);
}

for (let counter = 0; counter < 10; counter++) {
    if (counter == 5) {
        break;
    }
    console.log(counter);
}

//DOM manipulation
