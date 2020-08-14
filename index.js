const fruits = [
    {id: 1,title: 'Яблоки', price: 20, img: 'https://img2.goodfon.ru/original/1920x1408/0/93/fresh-fruits-berries-frukty-2724.jpg'},
    {id: 1,title: 'Яблоки', price: 20, img: 'https://img2.goodfon.ru/original/1920x1408/0/93/fresh-fruits-berries-frukty-2724.jpg'},
    {id: 1,title: 'Яблоки', price: 20, img: 'https://img2.goodfon.ru/original/1920x1408/0/93/fresh-fruits-berries-frukty-2724.jpg'},
]
console.log()
const toHTML = function (fruit) {
     let html  = `<div class="col" id="${fruit.id}">
        <div class="card">
            <img src="${fruit.img}" alt="${fruit.title}" class="card-img" />
            <div class="card-body">
                <h5 class="card-title">${fruit.title}</h5>
                <a href="#" class="btn btn-primary" data-btn="price">Посмотреть цену</a>
                <a href="#" class="btn btn-danger">Удалить</a>'
            </div>
        </div>
    </div>`

    return html;
}

function render() {
    const html = fruits.map(toHTML).join('');// каждый элемент преобразует во что-то // создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
    document.querySelector('#fruits').innerHTML = html;
}
render();

const priceModal = $.modal({
    title: 'Цена на товар',
    closable: true,
    width: '400px',
    onClose: function () {
        console.log('оКно закрыто')
    },
    onOpen: function () {
        console.log('Окно открыто')
    }
});

document.addEventListener('click', function (event) {
    event.preventDefault();
    const btnType = event.target.dataset.btn;
    if (btnType == 'price'){
        priceModal.open();
    }
});