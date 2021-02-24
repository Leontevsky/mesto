let popup = document.querySelector('.popup');
let showPopupButton = document.querySelector('#show-popup');
let closePopupButton = document.querySelector('.popup__close');
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#job');
let formElement = document.querySelector('.popup__form');

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

