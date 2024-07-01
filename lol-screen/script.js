window.onload = () => {
    document.querySelectorAll("button").forEach(btnEl => btnEl.addEventListener("click", () => {
        document.querySelectorAll(".active").forEach(btn => btn.classList.remove("active"))
        btnEl.classList.add("active")
    }))
}