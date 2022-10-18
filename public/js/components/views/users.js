export default function() {
    $(document).on("otherusers", function(event) {
        event.stopPropagation();
        const otherUsers = event.detail.otherUsers;
        console.log(otherUsers);
    })
}