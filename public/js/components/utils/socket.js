export default function() {
    const socket = io(window.location.origin, {
        'reconnection': true,
        'reconnectionDelay': 500,
        'reconnectionAttempts': 10
    })
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
    });
    socket.on("otherusers", function(data) {
        console.log(data);
        const otherUsers = new CustomEvent("otherusers", {
            detail: {
                otherUsers: JSON.parse(data)
            }
        });
    
        document.dispatchEvent(otherUsers)
    })
}