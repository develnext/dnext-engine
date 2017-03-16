# D-Next Engine

UI Engine for JavaScript, based on jQuery and Bootstrap, like JavaFX.

### Examples

```javascript
var app = new UX.App('#root');

var button = new UX.Button('Hello World');
button.size = [100, 30];
button.on('click', () => {
   alert('Hi!');
});

app.content = button; // show button in app content.
```

### Implemented

1. UX.Node - base ui component.
2. UX.Labeled
 - UX.Button
  - UX.ToggleButton
 - UX.Label
 - UX.Checkbox
3. UX.Container
  - UX.AnchorPane
  - UX.VBox
  - UX.HBox
