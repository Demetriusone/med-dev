import objectFitImages from 'object-fit-images';
import { $body, detectIE } from './_helpers';

import './components/Header';
import './components/Popups';
import './components/Form';
import './sections/Contact';
import './components/Sliders';

export class Common {
  constructor() {
    this.init();
  }

  init() {
    objectFitImages();
    this.addClassIE();
  }

  addClassIE() {
    if (detectIE()) $body.addClass('is-ie');
  }
}

export default new Common();
