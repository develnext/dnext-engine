# D-Next Engine

UI Engine for JavaScript, based on jQuery and Bootstrap, like JavaFX.

### Examples

```javascript
var button = new UX.Button('Hello World');
button.size = [100, 30];
button.on('click', function () {
   alert('Hi!');
});
```

### Implemented

- `UX.Node` // base ui component.
- `UX.Labeled`
  - `UX.Button`
  - `UX.ToggleButton`
  - `UX.Label`
  - `UX.Checkbox`
- `UX.TextInputControl`
  - `UX.TextField`
  - `UX.TextArea`  
- `UX.SelectControl`
  - `UX.Combobox`
  - `UX.Listbox`
- `UX.ProgressBar`  
- `UX.ImageView`
- `UX.Container`
  - `UX.AnchorPane`
  - `UX.VBox`
  - `UX.HBox`
  - `UX.ListView`
- `UX.FragmentPane`
