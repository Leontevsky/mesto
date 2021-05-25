export default class Api {
    constructor(config) {
        this._config = config
        this._url = this._config.url
        this._headers = this._config.headers
    }

    getInitialCards() {
        return fetch(`${this._url}/cards`, {
                method: "GET",
                headers: this._headers
            })
            .then(res => this._checkRequestResult(res))
            //.catch(err => this._errorRequestResult(err))

    }

    _checkRequestResult(res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка ${res.status}`)
    }

    _errorRequestResult(err) {
        console.log(err)
    }
}