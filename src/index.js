import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import {StateProvider} from './components/context/StateProvider'
import {initialState} from './components/context/initialState'
import reducer from 'components/context/reducer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
    </BrowserRouter>
  </React.StrictMode>
);
