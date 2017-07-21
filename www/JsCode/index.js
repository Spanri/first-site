
$(document).ready(function () {
    $("#headr_index").load("./blocks/headr.html #headr_index");
    $("#headr_osnova").load("../blocks/headr.html #headr_osnova");
    $("#footer").load("../blocks/footer.html");

    setInterval(function () {
        if ($("header").css("height") > "200px")
            $("#header_img").hide(300);
        else $("#header_img").show(300);
    }, 100);

    $('#cat').click(function () {
        if ($('.title').is(":visible")) $('#result').show(200, function () {
            $('.title').hide(300);
            $('.chCol').hide(300);
        });
        else $('.title').show(300, function () {
                $('.chCol').show(300);
                $('#result').hide(200);
            });
    });

    $(".vote_img").click(function () {
        console.log("vote_img");
        if ($('aside').css("width") < "50%") {
            console.log("change");
            $("aside").css("width","66.3%");
            $(".txt").css("width","30%");
        } else { 
            console.log("change 2");
            $("aside").css("width", "30%");
            $(".txt").css("width", "66.3%");
        }
    });

    $("#nachalo_but").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 500,
         easing: "swing"
      });
      return false;
   });

    $("answer").submit(function (event) {
        event.preventDefault();
        alert("Заходим в функцию");
        ans = document.getElementById('answ');
        alert(ans);
        if (ans == 1) result = "Ну... Если лев котик, то да";
        else if (ans == 2) result = "Ты дурак чтоль? Где ты там столько увидел?";
        else result = "Что-то ты не шаришь в видах животных...";
        alert(result);
    });
});

//Время
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
    if (time) document.getElementById("date").innerHTML = time;
    else document.getElementById("date").innerHTML = "Error";

}, 1000);

//Цвет заголовка шапки
function changeCol(color) {
    var cat = document.getElementById("cat");
    if (color == 'blue') cat.style.color = '#80C3CE';
    else cat.style.color = "white";
}

//Комментарии
function com() {
    //alert('Дальше есть еще один алерт с выводом коммента, но он не делается почему-то((((( хотя этот алерт делается в этой же функции...');
    var comment = getElementById("author").value;
    alert('haha' + comment);
}

//Показать блок с рекламой
function rekl() {
    //разблокировываем блок с рекламой
    document.getElementById("reklama").style.display = 'block';
    //убираем кнопку
    document.getElementById("reklama_but").style.display = 'none';
    //document.getElementById("reklama_but").href = "#nachalo_but";
}

//Для страницы /Код js/
function show(par) {
    //выбираем, какую функцию показать;
    var an, an2, an3;
    if (par == "answ") an = answ.toString();
    if (par == "changeColor") an = changeCol.toString();
    if (par == "show") an = show.toString();
    //разбиваем на строки;
    an = an.split(/\r?\n+/);
    //делаем перенос;
    for (i = 0; i < an.length; i++) an[i] = an[i] + '<br>';
    //объединяем в строку;
    for (i = 0; i < an.length; i++) an3 += an[i];
    //выводим
    document.getElementById("code").innerHTML = an3;
}