// 1.prompt user to enter their full name . generate a username for them based on InputDeviceInfo. start username with @, followed by their full name and ending with the fullname length
//eg username="disha", username should be "@disha5"

let fullName = prompt("Enter full name without spaces");
let userName = "@" + fullName + fullName.length;
console.log(userName);
