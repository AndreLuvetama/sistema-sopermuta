import { useState, React } from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Comofunciona } from './pages/Comofunciona'
import { QuemSomos } from './pages/QuemSomos'
import { Contato } from './pages/Contato'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Admin } from './pages/admin/Admin'
import { TestePage } from './pages/TestePage'
import { CadEditImovel } from './pages/CadEditImovel'
import { Notificacoes } from './pages/Notificacoes'
import { MeusInteresses } from './pages/MeusInteresses'
import { Match } from './pages/Match'
import { MinhaArea } from './pages/MinhaArea'
import { VisualizarImovel } from './pages/VisualizarImovel'
import { Imovel } from './pages/Imovel'


function App() {


  return (
    <>
      <BrowserRouter>       
        <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='comofunciona' element={ <Comofunciona/>} />
          <Route path='quemsomos' element={ <QuemSomos/>} />
          <Route path='contato' element={ <Contato/>} />
          <Route path='login' element={ <Login/>} />
          <Route path='register' element={ <Register/>} />          
          <Route path='admin' element={ <Admin/>} />
          <Route path='testepage' element={ <TestePage/>} />
          <Route path='minhaarea' element={ <MinhaArea/>} />     
          <Route path='meuimovel' element={ <CadEditImovel/>} />    
          <Route path='notificacoes' element={ <Notificacoes/>} />   
          <Route path='meusinteresses' element={ <MeusInteresses/>} /> 
          <Route path='match' element={ <Match />} /> 
          <Route path='imovel' element={ <VisualizarImovel />} /> 
          <Route path='imovel-id' element={ <Imovel />} /> 


        </Routes>      
       </BrowserRouter>      
    </>
  )
}

export default App
