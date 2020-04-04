import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";
import WSProvider from '../src/commonUtils/ws/WSProvider';
import App from './pages/App';

ReactDOM.render(
    <AppContainer>
        <BrowserRouter>
            <WSProvider>
                <App />
            </WSProvider>
        </BrowserRouter>
    </AppContainer>,
    document.getElementById("app")
);