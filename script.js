function countdown() {
    // Pobranie elementów DOM
    const daysElement = document.getElementById('card-element-days');
    const hoursElement = document.getElementById('card-element-hours');
    const minutesElement = document.getElementById('card-element-minutes');
    const secondsElement = document.getElementById('card-element-seconds');

    function updateCountdown() {
        const now = new Date();
        const weddingDate = new Date("2025-08-23T17:00:00");
        const difference = weddingDate - now;

        if (difference <= 0) {
            daysElement.innerText = '0';
            hoursElement.innerText = '0';
            minutesElement.innerText = '0';
            secondsElement.innerText = '0';
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        daysElement.innerText = days;
        hoursElement.innerText = hours;
        minutesElement.innerText = minutes;
        secondsElement.innerText = seconds;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

countdown() 

window.addEventListener('load', () => {
    const imagesToPreload = [
        'g_1.webp',
        'g_2.webp',
        'g_3.webp',
        'g_4.webp',
        'g_5.webp',
        'g_6.webp',
        'g_7.webp',
        'g_8.webp'
    ];

    imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});
