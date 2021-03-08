let popup = document.querySelector('.popup');
let showPopupButton = document.querySelector('#show-popup');
let closePopupButton = document.querySelector('.popup__close');
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#job');
let formElement = document.querySelector('.popup__form');

//Открытие попапа popup_edit
 function showPopup() {
    popup.classList.add('popup_open');
 }

document.querySelector('#name').value = document.querySelector('.profile__title').textContent;
document.querySelector('#job').value = document.querySelector('.profile__subtitle').textContent;
 
 function closePopup() {
    popup.classList.remove('popup_open');
 }

 showPopupButton.addEventListener('click', showPopup);
 closePopupButton.addEventListener('click', closePopup);

 //Открытие попапа popup_new
 let popupNew = document.querySelector('.popup_new');
 let showProfileButton = document.querySelector('#show-popup-new');
 let closeProfileButton = popupNew.querySelector('.popup__close');

 function showPopupNew () {
    popupNew.classList.add('popup_open');
 }

 function closePopupNew () {
    popupNew.classList.remove('popup_open');
 }

 showProfileButton.addEventListener('click', showPopupNew);
 closeProfileButton.addEventListener('click', closePopupNew);

 function formSubmitHandler (evt) {
    evt.preventDefault(); 
    document.querySelector('.profile__title').textContent = nameInput.value; 
    document.querySelector('.profile__subtitle').textContent = jobInput.value;

    closePopup();
}
 
formElement.addEventListener('submit', formSubmitHandler); 

 

// 2 вариант открыть или закрыть Popup через toggle

// function togglePopup() {
//     if (popup.classList.contains('popup_open')) {
//         console.log('Нажали на крестик');
//     }

//     popup.classList.toggle('popup_open');
// }

// showPopupButton.addEventListener('click', togglePopup);
// closePopupButton.addEventListener('click', togglePopup);

// 6 карточек из коробки
// Карточки
// Создайте функцию, которая делает следующее:
// принимает в качестве аргумента данные карточки (объект с названием и ссылкой на картинку)
// клонирует внутри себя нужный template (обязательно посмотрите вебинар про template'ы)
// устанавливает картинку и название в разметку template'a
// устанавливает обработчики событий: на лайк (1), на удаление (2) и на открытие картинки (3). Обратите внимание, что функции которые вызываются обработчиками событий вам надо вынести в отдельные переменные и за пределы той функции, которая создает карточку
// возвращает готовую разметку (в которой уже есть все данные и обработчики). Смотрите в сторону return
// Создайте другую функцию, которая:
// принимает данные карточки и ссылку на контейнер, куда надо положить результат
// внутри себя создает разметку карточки, используя функцию о которой написано выше
// кладет полученный результат в разметку

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

// initialCards.forEach(function(xaz){ // Если с результатом ничего делать не надо, используем ForEach
//     console.log(xaz.name)
// })


// Пример
// const firstArr = [0, 1, 2, 3, 4];

// const secondArr = firstArr.map(function (item) { // Берём каждый элемент массива
//   return item * item; // Возводим каждый элемент в квадрат
// }); 

// console.log(secondArr); // [0, 1, 4, 9, 16] 

// Интерполяция. Пример ${}. Внутри шаблонной строки выполнить JS. 

const container = document.querySelector('.elements__list'); 

function renderList() {
    const result = initialCards.map(function(item){
        return `
            <li class="element">
                <img src="${item.link}" alt="Фото" class="element__image">
                <div class="element__caption">
                    <h2 class="element__title">${item.name}</h2> 
                    <button type="button" class="element__button element__button_theme-dark"></button>
                    <button type="button" class="element__button_delete "></button>
                </div>
            </li> 
    `;
    }).join('');

    container.insertAdjacentHTML('afterbegin', result); // Эта штука превращает строку в разметку
}

renderList()

