// 1. Объявил 3 переменные — попап, показать и закрыть. 

let showPopupButton = document.querySelector('#show-popup'); 
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__close');

// 2. Написал функцию обработки значения «Клик». 
function showPopup() {
    popup.classList.add('popup__open');
 }
 
 function closePopup() {
     popup.classList.remove('popup__open');
 }

 showPopupButton.addEventListener('click', showPopup);
 closePopupButton.addEventListener('click', closePopup);

 // 3. Находим форму в DOM
 let formElement = document.querySelector('.popup__content');
// 4. Находим поля формы в DOM
 let nameInput = document.querySelector('#name');
 let jobInput = document.querySelector('#job');

 // 5. Пишем функцию ввода данных в форму с последующим сохранением. 
 function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы — не понимаю что это. 
    document.querySelector('.profile__title') = nameInput.value; // Получите значение полей jobInput и nameInput из свойства value + записываю их на место в popup
    document.querySelector('.profile__subtitle') = jobInput.value; // Получите значение полей jobInput и nameInput из свойства value + записываю их на место в popup
}

formElement.addEventListener('submit', formSubmitHandler); // Прикрепляем обработчик к форме: // он будет следить за событием “submit” - «отправка» — не понимаю что это. 

closePopup();


// popup.classList.add('popup_open'); — рабочий вариант
// popup.classList.toggle('popup_open');  просто переключатель. Либо добавит либо уберет класс.


// 2 вариант через toggle

// function togglePopup() {
//     if (popup.classList.contains('popup__open')) {
//         console.log('Нажали на крестик');
//     }

//     popup.classList.toggle('popup__open');
// }

// showPopupButton.addEventListener('click', togglePopup);
// closePopupButton.addEventListener('click', togglePopup);