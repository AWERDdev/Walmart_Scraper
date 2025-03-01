import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Intro from './Pages/Intro.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/Intro" element={<Intro/>} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
