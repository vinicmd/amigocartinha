import { Route, Routes } from 'react-router-dom'
import { Login } from '../page/Login/login'
import { SignUp } from '../page/Signup/signup'

export const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup/:userId" element={<SignUp />} />
    </Routes>
  )
}
