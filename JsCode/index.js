
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

$('a').click(function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 1500);
    return false;
});

function changeCol(color) {
    var cat = document.getElementById("cat");
    if (color == 'blue') cat.style.color = '#80C3CE';
    else cat.style.color = "white";
}

function answ() {
    var ans = document.getElementById()
    if (ans == 1) result = "Ну... Если лев котик, то да";
    else if (ans == 2) result = "Ты дурак чтоль? Где ты там столько увидел?";
    else result = "Что-то ты не шаришь в видах животных...";
}

function com(){
    return;
}

function rekl(){
    document.getElementById("rekl").style.display = 'block';
    document.getElementById("butRekl").style.display = 'none';
}