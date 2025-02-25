//OTP Generator------------
//      let value  = prompt("Enter the number for otp generator");
        function otpGen(length){
                let otp = '';
                for(let i = 0; i<length; i++){
                    otp += Math.floor(Math.random()*10).toString();
                }
                return otp;
        }
        // console.log(otpGen(value))
        

//for function parameter required
       
        function check(){
            throw new Error("value  is required");
        };
        function required(value = check()){
            console.log(value);
        }
        // required();


// ----------------------------------------- 

        // console.log( false == []); //true
        // console.log( false == ![]); //true

// ------------------------------------------
        // console.log(5 + +"5")

//-------------------------------------------
        function sum(num1 , num2){
            "use strict";
            num1 = 100;
            num2 = 200;
            return arguments[0] + arguments[1];
        }     
        // console.log(sum(10, 10));   

// for  find the vowels in a string  -----------

const stra = "hey js you r amazing";
const vowels = ["a","e","i","o","u"];

function countVowels(data){
        let count = 0;
        data.split("").forEach((ch)=>{
                vowels.includes(ch) && count++;
        })
        return count;
}
//console.log(countVowels(stra)); // 6

// --------------------------------------------

var foo = "🐯";

function showName(){
        foo = "🐼";
   return;
      function foo(){}  
}
showName();
// console.log(foo);

// --------------------------------------------

if(0.1 + 0.2 == 0.3) {
//     console.log(true);
}else{
//   console.log(false)
} 
//   output => false 
// 0.1 = 0.00011001100110011001100110011001100110011001100110011001100110
// 0.2 = 0.00110011001100110011001100110011001100110011001100110011001100
// 0.3 = 0.01001100110011001100110011001100110011001100110011001100110011

//----------------------------------------
 
// popup in javascript
   //alert("how arou you")
  //let result = confirm("how aru you");
  //let user = prompt("guase the number");

//--------------------------------------------

// const x = [10];
// const y = [10];
//console.log(x+y); //1010 because of it convert the array into string and then add it

//-----------------------------------------

const a =[1,2];
const b ="1,2";
// console.log(a == b); // true because of it convert the array into string

// console.log(+true); //1
// console.log(+false); //0
// console.log(+"123"); //123
// console.log(+null); // 0 
// console.log([] == ![]);//false

//------------------------------------------------

// Immediate Invoked Function Expression (IIFE)
// (function (){
//         console.log("hello world..!");
// }) ();

//---------------------------------------------------
            //printing the ASCII value
//      let str = "{}[]ello all the best for all the user that uses the code";
    

       //console.log(str.charCodeAt(6)) //97
       //console.log(str.charCodeAt(0)) //123
       //console.log(str.charCodeAt(9)) //32
//        console.log(str.charCodeAt(2)) //91

//----------------------------------------------------

            // Factorial
            //n=5 => 5*4*3*2*1
          function factorial(n){
                if( n === 0 ){  //for the stop recursion
                        return 1;
                } else{
                  return n*factorial(n-1);
                }
          }  
        //   console.log(factorial(10));

//--------------------------------------------------------
                // sum 
          function sum(n){
                return n * n ;

          }
        //   console.log(sum(4));

//--------------------------------------------------------

       //sort array to assending order descending order
       let arr= [100,5,9,400,88,];

       console.log(arr.sort((a,b)=> a-b));
       console.log(arr.sort((a,b)=> b-a));

//--------------------------------------------------------

function mergeAlternately(str1, str2) {
        let merged = "";
        let maxLength = Math.max(str1.length, str2.length);
    
        for (let i = 0; i < maxLength; i++) {
            if (i < str1.length) merged += str1[i];
            if (i < str2.length) merged += str2[i];
        }
        return merged;
    }
    
    // Example Usage
    console.log(mergeAlternately("abc", "12345")); // Output: "a1b2c345"
    console.log(mergeAlternately("hello", "world")); // Output: "hweolrllod"
        







