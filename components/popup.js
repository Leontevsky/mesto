export default class Popup {
    constructor(popupSelector) { // Что такое popupSelector - это селектор. Строка string
        this._popup = document.querySelector(popupSelector);
    }

    setEventListeners() {
        this._popup.querySelector('.popup__close').addEventListener('click', () => this._close()) // слушатель на кнопку закрытия
        this._popup.addEventListener('click', (evt) => { // слушатель при нажатии на ESC
            if (evt.target.classList.contains('popup')) { this._close() }
        })
    }

    _open() {
        this._popup.classList.add('popup_open') // открывает попап
        document.addEventListener('keydown', this._handleEscPress()) // слушатель чтобы закрывать при нажатии на ESC
    }

    _close() {
        this._popup.classList.remove('popup_open') // закрывает попап
        document.removeEventListener('keydown', this._handleEscPress()) // снимает слушатель
    }

    _handleEscPress(event) {
        event.preventDefault();
        if (event.key === 'Escape') { this._close() }
    }

}