let menuBtn = document.querySelector('.menu-btn')
let ul = document.querySelector('ul')
let lis = document.querySelectorAll('.nav-links li')

menuBtn.addEventListener('click', e => {
    e.preventDefault()
    menuBtn.classList.toggle('active')
    ul.classList.toggle('active')
    // animation links
    lis.forEach((link, index) => {
        link.style.opacity = 0
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 1}s`
        console.log(index / 7 + 1)
    })
})

console.log(lis)
