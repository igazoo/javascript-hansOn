'use strict'

const nami = document.getElementById('nami');
const Name = document.getElementById('name');
const price = document.getElementById('price');
const image = document.getElementById('img');

nami.onclick = function () {
    Name.textContent = 'お弁当 -並-';
    price.textContent = 1000;
    image.setAttribute('src', 'img/nami.png');
}

nami.addEventListener('mouseenter', () => {
    nami.classList.add('btn-lg');
}, false);

nami.addEventListener('mouseleave', () => {
    nami.classList.remove('btn-lg');
})



const jou = document.getElementById('jou');

jou.onclick = () => {
    Name.textContent = 'お弁当 -上-';
    price.textContent = 2000;
    image.setAttribute('src', 'img/jou.png');
}
jou.addEventListener('mouseenter', () => {
    jou.classList.add('btn-lg');
}, false);

jou.addEventListener('mouseleave', () => {
    jou.classList.remove('btn-lg');
})

//カートに商品を追加

const cart_confirm = document.getElementById('cartConfirm');
const cart_list = document.getElementById('cartList');

cart_confirm.onclick = () => {
    const li = `<li>${Name.textContent}</li>`;
    cart_list.insertAdjacentHTML('beforeend', li);
}