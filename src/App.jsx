import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./Pages/LandingPage"
import LoginPage from "./Pages/LoginPage"
import SignUpPage from "./Pages/SignUpPage"
import ForgotPage from "./Pages/ForgotPage"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<LandingPage/>} ></Route>
      <Route path='/login' element={<LoginPage/>} ></Route>
      <Route path='/signup' element={<SignUpPage/>} ></Route>
      <Route path='/forgot-password' element={<ForgotPage/>} ></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
