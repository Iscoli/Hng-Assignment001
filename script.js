document.addEventListener('DOMContentLoaded', () => {
    const timeElement = document.getElementById('time');
    const dayElement = document.getElementById('day');

    function updateTime() {
        const now = new Date();
        const utcString = now.toUTCString().split(' ');
        const timeString = `${utcString[4]}`;
        const dayString = `${utcString[0]}`;

        timeElement.textContent = timeString;
        dayElement.textContent = dayString;
    }

    updateTime();
    setInterval(updateTime, 1000);
});
