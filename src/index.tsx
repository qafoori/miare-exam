import React from 'react'
import ReactDOM from 'react-dom/client'
import { MiareExam } from './App'
import reportWebVitals from './reportWebVitals'
import './core/styles/index.scss'

const root = ReactDOM.createRoot(document.getElementById('_miare_') as HTMLElement)

root.render(
  <React.StrictMode>
    <MiareExam />
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
