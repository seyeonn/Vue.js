let a1 = [];

for(let i=0; i<3; i++) {
    a1[i] =[];
   for(let j=0; j<2; j++) {
          a1[i][j] = j+i+i;
   }
}

console.log(a1);
 let a2 = [];
for(let i=0; i<3; i++) {
    a2[i] = [];
   for(let j=0; j<2; j++) {
      a2[i][j] = a1[i][j]; 
   }
   
}
a2.slice(0,a1.length);
console.log(a2);
a1[0][0] = 100;
console.log(a1);
console.log(a2);
