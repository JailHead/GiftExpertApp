import React from 'react'
import ReactDOM from 'react-dom/client'
import {GiftExpertApp} from './components/GiftExpertApp.jsx'
import "./styles.css"
import { AddCategory } from './components/AddCategory.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GiftExpertApp />
  </React.StrictMode>
)
