var Sendbtn = document.getElementById('SendBtn');
var textbox = document.getElementById('textbox');
var chatcontainer = document.getElementById('chatcontainer')
var user = {message:""};

var arrpos = [
    {message:"welcome",response:"Hi, How can I help you?"},
    {message:"go antwhere",response:"thnk"},
    {message:"no-nothing",response:"byye"},
    {message:"yup yup",response:"okk"},
    {message:"ky ha vo",response:"nothing"},
    {message:"ha jao khelo",response:"nhi"},
]

function sendMessage(userMessage){

    var messageElement = document.createElement('div');
    messageElement.innerHTML = "<span>You: </span>" + "<span>" + userMessage + "</span>";
    messageElement.style.textAlign = "right";
    messageElement.style.margin = "10px";

    chatcontainer.appendChild(messageElement);
}

function chatbotresponse(userMessage){

    var chatbotMessage = "";

    if(userMessage == "hi"){
        chatbotMessage = "Hello";
    }
    else if (userMessage.length > 5){
        var result = arrpos.filter(val => val.message.includes(userMessage.toLowerCase()));

        if(result.length > 0){
            var response = result[0].response;
            chatbotMessage = response;
        }
        else{
            chatbotMessage = "Please type a different Message."
        }
    }
    else{
        chatbotMessage = "Please type a different Message."
    }


    var messageElement = document.createElement('div');

    messageElement.innerHTML = "chatbot: " + chatbotMessage;

    chatcontainer.appendChild(messageElement);
}




Sendbtn.addEventListener('click',function(e){
    var userMessage = textbox.value;

    if(userMessage == ""){
        alert('Please type a message');
    }
    else{
        let userMessageText = userMessage.trim();
        user.message = userMessageText;
        textbox.value = "";
        sendMessage(userMessageText);
        chatbotresponse(userMessageText);
    }
})