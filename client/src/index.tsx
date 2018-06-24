import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from 'src/components/views/App';
import 'src/index.css';
import registerServiceWorker from 'src/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
