import React from 'react'
import HeaderComponent from '../ui/components/HeaderComponent'
import { BarraComponent } from '../ui/components/BarraComponent'
import FooterComponent from '../ui/components/FooterComponent'
import SliderComponent from '../ui/components/SliderComponent'
import { FaEnvelope, FaStreetView } from "react-icons/fa6";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faExpand, faLocationDot, faWarehouse } from '@fortawesome/free-solid-svg-icons'
import { ImoveisComponent } from '../ui/components/ImoveisComponent'
import {GoogleMapComponent } from '../ui/components/GoogleMapComponent'
import { VisualizarImovelComponent } from '../ui/components/VisualizarImovelComponent'

export const Imovel = () => {
  return (
    <>
    <HeaderComponent />
      <BarraComponent name="Imóvel 890" />
      <div className="container">
        <VisualizarImovelComponent />
      </div>

      



      <FooterComponent />
    </>
  )
}
