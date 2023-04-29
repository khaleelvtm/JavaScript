function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        console.log("I:", i);
        console.log("R N:", Math.round(Math.random()));
        console.log("R *:", Math.round(Math.random() * 15));
        console.log("col:", color);

        color += letters[Math.round(Math.random() * 15)];
        console.log("col2:", color);
    }

    console.log(color);
}

getRandomColor();
