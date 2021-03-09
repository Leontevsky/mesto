let popup = document.querySelector('.popup');
let showEditFormButton = document.querySelector('#show-popup'); // кнопка которая открывает мне попап редактирования карточки
let closeEditFormButton = document.querySelector('.popup__close'); // кнопка которая закрывает мне попап редактирования карточки
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#job');
let formElement = document.querySelector('.popup__form');

let popupNew = document.querySelector('.popup_new');
let showCreateFormButton = document.querySelector('#show-popup-new'); // Кнопка открытия попапа для создания новой карточки
let closeCreateFormButton = popupNew.querySelector('.popup__close'); // Кнопка закрытия попапа для создания новой карточки

const editFormPopup = document.querySelector('.popup_edit'); // Нахожу в разметке попап редактирования карточки
const сreateFormPopup = document.querySelector('.popup_new'); // Нахожу в разметке попап создания новой карточки

function openPopup (popup) {
    popup.classList.add('popup_open')
}

function closePopup (popup) {
    popup.classList.remove('popup_open')
}

showEditFormButton.addEventListener('click', function () {
    openPopup(editFormPopup)
  })

closeEditFormButton.addEventListener('click', function () {
    closePopup(editFormPopup)
})

showCreateFormButton.addEventListener('click', function () {
    openPopup(CreateFormPopup)
})

closeCreateFormButton.addEventListener('click', function () {
    closePopup(CreateFormPopup)
})














// ______________________________________________
// function showEditPopup() { // функция берет константу editFormPopup и добавляет туда класс popup_open
//     editFormPopup.classList.add('popup_open');
// }

// showPopupButton.addEventListener('click', showEditPopup); // Слушатель на кнопку с функцией открытия



// function closeEditPopup() { // функция берет константу editFormPopup и удаляет класс popup_open
//     editFormPopup.classList.remove('popup_open');
// }

// closePopupButton.addEventListener('click', closeEditPopup); // Слушатель на кнопку с функцией закрытия

// // Открытие popup_new
// let popupNew = document.querySelector('.popup_new');
// let openCardFormButton = document.querySelector('#show-popup-new'); // Кнопка открытия попапа для создания новой карточки
// let closeCardFormButton = popupNew.querySelector('.popup__close'); // Кнопка закрытия попапа для создания новой карточки


// function showCardFormPopup() {
//     showEditPopup(cardFormPopup);
// }

// openCardFormButton.addEventListener('click', showCardFormPopup);

// document.querySelector('#name').value = document.querySelector('.profile__title').textContent;
// document.querySelector('#job').value = document.querySelector('.profile__subtitle').textContent;

// function formSubmitHandler (evt) {
//     evt.preventDefault(); 
//     document.querySelector('.profile__title').textContent = nameInput.value; 
//     document.querySelector('.profile__subtitle').textContent = jobInput.value;

//     closeEditPopup();
//  }
 
//  formElement.addEventListener('submit', formSubmitHandler); 
// _______________________________________________________








// //Открытие попапа popup_edit
//  function showPopup() {
//     popup.classList.add('popup_open');
//  }

// document.querySelector('#name').value = document.querySelector('.profile__title').textContent;
// document.querySelector('#job').value = document.querySelector('.profile__subtitle').textContent;
 
//  function closePopup() {
//     popup.classList.remove('popup_open');
//  }

//  showPopupButton.addEventListener('click', showPopup);
//  closePopupButton.addEventListener('click', closePopup);

//  //Открытие попапа popup_new
//  let popupNew = document.querySelector('.popup_new');
//  let showProfileButton = document.querySelector('#show-popup-new');
//  let closeProfileButton = popupNew.querySelector('.popup__close');

//  function showPopupNew () {
//     popupNew.classList.add('popup_open');
//  }

//  function closePopupNew () {
//     popupNew.classList.remove('popup_open');
//  }

//  showProfileButton.addEventListener('click', showPopupNew);
//  closeProfileButton.addEventListener('click', closePopupNew);

//  function formSubmitHandler (evt) {
//     evt.preventDefault(); 
//     document.querySelector('.profile__title').textContent = nameInput.value; 
//     document.querySelector('.profile__subtitle').textContent = jobInput.value;

//     closePopup();
// }
 
// formElement.addEventListener('submit', formSubmitHandler); 

 

// 2 вариант открыть или закрыть Popup через toggle

// function togglePopup() {
//     if (popup.classList.contains('popup_open')) {
//         console.log('Нажали на крестик');
//     }

//     popup.classList.toggle('popup_open');
// }

// showPopupButton.addEventListener('click', togglePopup);
// closePopupButton.addEventListener('click', togglePopup);



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

