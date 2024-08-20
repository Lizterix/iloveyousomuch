const loveTitle = document.getElementById('love__title')
const yesBtn = document.getElementById('yes')
const noBtn = document.getElementById('no')

yesBtn.addEventListener('click',() => {
    loveTitle.textContent = 'А я тебя очень сильно люблю, моё солнышко! Я никогда тебя не брошу и не оставлю, ты всегда можешь рассчитывать на меня! ❤'
    setTimeout(() => {
        loveTitle.textContent = 'А ты меня любишь?'
    }, 5000);
})

noBtn.addEventListener('click', () => {
    loveTitle.textContent = 'Неправильный ответ!'
    setTimeout(() => {
        loveTitle.textContent = 'А ты меня любишь?'
    }, 1000);
})