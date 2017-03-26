export default {
    _: 'VBox',
    align: ['center', 'center'],
    padding: 20,
    spacing: 10,
    _content: [
      {_: 'Button',
        id: 'button1',
        kind: 'primary',
        text: '<b>Hello</b> World',
        textType: 'html',
        contentDisplay: 'top',
        on: {
          click: 'doButton1Click'
        }
      },
      {_: 'ImageView',
        id: 'imageView',
        size: [300, 300],
        displayType: 'resized',
        centered: true,
        source: 'https://cdn1.iconfinder.com/data/icons/ampola-final-by-ampeross/256/html_icon.png'
      },
      {_: 'TextArea',
        id: 'checkbox',
        wrap: 'hard',
        placeholder: 'Check It!',
        on: {
          click: 'doCheckboxClick'
        }
      },
      {_: 'ProgressBar', id: 'progressBar',
        progress: 0, striped: true, animated: true, kind: 'success'
      }
    ]
}
