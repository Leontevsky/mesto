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
    openPopup(сreateFormPopup)
})

closeCreateFormButton.addEventListener('click', function () {
    closePopup(сreateFormPopup)
})

document.querySelector('#name').value = document.querySelector('.profile__title').textContent;
document.querySelector('#job').value = document.querySelector('.profile__subtitle').textContent;

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    document.querySelector('.profile__title').textContent = nameInput.value; 
    document.querySelector('.profile__subtitle').textContent = jobInput.value;
     closeEditPopup();
  }
 
  formElement.addEventListener('submit', formSubmitHandler); 

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

const container = document.querySelector('.elements__list');
const toDoform = document.querySelector('.popup__form_add');
const templateElement = document.querySelector('#template');

function deleteTaskHendler (evt) {
    const target = evt.target;
    const currentTask = target.closest('.element');
    currentTask.remove();
    // evt.target.closest('.element').remove(); // тоже самое, только краткая запись
}

// Создаем разметку
function createCardNew(item){
    const newItem = templateElement.content.cloneNode(true);
    const title = newItem.querySelector('.element__title');
    const Cardlink = newItem.querySelector('.element__image');
    title.textContent = item.name;
    Cardlink.src = item.link;

// Добавляем лайк
    const likeIcon = newItem.querySelector('.element__button');
    function likeButtonToggle(){
        likeIcon.classList.toggle('element__button_theme-dark')
}
    likeIcon.addEventListener('click', likeButtonToggle);

// перенес из функции addTaskListener
    const deleteButton = newItem.querySelector('.element__button_delete');
    deleteButton.addEventListener('click', deleteTaskHendler);

// Слушатель карточки
    Cardlink.addEventListener('click', function(){
      PopupWithImage(item);
    });

    return newItem;
}

//Открытие карточки на экране
const imagePopup = document.querySelector('.popup_image'); // Нашел попап просмотра карточки

function PopupWithImage (item) {
    const newCard = imagePopup.querySelector('.popup__caption');
    const cardImage = imagePopup.querySelector('.popup__img');
    newCard.textContent = item.name;
    cardImage.src = item.link;
    openPopup(imagePopup);
}

let closePopupWithImageButton = imagePopup.querySelector('.popup__close');

closePopupWithImageButton.addEventListener('click', function () {
  closePopup(imagePopup)
})

// Добавляем карточки из задания
function renderList() {
    const result = initialCards.map(function (item) {
        const newTask = createCardNew(item)
        return newTask;
});

    container.append(...result);
}
// Добавление карточки
function addTaskFormListener(evt) {
    evt.preventDefault(); // Отменяем переход по ссылке
    const input = toDoform.querySelector('#PlaceName'); // нашли input внутри формы
    const link = toDoform.querySelector('#Link');
    const item = {name: input.value, link: link.value}
    const newTask = createCardNew(item);
    container.prepend(newTask);
    input.value = '';
    link.value = '';
    closePopup(сreateFormPopup); 
}

renderList()
toDoform.addEventListener('submit', addTaskFormListener);





















