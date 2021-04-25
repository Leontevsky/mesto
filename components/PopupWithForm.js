import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm
        this._popupForm = this._popup.querySelector('.popup__form');
        this._inputItems = this._popupForm.querySelectorAll('.popup__input')
    }


    _getInputValues() {

        this._newValues = {}
        this._inputItems.forEach(inputElement => { this._newValues[inputElement.name] = inputElement.value })
        return this._newValues


    }
    setEventListeners() {

        this._popup.addEventListener('submit', (event) => {
            event.preventDefault()
            this._submitForm(this._getInputValues());
            // this.close(); //
        })
        super.setEventListeners()
    }

    close() {
        super.close();
    }
}