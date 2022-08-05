import './bootstrap';

import React from 'react';
import  {createRoot} from 'react-dom/client';

import App from './components/App';

const container = document.getElementById('app');
const root = createRoot(container);
if (container) {
    // ReactDOM.render(<App />,document.getElementById('app'));
    root.render(<App/>);
}