let circles = document.getElementsByClassName('circle');
let clicked_rate = document.getElementById('clicked-rate');
let rating_window = document.getElementsByClassName('how-did-we-do-container');
let tnahkyou_window = document.getElementsByClassName('thank-you-container');

Object.keys(circles).forEach(key => {
    circles[key].addEventListener("click", () =>{
        rating_window[0].classList.add('not-visible')
        tnahkyou_window[0].classList.remove('not-visible')
        clicked_rate.innerText = parseInt(key) + 1;
    })
})
