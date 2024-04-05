import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import './styles/App.scss'

function Index() {
  return (

    <BrowserRouter>
      <App />
    </BrowserRouter>
  
  )
}

export default Index

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Index />)
