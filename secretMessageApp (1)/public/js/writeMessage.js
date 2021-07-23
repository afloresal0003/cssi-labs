
/*
VALIDATION ONE: 
Only to check if user has uppercase letter and number
*/
function isUpper(str) {
    return /[A-Z]/.test(str);
}
function hasNumber(myString) {
  return /\d/.test(myString);
}

/*
VALIDATION TWO: 
To check if user has uppercase letter, special character
lowercase letter and number
*/
// function isAllPresent(str) {
//     // Regex to check if a string
//     // contains uppercase, lowercase
//     // special character & numeric value
//     var pattern = new RegExp(
//         "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
//     );

//     // If the string is empty
//     // then print No
//     if (!str || str.length === 0) {
//         return false;
//     }

//     // Print Yes If the string matches
//     // with the Regex
//     if (pattern.test(str)) {
//         return true;
//     } else {
//         return false;
//     }
//     return;
// }

const submitMessage = () => {

    const characterLim = 50;
    const passcodeInput = document.querySelector('#passcode').value;
    const messageInput = document.querySelector('#message').value;
    
    if(messageInput.length > characterLim){
        document.getElementById("message").style.borderColor = "red";
        alert("Error! Please keep messages to 50 characters!");
        
    }
    if(isUpper(messageInput) == false){
        document.getElementById("message").style.borderColor = "red";
        alert("Error! Please include a capital letter!");
    }
    if(hasNumber(messageInput) == false){
        document.getElementById("message").style.borderColor = "red";
        alert("Error! Please include a number!");
    }
    else{
        firebase.database().ref().push({
            passcode: passcodeInput,
            message: messageInput
        });
    }
};