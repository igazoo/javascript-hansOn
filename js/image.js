'use strict';
//json形式
//{} で囲み、keyとvalueでデータを操作する
var images = [
    {
        "path": "img/img01.jpg",
        "name": "name01",
        "caption": "コメント1",
    },
    {
        "path": "img/img02.jpg",
        "name": "name02",
        "caption": "コメント２"
    },
    {
        "path": "img/img03.jpg",
        "name": "name03",
        "caption": "コメント3"
    }
];

var img;
var caption;
var div;

for (var i = 0; i < images.length; i++) {
    img = document.createElement('img');//要素を作成
    img.setAttribute('src', images[i].path);

    caption = document.createElement('div');
    caption.className = 'inner';
    caption.innerHTML = '<p>' + images[i].caption + '<span>' + images[i].name + '</span></p>';

    div = document.createElement('div');
    div.className = 'photo';
    div.appendChild(img);
    div.appendChild(caption);

    //<div class="photo">
    // <img>
    // <div class="inner"></div>
    //</div >

    //id img_unitの子要素としてimgを挿入
    document.getElementById('img_unit').appendChild(div);
}





