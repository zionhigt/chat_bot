export default function() {
    document.addEventListener("notify", function(event) {
        event.stopPropagation();
        const options = event.detail.options;
        const title = event.detail.title;
        const n = new Notification(title, options);
        console.log(n)
    })
}