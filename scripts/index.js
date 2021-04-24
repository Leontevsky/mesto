import {
    initialCards,
    // imagePopup,
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
    popupLink,
    container,
    enableValidation,
} from '../scripts/constants.js'
import Card from './Card.js';
// import { closePopup, openPopup } from '../scripts/utils.js'
import { FormValidator } from './FormValidator.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import Section from '../components/Section.js'
import UserInfo from '../components/UserInfo.js'

function createCard(name, link) {
    const card = new Card(name, link);
    return card.generateCard();
}

// Рендер
const renderCardList = new Section({
    items: initialCards, // массив данных на основе которого надо рисовать карточки
    renderer: function(item) { // функция, которая нужна для отрисовки одной карточки
        const card = new Card(item.name, item.link, '.template', () => {
            imagePopup.open(item);
        })
        const cardNew = card.generateCard()
        renderCardList.addItem(cardNew)

    }
}, '.elements__list')
renderCardList.rendererItems()


//Попап с картинкой
const imagePopup = new PopupWithImage('.popup_type_image');
imagePopup.setEventListeners()

const userInfo = new UserInfo('#name', '#job')

//Попап редактирования профиля
const userInfoPopup = new PopupWithForm(
    '.popup_type_edit',
    (values) => {
        const item = { name: values.name, job: values.job };
        userInfo.setUserInfo(values)
        userInfoPopup.close()
    }
)
userInfoPopup.setEventListeners()

showEditFormButton.addEventListener('click', () => {
    const allInfo = userInfo.getUserInfo();
    nameInput.value = allInfo.name;
    jobInput.value = allInfo.job;
    userInfoPopup.open()
})


//Попап создания новой карточки
const newCardPopup = new PopupWithForm('.popup_type_new',
    (values) => {
        const item = { name: values.place, link: values.link }
        const newElement = createCard(item)
        newElement.addItem()
        newElement.setUserInfo()
        newCardPopup.close()
    }
)
newCardPopup.setEventListeners()

showCreateFormButton.addEventListener('click', () => {
    newCardPopup.open()
})

const editFormValidator = new FormValidator(enableValidation, editFormPopup);
const cardFormValidator = new FormValidator(enableValidation, popupNew);

editFormValidator.enableValidation();
cardFormValidator.enableValidation();

// // //Попап создания новой карточки
// // const newCardPopup = new PopupWithForm('.popup_type_new',
// //     (values) => {
// //         const item = { name: values.place, link: values.link }
// //         const newElement = createCard(item);
// //         document.querySelector(elements).prepend(newElement)
// //     }

// )
// newCardPopup.setEventListeners()

// showEditFormButton.addEventListener('click', () => {
//     popupNew.open()
// })

// function createCard(name, link) {
//     const card = new Card(name, link);
//     return card.generateCard();
// }

// function renderCard(name, link, container, toEnd) {
//     const card = createCard(name, link);
//     const method = toEnd ? 'append' : 'prepend';
//     container[method](card);
// }

// initialCards.forEach((item) => {
//     renderCard(item.name, item.link, container, true);
// })



// // Закрыть карточку по клику на крестик
// closePopupWithImageButton.addEventListener('click', function() {

// })

// // Закрыть карточку по нажатию на оверлей
// const closeByOverlayClick = (evt) => {
//     if (evt.target.classList.contains('popup')) { closePopup(evt.target) }
// }

// popupEdit.addEventListener('click', closeByOverlayClick)
// popupImage.addEventListener('click', closeByOverlayClick)
// popupCreate.addEventListener('click', closeByOverlayClick)


// showEditFormButton.addEventListener('click', function() {
//     openPopup(editFormPopup)
//     nameInput.value = nameUserInput.textContent;
//     jobInput.value = jobUserInput.textContent;
//     editFormValidator.activeFormButton()
// })

// closeEditFormButton.addEventListener('click', function() {
//     closePopup(editFormPopup)
// })

// showCreateFormButton.addEventListener('click', function() {
//     openPopup(popupNew)
//     cardFormValidator.inActiveFormButton()
// })

// closeCreateFormButton.addEventListener('click', function() {
//     closePopup(popupNew)
// })

// const editFormElement = document.querySelector('#popup-form');

// function handleProfileSubmit(evt) {
//     evt.preventDefault();
//     nameUserInput.textContent = nameInput.value;
//     jobUserInput.textContent = jobInput.value;
//     closePopup(editFormPopup);
// }

// editFormElement.addEventListener('submit', handleProfileSubmit);

// function handleCardFormSubmit(evt) {
//     evt.preventDefault()
//     renderCard(popupInput.value, popupLink.value, container);
//     closePopup(popupNew)
// }

// cardFormElement.addEventListener('submit', handleCardFormSubmit)