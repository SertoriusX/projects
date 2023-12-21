const panels = document.querySelectorAll('.panel')

panels.forEach(panel=>{
    panel.addEventListener('click',()=>{
        removeACtiveClass()
        panel.classList.add('active')
    })
})

function removeACtiveClass() {
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
    
}