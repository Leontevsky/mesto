// 1 часть. Открыть и закрыть
let showPopupButton = document.querySelector('#show-popup');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__close');

// popup.classList.add('popup__open'); — рабочий вариант
// popup.classList.toggle('popup__open');  просто переключатель. Либо добавит либо уберет класс. 

function showPopup() {
    popup.classList.add('popup__open');
}

showPopupButton.addEventListener('click', showPopup);

function closePopup () {
    popup.classList.remove('popup__open');
}

closePopupButton.addEventListener('click', closePopup);

// 2 часть. Внести и сохранить данные

// Находим форму в DOM
let formElement = // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = // Воспользуйтесь инструментом .querySelector()
let jobInput = // Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);