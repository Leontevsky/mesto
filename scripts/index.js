import { initialCards, imagePopup, closePopupWithImageButton, popupEdit, popupImage, popupCreate } from '../scripts/constants.js'
import Card from '../scripts/Card.js';
import { closePopup, openPopup } from '../scripts/utils.js'

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




const showEditFormButton = document.querySelector('#show-popup')
const editFormPopup = document.querySelector('.popup_type_edit')
const popupNew = document.querySelector('.popup_type_new')
const closeEditFormButton = document.querySelector('#popup-close')
const showCreateFormButton = document.querySelector('#show-popup-new')
const closeCreateFormButton = popupNew.querySelector('.popup__close')
const nameInput = document.querySelector('#name')
const jobInput = document.querySelector('#job')
const nameUserInput = document.querySelector('.profile__title')
const jobUserInput = document.querySelector('.profile__subtitle')

showEditFormButton.addEventListener('click', function() {
    openPopup(editFormPopup)
    nameInput.value = nameUserInput.textContent;
    jobInput.value = jobUserInput.textContent;
    activeFormButton(buttonEdit, 'popup__button_disabled')
})

closeEditFormButton.addEventListener('click', function() {
    closePopup(editFormPopup)
})

showCreateFormButton.addEventListener('click', function() {
    openPopup(popupNew)
    inActiveFormButton(buttonNew, 'popup__button_disabled')
})

closeCreateFormButton.addEventListener('click', function() {
    closePopup(popupNew)
})


/*
const showEditFormButton = document.querySelector('#show-popup'); // кнопка которая открывает мне попап редактирования карточки
const closeEditFormButton = document.querySelector('#popup-close'); // кнопка которая закрывает мне попап редактирования карточки
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#job');
const editFormElement = document.querySelector('#popup-form');
const popupNew = document.querySelector('.popup_type_new');
const showCreateFormButton = document.querySelector('#show-popup-new'); // Кнопка открытия попапа для создания новой карточки
const closeCreateFormButton = popupNew.querySelector('.popup__close'); // Кнопка закрытия попапа для создания новой карточки
const editFormPopup = document.querySelector('.popup_type_edit'); // Нахожу в разметке попап редактирования карточки
const nameUserInput = document.querySelector('.profile__title');
const jobUserInput = document.querySelector('.profile__subtitle');
const container = document.querySelector('.elements__list');
const cardFormElement = document.querySelector('.popup__form_add');
const templateElement = document.querySelector('#template');
const popupInput = cardFormElement.querySelector('#placeName'); // нашли input внутри формы
const link = cardFormElement.querySelector('#link');
const imagePopup = document.querySelector('.popup_type_image'); // Нашел попап просмотра карточки
const newCard = imagePopup.querySelector('.popup__caption');
const cardImage = imagePopup.querySelector('.popup__img');
const closePopupWithImageButton = imagePopup.querySelector('.popup__close');
const popupEdit = document.querySelector('.popup_type_edit')
const popupCreate = document.querySelector('.popup_type_new')
const popupImage = document.querySelector('.popup_type_image')
const card = document.querySelector('#popup-form-new');

// function notActiveButton(card) {
//     const addButton = card.querySelector('.popup__button');
//     addButton.classList.add('popup__button_disabled');
// }

const closeByOverlayClick = (evt) => {
    if (evt.target.classList.contains('popup')) { closePopup(evt.target) }
}

popupEdit.addEventListener('click', closeByOverlayClick)
popupImage.addEventListener('click', closeByOverlayClick)
popupCreate.addEventListener('click', closeByOverlayClick)


const closedPopupByPressEsc = function(event) {
    const popupAny = document.querySelector('.popup_open')
    if (event.key === 'Escape') { closePopup(popupAny) }
}

function openPopup(popup) {
    popup.classList.add('popup_open')
    document.addEventListener('keydown', closedPopupByPressEsc)
}

function closePopup(popup) {
    popup.classList.remove('popup_open')
    document.removeEventListener('keydown', closedPopupByPressEsc)
}

const buttonEdit = editFormPopup.querySelector('.popup__button')
const buttonNew = popupNew.querySelector('.popup__button')

showEditFormButton.addEventListener('click', function() {
    openPopup(editFormPopup)
    nameInput.value = nameUserInput.textContent;
    jobInput.value = jobUserInput.textContent;
    activeFormButton(buttonEdit, 'popup__button_disabled')
})

closeEditFormButton.addEventListener('click', function() {
    closePopup(editFormPopup)
})

showCreateFormButton.addEventListener('click', function() {
    openPopup(popupNew)
    inActiveFormButton(buttonNew, 'popup__button_disabled')
})

closeCreateFormButton.addEventListener('click', function() {
    closePopup(popupNew)
})

function handleProfileSubmit(evt) {
    evt.preventDefault();
    nameUserInput.textContent = nameInput.value;
    jobUserInput.textContent = jobInput.value;
    closePopup(editFormPopup);
}

editFormElement.addEventListener('submit', handleProfileSubmit);

function deleteTaskHendler(evt) {
    const target = evt.target;
    const currentTask = target.closest('.element');
    currentTask.remove();
    // evt.target.closest('.element').remove(); // тоже самое, только краткая запись
}

// Создаем разметку
function createCardNew(item) {
    const newItem = templateElement.content.cloneNode(true);
    const title = newItem.querySelector('.element__title');
    const cardlink = newItem.querySelector('.element__image');
    const likeIcon = newItem.querySelector('.element__button');
    const deleteButton = newItem.querySelector('.element__button_delete');
    title.textContent = item.name;
    cardlink.src = item.link;

    // Добавляем лайк

    deleteButton.addEventListener('click', deleteTaskHendler);
    likeIcon.addEventListener('click', _ => {
        likeIcon.classList.toggle('element__button_theme-dark')
    })

    // Слушатель карточки
    cardlink.addEventListener('click', function() {
        createImage(item.name, item.link);
    });
    return newItem;
}

//Открытие карточки на экране
function createImage(name, link) {
    newCard.textContent = name;
    cardImage.src = link;
    newCard.alt = name;
    openPopup(imagePopup);
}

closePopupWithImageButton.addEventListener('click', function() {
    closePopup(imagePopup)
})

// Добавляем карточки из задания
function renderList() {
    const result = initialCards.map(function(item) {
        const newTask = createCardNew(item)
        return newTask;
    });

    container.append(...result);
}
// Добавление карточки
function handleCardFormSubmit(evt) {
    evt.preventDefault(); // Отменяем переход по ссылке
    const item = { name: popupInput.value, link: link.value }
    const newTask = createCardNew(item);
    container.prepend(newTask);
    popupInput.value = '';
    link.value = '';
    closePopup(popupNew);
}

renderList()
cardFormElement.addEventListener('submit', handleCardFormSubmit);*/