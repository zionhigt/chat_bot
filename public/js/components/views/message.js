export default function(api) {
    const spawnNotification = function (body, icon, title) {
        const options = {
          body: body,
          icon: icon
        };
        document.dispatchEvent(new CustomEvent("notify", {
            detail: {
                options,
                title
            }
        }))
      }
      
    const getMessageItem = function(message) {
        return $("<div>")
        .addClass("message__display")
        .text(message);
    }
    
    const printMessagesList = function(messages) {
        const container = $("#chatTool .msg__container");
        container.append(messages.map(item => {
            return getMessageItem(item);
        }))
    }
    
    const postMessage = function(body) {
        api.post("/message", body)
        .then(res => {
            console.log("message send");
        });
    }
    $("#messageInput").on("submit", function(e) {
        e.preventDefault();
        const $form = $(this).serializeArray();
        const body = {};
        for (let item of $form) {
            body[item.name] = item.value;
        }
        postMessage(body);
    })

    $(document).on("iampostman", function(event) {
        event.stopPropagation();
        spawnNotification(event.detail.mails[0], null, "Nouveau message")
        printMessagesList(event.detail.mails);
    })
}