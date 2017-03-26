import View from './MainPage.view';

export class MainPage extends NX.Fragment {
  constructor() {
    super(View);
  }

  doMenuAction(e) {

  }

  doClick() {
    this.menu.selectedIndex += 1;
    this.menu.removeByIndex(0);
  }

  doImageViewClick() {
    alert('Hello!');
  }

  doCheckboxClick(e) {
    this.button1.enabled = e.sender.checked;
  }
}
