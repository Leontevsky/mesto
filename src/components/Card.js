export default class Card {
    constructor(item, userId, cardSelector, { handleCardClick, handleCardLike, handleCardDelete }, id) {
        this._text = item.name;
        this._link = item.link;
        this._ownerId = item.owner._id;
        this._likeCard = item.likes;

        this._userId = userId;
        this._cardSelector = cardSelector
        this._handleCardClick = handleCardClick
        this._handleCardLike = handleCardLike;
        this._handleCardDelete = handleCardDelete;
        this._id = id

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

        this._element.querySelector('.element__image').src = this._link
        this._element.querySelector('.element__image').alt = this._text
        this._element.querySelector('.element__title').textContent = this._text

        if (this._ownerId !== this._userId) { // новое
            this._element.querySelector('.element__button_delete').remove(); // новое
        } // новое

        this._setEventListeners()
        this.rendererLikes(); // новое
        return this._element
    }

    _setEventListeners() {
        //Слушатель кнопки лайка
        this._element.querySelector('.element__button').addEventListener('click', () => { this._handleCardLike() })


        // //Слушатель удаления карточки
        if (this._ownerId === this._userId) {
            this._element.querySelector('.element__button_delete').addEventListener('click', () => { this._handleDeleteButton() })
        }

        //Слушатель открытия карточки
        this._element.querySelector('.element__image').addEventListener('click', () => { this._handleCardClick() })
    }

    // // функция добавления лайка
    // _handleLikeIcon() { this._element.querySelector('.element__button').classList.toggle('element__button_theme-dark') }

    // // функция удаления карточки
    // _handleDeleteButton() { this._element.remove() }

    getId() {
        return this._id;
    }

    isLiked() {
        return this._likeCard.some((element) => {
            return element._id === this._userId;
        });
    }

    rendererLikes() {
        this._element.querySelector('.element__button_count').textContent = this._likeCard.length;
        this.changeLikes(this._userId);
    }

    changeLikes() {
        if (this.isLiked(this._userId)) {
            this._element.querySelector('.element__button').classList.add("element__button_theme-dark");
        } else {
            this._element.querySelector('.element__button').classList.remove("element__button_theme-dark");
        }
    }

    setLikes(likeList) {
        this._likeCard = likeList;
    }

    removeCard() {
        this._element.querySelector('.element__button_delete').closest(".element").remove();
    }

}