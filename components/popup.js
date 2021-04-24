export default class Popup {
    constructor(popupSelector) { // Что такое popupSelector - это селектор. Строка string
        this._popup = document.querySelector(popupSelector);
        this._handleEscPress = this._handleEscPress.bind(this)
    }

    setEventListeners() {
        this._popup.querySelector('.popup__close').addEventListener('click', () => this.close()) // слушатель на кнопку закрытия
        this._popup.addEventListener('click', (evt) => { // слушатель при нажатии на оверлай 
            if (evt.target.classList.contains('popup')) { this.close() }
        })
    }

    open() {
        this._popup.classList.add('popup_open') // открывает попап
        document.addEventListener('keydown', this._handleEscPress) // слушатель чтобы закрывать при нажатии на ESC
    }

    close() {
        this._popup.classList.remove('popup_open') // закрывает попап
        document.removeEventListener('keydown', this._handleEscPress) // снимает слушатель
    }

    _handleEscPress(event) {
        event.preventDefault();
        if (event.key === 'Escape') { this.close() }
    }

}