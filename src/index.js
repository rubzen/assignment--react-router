import  React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './css/styles.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// a.1 - Import Browser Router

// a.2 - Create `AppRouter` Component wrapper around <App/> using BrowserRouter
class AppRouter extends Component{
    render() {
        return (
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
    }
    
}

// a.3 - Pass instantiated AppRouter component to
ReactDOM.render(<AppRouter />, document.getElementById("root"));
registerServiceWorker();
