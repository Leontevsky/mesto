export default class UserInfo {
    constructor(nameUserInput, jobUserInput, userAvatarSelector) {
        this._userName = document.querySelector(nameUserInput);
        this._userJob = document.querySelector(jobUserInput);
        this._avatar = document.querySelector(userAvatarSelector);
    }

    getUserInfo() {
        this._userInfo = {};
        this._userInfo.name = this._userName.textContent
        this._userInfo.job = this._userJob.textContent
        return this._userInfo
    }

    setUserInfo(name, job) {
        this._userName.textContent = name
        this._userJob.textContent = job
    }
}