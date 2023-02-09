const adviceTitle = document.querySelector('#advice-title');
const adviceQuote = document.querySelector('.advice-quote');
const diceQuote = document.querySelector('#dice-img');

// Fetch API
function adviceAPI () {
const apireq = 
fetch('https://api.adviceslip.com/advice')
.then((response) => response.json())
.then((data) => {
    console.log(data);
    adviceTitle.innerHTML = `Advice #${data.slip.id}`
    adviceQuote.innerHTML = `"${data.slip.advice}"`
})
} 

diceQuote.addEventListener('click', adviceAPI);




