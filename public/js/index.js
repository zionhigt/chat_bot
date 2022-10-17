import Api from "./components/utils/api.js";
const api = Api("http://192.168.1.81:3000");

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