
// Diamond Shape 

for (let i = 0; i <= 5; i++) {
      let shape2 = "";
      for (let j = 5; j > i; j--) {
        shape2 += " ";
      }
      for (let k = 0; k <= i; k++) {
        shape2 += "*";
      }
      for (let l = 1; l <= i; l++) {
        shape2 += "*";
      }
      console.log(shape2);
    }