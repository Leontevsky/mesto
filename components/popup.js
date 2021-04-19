class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    _open() {
        this._popup.classList.add('popup_open')
            // какой-то слушатель
    }

    _close() {
        this._popup.classList.remove('popup_open')
            // какой-то слушатель
    }

    setEventListeners() {
        // Хз пока что тут должно быть
    }

}