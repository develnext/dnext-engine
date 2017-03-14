
class App {
    constructor(domElement) {
      this.root = jQuery(domElement);
    }

    show(page) {
      this.root.html('');
      this.root.append(page.dom);
    }
}
