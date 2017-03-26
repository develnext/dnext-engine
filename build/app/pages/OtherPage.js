import View from './OtherPage.view';

export class OtherPage extends NX.Fragment {
  constructor() {
    super(View);
  }

  doButton1Click() {
    setInterval(() => {
      this.progressBar.progress += 1;
    }, 50);
  }
}
