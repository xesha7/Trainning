const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let drawingShape = null;
let isDrawing = false;
let startX, startY;

function drawShape(x, y, width, height) {
    if (drawingShape === "circle") {
        const radius = Math.sqrt((width * width + height * height) / 2);
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fill();
    } else if (drawingShape === "rectangle") {
        ctx.fillRect(x, y, width, height);
    }
}

document.getElementById("circleButton").addEventListener("click", () => {
    drawingShape = "circle";
});

document.getElementById("rectangleButton").addEventListener("click", () => {
    drawingShape = "rectangle";
});

canvas.addEventListener("mousedown", (event) => {
    isDrawing = true;
    startX = event.clientX - canvas.getBoundingClientRect().left;
    startY = event.clientY - canvas.getBoundingClientRect().top;
});

canvas.addEventListener("mousemove", (event) => {
    if (!isDrawing) return;

    const currentX = event.clientX - canvas.getBoundingClientRect().left;
    const currentY = event.clientY - canvas.getBoundingClientRect().top;
    const width = currentX - startX;
    const height = currentY - startY;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawShape(startX, startY, width, height);
});

canvas.addEventListener("mouseup", () => {
    if (isDrawing) {
        isDrawing = false;
    }
});