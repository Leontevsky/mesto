export const initialCards = [{
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

export const imagePopup = document.querySelector('.popup_type_image') // ЭТО ПОПАП С КАРТИНКОЙ
export const imagePopupImg = imagePopup.querySelector('.popup__img') // ЭТО ТЕГ IMG ВНУТРИ ПОПАПА
export const imagePopupTitle = imagePopup.querySelector('.popup__caption') // ЭТО ЗАГОЛОВОК ВНУТРИ ПОПАПА

export const closePopupWithImageButton = imagePopup.querySelector('.popup__close'); // Нашел кнопку закрытия карточки просмотра

// костанты относятся к закрытию по клику на оверлей
export const popupEdit = document.querySelector('.popup_type_edit')
export const popupImage = document.querySelector('.popup_type_image')
export const popupCreate = document.querySelector('.popup_type_new')

export const showEditFormButton = document.querySelector('#show-popup')
export const editFormPopup = document.querySelector('.popup_type_edit')
export const popupNew = document.querySelector('.popup_type_new')
export const closeEditFormButton = document.querySelector('#popup-close')
export const showCreateFormButton = document.querySelector('#show-popup-new')
export const closeCreateFormButton = popupNew.querySelector('.popup__close')
export const nameInput = document.querySelector('#name')
export const jobInput = document.querySelector('#job')
export const nameUserInput = document.querySelector('.profile__title')
export const jobUserInput = document.querySelector('.profile__subtitle')


export const buttonNew = popupNew.querySelector('.popup__button')
export const buttonEdit = editFormPopup.querySelector('.popup__button')
export const cardFormElement = document.querySelector('.popup__form_add')
export const popupInput = cardFormElement.querySelector('#placeName')
export const popupLink = cardFormElement.querySelector('#link')
export const container = document.querySelector('.elements__list')

export const enableValidation = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}