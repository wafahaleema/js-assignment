 let arr1 = ["1", "2", "3", "4","5" , "6", "7", "8", "9", "10"];
 console.log(arr1);

 function arrayreverse(){
     console.log(arr1.reverse());
 }
  arrayreverse();
 




 let gameNum = 25;
 let userNum = prompt("guess the game number");

 while(userNum != gameNum){
     userNum = prompt("you entered wrong number. guess again");
 } 
 console.log("congratulations, you entered the right number");







    let str = prompt("enter word ");
    let count = 0;
    function vowelsluimber(str){

    for(const char of str){
        if(char == "a"||char == "b"||char =="c"||char == "d"){
             count++;
         }
     }
     console.log(`Numbers of vowels:"  ${count}`)
 }
 vowelsluimber(str);








function angleType(angle) {
    if (angle > 0 && angle < 90) {
        return "Acute angle";
    } else if (angle === 90) {
        return "Right angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    } else if (angle === 180) {
        return "Straight angle";
    } else {
        return "Invalid angle. Please enter an angle between 0 and 180 degrees.";
    }
}


console.log(angleType(45));   
console.log(angleType(90));  
console.log(angleType(120));  
console.log(angleType(180)); 
console.log(angleType(200));



