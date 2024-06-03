import React from 'react'
import Sidebar from '../ui/components/Sidebar'
import HeaderComponent from '../ui/components/HeaderComponent'
import { BarraComponent } from '../ui/components/BarraComponent'
import FooterComponent from '../ui/components/FooterComponent'



export const MinhaArea = () => {

  
  return (
    <>
      <HeaderComponent />
      <BarraComponent name="Minha area" />
        <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <br/>
          <br/>
          <div className="col-md-9 boxshadow">
            <div className="row pt-2 pb-2 ">     
              <div class="row p-5">
                    <div className=" divisor">
                      <span>Editar perfil</span>
                    </div>
              </div>  
            </div>
            <div className="row">
              <form action="">
                <div className="row"><div className="col">
                  <b>ID: 72528 <br /> <br /></b>
                 
                  </div>
                                    </div>
                  <div className='row'>
                    <div className="form-group col-md-6">
                        <label for="nomecompleto">Nome completo</label>
                        <input type="text" name='nomeCompleto' value='' className='form-control' id="nomecompletoId"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="email">Email</label>
                        <input type="email" name='email' value='' className='form-control' id="emailId"/>
                    </div>

                    <div className="form-group col-md-3">
                        <label for="contato">Contato</label>
                        <input type="text" name='contato' value='' className='form-control' id="contatoId"/>
                    </div>
                    <div className="form-group col-md-3">
                        <label for="cpf">CPF</label>
                        <input type="text" name='cpf' value='' className='form-control' id="cpfId"/>
                    </div>
                    <div className="form-group col-md-3">
                        <label for="datanasc">Data Nascimento</label>
                        <input type="text" name='dataNasc' value='' className='form-control' id="datanascId"/>
                    </div>
                    <div className="form-group col-md-3">
                    <label for= "sexo">Sexo: &nbsp; </label> 
                    <div class="form-check form-check-inline pt-4">                     
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="sexoMasc" value="masculino"/>
                      <label class="form-check-label" for="sexoMasc">M</label>
                    </div>
                    <div class="form-check form-check-inline pt-4">
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="sexoFem" value="feminino"/>
                      <label class="form-check-label" for="sexoFem">F</label>
                    </div>
                    </div>
                  </div>
                  <br />
                  <b>Endereço</b>
                  <div className="row">
                  <div className="form-group col-md-3">
                        <label for="cep">CEP</label>
                        <input type="text" name='cep' value='' className='form-control' id="cdpId"/>
                    </div>
                    <div className="form-group col-md-4">
                        <label for="rua">Rua</label>
                        <input type="text" name='rua' value='' className='form-control' id="ruaId"/>
                    </div>
                    <div className="form-group col-md-2">
                        <label for="numero">Número</label>
                        <input type="text" name='numero' value='' className='form-control' id="numeroId"/>
                    </div>
                    <div className="form-group col-md-1">
                        <label for="logradouro">Logradouro</label>
                        <input type="text" name='logradouro' value='' className='form-control' id="logradouroId"/>
                    </div>
                      <br />
                    <div className="form-group col-md-4">
                        <label for="bairro">Bairro</label>
                        <input type="text" name='bairro' value='' className='form-control' id="bairroId"/>
                    </div>
                    <div className="form-group col-md-3">
                        <label for="municipio">Municipio</label>
                        <input type="text" name='municipio' value='' className='form-control' id="municopioId"/>
                    </div>
                    <div className="form-group col-md-3">
                        <label for="estado">Estado</label>
                        <input type="text" name='estado' value='' className='form-control' id="estadoId"/>
                    </div>
                  </div>
                    <br />
                   <b>Alterar Senha</b> 
                  <div className="row">
                  <div className="form-group col-md-3">
                        <label for="password">Senha nova</label>
                        <input type="password" name='password' value='' className='form-control' id="passwordId"/>
                    </div>
                    <div className="form-group col-md-3">
                        <label for="password2">Repetir senha</label>
                        <input type="password" name='password2' value='' className='form-control' id="passwordId2"/>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-md-2 pb-2">
                    <button type='buttob' className='btn-login'>Salvar dados</button> 
                    </div>
                  </div>               
                  

              </form>

            </div>
          </div>
        </div>
        </div>
        <FooterComponent />
    </>
  )
}
