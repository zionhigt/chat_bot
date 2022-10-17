const eventEmitter = require("./emitter.js");

module.exports = function(io) {
    io.on("connection", function(client) {
        // eventEmitter.emit("postman", client.id, "I'm the super bot ");
        client.emit("room", client.id);
    })
    eventEmitter.on("postman", function(roomID, messages) {
        if (!Array.isArray(messages)) {
            messages = [messages];
        }
        console.log(roomID, "SOCKET")
        setTimeout(function(){
            io.to(roomID).emit("messages", JSON.stringify(messages));
    
        }, 3000)
    })
}