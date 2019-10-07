const counter = document.querySelector('#counter');
let count; 
let autoIncrement;
const likes = document.querySelector('ul.likes');

let incrementCount = () => {
    count = counter.innerText;
    count = `${parseInt(count, 10) + 1}`;
    counter.innerText = count; 
}

autoIncrement = setInterval(incrementCount, 1000);

let manualDecrement = () => {
    count = counter.innerText;
    count = `${parseInt(count, 10) - 1}`;
    counter.innerText = count; 
}

const minusButton = document.querySelector('#minus');
minusButton.addEventListener('click', function(e) {
    manualDecrement();
});

const plusButton = document.querySelector('#plus');
plusButton.addEventListener('click', function(e) {
    incrementCount();
});

let likeNumber = () => {
    const currentNumber = counter.innerText;
    let likeLi;
    let numLikes;

    if (likes.querySelector(`[data-num="${currentNumber}"]`)) {
        likeLi = likes.querySelector(`[data-num="${currentNumber}"]`);
        numLikes = likeLi.querySelector('span').innerText;
        likeLi.querySelector('span').innerText = `${parseInt(numLikes, 10) + 1}`
        if (!likeLi.innerHTML.includes('times')) {
            likeLi.innerHTML = likeLi.innerHTML.replace('time', 'times');
        }
    } else {
        likeLi = document.createElement('li');
        likeLi.dataset.num = currentNumber;
        likeLi.appendChild(document.createTextNode(`${currentNumber} has been liked `))
        numLikes = document.createElement('span');
        numLikes.innerText = '1';
        likeLi.appendChild(numLikes);
        likeLi.appendChild(document.createTextNode(' time'))
        likes.appendChild(likeLi);
    }
}


const likeButton = document.querySelector('#heart');
likeButton.addEventListener('click', function(e) {
    likeNumber();
});

let pauseCount = () => {

}

const pauseButton = document.querySelector('#pause');
pauseButton.addEventListener('click', function(e) {
    pauseCount();    
});