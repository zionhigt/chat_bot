import Api from "./components/utils/api.js";
console.log()
const api = Api(window.location.origin);

import socket from "./components/utils/socket.js";
socket();

import messageView from "./components/views/message.js";


window.addEventListener('load', function() {
    messageView(api);
    const messages = [
        "Hello",
        "Hello World",
        "Hello Javascript",
        "Hello Toto"
    ]
})