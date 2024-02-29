const toggle = document.getElementById('switchToggle');
const dark = document.getElementById('darkMode');
console.log (dark.id)
let brightness = localStorage.getItem('brightness')

function setBrightness() {
    dark.id = brightness
    
}
setBrightness()

toggle.addEventListener('click', function() {
    // document.body.classList.toggle('#darkMode')
    if (dark.id === 'darkMode') {
        dark.id = 'lightmode'
        localStorage.setItem('brightness', dark.id)
        toggle.textContent = '🌘'
} else {
    dark.id = 'darkMode'
    toggle.textContent = '☀️'
    localStorage.setItem('brightness', dark.id)
}
    
})