export default class Card {
    constructor(name, link, cardSelector, handleCardClick) {
        this._text = name
        this._link = link
        this._handleCardClick = handleCardClick

        this._cardSelector = cardSelector
    }

    // 1 шаг. Получаем готовую разметку перед размещением на страницу
    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.element')
            .cloneNode(true)
        console.log(this._cardSelector)
        return cardElement;

    }

    // 2 шаг. Публичный метод возвращает представление карточки на странице
    generateCard() {
        this._element = this._getTemplate()
        this._setEventListeners()
        this._element.querySelector('.element__image').src = this._link
        this._element.querySelector('.element__image').alt = this._text
        this._element.querySelector('.element__title').textContent = this._text
        return this._element
    }

    _setEventListeners() {
        //Слушатель кнопки лайка
        this._element.querySelector('.element__button').addEventListener('click', () => { this._handleLikeIcon() })

        //Слушатель удаления карточки
        this._element.querySelector('.element__button_delete').addEventListener('click', () => { this._handleDeleteButton() })

        //Слушатель открытия карточки
        this._element.querySelector('.element__image').addEventListener('click', () => { this._handleCardClick() })
    }

    // функция добавления лайка
    _handleLikeIcon() { this._element.querySelector('.element__button').classList.toggle('element__button_theme-dark') }

    // функция удаления карточки
    _handleDeleteButton() { this._element.remove() }

}