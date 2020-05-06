let a= [];

for(let i =0; i<100; i++) {
    a[i] = Math.floor(Math.random() * 100 + 1);
}
console.log(a);

for(let i = 0; i<100; i++) {
    if(a[i]%10 >= 5) {
        a.splice(i,1);
        i--;
    }
}

console.log(a);