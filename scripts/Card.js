// Создайте класс Card, который создаёт карточку с текстом и ссылкой на изображение:
// принимает в конструктор её данные и селектор её template-элемента;
// содержит приватные методы, которые работают с разметкой, устанавливают слушателей событий;
// содержит приватные методы для каждого обработчика;
// содержит один публичный метод, который возвращает полностью работоспособный и наполненный данными элемент карточки.

// Каждая карточка должна быть экземпляром класса Card (то есть при создании каждой карточки вам надо создать экземпляр класса Card). Соответственно все что касается отдельной карточки, должно быть сосредоточено в классе Card. Что сюда входит:
// Конструктор, который принимает данные карточки и ссылку на темплейт этой карточки в разметке и сохраняет эти значения в свойствах
// Методы которые получают разметку из темплейта, накладывают все обработчики событий на карточку, обрабатывают лайк, удаление, нажатие карточки для зума изображения, и создают единую карточку для дальнейшей отрисовки в разметке (сама же отрисовка карточки в разметке - это уже не задача класса Card). Обращайте внимание на то является метод приватным или публичным. Готовую разметку карточки (после ее получения) вы можете сохранить в отдельном свойстве класса (например this._view), а потом использовать это свойство для дальнейших операций (например, накладывать обработчики)
// Каждый коллбек обработчиков (которые накладываются в отдельном методе) тоже должен быть отдельным методом. Это важно. не расписывайте логику внутри анонимных функций, а выносите их в отдельные методы класса
// Обращайте внимание на то как работает this внутри ваших методов. Если this ведет себя не так как вы ожидаете - выводите его в консоль и смотрите что конкретно там лежит. Чтобы контролировать this - можно прибегнуть к помощи стрелочных функций

class Card {
    constructor(name, link, cardSelector) {
        this._text = name
        this._link = link
            // console.log(this._text)
            // console.log(this._link)
        this._cardSelector = cardSelector;
    }


    // 1 шаг. Получаем готовую разметку перед размещением на страницу
    _getTemplate() {
        const cardElement = document
            .querySelector('.template')
            .content
            .querySelector('.element')
            .cloneNode(true)

        return cardElement;

    }

    // 2 шаг. Публичный метод возвращает представление карточки на странице
    generateCard() {
        this._element = this._getTemplate()
        console.log(this._element)
        this._setEventListeners()
        this._element.querySelector('.element__image').src = this._link
        this._element.querySelector('.element__title').textContent = this._text

        return this._element
    }

    _setEventListeners() {
        //Слушатель кнопки лайка
        this._element.querySelector('.element__button').addEventListener('click', () => { this._handleLikeIcon() })

        //Слушатель удаления карточки
        this._element.querySelector('.element__button_delete').addEventListener('click', () => { this._handleDeleteButton() })

        //Слушатель открытия карточки
        this._element.querySelector('.element__image').addEventListener('click', () => { this._handlePrevImage() })
    }

    // функция добавления лайка
    _handleLikeIcon() { this._element.querySelector('.element__button').classList.toggle('element__button_theme-dark') }

    // функция удаления карточки
    _handleDeleteButton() { this._element.remove() }

    // функция открытия карточки
    _handlePrevImage() {
        // Тут должна быть какая-то функция
    }
}

export default Card