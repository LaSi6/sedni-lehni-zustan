console.log('funguju!');
//Navigace
document.querySelector('#nav-btn').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('nav-closed')
})

const navElm = document.querySelectorAll('nav a')
navElm.forEach((item) => {
    item.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('nav-closed')
})}
)