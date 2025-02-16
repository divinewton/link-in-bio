document.addEventListener('DOMContentLoaded', function() {
    const bottomLink = document.getElementById('bottom-link');

    bottomLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = "https://www.divinewton.com/";
    });
});