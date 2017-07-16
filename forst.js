
function answ() {
    var ans = document.getElementById("answer").value;
    if(ans==1) return an="Ну... Если лев котик, то да";
    else if(ans==2) return an="Ты дурак чтоль? Где ты там столько увидел?";
    else return an="Что-то ты не шаришь в видах животных...";
}

function code(){
    alert(answ());
}
