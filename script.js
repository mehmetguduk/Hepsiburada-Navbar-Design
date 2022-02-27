const A_ELEMENTS = document.querySelectorAll("a");
A_ELEMENTS.forEach(a => {
    a.addEventListener("click", function (event) {
        event.preventDefault()
    })
})