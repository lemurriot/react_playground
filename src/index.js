import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import App from './paltrows-power-toes/App';
// import AppLang from './lang-context/AppLang';
import RegistrationForm from './registrationForm/registrationForm'

// import App1 from './App1';
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
    <BrowserRouter>
    <RegistrationForm />
    </BrowserRouter>, 
    document.getElementById('root')
    );
