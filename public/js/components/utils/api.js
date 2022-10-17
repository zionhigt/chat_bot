export default function(host) {
    return {
        host: host,
        post: function(route, body, options=null) {
            const roomID = sessionStorage.getItem("roomID");
            if (!roomID) {
                throw new Error("Socket disconnected")
            } else {
                body.roomID = roomID;
            }
            if (!options) {
                options = {
                    headers: {
                        "Content-Type": "application/json; charset=utf-8"
                    },
                    method: "POST",
                    body: JSON.stringify(body)
                }
            }
            const url = new URL(route, this.host).href;
            console.log(url);
            const request = new Request(url, options);
            return fetch(request).catch(err => {
                console.error(err);
            });
        } 
    }
}