function showScreen(screenId) {
    // 1. Alle Screens verstecken
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.add('hidden');
        screen.classList.remove('active'); // Optional für Animationen
    });

    // 2. Den gewünschten Screen zeigen
    const activeScreen = document.getElementById(screenId);
    if (activeScreen) {
        activeScreen.classList.remove('hidden');
        activeScreen.classList.add('active');
    }
}