const input = document.querySelector('input')
const generateBtn = document.querySelector('.generate-btn')
const qrcodeBox = document.querySelector('.qrcode-box')
const qrcodeImage = document.querySelector('img.qrcode-image')

qrcodeBox.style.display = 'none'

generateBtn.addEventListener('click', e => {
    e.preventDefault();
    if (input.value !== '') {
        qrcodeBox.style.display = 'flex'
        qrcodeImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`
        input.value = '';
    } else {
        input.classList.add('error')
        setTimeout(() => {
            input.classList.remove('error')
        }, 1000)
    }
})