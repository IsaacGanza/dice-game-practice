var randomNumber1 = Math.floor(Math.random()*6) + 1
var randomNumber2 = Math.floor(Math.random()*6) + 1

const randomImage1 = document.querySelector('.img1');
randomImage1.src = `images/dice${randomNumber1}.png`

const randomImage2 = document.querySelector('.img2');
randomImage2.src = `images/dice${randomNumber2}.png`;


if(randomNumber1 > randomNumber2) {
    document.getElementById('titleChange').textContent = "Player 1 wins!";
}
else if(randomNumber2 > randomNumber1) {
    document.getElementById('titleChange').textContent = "Player 2 wins!";
}
else {
    document.getElementById('titleChange').textContent = "Draw!";
}