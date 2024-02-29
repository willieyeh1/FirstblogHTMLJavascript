const toggle = document.getElementById('switchToggle');
const dark = document.getElementById('darkMode');
console.log (dark.id)
let brightness = localStorage.getItem('brightness')

function Brightness() {
    dark.id = brightness
    
}
Brightness()

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