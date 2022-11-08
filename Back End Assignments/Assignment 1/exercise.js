console.log("me");

let a = ["1", "1", "4","4","5", "3", "3", "1"];

for (let i = 0; i < a.length; i++) {

    let flag = true;
   for (let j = 0; j < a.length; j++) {
  
    if (i==j) {
        continue;    
    }
  
    if(a[i]===a[j])
    {

        flag = false;
    }

   } 
   if (flag){

    console.log(a[i]);

   }  

}