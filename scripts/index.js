let showPopupButton = document.querySelector('#show-popup');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__close');

 function showPopup() {
    popup.classList.add('popup_open');
 }
 

 function closePopup() {
     popup.classList.remove('popup_open');
 }

 showPopupButton.addEventListener('click', showPopup);
 closePopupButton.addEventListener('click', closePopup);


 let formElement = document.querySelector('.popup__form');
 let nameInput = document.querySelector('#name');
 let jobInput = document.querySelector('#job');


function formSubmitHandler (evt) {
    evt.preventDefault(); 
    document.querySelector('.profile__title') = nameInput.value; 
    document.querySelector('.profile__subtitle') = jobInput.value; 
}

formElement.addEventListener('submit', formSubmitHandler); 

closePopup();