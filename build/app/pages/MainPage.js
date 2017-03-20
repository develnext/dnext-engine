import View from './MainPage.view';

export class MainPage extends UX.Page {
  constructor() {
    super(View);
  }

  doButton1Click() {
    ui.imageView.source = 'https://cdn3.iconfinder.com/data/icons/aquanox/globe.png';
  }

  doImageViewClick() {
    alert('Hello!');
  }

  doCheckboxClick(e) {
    ui.button1.enabled = e.sender.checked;
  }
}
