import {
    initialCards,
    showEditFormButton,
    editFormPopup,
    popupNew,
    showCreateFormButton,
    nameInput,
    jobInput,
    enableValidation,
    templateElement,
    popupUserPicSelector,
    userAvatarSelector,
} from '../scripts/constants.js'
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import Section from '../components/Section.js'
import UserInfo from '../components/UserInfo.js'

import '../pages/index.css';
import Api from '../components/Api.js'
let userId;

// Работа с Api
const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-24',
    headers: {
        authorization: 'eee6724a-7558-44e3-b80b-1f5173ed3e41',
        "Content-Type": "application/json"
    }
})

// Работа с Api. Забрать карточки с сервака
api.getInitialCards()
    .then((element) => {
        renderCardList.rendererItems(element)
    })

// Sozdat cartochku
function createCard(name, link, cardElement) {
    const card = new Card(name, link, cardElement, () => { imagePopup.open({ name, link }) });
    return card
}

// Рендер карточек 
const renderCardList = new Section({
    // items: initialCards, // массив данных на основе которого надо рисовать карточки
    renderer: function(item) { // функция, которая нужна для отрисовки одной карточки
        const card = createCard(item.name, item.link, '.template')
        const cardNew = card.generateCard()
        renderCardList.addItem(cardNew, true);
    }
}, '.elements__list')


//Попап с картинкой
const imagePopup = new PopupWithImage('.popup_type_image');
imagePopup.setEventListeners()

const userInfo = new UserInfo('.profile__title', '.profile__subtitle')

//Попап редактирования профиля
const userInfoPopup = new PopupWithForm(
    '.popup_type_edit',
    (values) => {
        console.log(values)
        const item = { name: values.name, job: values.job };
        userInfo.setUserInfo(item.name, item.job);

        userInfoPopup.close()

    }
)
userInfoPopup.setEventListeners()

//Попап создания новой карточки
const newCardPopup = new PopupWithForm('.popup_type_new',
    (values) => {
        console.log(values)
        const item = { name: values.place, link: values.link }
        const newElement = createCard(item.name, item.link, '.template')
        const newCard = newElement.generateCard()
        renderCardList.addItem(newCard)
        newCardPopup.close()
        cardFormValidator.blockSubmitButton()
    }
)

newCardPopup.setEventListeners()

showCreateFormButton.addEventListener('click', () => {

    newCardPopup.open()
});

showEditFormButton.addEventListener('click', () => {
    const allInfo = userInfo.getUserInfo();
    nameInput.value = allInfo.name;
    jobInput.value = allInfo.job;
    userInfoPopup.open()
})

const editFormValidator = new FormValidator(enableValidation, editFormPopup);
const cardFormValidator = new FormValidator(enableValidation, popupNew);

editFormValidator.enableValidation();
cardFormValidator.enableValidation();