const jokeButton = document.getElementById('jokeButton');
const jokeText = document.getElementById('jokeText');
const answerText = document.getElementById('answerText'); // Ajouter une nouvelle balise HTML avec cet ID pour afficher la réponse

const fetchRandomJoke = () => {
    fetch('https://carambar.onrender.com/jokes/random')
        .then((response) => response.json())
        .then((data) => {
            jokeText.innerText = data.joke;
            answerText.innerText = data.answer; // affiche la réponse
        })
        .catch((error) => {
            console.log(error);
        });
};

jokeButton.addEventListener('click', fetchRandomJoke);
