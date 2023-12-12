import './App.css'
import FormData from './components/FormData'
import LandingPage from './components/LandingPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<LandingPage />} />
          <Route path='formData' element={<FormData />} />

        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
