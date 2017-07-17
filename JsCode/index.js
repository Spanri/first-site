
setInterval(function () {
    var date = new Date;
    var hour, minute, second, time;
    if (date.getHours() > 9) hour = date.getHours();
    else hour = '0' + date.getHours();
    if (date.getMinutes() > 9) minute = date.getMinutes();
    else minute = '0' + date.getMinutes();
    if (date.getSeconds() > 9) second = date.getSeconds();
    else second = '0' + date.getSeconds();
    time = hour + ":" + minute + ":" + second;
    document.getElementById("date").innerHTML = time;
}, 1000);

function changeCol(color) {
    var cat = document.getElementById("cat");
    if (color == 'blue') cat.style.color = '#6C81E6';
    else cat.style.color = "white";
}

function answ(ans) {
    if (ans == 1) result = "Ну... Если лев котик, то да";
    else if (ans == 2) result = "Ты дурак чтоль? Где ты там столько увидел?";
    else result = "Что-то ты не шаришь в видах животных...";
}