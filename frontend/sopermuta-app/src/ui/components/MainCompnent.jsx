import React from 'react'
import apt1 from '../../assets/img/apt/apt4.jpg';
import apt2 from '../../assets/img/apt/apt2.jpg';
import apt3 from '../../assets/img/apt/apt3.jpg';
import info from '../../assets/img/apt/info.jpg';
import { faBed, faExpand, faLocationDot, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart  } from '@fortawesome/free-regular-svg-icons';
import { faUserPlus, faHome, faPenToSquare, faHouse, faHouseUser, faBuilding, faF } from '@fortawesome/free-solid-svg-icons';





export const MainCompnent = () => {
   
  return (
    <>
        <section>
            <div className="container align-self-center">
                <div class="row p-5">
                    <div className=" divisor">
                   <span>Permutas do seu interesse</span>
                    </div>
                </div>  
                <div className="row" id='interesses'>
                    <div className="col-md-4">                        
                        <div className="card" >
                        <img src={apt1} className='card-img-top' alt="" />
                            <div className="card-body">
                                <h5>
                                    Apartamento com 2 suites                            
                                </h5>    
                                <p>
                                <FontAwesomeIcon icon={faLocationDot } /> São Paulo-SP &nbsp;&nbsp;<FontAwesomeIcon icon={faExpand } /> 243m2 &nbsp;&nbsp;<FontAwesomeIcon icon={faBed } /> 3 &nbsp;&nbsp;<FontAwesomeIcon icon={faWarehouse } /> 3
                                </p>
                                <p>Cobertura Duplex em um dos mais tradicionais edifícios da cidade, num dos Bairros mais valorizados de São Caetano do Sul.</p>
                            </div>                            
                            <div className="card-footer d-flex">
                                <button className='btn-laranja'>Ver disponibilidade</button>                            
                                <button type="button" className="btn-heart ml-auto"><FontAwesomeIcon className='color-orange'  icon={faHeart } /></button>
                            </div>
                        </div>                
                    </div>
                    <div className="col-md-4">
                    <div className="card" >
                        <img src={apt2} className='card-img-top' alt="" />
                            <div className="card-body">
                                <h5>
                                    Apartamento com 2 suites                            
                                </h5>    
                                <p>
                                <FontAwesomeIcon icon={faLocationDot } /> São Paulo-SP &nbsp;&nbsp;<FontAwesomeIcon icon={faExpand } /> 243m2 &nbsp;&nbsp;<FontAwesomeIcon icon={faBed } /> 3 &nbsp;&nbsp;<FontAwesomeIcon icon={faWarehouse } /> 3
                                </p>
                                <p>Cobertura Duplex em um dos mais tradicionais edifícios da cidade, num dos Bairros mais valorizados de São Caetano do Sul.</p>
                            </div>
                            <div className="card-footer d-flex">
                                <button className='btn-laranja'>Ver disponibilidade</button>                            
                                <button type="button" className="btn-heart ml-auto"><FontAwesomeIcon className='color-orange'  icon={faHeart } /></button>
                            </div>

                        </div>    
                    </div>
                    <div className="col-md-4">
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
                                <button className='btn-laranja'>Ver disponibilidade</button>                            
                                <button type="button" className="btn-heart ml-auto"><FontAwesomeIcon className='color-orange'  icon={faHeart } /></button>
                            </div>
                        </div>    
                    </div>
                </div>   
            </div>
        </section>
        <section id='comofunciona'>
            <div className="container align-self-center">
                <div className="row p-5">
                    <div className="divisor">
                        <span>Como funciona</span>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-md-4 text-center ">
                        <div className="col circulo">
                        <FontAwesomeIcon className='icon-box' icon={faUserPlus}/>
                        </div>
                        <br />
                        <span>Fazer cadastro</span>
                    </div>
                    <div className="col-md-4 text-center ">
                    <div className="col circulo">
                    <FontAwesomeIcon className='icon-box'  icon={faPenToSquare}/>
                    </div>
                    <br />
                    <span>Cadastrar imóvel</span>
                    </div>
                    <div className="col-md-4 text-center  ">
                        <div className="col circulo">
                        <FontAwesomeIcon className='icon-box'  icon={faHeart}/>
                        </div>
                        <br />
                        <span >Dar Match</span>
                    </div>
                </div>    
                <hr className='hrcomofuniona'/>            
            </div>
        </section>
        <section id='categoria' >
            <div className="container bg-red align-self-center">
            <div className="row p-5">
                    <div className="divisor">
                        <span>Apartamentos por categoria</span>
                    </div>
                </div>
                <div className="row align-center">
                    <div className="col-md-2 imoveis-categoria">
                        <div className="col">
                        <FontAwesomeIcon className='icon-box2' icon={faHome } /> 
                        </div>
                        <span>Sobrado</span>
                    </div>
                    <div className="col imoveis-categoria">
                        <div className="col">
                        <FontAwesomeIcon className='icon-box2' icon={faF } /> 
                        </div>
                        <span>Studio</span>
                    </div>
                    <div className="col imoveis-categoria">
                        <div className="col">
                        <FontAwesomeIcon className='icon-box2' icon={faBuilding } /> 
                        </div>
                        <span>Apartamento</span>
                    </div>
                    <div className="col imoveis-categoria">
                        <div className="col">
                        <FontAwesomeIcon className='icon-box2' icon={faHouseUser } /> 
                        </div>
                        <span>Loft</span>
                    </div>
                    <div className="col imoveis-categoria">
                        <div className="col">
                        <FontAwesomeIcon className='icon-box2' icon={faBed } /> 
                        </div>
                        <span>Kitnet</span>
                    </div>
                    <div className="col imoveis-categoria">
                        <div className="col">
                        <FontAwesomeIcon className='icon-box2' icon={faBed } /> 
                        </div>
                        <span>Kitnet</span>
                    </div>
                   
                </div>
            </div>
        </section>
        <section id='informacao'>
            <div className="container">
                <div className="row pt-5">
                    <div className="col-md-5">
                        <img src={info} className='img-fluid' alt="" />
                    </div>
                    <div className="col-md-7">
                        <h4>Acompanhamento de ponta a ponta</h4>
                        <span>Reprehenderit nemo quod tempore doloribus ratione distinctio quis quidem vitae sunt reiciendis, molestias omnis soluta.</span>
                        <br />    
                        <br />                   
                        <h4>Providenciamos toda documentação</h4>
                        <span>Reprehenderit nemo quod tempore doloribus ratione distinctio quis quidem vitae sunt reiciendis, molestias omnis soluta.</span>
                        <br />
                        <br />
                        <h4>Equipe comprometida e pontual</h4>
                        <span>Reprehenderit nemo quod tempore doloribus ratione distinctio quis quidem vitae sunt reiciendis, molestias omnis soluta.</span>
            

                    </div>
                </div>
            </div>
        </section>

  
    </>
  )
}
