// Canvas
window.onload = function () {
    let canvas = document.getElementById("sky");
    let ctx = canvas.getContext("2d");

    console.log(canvas);
    // Width and Height
    let canWidth = window.innerWidth;
    let canHeight = window.innerHeight;
    canvas.width = canWidth;
    canvas.height = canHeight;

    // Generate Snow
    let maxFlakes = 100;
    let flakes = [];

    // Loop Flakes
    for (let i = 0; i < maxFlakes; i++) {
        flakes.push({
            x: Math.random() * canWidth,
            y: Math.random() * canHeight,
            r: Math.random() * 5 + 2,
            d: Math.random() + 1,
        });
    }

    // Draw Flakes
    function drawFlakes() {
        ctx.clearRect(0, 0, canWidth, canHeight);
        ctx.fillStyle = "white";
        ctx.beginPath();

        for (let i = 0; i < maxFlakes; i++) {
            let flak = flakes[i];
            ctx.moveTo(flak.x, flak.y);
            ctx.arc(flak.x, flak.y, flak.r, 0, Math.PI * 2, true);
        }

        ctx.fill();
        moveFlake();
    }

    // Animate Move Flake
    let angle = 0;
    function moveFlake() {
        angle += 0.01;
        for (let i = 0; i < maxFlakes; i++) {
            let flak = flakes[i];
            flak.y += Math.pow(flak.d, 2) + 1;
            flak.x += Math.sin(angle) * 2;

            if (flak.y > canHeight) {
                flakes[i] = {
                    x: Math.random() * canWidth,
                    y: 0,
                    r: flak.r,
                    d: flak.d,
                };
            }
        }
    }
    setInterval(drawFlakes, 25);
};
