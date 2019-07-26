import '../src/index';
import { storiesOf, withKnobs } from '@open-wc/demoing-storybook';

// demos
import {header_demo, ensemble_demo} from './demo_comp';
import {search_demo, hours_demo, locoso_demo, footer_demo, bulib_card_demo} from './demo_wc';
import {card_demo, cta_demo, popup_demo} from './demo_nojs';

// css
import '../assets/css/common.css';
import '../assets/css/card.css';
import '../assets/css/cta.css';
import '../src/header/header.css';
import '../src/popup/popup.css';

storiesOf('composites', module)
  .addDecorator(withKnobs)
  .add('ensemble',     () => ensemble_demo)
  .add('bulib-header', () => header_demo)
  .add('bulib-footer', () => footer_demo)
;

storiesOf('components', module)
  .addDecorator(withKnobs)
//.add('bulib-search', () => withClassPropertiesKnobs(BULibSearch))
  .add('bulib-card',   () => bulib_card_demo)
  .add('bulib-search', () => search_demo)
  .add('bulib-hours',  () => hours_demo)
  .add('bulib-locoso', () => locoso_demo)
;

storiesOf('nojs', module)
  .add('card', () => card_demo)
  .add('call-to-action', () => cta_demo)
  .add('popup', () => popup_demo)
;
