document.addEventListener('DOMContentLoaded', () => {
    const molesContainer = document.getElementById('moles-container');
    const scoreElement = document.getElementById('score-value');

    let score = 0;

    function startGame() {
        setInterval(() => {
            createMole();
        }, 1000);
    }

    function createMole() {
        const mole = document.createElement('div');
        mole.classList.add('mole');
        mole.addEventListener('click', whackMole);
        molesContainer.appendChild(mole);

        setTimeout(() => {
            molesContainer.removeChild(mole);
        }, 1000);
    }

    function whackMole() {
        score++;
        scoreElement.textContent = score;
        this.parentNode.removeChild(this);
    }

    startGame();
});
