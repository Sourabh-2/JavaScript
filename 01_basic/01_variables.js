const name = "Sourabh"  //It cannot be changed.
let email = "abc@gmail.com"
var password = "12345"
city = "Rameshwaram"  //It is not a good practice.
let state;   //It will print the undefined value, becuase we didn't give any value in it yet.


// name = "Singh";   //Not allowed
email = "xyz@gmai.com"
password = "62366";
city  = "Bengluru";

console.log(name);

/*
Prefer not to use var, because of issue in block scope and functional scope.
*/

console.log([name, email, password, city, state]);

