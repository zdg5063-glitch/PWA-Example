const icons = document.querySelectorAll('.social a'); // Select all social icons

icons.forEach(icon => { // Loop through each icon

    icon.addEventListener('click', () => {   // Attach click event using arrow function

        icon.style.color = "red";   // Change color to red

        setTimeout(() => {   // After 2 seconds, change it back
            icon.style.color = "#E98300";
        }, 2000);

    });

});

// Register service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
            .then(() => {
                console.log('Service Worker Registered');
            })
            .catch(error => {
                console.log('Service Worker Registration Failed:', error);
            });
    });
}