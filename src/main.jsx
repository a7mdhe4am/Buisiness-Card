import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)

const emailBtn = document.getElementById("email-btn")
const linkedinBtn = document.getElementById("linkedin-btn")

emailBtn.addEventListener('click', () => {
    return(
        <a target='_blank' href='#'/>
    )
})

linkedinBtn.addEventListener('click', () => {
    return(
        <a  target='_blank' href='https://www.linkedin.com/in/ahmed-hesham-0404b121b/'/>
    )
})