import React from 'react'
import reactDom from 'react-dom'
import App from './App'
import './style.scss'
import './responsive.scss'
import {BrowserRouter} from 'react-router-dom'

reactDom.render(
    <>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </>
    ,document.getElementById('root')
)