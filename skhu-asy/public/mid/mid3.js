let a1 = [];

for(let i=0; i<3; i++) {
    a1[i] =[];
   for(let j=0; j<2; j++) {
      a1[i][j] = j+i;
   }
}

console.log(a1);
let a2 = [];
for(let i=0; i<3; i++) {
    a2[i] = [];
   for(let j=0; j<2; j++) {
      a2 = a1[i][j].shift();
   }
}
//let a2 = a1.shift();
console.log(a2);

//미해결