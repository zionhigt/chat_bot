export default function() {
    const socket = io("http://192.168.1.81:3000")
    socket.on("room", function(data) {
        sessionStorage.setItem("roomID", data);
    })
    socket.on("messages", function(data) {
        console.log(data);
        const senderMail = new CustomEvent("iampostman", {
            detail: {
                mails: JSON.parse(data)
            }
        });
    
        document.dispatchEvent(senderMail)
    })
}