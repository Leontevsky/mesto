class Card {
    constructor(name, link) {
        this.name = name
        this.link = link
    }

    _getTemplate() {
        const cardElement = document
            .querySelector('.template')
            .content
            .querySelector('element')
            .cloneNode(true)

        return cardElement;
    }

}