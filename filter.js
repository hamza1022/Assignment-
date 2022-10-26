let team = [
    {
        name: "hamza",
        age:"20"
    },
    {
        name: "usama",
        age:"20"
    },
    {
        name: "ali",
        age:"21"
    },
    {
        name: "hamza",
        age:"23"
    },

 ];
 const age = team.filter(value => value.age > 20);
  document.write(age);
  console.log(age);