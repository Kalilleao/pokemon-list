const changeThemeButton = document.getElementById("change-theme-button");
const body = document.querySelector("body");
const imgChangeThemeButton = document.querySelector(".buttom-image")

changeThemeButton.addEventListener("click", () => {
    const onDarkMode = body.classList.contains("dark-mode");

    body.classList.toggle("dark-mode")

    if (onDarkMode) {
        imgChangeThemeButton.setAttribute("src", "./src/images/sun.png");
    } else {
        imgChangeThemeButton.setAttribute("src", "./src/images/moon.png");
    }
});