'use strict';
//ajax 通信
var ajax = new XMLHttpRequest();//ajax通信をスタートさせるオブジェクト

ajax.open('GET', 'https://h2o-space.com/htmlbook/images.php');//ajax通信を行う相手の指定
ajax.responseType = 'json';//jsonデータを指定

ajax.send(null);//データをもらうだけなのでnull

ajax.onreadystatechange = function () {
    if (ajax.readyState === XMLHttpRequest.DONE && ajax.status === 200) {
        //ajax通信が終了したことがtrue　かつ　ajax.statusが正常に終了した時に２００となる
        for (var i = 0; i < this.response.length; i++) {
            //thisはajaxのこと, そのresponseは取得した配列のこと

            var date = this.response[i];

            var img = document.createElement('img');
            img.setAttribute('src', date.path);

            var caption = document.createElement('div');
            caption.className = 'inner';
            caption.innerHTML = '<p>' + date.caption + '<span>' + date.name + '</span></div>';

            var div = document.createElement('div');
            div.className = 'photo';
            div.appendChild(caption);
            div.appendChild(img);
            document.getElementById('img_unit').appendChild(div);
        }
    }
}

//readystateプロパティ
//0 インスタンスができた
//1 openメソッドを利用できた
//２　ヘッダーが受信できた
//３　データ受信中である
//４　通信が終了した
