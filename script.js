document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('wildlifeVideo');
    const toggleBtn = document.getElementById('videoToggleBtn');

    const updateButtonText = () => {
        toggleBtn.textContent = video.paused ? 'Play Video' : 'Pause Video';
    };

    toggleBtn.addEventListener('click', () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

    video.addEventListener('play', updateButtonText);
    video.addEventListener('pause', updateButtonText);

    updateButtonText();
});
