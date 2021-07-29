import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm
        this._popupForm = this._popup.querySelector('.popup__form');
        this._inputItems = this._popupForm.querySelectorAll('.popup__input')
        this._saveButton = this._popupForm.querySelector(".popup__save");
        this._defaultSaveButtonText = this._saveButton.textContent;
    }

    _getInputValues() {
        this._newValues = {}
        this._inputItems.forEach((inputElement) => { this._newValues[inputElement.name] = inputElement.value })
        return this._newValues
    }

    setEventListeners() {
        this._popup.addEventListener('submit', (event) => {
            event.preventDefault()
            this._submitForm(this._getInputValues());
        })
        super.setEventListeners()
    }

    rendererLoading(isLoading) {
        if (isLoading) {
            this._saveButton.textContent = "Cохранение...";
        } else {
            this._saveButton.textContent = this._defaultSaveButtonText;
        }
    }

    close() {
        super.close();
        this._popupForm.reset()
    }
}