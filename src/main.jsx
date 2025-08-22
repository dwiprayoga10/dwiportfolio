import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// import AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi (ms)
      once: true,     // animasi hanya jalan sekali
      easing: 'ease-in-out',
    })
  }, [])

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />)
