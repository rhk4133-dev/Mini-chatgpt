const chatBox = document.getElementById("chatBox");

function sendMessage() {
    const input = document.getElementById("userInput");
    const userText = input.value.trim();
    if (userText === "") return;

    addMessage(userText, "user");
    input.value = "";

    setTimeout(() => {
        const reply = generateResponse(userText);
        addMessage(reply, "bot");
    }, 800);
}

function addMessage(text, type) {
    const message = document.createElement("div");
    message.classList.add("message", type);
    message.innerText = text;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function generateResponse(input) {
    input = input.toLowerCase();

    if (input.includes("hello") || input.includes("hi")) {
        return "Hello! How can I help you today?";
    }

    if (input.includes("your name")) {
        return "I am Mini GPT, your local AI assistant.";
    }

    if (input.includes("who made you")) {
        return "I was created using HTML, CSS, and JavaScript.";
    }

    if (input.includes("python")) {
        return "Python is a powerful programming language used for AI, web development, and automation.";
    }

    if (input.includes("html")) {
        return "HTML is used to structure websites.";
    }

    if (input.includes("css")) {
        return "CSS is used to style websites and make them beautiful.";
    }

    if (input.includes("javascript")) {
        return "JavaScript makes websites interactive.";
    }

    return "I don't have internet access, but I am learning! Try asking about programming or greetings 😊";
}

document.getElementById("userInput")
.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
