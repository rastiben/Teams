import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Teams from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'mobx-react';
import TeamStore from './stores/TeamStore'

const Root = (
    <Provider TeamStore={TeamStore}>
        <Teams/>
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
