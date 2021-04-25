import Popup from '../components/Popup.js'

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
    }

    open({ link, name }) {
        const imagePopupImg = this._popup.querySelector('.popup__img')
        const popupName = this._popup.querySelector('.popup__caption')
        popupName.textContent = name
        imagePopupImg.src = link
        imagePopupImg.alt = name
        super.open()
    }

}