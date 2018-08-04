import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'normalize.css';
import { App } from 'src/components/views/App';
import { global } from 'src/index.styled';
import registerServiceWorker from 'src/registerServiceWorker';

global();

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
