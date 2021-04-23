import Popup from '../components/Popup.js'

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
    }

    open({ link, name }) {
        const imagePopupImg = this._popup.querySelector('.popup__img')
        imagePopupImg.src = link
        imagePopupImg.alt = name
        super.open()
    }


}