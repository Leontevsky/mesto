import Popup from '../components/Popup.js'

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
    }


    open({ link, name }) {
        this._image.src = link
        this._image.alt = name
        this._open
    }
}