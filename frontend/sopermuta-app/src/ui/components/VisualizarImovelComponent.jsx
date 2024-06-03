import React from 'react'
import SliderComponent from './SliderComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faExpand, faLocationDot, faWarehouse } from '@fortawesome/free-solid-svg-icons'
import { FaEnvelope, FaStreetView } from 'react-icons/fa6'
import {GoogleMapComponent } from './GoogleMapComponent'
import { ImoveisComponent } from './ImoveisComponent'

export const VisualizarImovelComponent = () => {
  return (
    <>
         <div className="container">
        <div className="row">
          <div className="col text-dark pt-3">
            <span>Código do usuário: 13047 | Cód. Imóvel: 2978289953 <br /> <br /></span>
          </div>
        </div>
        <div className="row">
          
          <div className='col-md-8'>
            <SliderComponent />
          </div>
          <div className='col-md-4 text-center'>
          <p>Contactar o anunciante</p>
          <br />
            <form action="">
                  <div className="row">
                    <div className="col-md-12">
                      <input type="text"  className="form-control" placeholder='Email' name='email'/>
                    </div>                    
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <input type="text"  className="form-control" placeholder='nome' name='nome'/>
                    </div>
                    <div className="col-md-6">
                      <input type="text"  className="form-control" placeholder='Assunto' name='assunto'/>
                    </div>
                  </div>
                  <div className="row mt-2">
                  <div className="col">
                    <textarea name="notificacao"  className='form-control' id="" placeholder='Deixe a sua mensagem'></textarea>          
                  </div>
                  </div>
                  <div className='col-md-12'>
                    <br />
                   <button className='btn-login text-white'>Enviar mensagem <FaEnvelope /></button>
                  </div>
            </form>
          </div>
        </div>
        <hr />
        <div className='row'>
           <div className="col">
           <h5 className='pt-2'>Cobertura com 162m²</h5>   
              <p><FontAwesomeIcon icon={faLocationDot } /> São Paulo-SP &nbsp;&nbsp;<FontAwesomeIcon icon={faExpand} /> 243m2 &nbsp;&nbsp;<FontAwesomeIcon icon={faBed } /> 3 &nbsp;&nbsp;<FontAwesomeIcon icon={faWarehouse } /> 3
                </p>

                <p>Descrição do imóvel <br />
                  Cobertura Duplex em um dos mais tradicionais edifícios da cidade, num dos Bairros mais valorizados de São Caetano do Sul.</p>
                           
           </div>
        </div>
        <div className="row">
            <div className="col">
              <p><FaStreetView /> AVENIDA ITAQUI 99, Petrópolis, Porto Alegre</p>
              <GoogleMapComponent />
            </div>
        </div>
        <ImoveisComponent/>
      </div>
    
    </>
  )
}
