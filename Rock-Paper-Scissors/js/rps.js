var loose = 'yoy loose';
var win = 'you win';

while (true){
    var users = prompt('1:가위, 2:바위, 3:보, others0:quit');
    var coms = Math.random();

    if (coms<1/3){
        coms='1';
    }else if(coms<2/3){
        coms='2';
    }else{
        coms='3';
    }

    if (users===coms){
        alert("same");
    }else if (users==='1'){
        if (coms==='2'){
            alert("com은 바위 :"+loose);
        }else{
            alert("com은 보 :"+win);
        }
    }else if (users==='2'){
        if (coms==='3'){
            alert("com은 보 :"+loose);
        }else{
            alert("com은 가위 :"+win);
        }
    }else if (users==='3'){
        if (coms==='1'){
            alert("com은 가위 :"+loose);
        }else{
            alert("com은 바위 :"+win);
        }
    }else{
        break;
    }
}
