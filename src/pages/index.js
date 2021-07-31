import {
    initialCards,
    showEditFormButton,
    editFormPopup,
    popupNew,
    showCreateFormButton,
    nameInput,
    jobInput,
    enableValidation,
    templateElement,
    popupUserPicSelector,
    showUserPicPopup,
    userAvatarSelector,
    popupFormAvatar,
    popupDeleteCardSelector,
} from "../scripts/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithSubmit from "../components/PopupWithSubmit.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

import "../pages/index.css";
import Api from "../components/Api.js";
let userId;

// Работа с Api
const api = new Api({
    url: "https://mesto.nomoreparties.co/v1/cohort-24",
    headers: {
        authorization: "eee6724a-7558-44e3-b80b-1f5173ed3e41",
        "Content-Type": "application/json",
    },
});

// // Работа с Api. Забрать карточки с сервака
// api.getInitialCards().then((element) => {
//     cardList.rendererItems(element);
// });

// // Sozdat cartochku (сюда везде добавил айди, по анологии с конструктором класса кард!!!!!)
// function createCard(name, link, id, cardElement) {
//     const card = new Card(name, link, id, cardElement, () => {
//         imagePopup.open(name, link);
//     });
//     return card;
// }

function createCard(item, userId, templateElement) {
    const card = new Card(
        item,
        userId,
        templateElement, {
            handleCardClick: () => {
                imagePopup.open(item.name, item.link);
            },
            handleCardLike: () => {
                const likedCard = card.isLiked();
                const resultOfLike = likedCard ?
                    api.deleteLike(card.getId()) :
                    api.likeCard(card.getId());
                resultOfLike
                    .then((data) => {
                        card.setLikes(data.likes);
                        card.rendererLikes();
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            },
            handleCardDelete: () => {
                deleteCardPopup.open(card);
            },
        },
        item._id
    );
    return card;
}


// Рендер карточек
const cardList = new Section({
        // items: initialCards, // массив данных на основе которого надо рисовать карточки
        renderer: (item) => {
            // функция, которая нужна для отрисовки одной карточки
            const card = createCard(item, userId, ".template");
            const cardNew = card.generateCard();
            cardList.addItem(cardNew, true);
        },
    },
    ".elements__list"
);

//Попап с картинкой (без изменений) 
const imagePopup = new PopupWithImage(".popup_type_image");
imagePopup.setEventListeners();

// (без изменений) 
const userInfo = new UserInfo(".profile__title", ".profile__subtitle", ".profile__avatar");

//Попап редактирования профиля
const userInfoPopup = new PopupWithForm(".popup_type_edit", (values) => {
    userInfoPopup.rendererLoading(true);
    api
        .editUserInfo(values.name, values.about)
        .then(() => {
            userInfo.setUserInfo(values.name, values.about);
            userInfoPopup.close();
        })
        .finally(() => {
            userInfoPopup.rendererLoading(false);
        })
        .catch((err) => {
            console.log(err);
        });
});
userInfoPopup.setEventListeners();


//Попап создания новой карточки
const newCardPopup = new PopupWithForm(".popup_type_new", (values) => {
    newCardPopup.rendererLoading(true);
    api
        .addCard(values.name, values.link)
        .then((item) => {
            const newElement = createCard(item, userId, ".template");
            const newCard = newElement.generateCard();
            cardList.addItem(newCard);
            newCardPopup.close();
        })
        .finally(() => {
            newCardPopup.rendererLoading(false);
        })
        .catch((err) => {
            console.log(err);
        });
});

newCardPopup.setEventListeners();



//попап обновления аватара!!!!!!
const userPicPopup = new PopupWithForm(".popup_type_update", (values) => {
    userPicPopup.rendererLoading(true);
    api
        .editUserAvatar(values["link-avatar"])
        .then(() => {
            userInfo.setAvatar(values["link-avatar"]);
            userPicPopup.close();
        })
        .finally(() => {
            userPicPopup.rendererLoading(false);
        })
        .catch((err) => {
            console.log(err);
        });
});
userPicPopup.setEventListeners();



//попап обновления инфы!!!!!! написать класс попапсабмит это набросок на будущее
const deleteCardPopup = new PopupWithSubmit(".popup_type_delete", (card) => {
    api
        .deleteCard(card.getId())
        .then(() => {
            card.removeCard();
            deleteCardPopup.close();
        })
        .catch((err) => {
            console.log(err);
        });
});
deleteCardPopup.setEventListeners();

api
    .getAllData()
    .then((arg) => {
        const [dataUserInfo, dataCards] = arg;
        userInfo.setUserInfo(dataUserInfo.name, dataUserInfo.about);
        userInfo.setAvatar(dataUserInfo.avatar);
        userId = dataUserInfo._id;
        cardList.renderItems(dataCards);
    })
    .catch((data) => {
        console.log(data);
    });




showCreateFormButton.addEventListener("click", () => {
    newCardPopup.open();
});

showEditFormButton.addEventListener("click", () => {
    const allInfo = userInfo.getUserInfo();
    nameInput.value = allInfo.name;
    jobInput.value = allInfo.about;
    userInfoPopup.open();
});


showUserPicPopup.addEventListener("click", () => {
    userPicPopup.open();
});






const editFormValidator = new FormValidator(enableValidation, editFormPopup);
const cardFormValidator = new FormValidator(enableValidation, popupNew);
const newAvatarPopup = new FormValidator(enableValidation, popupFormAvatar)

editFormValidator.enableValidation();
cardFormValidator.enableValidation();
newAvatarPopup.enableValidation();