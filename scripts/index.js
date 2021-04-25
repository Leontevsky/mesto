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
    templateElement,
} from '../scripts/constants.js'
import Card from './Card.js';
// import { closePopup, openPopup } from '../scripts/utils.js'
import { FormValidator } from './FormValidator.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import Section from '../components/Section.js'
import UserInfo from '../components/UserInfo.js'

function createCard(name, link, cardElement) {
    const card = new Card(name, link, cardElement, () => { imagePopup.open({ name, link }) });
    return card
}

// Рендер
const renderCardList = new Section({
    items: initialCards, // массив данных на основе которого надо рисовать карточки
    renderer: function(item) { // функция, которая нужна для отрисовки одной карточки
        const card = createCard(item.name, item.link, '.template', () => {
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
        const newElement = createCard(item.name, item.link, templateElement)
        const newCard = newElement.generateCard()
        renderCardList.addItem(newCard)
        newCardPopup.close()
    }
)

newCardPopup.setEventListeners()

showCreateFormButton.addEventListener('click', () => {
    newCardPopup.open();
});

showEditFormButton.addEventListener('click', () => {
    const allInfo = userInfo.getUserInfo();
    nameInput.value = allInfo.name;
    jobInput.value = allInfo.job;
    userInfoPopup.open()
})

showCreateFormButton.addEventListener('click', () => {
    newCardPopup.open()
})

const editFormValidator = new FormValidator(enableValidation, editFormPopup);
const cardFormValidator = new FormValidator(enableValidation, popupNew);

editFormValidator.enableValidation();
cardFormValidator.enableValidation();