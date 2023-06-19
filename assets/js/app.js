const jokeButton = document.getElementById('jokeButton');
const answerButton = document.getElementById('answerButton');
const jokeText = document.getElementById('jokeText');
const answerText = document.getElementById('answerText');
const resetButton = document.getElementById('resetButton');

let currentJoke = null;

const fetchRandomJoke = () => {
    fetch('https://carambar.onrender.com/jokes/random')
        .then((response) => response.json())
        .then((data) => {
            currentJoke = data;
            jokeText.innerText = data.joke;
            answerButton.style.display = 'block';
            answerText.style.display = 'none';
            answerText.innerText = '';
        })
        .catch((error) => {
            console.log(error);
        });
};

const showAnswer = () => {
    answerText.innerText = currentJoke.answer;
    answerText.style.display = 'block';
};

const resetJoke = () => {
    jokeText.innerText = '';
    answerButton.style.display = 'none';
    answerText.style.display = 'none';
    answerText.innerText = '';
};

jokeButton.addEventListener('click', fetchRandomJoke);
answerButton.addEventListener('click', showAnswer);
resetButton.addEventListener('click', resetJoke);
