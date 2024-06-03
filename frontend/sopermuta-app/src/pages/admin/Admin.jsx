import '../../assets/css/sidebarStyle.css'


import Sidebar from '../../ui/components/Sidebar'
import HeaderComponent from '../../ui/components/HeaderComponent'
import { BarraComponent } from '../../ui/components/BarraComponent'
import FooterComponent from '../../ui/components/FooterComponent'
import {FaLaptopHouse, FaRegUser, FaRegChartBar, FaHouseUser, FaPlusCircle, FaTrashAlt,FaUserEdit  } from 'react-icons/fa'
import React, { useState } from 'react'

export const Admin = () => {
  const[divShow, setDivShow] = useState(1)

  const cadastro = [
    {id: 1, usuario: 'carlos', email: 'mariosantana@gmail.com', dataCadasto:"23/09/2022", tipoUsuario: "permuta", status: "ativo" },
    {id: 2, usuario: 'carlos', email: 'mariosantana@gmail.com', dataCadasto:"23/09/2022", tipoUsuario: "permuta", status: "ativo" },
    {id: 3, usuario: 'carlos', email: 'mariosantana@gmail.com', dataCadasto:"23/09/2022", tipoUsuario: "permuta", status: "ativo" },
    {id: 4, usuario: 'carlos', email: 'mariosantana@gmail.com', dataCadasto:"23/09/2022", tipoUsuario: "permuta", status: "ativo"},
    {id: 5, usuario: 'carlos', email: 'mariosantana@gmail.com', dataCadasto:"23/09/2022", tipoUsuario: "permuta", status: "ativo" },
    {id: 6, usuario: 'carlos', email: 'mariosantana@gmail.com', dataCadasto:"23/09/2022", tipoUsuario: "permuta", status: "ativo" },
    {id: 7, usuario: 'carlos', email: 'mariosantana@gmail.com', dataCadasto:"23/09/2022", tipoUsuario: "permuta", status: "ativo"},
    {id: 8, usuario: 'carlos', email: 'mariosantana@gmail.com', dataCadasto:"23/09/2022", tipoUsuario: "permuta", status: "ativo" },
    {id: 9, usuario: 'carlos', email: 'mariosantana@gmail.com', dataCadasto:"23/09/2022", tipoUsuario: "permuta", status: "ativo" },

]


const imovel = [
  {id: 1, usuario: 'carlos', cidade: 'São Paulo', dataCadasto:"23/09/2022", tipoImovel: "permuta", estado: "SP", status: "ativo" },
  {id: 2, usuario: 'carlos', cidade: 'São Paulo', dataCadasto:"23/09/2022", tipoImovel: "permuta", estado: "SP", status: "ativo" },
  {id: 3, usuario: 'carlos', cidade: 'São Paulo', dataCadasto:"23/09/2022", tipoImovel: "permuta", estado: "SP", status: "ativo" },
  {id: 4, usuario: 'carlos', cidade: 'São Paulo', dataCadasto:"23/09/2022", tipoImovel: "permuta", estado: "SP", status: "ativo"},
  {id: 5, usuario: 'carlos', cidade: 'São Paulo', dataCadasto:"23/09/2022", tipoImovel: "permuta", estado: "SP", status: "ativo" },
  {id: 6, usuario: 'carlos',  cidade: 'São Paulo', dataCadasto:"23/09/2022", tipoImovel: "permuta", estado: "SP", status: "ativo" },
  {id: 7, usuario: 'carlos',  cidade: 'São Paulo', dataCadasto:"23/09/2022", tipoImovel: "permuta", estado: "SP", status: "ativo"},
  {id: 8, usuario: 'carlos',  cidade: 'São Paulo', dataCadasto:"23/09/2022", tipoImovel: "permuta", estado: "SP", status: "ativo" },
  {id: 9, usuario: 'carlos', cidade: 'São Paulo', dataCadasto:"23/09/2022", tipoImovel: "permuta", estado: "SP", status: "ativo" },

]

  function togle(e){
    setDivShow(e)

  }

  
  return (
    <>
      <HeaderComponent />
      <BarraComponent name="Admin" />
       <section >
        <div className="container-fluid ">
        <div className="row ">
          <div className="col-2 p-0 ">
            <Sidebar />
          </div>
          <div className="col-10">
              <div className="row pt-2 pb-2">     
                <div class="row p-5">
                      <div className="divisor">
                        <span>Painel do Admin</span>
                      </div>
                </div>  
                <div className='row gap-1'>
                  <div className='col card bg-warning text-white'>
                    <p className='textBox'>15</p>
                    <p className='d-flex justify-content-between'>Imóveis cadastrados <FaLaptopHouse size={'3em'} /></p>               
                    <div className="card-footer">
                     <div className='row'>
                        <button className='btn btn-warning text-white' onClick={()=> togle(1)}><FaPlusCircle/> Mais info</button>
                      </div>
                    </div>
                  </div>
                  <div className='col card bg-primary text-white'>
                  <p className='textBox'>20</p>
                    <p className='d-flex justify-content-between'>Usuários cadastrados <FaRegUser size={'3em'} /></p>
                    
                    <div className="card-footer">
                      <div className='row'>
                        <button className='btn btn-primary' onClick={()=> togle(2)}><FaPlusCircle/> Mais info</button>
                      </div>
                    </div>
                  </div>
                  <div className='col card bg-secondary text-white'>
                  <p className='textBox'>5</p>
                    <p className='d-flex justify-content-between'>Imóveis permutados <FaHouseUser  size={'3em'} /></p>
                    
                    <div className="card-footer">
                      <div className='row'>
                        <button className='btn btn-secondary' onClick={()=> togle(3)}><FaPlusCircle/> Mais info</button>
                      </div>
                    </div>
                  </div>
                  <div className='col card bg-success text-white'>
                  <p className='textBox'>5</p>
                    <p className='d-flex justify-content-between'>Relatórios <FaRegChartBar  size={'3em'} /></p>
                    
                    <div className="card-footer">
                    <div className='row'>
                        <button className='btn btn-success' onClick={()=> togle(4)}><FaPlusCircle/> Mais info</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row painelSecion2">
                <div className= {divShow === 1 ? "col-12 pt-2": "col-12 pt-2 divShow" } id='imoveisCadastrados'>
                 <h5 className='pt-2'> Imóveis cadastrados</h5>
                 <table className='table table-striped table-responsive'>
                      <thead>
                        <tr >
                          <th scope='col'>ID</th>
                          <th scope='col'>Usuário</th>
                          <th scope='col'>tipo de Imovel</th>
                          <th scope='col'>Data de cadastro</th>
                          <th scope="col">Cidade</th>
                          <th scope="col">Estado</th>
                          <th scope="col">Status</th>
                          <th scope="col" className='text-center'>Ação</th>
                        </tr>
                      </thead>
                      <tbody>
                      {
                    imovel.map((item) =>(
                      <tr  key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.usuario}</td>
                        <td>{item.tipoImovel}</td>
                        <td>{item.dataCadasto}</td>
                        <td>{item.cidade}</td>
                        <td>{item.estado}</td>
                        <td>{item.status}</td>
                        <td className='text-center'><button className='btn btn-danger'><FaTrashAlt/></button>
                        &nbsp;<button className='btn btn-primary'><FaUserEdit/></button>
                        </td>
                      </tr>
                          ))
                        }
                      </tbody>
                  </table>
                </div>
                <div className={divShow === 2 ? "col-12 pt-2": "col-12 pt-2 divShow" } id='usuariosCadastrados'>
                 <h5 className='pt-2'>Usuários cadastrados</h5>
                 <table className='table table-striped table-responsive'>
                      <thead>
                        <tr >
                          <th scope='col'>ID</th>
                          <th scope='col'>Usuário</th>
                          <th scope='col'>Email</th>
                          <th scope='col'>Data de cadastro</th>
                          <th scope="col">Tipo usuário</th>
                          <th scope="col">Status</th>
                          <th scope="col" className='text-center'>Ação</th>
                        </tr>
                      </thead>
                      <tbody>
                      {
                    cadastro.map((item) =>(
                      <tr  key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.usuario}</td>
                        <td>{item.email}</td>
                        <td>{item.dataCadasto}</td>
                        <td>{item.tipoUsuario}</td>
                        <td>{item.status}</td>
                        <td className='text-center'><button className='btn btn-danger'><FaTrashAlt/></button>
                        &nbsp;<button className='btn btn-primary'><FaUserEdit/></button>
                        </td>
                      </tr>
                          ))
                        }
                      </tbody>
                  </table>
                
                </div>
                <div className={divShow === 3 ? "col-12 pt-2": "col-12 pt-2 divShow" } id='imoveisPermutados'>
                 
                  <h5 className='pt-2'>Imóveis Permutados</h5>
                 <table className='table table-striped table-responsive'>
                      <thead>
                        <tr >
                          <th scope='col'>ID</th>
                          <th scope='col'>Usuário</th>
                          <th scope='col'>tipo de Imovel</th>
                          <th scope='col'>Data de cadastro</th>
                          <th scope="col">Cidade</th>
                          <th scope="col">Estado</th>
                          <th scope="col">Status</th>
                          <th scope="col" className='text-center'>Ação</th>
                        </tr>
                      </thead>
                      <tbody>
                      {
                    imovel.map((item) =>(
                      <tr  key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.usuario}</td>
                        <td>{item.tipoImovel}</td>
                        <td>{item.dataCadasto}</td>
                        <td>{item.cidade}</td>
                        <td>{item.estado}</td>
                        <td>{item.status}</td>
                        <td className='text-center'><button className='btn btn-primary'>Concluir</button>
                        </td>
                      </tr>
                          ))
                        }
                      </tbody>
                  </table>
                </div>
                <div className={divShow === 4 ? "col-12 pt-2": "col-12 pt-2 divShow" } id='relatorio'>
                  Relatório
                </div>
              </div>
            </div>
          </div>
        </div>
       </section>
        <FooterComponent />
    </>
  )
}
