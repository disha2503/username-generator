// for (i=0;i<=5;i++)
//     {
//         console.log("apna");
//     }

// 1.Print all even no from 1 to 100

// for (i =0; i<=100;i++){
//   if(i%2==0){
//     console.log(i);
//   }   
// }


// 2.create a game where you start with random game Node. Ask the user to keep guessing the game no until user enters correct value

let gameNum=25;

let userGame=prompt("Guess the number");
// console.log(userGame);
while(userGame != gameNum)
    {
        userGame=  prompt("you entered wrong no,Guess the number again:");
    }
console.log("congatualtions, you have  entered right number");