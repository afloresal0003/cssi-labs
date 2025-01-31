console.log("in viewMessages.js")

function getMessages() {
    //console.log(firebase)
    const messagesRef = firebase.database().ref()
    messagesRef.on('value', (snapshot) => {
        const messages = snapshot.val();
        //console.log(messages)
        validateMessages(messages)
    })

}

function validateMessages(messages){
    const passcodeAttempt = document.querySelector("#passcode").value
    for (message in messages) {
        const messageData = messages[message];
        if (messageData.passcode.toString() === passcodeAttempt) {
            console.log("Correct password!")
            console.log(messageData.message)
            renderMessageAsHtml(messageData.message)
            document.getElementById("tryAgain").style.visibility = "visible";
        }
    }
}

function renderMessageAsHtml(messageContent) {
     // Hide Input Form
    const passcodeInput = document.querySelector('#passcodeInput');
    // Hide it
    passcodeInput.style.display = 'none';
    // Render message as HTML
    const messageDiv = document.querySelector("#message")
    messageDiv.innerHTML = messageContent; 
}
