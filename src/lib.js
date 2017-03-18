import App from './NX/App';
import Logger from './NX/Logger';
import UILoader from './NX/UILoader';

import Node from './UX/Node';
import Button from './UX/Button';
import ToggleButton from './UX/ToggleButton';
import Labeled from './UX/Labeled';
import Label from './UX/Label';
import Checkbox from './UX/Checkbox';
import Container from './UX/Container';
import HBox from './UX/HBox';
import VBox from './UX/VBox';
import AnchorPane from './UX/AnchorPane';
import ImageView from './UX/ImageView';
import TextInputControl from './UX/TextInputControl';
import TextField from './UX/TextField';
import TextArea from './UX/TextArea';


import Font from './UX/paint/Font';
import Utils from './UX/util/Utils';

window.NX = {
  App, Logger, UILoader
}

window.UX = {
  Node,
  ImageView,
  Button, ToggleButton,
  Labeled,
  Label, Checkbox,
  TextInputControl, TextField, TextArea,
  Container, HBox, VBox, AnchorPane,

  Font
}
