/* -------------------------------- 
63. IIFE
---------------------------------*/

(function () {
    let score = Math.floor(Math.random() * 10);
    console.log(score >= 5);
    console.log(score);
}) ();

(function (goodLuck) {
    let score = Math.floor(Math.random() * 10);
    console.log(score >= 5 - goodLuck);
    console.log(score);
}) (-100000);
