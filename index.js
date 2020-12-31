
function changeCol() {
    var randomCol = Math.floor(Math.random()*(16777215)).toString(16);

    document.body.style.backgroundColor = "#" + randomCol;
    document.getElementById("changecolor").innerHTML = "#" + randomCol;
}