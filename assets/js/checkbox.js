document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("switch-check");
    const container = document.querySelector(".switch-container");
    checkbox.addEventListener("change", function () {
        if (this.checked) {
            container.style.backgroundColor = "#333";
        } else {
            container.style.backgroundColor = "aliceblue";
        }
    });
});