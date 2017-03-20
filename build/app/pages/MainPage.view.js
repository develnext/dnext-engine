export default {
    _: 'HBox',

    align: ['center', 'center'],
    padding: 20,
    spacing: 10,

    _content: [
      {_: 'Button',
        id: 'button1',
        text: '<b>Hello</b> World',
        textType: 'html',
        contentDisplay: 'left',
        graphicTextGap: 10,

        graphic: 'https://cdn4.iconfinder.com/data/icons/iconsland-weather/PNG/16x16/Sunny.png',
        on: {
          click: 'doButton1Click'
        }
      },
      {_: 'ImageView',
        id: 'imageView',
        size: [300, 300],
        centered: true,
        source: 'https://cdn1.iconfinder.com/data/icons/ampola-final-by-ampeross/256/html_icon.png'
      },
      {_: 'Checkbox',
        id: 'checkbox',
        text: 'Check It!',
        checked: true,
        on: {
          click: 'doCheckboxClick'
        }
      },
      {_: 'VBox',
        align: ['left', 'center'],
        padding: [0, 0, 0, 30],
        spacing: 10,
        width: 400,
        height: 300,
        _content: [
          {_: 'Label', text: 'Hello Mike!'},
          {_: 'Label', text: '<b>Peace!</b>', textType: 'html'},
          {_: 'TextField', width: '100%'},
          {_: 'Button', text: 'Click'}
        ]
      }
    ]
}
