export default class UserInfo {
    constructor(nameUserInput, jobUserInput, userAvatarSelector) {
        this._userName = document.querySelector(nameUserInput);
        this._userJob = document.querySelector(jobUserInput);
        this._avatar = document.querySelector(userAvatarSelector);
    }

    getUserInfo() {
        const userData = {
            name: this._userName.textContent,
            about: this._userJob.textContent,
        };

        return userData;
    }

    setUserInfo(name, about) {
        this._userName.textContent = name
        this._userJob.textContent = about
    }

    setAvatar(avatar) {
        this._avatar.src = avatar;
        this._avatar.alt = this._userName.textContent;
    }

}