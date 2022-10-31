const progressBar = document.getElementsByClassName("progressBar")[0]
const mainSection = document.querySelector("main")




setInterval(() => {
    const computedStyle = getComputedStyle(progressBar)
    const width = parseFloat(computedStyle.getPropertyValue("--width")) || 0
    progressBar.style.setProperty("--width", width + .1)
    if (width == 100) {
        mainSection.classList.add("classToAdd")
        progressBar.style.display = "none"
    }
}, 5)