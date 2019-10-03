const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');
const degrees = document.querySelector('#degrees');
const random = document.querySelector('#random');
const current = document.querySelector('h3');
const body = document.querySelector('body');

function randomColor() {
    const letters = '0123456789abcdef';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomDegrees() {
    return Math.floor(Math.random() * 999);
}

function randomGradient() {
    const randomColor1 = randomColor();
    const randomColor2 = randomColor();
    const randomDegrees1 = randomDegrees();
    const newGradient = `linear-gradient(${randomDegrees1}deg, ${randomColor1}, ${randomColor2})`;
    body.style.background = newGradient;
    degrees.value = randomDegrees1;
    color1.value = randomColor1;
    color2.value = randomColor2;
    current.textContent = newGradient;
}

function changeGradient() {
    const newDegrees = Number(degrees.value) + "deg";
    const newGradient = `linear-gradient(${newDegrees}, ${color1.value}, ${color2.value})`;
    body.style.background = newGradient;
    current.textContent = newGradient;
}

color1.addEventListener('input', changeGradient);

color2.addEventListener('input', changeGradient);

degrees.addEventListener('input', changeGradient);

random.addEventListener('click', randomGradient);

randomGradient();