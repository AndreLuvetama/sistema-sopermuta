import React from 'react'
import Sidebar from '../ui/components/Sidebar'
import HeaderComponent from '../ui/components/HeaderComponent'
import { BarraComponent } from '../ui/components/BarraComponent'
import FooterComponent from '../ui/components/FooterComponent'

export const Match = () => {

  
  return (
    <>
      <HeaderComponent />
      <BarraComponent name="Meus matchs" />
    
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10 bg-dark">
            teste
          </div>
        </div>
        <FooterComponent />
    </>
  )
}
