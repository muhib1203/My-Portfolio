// Get dialog elements
const dialogBox = document.getElementById("dialogBox");
const openDialogButton = document.getElementById("openDialogButton");
const closeButton = document.querySelector(".close-button");

// Open dialog when button is clicked
openDialogButton.addEventListener("click", () => {
    dialogBox.style.display = "block";
});

// Close dialog when close button is clicked
closeButton.addEventListener("click", () => {
    dialogBox.style.display = "none";
});

// Close dialog when clicking outside the dialog content
window.addEventListener("click", (event) => {
    if (event.target === dialogBox) {
        dialogBox.style.display = "none";
    }
});
