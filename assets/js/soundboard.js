// assets/js/soundboard.js
let currentAudio = null;

function playSound(audioSrc) {
    /**
     * 1. Check if a sound is already loaded.
     * We use .src.includes(audioSrc) because currentAudio.src 
     * will be a full absolute URL (http://...), while audioSrc 
     * might be a relative path (/assets/...).
     */
    if (currentAudio && currentAudio.src.includes(audioSrc)) {
        if (!currentAudio.paused) {
            // The sound is currently playing, so STOP it.
            currentAudio.pause();
            currentAudio.currentTime = 0;
            return; // Exit function so it doesn't restart immediately
        }
    }

    /** * 2. If a DIFFERENT sound was playing, stop it first 
     * so we don't have overlapping audio.
     */
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    /** * 3. Play the new sound.
     */
    currentAudio = new Audio(audioSrc);
    currentAudio.play();
}

function stopSound() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
}