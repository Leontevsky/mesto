export function openPopup(popup) {
    popup.classList.add('popup_open')
    document.addEventListener('keydown', closedPopupByPressEsc)
}

export function closePopup(popup) {
    popup.classList.remove('popup_open')
    document.removeEventListener('keydown', closedPopupByPressEsc)
}

// Закрыть карточку по ESC
export const closedPopupByPressEsc = function(event) {
    const popupAny = document.querySelector('.popup_open')
    if (event.key === 'Escape') { closePopup(popupAny) }
}