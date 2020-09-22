'use strict';
//表示の切り替え
const Name = document.getElementById('name');
const Price = document.getElementById('price');
const Img = document.getElementById('img');

const Nami = document.getElementById('nami');
const Jou = document.getElementById('jou');

Nami.onclick = () => {
    Name.textContent = 'お弁当-並-';
    Price.textContent = '1000';
    Img.setAttribute('src', 'img/nami.png');//画像の切り替え
}

//マウスがボタンに乗るとボタンが大きくなるイベント
//クラスの追加
Nami.addEventListener('mouseenter', () => {//ボタンが大きくなるクラスの追加
    Nami.classList.add('btn-lg');
})

Nami.addEventListener('mouseleave', () => {//上記のクラスの削除
    Nami.classList.remove('btn-lg');
})

Jou.addEventListener('mouseenter', () => {
    Jou.classList.add('btn-lg');
})
Jou.addEventListener('mouseleave', () => {
    Jou.classList.remove('btn-lg');
})


Jou.onclick = () => {
    Name.textContent = 'お弁当-上-';
    Price.textContent = '2000';
    Img.setAttribute('src', 'img/jou.png');
}

//カートに商品を追加　htmlの追加

const CART_CONFIRM = document.getElementById('cartConfirm');
const CART_LIST = document.getElementById('cartList');
CART_CONFIRM.onclick = () => {
    const LI = `<li>${Name.textContent}</li>`;
    CART_LIST.insertAdjacentHTML('afterend', LI);
}