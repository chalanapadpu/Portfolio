const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", () => {

    const isDark =
        document.documentElement.getAttribute("data-theme") === "dark";

    if (isDark) {
        document.documentElement.removeAttribute("data-theme");

        themeButton.textContent = "🌙 Dark Mode";
        themeButton.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );

    } else {
        document.documentElement.setAttribute("data-theme", "dark");

        themeButton.textContent = "☀️ Light Mode";
        themeButton.setAttribute(
            "aria-label",
            "Switch to light mode"
        );
    }
});