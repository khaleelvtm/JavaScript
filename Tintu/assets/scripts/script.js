// HTML Canvas Painting
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "white";
ctx.fillRect(0, 0, 500, 500);
ctx.fillStyle = "black";

let brushColor = "black";
let brushSize = 3;

let colorPicker = document.getElementById("color");
let brushThickness = document.getElementById("thickness");

brushColor = colorPicker.value;
brushSize = brushThickness.value;

colorPicker.addEventListener("change", (event) => {
    brushColor = event.target.value;
});
brushThickness.addEventListener("change", (event) => {
    brushSize = event.target.value;
});

let painting = false;

function startPainting(event) {
    painting = true;
    drawPainting(event);
    console.log("c");
}
function stopPainting() {
    painting = false;
    ctx.beginPath();
}
function drawPainting(event) {
    if (painting == false) return;

    let x = event.clientX - canvas.offsetLeft;
    let y = event.clientY - canvas.offsetTop;

    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.lineTo(x, y);
    ctx.strokeStyle = brushColor;
    ctx.stroke();
}

canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mousemove", drawPainting);

console.log(ctx);
console.log(brushColor);
