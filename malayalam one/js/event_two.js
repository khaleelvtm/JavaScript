// Event Listeners
let count = 0;
document.getElementById('countClick').addEventListener('click', function () {
    count++;
    document.getElementById('countNumber').innerHTML = count;
});

document.addEventListener('mousemove', function (events) {
    console.log(events.clientX + ":" + events.clientY);
})