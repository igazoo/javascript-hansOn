'use strict';

//スタートボタンを押したときの時間を記録しておく
//今、現在の時刻との差を求めてそれを表示する

var start;
var timer_id;

var swich_button = document.getElementById('start_stop');


swich_button.addEventListener('click', function () {
    if (this.innerHTML === 'START') {
        start = new Date();//スタートを押したときの時間

        //setInterval 間隔を指定するメソッド　反応し続けるメソッド
        timer_id = setInterval(goTimer, 10);

        //stopボタンにする
        this.innerHTML = 'STOP';
        this.classList.remove('btn-primary');
        this.classList.add('btn-danger');
    } else {
        clearInterval(timer_id);
        //STARTボタンに戻す
        this.innerHTML = 'START';
        this.classList.remove('btn-danger');
        this.classList.add('btn-primary');
    }
});


//10以下の時は０を表示
var addZero = (value) => {
    if (value < 10) {
        value = '0' + value
    }
    return value;
}

//動いてる時間
var goTimer = () => {
    var now = new Date();//今、現在の時間

    var milli = now.getTime() - start.getTime();

    var seconds = Math.floor(milli / 1000);//秒

    var minutes = Math.floor(seconds / 60);//分

    var hours = Math.floor(minutes / 60);//時間　

    seconds = seconds - minutes * 60;
    minutes = minutes - hours * 60;

    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);

    var timer = document.getElementById('timer');
    timer.innerHTML = hours + ':' + minutes + ':' + seconds;
}
