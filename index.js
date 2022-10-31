const progressBar = document.getElementsByClassName("progressBar")[0]
setInterval(() => {
    const computedStyle = getComputedStyle(progressBar)
    const width = parseFloat(computedStyle.getPropertyValue("--width")) || 0
    progressBar.style.setProperty("--width", width + .1)
    if (width == 100) {
        h1.classList.add("add")
    }
}, 5)