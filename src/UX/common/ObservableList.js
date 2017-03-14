class DOMChildren {

  constructor(dom) {
    this._dom = dom;
  }

  get count() {
    return this.count();
  }

  count() {
    return this._dom.children().length();
  }

  clear() {
    this._dom.empty();
  }

  add(object) {
    this._dom.append(object.dom);
  }

  remove(object) {
    --
  }

  removeByIndex(index) {
    if (index >= 0 && index <= this._list.length - 1) {
      delete this._list[index];
    }
  }

  addListener(callback) {
    this._callbacks.push(callback);
  }
}


export default ObservableList;
