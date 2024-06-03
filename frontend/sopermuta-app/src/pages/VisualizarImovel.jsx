import React from 'react'
import Sidebar from '../ui/components/Sidebar'
import HeaderComponent from '../ui/components/HeaderComponent'
import { BarraComponent } from '../ui/components/BarraComponent'
import FooterComponent from '../ui/components/FooterComponent'

import { VisualizarImovelComponent } from '../ui/components/VisualizarImovelComponent'

export const VisualizarImovel = () => {

  
  return (
    <>
      <HeaderComponent />
      <BarraComponent name="Meu imóvel" />
    
        <div class="container-fluid">
        <div className="row">
          <div className="col-md-2 p-0">
            <Sidebar />
          </div>
          <div className='col-md-10'>
            <VisualizarImovelComponent />

          </div>
          <br/>
          <br/>         
        </div>
        
        </div>
        <FooterComponent />
    </>
  )
}
