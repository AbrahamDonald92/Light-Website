let btn = document.getElementById('btn');
let light = document.getElementById('light')

btn.addEventListener('click', toggleBtn)

function toggleBtn() {
    btn.classList.toggle('active')
    light.classList.toggle('on')
}