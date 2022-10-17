const http = require("http");
const app = require("./app.js");
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";
const server = http.createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        transports: ['websocket', 'polling'],
        credentials: true
    }
});
const events = require("./events/socket.js")(io);

server.on("error", function(err) {
    console.error(err);
});

server.on("listening", function() {
    console.log("server is listening on")
    console.table({
        host: HOST,
        port: PORT
    })
})
server.listen(PORT)