import { openPopup } from '../scripts/utils.js'
import { imagePopup, imagePopupImg, imagePopupTitle } from '../scripts/constants.js'
import { closedPopupByPressEsc } from '../scripts/index.js'

class Card {
    constructor(name, link, cardSelector) {
        this._text = name
        this._link = link

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
        this._setEventListeners()
        this._element.querySelector('.element__image').src = this._link
        this._element.querySelector('.element__title').textContent = this._text
        console.log(this._element)
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
        imagePopupTitle.textContent = this._text
        imagePopupImg.src = this._link
        imagePopupTitle.alt = this._text
        openPopup(imagePopup)
        document.addEventListener('keydown', closedPopupByPressEsc)
    }
}

export default Card