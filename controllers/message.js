const eventEmitter = require("../events/emitter.js");


exports.postMessage = (req, res) => {
    console.log(req.body)
    eventEmitter.emit("postman", req.body.roomID, "Merci pour votre message !")
    res.status(201).json({message: "Message envoyé"});
}