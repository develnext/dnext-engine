export default {
    _: 'VBox',
    align: ['center', 'center'],
    padding: 20,
    spacing: 10,
    width: 500,
    fitWidth: true,
    _content: [
      {_: 'ListView', id: 'menu',
        spacing: 20,
        on: {action: 'doMenuAction'},
        horAlign: 'right',
        _content: [
          {_: 'Label', text: 'First <b>Step</b>', textType: 'html', id: 'firstStep', on: {click: 'doFirstStep'}},
          {_: 'Label', text: 'Second Step', id: 'secondStep', on: {click: 'doSecondStep'}},
          {_: 'Label', text: 'Last Step', id: 'lastStep', on: {click: 'doLastStep'}}
        ]
      },
      {_: 'Button', text: 'click', kind: 'success', font: {bold: true}, on: {click: 'doClick'}},
      {_: 'Listbox', items: ['One', 'Two', 'Three']},
      {_: 'FragmentPane',
        id: 'fragment',
        content: 'OtherPage'
      }
    ]
}
