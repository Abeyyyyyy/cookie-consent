const cookieContainer = document.getElementById("cookieContainer");
const acceptBtn = document.getElementById("acceptBtn");
const closeBtn = document.getElementById("closeBtn");

// Check if user already accepted
window.addEventListener("load", () => {
    const consent = localStorage.getItem("cookieConsent");

    if (!consent) {
        cookieContainer.style.display = "block";
    }
});

// When user clicks accept
acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "accepted");
    cookieContainer.style.display = "none";
});

// When user clicks close
closeBtn.addEventListener("click", () => {
    cookieContainer.style.display = "none";
});