import {
    initialCards,
    imagePopup,
    closePopupWithImageButton,
    popupEdit,
    popupImage,
    popupCreate,
    showEditFormButton,
    editFormPopup,
    popupNew,
    closeEditFormButton,
    showCreateFormButton,
    closeCreateFormButton,
    nameInput,
    jobInput,
    nameUserInput,
    jobUserInput,
    cardFormElement,
    popupInput,
    container,
    enableValidation,
} from '../scripts/constants.js'
import { Card } from './Card.js';
import { closePopup, openPopup } from '../scripts/utils.js'
import { FormValidator } from './FormValidator.js'

// 3 шаг(Перенес из Card.js). Вставляем в DOM
initialCards.forEach(function(item) {
    // Создадим экземпляр карточки
    const card = new Card(item.name, item.link)
    const cardElement = card.generateCard()

    document.querySelector('.elements__list').append(cardElement);
})

// Закрыть карточку по клику на крестик
closePopupWithImageButton.addEventListener('click', function() {
    closePopup(imagePopup)
    document.removeEventListener('keydown', closedPopupByPressEsc)
})

// Закрыть карточку по ESC
export const closedPopupByPressEsc = function(event) {
    const popupAny = document.querySelector('.popup_open')
    if (event.key === 'Escape') { closePopup(popupAny) }
}

// Закрыть карточку по нажатию на оверлей
const closeByOverlayClick = (evt) => {
    if (evt.target.classList.contains('popup')) { closePopup(evt.target) }
}

popupEdit.addEventListener('click', closeByOverlayClick)
popupImage.addEventListener('click', closeByOverlayClick)
popupCreate.addEventListener('click', closeByOverlayClick)


showEditFormButton.addEventListener('click', function() {
    openPopup(editFormPopup)
    nameInput.value = nameUserInput.textContent;
    jobInput.value = jobUserInput.textContent;
    editFormValidator.activeFormButton()
})

closeEditFormButton.addEventListener('click', function() {
    closePopup(editFormPopup)
})

showCreateFormButton.addEventListener('click', function() {
    openPopup(popupNew)
    cardFormValidator.inActiveFormButton()
})

closeCreateFormButton.addEventListener('click', function() {
    closePopup(popupNew)
})

const editFormElement = document.querySelector('#popup-form');

function handleProfileSubmit(evt) {
    evt.preventDefault();
    nameUserInput.textContent = nameInput.value;
    jobUserInput.textContent = jobInput.value;
    closePopup(editFormPopup);
}

editFormElement.addEventListener('submit', handleProfileSubmit);

function handleCardFormSubmit(evt) {
    evt.preventDefault()
    const item = new Card(popupInput.value, link.value)
    const newTask = item.generateCard()
    container.prepend(newTask)
    popupInput.value = ''
    link.value = ''
    closePopup(popupNew)
}

cardFormElement.addEventListener('submit', handleCardFormSubmit)

const editFormValidator = new FormValidator(enableValidation, editFormPopup);
const cardFormValidator = new FormValidator(enableValidation, popupNew);

editFormValidator.enableValidation();
cardFormValidator.enableValidation();