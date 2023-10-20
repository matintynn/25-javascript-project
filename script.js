let menuBtn = document.querySelector('.menu-btn')
let ul = document.querySelector('ul')
let lis = document.querySelectorAll('.nav-links li')
let nav = document.querySelector('nav')

menuBtn.addEventListener('click', e => {
    e.preventDefault()
    menuBtn.classList.toggle('active')
    ul.classList.toggle('active')
    nav.classList.toggle('active')
    // animation links
    if (nav.classList.contains('active')) {
        lis.forEach((link, index) => {
            link.style.opacity = 0
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 1}s`;
            link.addEventListener("click", () => {
                menuBtn.classList.remove('active')
                ul.classList.remove('active')
            })
        })
    }

})


let btn_download_cv = document.querySelector(".download-cv")
let btn_contact = document.querySelector(".contact-btn")

btn_download_cv.addEventListener("click", e => {
    window.open(`./library/matin-resume2023.pdf`)
})
btn_contact.addEventListener("click", e => {
    location.href = `./#contact`
})

let btn_linkedin = document.querySelector(".linkedin_icon")
let btn_github = document.querySelector(".github_icon")

btn_linkedin.addEventListener("click", e => {
    location.href = 'https://www.linkedin.com'
})
