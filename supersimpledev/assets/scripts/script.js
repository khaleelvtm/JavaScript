// Animated countdown

//Update Time
function updateTimer(deadline) {
    let time = deadline - new Date();

    return {
        days: Math.floor(time / (1000 * 60 * 60 * 24)),
        hours: Math.floor((time / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((time / 1000 / 60) % 60),
        seconds: Math.floor((time / 1000) % 60),
        total: time,
    };
}

// Animated Span
function animateClock(span) {
    span.className = "turn";
    setTimeout(function () {
        span.className = "";
    }, 700);
}

// Start Timer
function startTimer(id, deadline) {
    let timeIntervel = setInterval(function () {
        let clock = document.getElementById(id);
        let timer = updateTimer(deadline);

        clock.innerHTML = `
            <span>${timer.days}</span>
            <span>${timer.hours}</span>
            <span>${timer.minutes}</span>
            <span>${timer.seconds}</span>
        `;

        // Animation Span
        let spans = clock.getElementsByTagName("span");
        animateClock(spans[3]);
        if (timer.seconds == 59) {
            animateClock(spans[2]);
        } else if (timer.minutes == 59 && timer.seconds == 59) {
            animateClock([spans[1]]);
        } else if (
            timer.hours == 23 &&
            timer.minutes == 59 &&
            timer.seconds == 59
        ) {
            animateClock(spans[0]);
        }

        // Time End Check
        if (timer.total < 1) {
            clearInterval(timeIntervel);
            clock.innerHTML = `<span>0</span><span>0</span><span>0</span><span>0</span>`;
        }
    }, 1000);
}

// Set Time
window.onload = function () {
    let deadline = new Date("November 5, 2023 15:37:00");
    startTimer("clock", deadline);
};

console.log(updateTimer(new Date("April 25, 2024 15:15:00")));
