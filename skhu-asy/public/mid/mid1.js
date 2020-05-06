let a= [];

for(let i =0; i<5; i++) {
    a[i] = Math.floor(Math.random() * 100 + 1);
}
console.log(a);

for(let i = 0; i<a.length; i++) {
    if(a[i]%10 >= 5) {
        a.splice(i,1);
    }
}

console.log(a);