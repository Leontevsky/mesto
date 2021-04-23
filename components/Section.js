export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._items = items
        this._renderer = renderer
        this._containerSelector = document.querySelector(containerSelector)
    }

    addItem(arg) {
        this._containerSelector.append(arg);
    }

    rendererItems() {
        this._items.forEach(item => {
            this._renderer(item)
        });
    }
}