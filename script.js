const panels = document.querySelectorAll(".panel")

//this puts the panels in an array format. 

panels.forEach((panels) => {
    panels.addEventListener('click', () => {
        removeActiveClasses()
        panels.classList.add("active")  
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove("active")
    })
}