// Ajax
let xhr = new XMLHttpRequest();
xhr.open('get', 'https://jsonplaceholder.typicode.com/users');
document.getElementById('clickButton').addEventListener('click', function(){
    xhr.send();
})

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            let resultData = JSON.parse(xhr.responseText);
            let htmlContent = "";
            for (i = 0; i < resultData.length; i++) {
                let currentResult = resultData[i];
                htmlContent =
                    htmlContent +
                    "<tr><td>" +
                    currentResult.id +
                    "</td><td>" +
                    currentResult.name +
                    "</td><td>" +
                    currentResult.username +
                    "</td><td>" +
                    currentResult.email +
                    "</td></tr>";
            }

            document.getElementById("userResult").innerHTML = htmlContent;
        }
        else {
            console.log('404 Error');
        }
    }
}