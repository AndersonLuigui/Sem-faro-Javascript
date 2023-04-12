const img = document.getElementById('img');
const buttons = document.getElementById('buttons'); // CAPTURANDO O PAI DOS ELEMENTOS BUTTONS



const trafficLight = (event) => {
    turnOn[event.target.id](); // CAPTURANDO O EVENTO DOS BOTÕES E TURNON É A AÇÃO 

}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0; // arrowFunction da função AUTOMATICO


const changeColor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[ colorIndex];
    turnOn[color]();
    nextIndex();
}

// FUNÇÃO QUE TROCA A IMAGEM
const turnOn = { 
    'red': () => img.src = './img/semRed.jpg',
    'yellow': () => img.src = './img/semYellow.jpg',
    'green': () => img.src = './img/semGreen.jpg',
    'automatic': () => setInterval(changeColor, 1000)
}

buttons.addEventListener('click', trafficLight);