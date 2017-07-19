
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

function DropDown(el) {
 this.dd = el;
 this.placeholder = this.dd.children('span');
 this.opts = this.dd.find('ul.dropdown > li');
 this.val = '';
 this.index = -1;
 this.initEvents();
}
DropDown.prototype = {
 initEvents : function() {
 var obj = this;
 
 obj.dd.on('click', function(event){
 $(this).toggleClass('active');
 return false;
 });
 
 obj.opts.on('click',function(){
 var opt = $(this);
 obj.val = opt.text();
 obj.index = opt.index();
 obj.placeholder.text('Gender: ' + obj.val);
 });
 },
 getValue : function() {
 return this.val;
 },
 getIndex : function() {
 return this.index;
 }
}

$("#headr").load("..\headr.html", function(){
    alert('ok');
});


$('#headr').click(function () {
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
    ans = getElementById('answ');
    alert(ans);
    if (ans == 1) result = "Ну... Если лев котик, то да";
    else if (ans == 2) result = "Ты дурак чтоль? Где ты там столько увидел?";
    else result = "Что-то ты не шаришь в видах животных...";
    alert(result);
}

function com() {
    //alert('Дальше есть еще один алерт с выводом коммента, но он не делается почему-то((((( хотя этот алерт делается в этой же функции...');
    var comment = getElementById("author").value;
    alert('haha' + comment);
}

function rekl() {
    //разблокировываем блок с рекламой
    document.getElementById("rekl").style.display = 'block';
    //убираем кнопку
    document.getElementById("butRekl").style.display = 'none';
}

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