function applySystemTheme() {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (prefersDarkScheme) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.add('light-mode');
    }
}

applySystemTheme();

const centeredText1 = document.querySelector('.centered-text1');
centeredText1.addEventListener('click', () => {
    centeredText1.classList.toggle('clicked');
});
const centeredText2 = document.querySelector('.centered-text2');
centeredText1.addEventListener('click', () => {
    centeredText2.classList.toggle('clicked');
});