import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup {
    constructor(popupSelector, handleSubmit) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._popupForm = this._popup.querySelector(".popup__form");
    }
    setEventListeners() {
        //на форму вешаю слушатель сабмита, затем использую коллбэк который использует внутри себя карточку, которую мы кликнем удалять
        this._popupForm.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleSubmit(this._card);
        });
        super.setEventListeners();
    }
    open(card) {
        //типо инциализируем карточку это для слушателя, чтобы потом оно могло ее открыть
        this._card = card;
        super.open();
    }
}