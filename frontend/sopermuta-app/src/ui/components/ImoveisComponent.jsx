import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';
import apt1 from '../../assets/img/apt/apt4.jpg';
import apt2 from '../../assets/img/apt/apt2.jpg';
import apt3 from '../../assets/img/apt/apt3.jpg';
import info from '../../assets/img/apt/info.jpg';
import { faBed, faExpand, faLocationDot, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart  } from '@fortawesome/free-regular-svg-icons';
import { faUserPlus, faHome, faPenToSquare, faHouse, faHouseUser, faBuilding, faF } from '@fortawesome/free-solid-svg-icons';
import { SwipperNavButons } from './SwipperNavButons';




export const ImoveisComponent = () => {
  return (
    <>
     <div className="col">
     <div className="row pb-2 ">     
              <div class="row p-5">
                    <div className="divisor">
                    <span>Imóveis do seu interesse</span>
                    </div>
              </div>  
            </div>
        </div>
      <Swiper
      modules={{Navigation, Pagination}}
        slidesPerView={3}
        spaceBetween={30}
        //navigation ={true}
        pagination={{
          clickable: true
        }}
       
        className="mySwiper"
      >
       
        <SwiperSlide>          
        <div className="col">
            <div className="card" >
                    <img src={apt3} className='card-img-top' alt="" />
                            <div className="card-body">
                                <h5>
                                Cobertura com 162m²                           
                                </h5>    
                                <p>
                                <FontAwesomeIcon icon={faLocationDot } /> São Paulo-SP &nbsp;&nbsp;<FontAwesomeIcon icon={faExpand } /> 243m2 &nbsp;&nbsp;<FontAwesomeIcon icon={faBed } /> 3 &nbsp;&nbsp;<FontAwesomeIcon icon={faWarehouse } /> 3
                                </p>
                                <p>Cobertura Duplex em um dos mais tradicionais edifícios da cidade, num dos Bairros mais valorizados de São Caetano do Sul.</p>
                            </div>
                            <div className="card-footer d-flex">
                                <a href="imovel-id" className='btn-link text-dark'>Visualizar</a>  
                                                    
                                <button type="button" className="btn-heart ml-auto"><FontAwesomeIcon className='color-orange'  icon={faHeart } /></button>
                            </div>
                        </div>    
                    </div>           

        </SwiperSlide>
        <SwiperSlide>    <div className="col">
            <div className="card" >
                    <img src={apt3} className='card-img-top' alt="" />
                            <div className="card-body">
                                <h5>
                                Cobertura com 162m²                           
                                </h5>    
                                <p>
                                <FontAwesomeIcon icon={faLocationDot } /> São Paulo-SP &nbsp;&nbsp;<FontAwesomeIcon icon={faExpand } /> 243m2 &nbsp;&nbsp;<FontAwesomeIcon icon={faBed } /> 3 &nbsp;&nbsp;<FontAwesomeIcon icon={faWarehouse } /> 3
                                </p>
                                <p>Cobertura Duplex em um dos mais tradicionais edifícios da cidade, num dos Bairros mais valorizados de São Caetano do Sul.</p>
                            </div>
                            <div className="card-footer d-flex">
                               <a href="imovel-id" className='btn-link text-dark'>Visualizar</a>                              
                                <button type="button" className="btn-heart ml-auto"><FontAwesomeIcon className='color-orange'  icon={faHeart } /></button>
                            </div>
                        </div>    
                    </div> </SwiperSlide>
        <SwiperSlide>    <div className="col">
            <div className="card" >
                    <img src={apt3} className='card-img-top' alt="" />
                            <div className="card-body">
                                <h5>
                                Cobertura com 162m²                           
                                </h5>    
                                <p>
                                <FontAwesomeIcon icon={faLocationDot } /> São Paulo-SP &nbsp;&nbsp;<FontAwesomeIcon icon={faExpand } /> 243m2 &nbsp;&nbsp;<FontAwesomeIcon icon={faBed } /> 3 &nbsp;&nbsp;<FontAwesomeIcon icon={faWarehouse } /> 3
                                </p>
                                <p>Cobertura Duplex em um dos mais tradicionais edifícios da cidade, num dos Bairros mais valorizados de São Caetano do Sul.</p>
                            </div>
                            <div className="card-footer d-flex">
                            <a href="imovel-id" className='btn-link text-dark'>Visualizar</a>                          
                                <button type="button" className="btn-heart ml-auto"><FontAwesomeIcon className='color-orange'  icon={faHeart } /></button>
                            </div>
                        </div>    
                    </div> </SwiperSlide>
        <SwiperSlide>    <div className="col">
            <div className="card" >
                    <img src={apt3} className='card-img-top' alt="" />
                            <div className="card-body">
                                <h5>
                                Cobertura com 162m²                           
                                </h5>    
                                <p>
                                <FontAwesomeIcon icon={faLocationDot } /> São Paulo-SP &nbsp;&nbsp;<FontAwesomeIcon icon={faExpand } /> 243m2 &nbsp;&nbsp;<FontAwesomeIcon icon={faBed } /> 3 &nbsp;&nbsp;<FontAwesomeIcon icon={faWarehouse } /> 3
                                </p>
                                <p>Cobertura Duplex em um dos mais tradicionais edifícios da cidade, num dos Bairros mais valorizados de São Caetano do Sul.</p>
                            </div>
                            <div className="card-footer d-flex">
                                <a href="imovel-id" className='btn-link text-dark'>Visualizar</a>                            
                                <button type="button" className="btn-heart ml-auto"><FontAwesomeIcon className='color-orange'  icon={faHeart } /></button>
                            </div>
                        </div>    
                    </div> </SwiperSlide>
        <SwiperSlide>    <div className="col">
            <div className="card" >
                    <img src={apt3} className='card-img-top' alt="" />
                            <div className="card-body">
                                <h5>
                                Cobertura com 162m²                           
                                </h5>    
                                <p>
                                <FontAwesomeIcon icon={faLocationDot } /> São Paulo-SP &nbsp;&nbsp;<FontAwesomeIcon icon={faExpand } /> 243m2 &nbsp;&nbsp;<FontAwesomeIcon icon={faBed } /> 3 &nbsp;&nbsp;<FontAwesomeIcon icon={faWarehouse } /> 3
                                </p>
                                <p>Cobertura Duplex em um dos mais tradicionais edifícios da cidade, num dos Bairros mais valorizados de São Caetano do Sul.</p>
                            </div>
                            <div className="card-footer d-flex">
                            <a href="imovel-id" className='btn-link text-dark'>Visualizar</a>                           
                                <button type="button" className="btn-heart ml-auto"><FontAwesomeIcon className='color-orange'  icon={faHeart } /></button>
                            </div>
                        </div>    
                    </div> </SwiperSlide>
        <SwiperSlide>    <div className="col">
            <div className="card" >
                    <img src={apt3} className='card-img-top' alt="" />
                            <div className="card-body">
                                <h5>
                                Cobertura com 162m²                           
                                </h5>    
                                <p>
                                <FontAwesomeIcon icon={faLocationDot } /> São Paulo-SP &nbsp;&nbsp;<FontAwesomeIcon icon={faExpand } /> 243m2 &nbsp;&nbsp;<FontAwesomeIcon icon={faBed } /> 3 &nbsp;&nbsp;<FontAwesomeIcon icon={faWarehouse } /> 3
                                </p>
                                <p>Cobertura Duplex em um dos mais tradicionais edifícios da cidade, num dos Bairros mais valorizados de São Caetano do Sul.</p>
                            </div>
                            <div className="card-footer d-flex">
                                <a href="imovel-id" className='btn-link text-dark'>Visualizar</a>                        
                                <button type="button" className="btn-heart ml-auto"><FontAwesomeIcon className='color-orange'  icon={faHeart } /></button>
                            </div>
                        </div>    
                    </div> </SwiperSlide>
        <SwiperSlide>    <div className="col">
            <div className="card" >
                    <img src={apt3} className='card-img-top' alt="" />
                            <div className="card-body">
                                <h5>
                                Cobertura com 162m²                           
                                </h5>    
                                <p>
                                <FontAwesomeIcon icon={faLocationDot } /> São Paulo-SP &nbsp;&nbsp;<FontAwesomeIcon icon={faExpand } /> 243m2 &nbsp;&nbsp;<FontAwesomeIcon icon={faBed } /> 3 &nbsp;&nbsp;<FontAwesomeIcon icon={faWarehouse } /> 3
                                </p>
                                <p>Cobertura Duplex em um dos mais tradicionais edifícios da cidade, num dos Bairros mais valorizados de São Caetano do Sul.</p>
                            </div>
                            <div className="card-footer d-flex">
                                <a href="imovel-id" className='btn-link text-dark'>Visualizar</a>                          
                                <button type="button" className="btn-heart ml-auto"><FontAwesomeIcon className='color-orange'  icon={faHeart } /></button>
                            </div>
                        </div>    
                    </div>                      
                     </SwiperSlide>
        <SwiperSlide>    <div className="col">
            <div className="card" >
                    <img src={apt3} className='card-img-top' alt="" />
                            <div className="card-body">
                                <h5>
                                Cobertura com 162m²                           
                                </h5>    
                                <p>
                                <FontAwesomeIcon icon={faLocationDot } /> São Paulo-SP &nbsp;&nbsp;<FontAwesomeIcon icon={faExpand } /> 243m2 &nbsp;&nbsp;<FontAwesomeIcon icon={faBed } /> 3 &nbsp;&nbsp;<FontAwesomeIcon icon={faWarehouse } /> 3
                                </p>
                                <p>Cobertura Duplex em um dos mais tradicionais edifícios da cidade, num dos Bairros mais valorizados de São Caetano do Sul.</p>
                            </div>
                            <div className="card-footer d-flex">
                                <a href="imovel-id" className='btn-link text-dark'>Visualizar</a>                           
                                <button type="button" className="btn-heart ml-auto"><FontAwesomeIcon className='color-orange'  icon={faHeart } /></button>
                            </div>
                        </div>    
                    </div> 
                    
                    </SwiperSlide>
        <SwiperSlide>    <div className="col">
            <div className="card" >
                    <img src={apt3} className='card-img-top' alt="" />
                            <div className="card-body">
                                <h5>
                                Cobertura com 162m²                           
                                </h5>    
                                <p>
                                <FontAwesomeIcon icon={faLocationDot } /> São Paulo-SP &nbsp;&nbsp;<FontAwesomeIcon icon={faExpand } /> 243m2 &nbsp;&nbsp;<FontAwesomeIcon icon={faBed } /> 3 &nbsp;&nbsp;<FontAwesomeIcon icon={faWarehouse } /> 3
                                </p>
                                <p>Cobertura Duplex em um dos mais tradicionais edifícios da cidade, num dos Bairros mais valorizados de São Caetano do Sul.</p>
                            </div>
                            <div className="card-footer d-flex">
                            <a href="imovel-id" className='btn-link text-dark'>Visualizar</a>                          
                                <button type="button" className="btn-heart ml-auto"><FontAwesomeIcon className='color-orange'  icon={faHeart } /></button>
                            </div>
                        </div>    
                    </div>
                     </SwiperSlide>
                     <SwipperNavButons />
      </Swiper>

      <div className="col bg-dark">
        só permuta imóveis
      </div>
    </>
  );
}

