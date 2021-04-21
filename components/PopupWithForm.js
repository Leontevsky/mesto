import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm
        this._popupForm = this._popup.querySelector('.popup__form');
        this._inputItems = Array.from(this._popup.querySelector('.popup__input'));
    }


    _getInputValues() {
        this._newValues = {};
        this._inputItems.forEach(inputElement => {
            this._newValues.link = inputElement.value
        })
        return this._formValues
    }

    setEventListeners() {
        super.setEventListeners(); // из класса Popup
        this._popup.addEventListener('submit', (event) => {
            event.preventDefault()
            this._handleFormSubmit(this._getInputValues());
            this.close(); // скорее всего неправильно
        })
    }

    close() {}


}