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

const showEditFormButton = document.querySelector('#show-popup'); // кнопка которая открывает мне попап редактирования карточки
const closeEditFormButton = document.querySelector('#popup-close'); // кнопка которая закрывает мне попап редактирования карточки
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#job');
const formElement = document.querySelector('#popup-form');
const popupNew = document.querySelector('.popup_new');
const showCreateFormButton = document.querySelector('#show-popup-new'); // Кнопка открытия попапа для создания новой карточки
const closeCreateFormButton = popupNew.querySelector('.popup__close'); // Кнопка закрытия попапа для создания новой карточки
const editFormPopup = document.querySelector('.popup_edit'); // Нахожу в разметке попап редактирования карточки
const nameUserInput = document.querySelector('.profile__title');
const jobUserInput = document.querySelector('.profile__subtitle');
const container = document.querySelector('.elements__list');
const toDoform = document.querySelector('.popup__form_add');
const templateElement = document.querySelector('#template');
const input = toDoform.querySelector('#PlaceName'); // нашли input внутри формы
const link = toDoform.querySelector('#Link');
const imagePopup = document.querySelector('.popup_image'); // Нашел попап просмотра карточки
const newCard = imagePopup.querySelector('.popup__caption');
const cardImage = imagePopup.querySelector('.popup__img');
const closePopupWithImageButton = imagePopup.querySelector('.popup__close');

function openPopup (popup) {
    popup.classList.add('popup_open')
}

function closePopup (popup) {
    popup.classList.remove('popup_open')
}

showEditFormButton.addEventListener('click', function () {
    openPopup(editFormPopup)
    nameInput.value = nameUserInput.textContent;
    jobInput.value = jobUserInput.textContent;
})

closeEditFormButton.addEventListener('click', function () {
    closePopup(editFormPopup)
})

showCreateFormButton.addEventListener('click', function () {
    openPopup(popupNew)
})

closeCreateFormButton.addEventListener('click', function () {
    closePopup(popupNew)
})

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    nameUserInput.textContent = nameInput.value; 
    jobUserInput.textContent = jobInput.value;
    closePopup(editFormPopup);
  }
 
  formElement.addEventListener('submit', formSubmitHandler); 

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
    const cardlink = newItem.querySelector('.element__image');
    title.textContent = item.name;
    cardlink.src = item.link;

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
    cardlink.addEventListener('click', function(){
      popupWithImage(item);
    });

    return newItem;
}

//Открытие карточки на экране
function popupWithImage (item) {   
    newCard.textContent = item.name;
    cardImage.src = item.link;
    openPopup(imagePopup);
}

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
    const item = {name: input.value, link: link.value}
    const newTask = createCardNew(item);
    container.prepend(newTask);
    input.value = '';
    link.value = '';
    closePopup(popupNew); 
}

renderList()
toDoform.addEventListener('submit', addTaskFormListener);



// 6 Проектная работа

const enableValidation = () => { // enableValidation - включаем валидацию для всех форм сразу
  const formList = Array.from(document.querySelectorAll('.popup__form'))  // ищем все формы на странице и превращаем в массив.
  
  formList.forEach(formElement => {
    formElement.addEventListener('submit', function (event) { 
      event.preventDefault(); // запрещаем отправку данных на сервер через .preventDefault
    })
  })
}

enableValidation ();

















