# D-Next Engine

UI Engine for JavaScript, based on jQuery and Bootstrap, like JavaFX.

### Examples

```javascript
var app = new UX.App('#root');

var button = new UX.Button('Hello World');
button.on('click', () => {
   alert('Hi!');
});

app.content = button; // show button in app content.
```
