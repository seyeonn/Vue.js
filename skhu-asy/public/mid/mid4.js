let a = [];

for(let i =0; i<5; i++) {
    a[i] = Math.floor(Math.random() * 100 + 1);
}
console.log(a);
let a2 = a.filter((e) => e%2 === 0);
console.log(a2);

function callback(i, a) {

}
console.log(a2.reduce(callback));

//미해결