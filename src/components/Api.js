export default class Api {
    constructor(config) {
        this._config = config
        this._url = this._config.url
        this._headers = this._config.headers
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









    // _checkRequestResult(res) {
    //     if (res.ok) {
    //         return res.json()
    //     }
    //     return Promise.reject(`Ошибка ${res.status}`)
    // }

    // _errorRequestResult(err) {
    //     console.log(err)
    // }



}