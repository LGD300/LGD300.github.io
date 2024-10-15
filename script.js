document.addEventListener('DOMContentLoaded', function () {
    const restaurantName = document.querySelector('.restaurant-name');
    setInterval(() => {
        restaurantName.classList.toggle('neon');
    }, 900); // Toggle the neon class every second
});
