// 점수 계산

var count = 15;
var com_sum = 0;
var user_sum = 0;

function comShoot() {
    var comScore;
    comScore = Math.random() < 0.5 ? shoot(2) : shoot(3);
    showScore('com', comScore);
}

function userShoot(n) {
    var user_score;
    if (n === 2) {
        user_score = shoot(2);
    } else {
        user_score = shoot(3);
    }
    showScore('user', user_score);
    count -= 1;
    document.getElementById("shots-left").innerHTML=count;
    if (count===0){
        alert("Game Over");
    }
}

function shoot(n) {
    var sco;
    if (n === 2) { //2점슛
        sco = Math.random() > (1 / 3) ? 2 : 0;
    } else {  //3점슛
        sco = Math.random() < (1 / 3) ? 3 : 0;
    }
    return sco;
}

function showScore(who, sco) {
    var user_score_show;
    var com_score_show;

    com_score_show = document.getElementById("computer-score");
    user_score_show = document.getElementById("user-score");

    if (who === 'com') {
        com_sum += sco;
        com_score_show.innerHTML = com_sum;
    } else {
        user_sum += sco;
        user_score_show.innerHTML = user_sum;
    }
}


