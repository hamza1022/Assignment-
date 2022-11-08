//  3rd shape Hallow Square Pattern 


let n = 5; 
let shape3 = "";

for( let a=0 ; a<n ; a++){

  for(let j=0;j<n;j++){

    if(a === 0 || a===n-1){
      shape3 +="*"; 

    }
   else{
    if(j===0 || j === n-1 )  {

      shape3 += "*"; 

    }
    else{
      shape3+= " ";

    }

   }

  }
  shape3+= "\n"; 

}
console.log(shape3);