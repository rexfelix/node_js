var num = [];
while (num.length < 6){
    var n = Math.ceil(Math.random() * 44+1);
    if (n in num){
        console.log(n);
    }
    num.push(n);
}
console.log(num);
