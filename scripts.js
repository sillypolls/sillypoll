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
    centeredText1.classList.toggle('clicked1');
});
const centeredText2 = document.querySelector('.centered-text2');
centeredText2.addEventListener('click', () => {
    centeredText2.classList.toggle('clicked2');
});
const centeredText3 = document.querySelector('.centered-text3');
centeredText3.addEventListener('click', () => {
    centeredText3.classList.toggle('clicked3');
})
const centeredText4 = document.querySelector('.centered-text4');
centeredText4.addEventListener('click', () => {
    centeredText4.classList.toggle('clicked4');
});
const centeredText5 = document.querySelector('.centered-text5');
centeredText5.addEventListener('click', () => {
    centeredText5.classList.toggle('clicked5');
});
const centeredText6 = document.querySelector('.centered-text6');
centeredText6.addEventListener('click', () => {
    centeredText6.classList.toggle('clicked6');
})
const centeredText7 = document.querySelector('.centered-text7');
centeredText7.addEventListener('click', () => {
    centeredText7.classList.toggle('clicked7');
})
