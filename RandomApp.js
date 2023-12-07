let head = document.querySelector ('h1');
let btn = document.querySelector ('button');
let body = document.querySelector ('body');
let div = document.querySelector ('div');

btn.addEventListener ('click', function () {
    let newColor = RanCol();
    body.style.backgroundColor = newColor;
    head.innerText = newColor;
})

let RanCol = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    if (r < 50 && g < 50 && b < 50) {
        head.style.color = 'white';
        div.style.borderColor = 'white';
    } else {
        head.style.color = 'black';
        div.style.borderColor = 'black';
    }
    return `rgb(${r}, ${g}, ${b})`;
}