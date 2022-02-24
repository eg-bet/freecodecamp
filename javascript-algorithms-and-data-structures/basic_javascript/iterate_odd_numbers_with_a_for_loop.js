// Setup
const myArray = [];

// Only change code below this line
for (let i = 9; i > 0; i -=2) {
 myArray.unshift(i);
}

console.log(myArray);

/*
I prefer the teacher's solution below because it 
actually checks that the number is odd, unlike my
solution which is more like ~assuming~ the numbers
are odd based on i.
*/

for (let i=0; i < 10; i++) {
    if (i % 2 == 1) {
      myArray.push(i)
    }
   }