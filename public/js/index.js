import Api from "./components/utils/api.js";
const api = Api(window.location.origin);

// import notif from "./components/notification.js";
// Notification.requestPermission()
// .then((permission) => {
//     console.log(permission)
//     notif();
// })


import socket from "./components/utils/socket.js";
socket();

import messageView from "./components/views/message.js";


window.addEventListener('load', function() {
    messageView(api);
})