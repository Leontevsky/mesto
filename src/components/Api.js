export default class Api {
    constructor(config) {
        this._config = config
        this._url = this._config.url
        this._headers = this._config.headers
    }

    getAllData() {
        return Promise.all([this.getUserInfo(), this.getInitialCards()]);
    }

    // получить список всех карточек в виде массива (GET)
    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            method: "GET",
            headers: this._headers
        }).then((res) => {
            return res.ok ? res.json() : Promise.reject(`Ошибка! ${res.status}`)
        });
        //.catch(err => this._errorRequestResult(err))
    }

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            method: "GET",
            headers: this._headers,
        }).then((res) => {
            return res.ok ? res.json() : Promise.reject(`Ошибка! ${res.status}`);
        });
    }

    editUserInfo(name, about) {
        return fetch(`${this._url}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                about: about,
            }),
        }).then((res) => {
            return res.ok ? res.json() : Promise.reject(`Ошибка! ${res.status}`);
        });
    }

    editUserAvatar(url) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: url,
            }),
        }).then((res) => {
            return res.ok ? res.json() : Promise.reject(`Ошибка! ${res.status}`);
        });
    }

    addCard(name, link) {
        return fetch(`${this._url}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                link: link,
            }),
        }).then((res) => {
            return res.ok ? res.json() : Promise.reject(`Ошибка! ${res.status}`);
        });
    }

    deleteCard(id) {
        return fetch(`${this._url}/cards/${id}`, {
            method: "DELETE",
            headers: this._headers,
        }).then((res) => {
            return res.ok ? res.json() : Promise.reject(`Ошибка! ${res.status}`);
        });
    }

    likeCard(id) {
        return fetch(`${this._url}/cards/likes/${id}`, {
            method: "PUT",
            headers: this._headers,
        }).then((res) => {
            return res.ok ? res.json() : Promise.reject(`Ошибка! ${res.status}`);
        });
    }

    deleteLike(id) {
        return fetch(`${this._url}/cards/likes/${id}`, {
            method: "DELETE",
            headers: this._headers,
        }).then((res) => {
            return res.ok ? res.json() : Promise.reject(`Ошибка! ${res.status}`);
        });
    }
}

// _checkRequestResult(res) {
//     if (res.ok) {
//         return res.json()
//     }
//     return Promise.reject(`Ошибка ${res.status}`)
// }

// _errorRequestResult(err) {
//     console.log(err)
// }