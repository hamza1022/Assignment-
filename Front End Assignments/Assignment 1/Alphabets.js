// I is for rows and Index is for Columns
// H A M Z A  

let H = "";
for (i = 0; i < 5; i++) {
  for (let index = 0; index < 5; index++) {
    if (i == 2 || index == 0 || index == 4) {
      H += "*";
    }
    else {
      H += " ";
    }
  }
  H += "\n";

}
console.log(H);

let A = "";
for (i = 0; i < 5; i++) {
  for (let index = 0; index < 5; index++) {
    if (i == 0 || i == 2 || index == 0 || index == 4) {
      A += "*";
    }
    else {
      A += " ";
    }
  }
  A += "\n";

}
console.log(A);

let M = "";
for (i = 0; i < 5; i++) {

  for (let index = 0; index < 5; index++) {
    if (index == 0 || i == 1 || index == 4) {
      if (index % 2 == 0) {

        M += "*";

      } else {
        M += " ";
      }
    }
    else {
      M += " ";
    }
  }
  M += "\n";

}
console.log(M);




let Z = "";
for (i = 0; i < 5; i++) {
  for (let index = 0; index < 5; index++) {
    if (i == 0 || i == 4 || index == 4 - i) {
      Z += "*";
    }
    else {
      Z += " ";
    }
  }
  Z += "\n";

}
console.log(Z);

let A2 = "";
for (i = 0; i < 5; i++) {
  for (let index = 0; index < 5; index++) {
    if (i == 0 || i == 2 || index == 0 || index == 4) {
      A2 += "*";
    }
    else {
      A2 += " ";
    }
  }
  A2 += "\n";

}
console.log(A2);


// let U = "";
// for (i = 0; i < 5; i++) {
//   for (let index = 0; index < 5; index++) {
//     if (i==4 || index == 0 || index == 4) {
//       U += "*";
//     }
//     else {
//       U += " ";
//     }
//   }
//   U += "\n";

// }
// console.log(U);

