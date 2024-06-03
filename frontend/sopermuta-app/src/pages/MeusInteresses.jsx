import React from 'react'
import Sidebar from '../ui/components/Sidebar'
import HeaderComponent from '../ui/components/HeaderComponent'
import { BarraComponent } from '../ui/components/BarraComponent'
import FooterComponent from '../ui/components/FooterComponent'
import { ImoveisComponent } from '../ui/components/ImoveisComponent'

export const MeusInteresses = () => {

  
  return (
    <>
      <HeaderComponent />
      <BarraComponent name="Meus interesses" />    
        <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 p-0">
            <Sidebar />
          </div>
          <div className="col-md-10 pt-4">
          <ImoveisComponent/>
          </div>
        </div>
        </div>
        <FooterComponent />
    </>
  )
}
