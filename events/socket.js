const eventEmitter = require("./emitter.js");

module.exports = function(io) {
    io.on("connection", function(client) {
        // eventEmitter.emit("postman", client.id, "I'm the super bot ");
        eventEmitter.emit("comein", client);
        client.emit("room", client.id);
    })
    eventEmitter.on("postman", function(roomID, messages) {
        console.log("Recu")
        if (!Array.isArray(messages)) {
            messages = [messages];
        }
        console.log(roomID, "SOCKET")
        setTimeout(function(){
            io.to(roomID).emit("messages", JSON.stringify(messages));
    
        }, 3000)
    })
    eventEmitter.on("comein", function(client) {
        const otherClients = Object.keys(io.engine.clients).filter(item => {
            console.log(item, client.id)
            item != client.id;
        })
        console.log(Object.keys(io.engine.clients))
        io.emit("otherusers", JSON.stringify(otherClients));
    })
}