import React  ,{ useState } from 'react'
import { useContext } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import './App.css'
import LoginPage from './pages/LoginPage'
import TodosPage from './pages/TodosPage'

export const TokenContext = React.createContext(null)

const ProtectedRoute = ({element}) =>{
  const [token, setToken] = useContext(TokenContext);
  return token ? element() : <Navigate to={"/login"} />
}

function App() {

  const [token, setToken] = useState('');

  return (
    <>
      <BrowserRouter basename="/">
        <TokenContext.Provider value={[token, setToken]} >
          <Routes>
            <Route path="/" element={
            <ProtectedRoute element={TodosPage} />
            // <TodosPage/>
            } /> 
            <Route path="/login" element={<LoginPage/>} /> 
          </Routes>
        </TokenContext.Provider>
    </BrowserRouter>
    </>
  )
}

export default App
