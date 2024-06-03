import React from 'react'
import Sidebar from '../ui/components/Sidebar'
import HeaderComponent from '../ui/components/HeaderComponent'
import { BarraComponent } from '../ui/components/BarraComponent'
import FooterComponent from '../ui/components/FooterComponent'
import { UploadImage } from '../ui/components/UploadImage'

export const CadEditImovel = () => {

  
  return (
    <>
      <HeaderComponent />
      <BarraComponent name="Meu imóvel" />
    
        <div class="container-fluid">
        <div className="row">
          <div className="col-md-2 p-0">
            <Sidebar />
          </div>
          <br/>
          <br/>
          <div className="col-md-9 boxshadow">
            <div className="row pt-2 pb-2 ">     
              <div class="row p-5">
                    <div className=" divisor">
                    <span>Cadastrar imóvel</span>
                    </div>
              </div>  
            </div>
            <div className="row">
              <form action="">
                <div className="row"><div className="col">
                  <b>Imóvel: 72528 <br /> <br /></b>
                 
                  </div>
                                    </div>
                  <div className='row'>
                    <div className="form-group col-md-4">
                        <label for="tipoImovel">Tipo de imóvel</label>
                        <input type="text" name='tipoImovel' value='' className='form-control' id="tipoImovelId"/>
                    </div>
                    <div className="form-group col-md-4">
                        <label for="tituloImovel">Título do imóvel</label>
                        <input type="text" name='tipoImovel' value='' className='form-control' id="tituloImovelId"/>
                    </div>  
                    <div className="row pt-3">
                      <div className="col">
                        <label for="descricaoImovel">Descrição do imóvel</label>
                        <textarea name="descricaiImovel" id="descricaoId" className='form-control textArea' rows={3}></textarea>

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
                    <div className="form-group col-md-2">
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
                   <b>Informações do apartamento</b> 
                  <div className="row">
                    <div className="form-group col-md-2">
                        <label for="tamanhoTotal">Tamanho Total</label>
                        <input type="text" name='tamanhoTotal' value='' className='form-control' id="tamanhoTotalId"/>
                    </div>
                    <div className="form-group col-md-2">
                        <label for="tamanhoUtil">Tamanho útil</label>
                        <input type="text" name='tamanhoUtil' value='' className='form-control' id="tamanhoUtilId"/>
                    </div>
                    <div className="form-group col-md-2">
                        <label for="numBanheiro">Num Banheiros</label>
                        <input type="text" name='numBanheiro' value='' className='form-control' id="numBanheiroId"/>
                    </div>
                    <div className="form-group col-md-2">
                        <label for="numQuarto">Num. Quarto</label>
                        <input type="text" name='numQuarto' value='' className='form-control' id="numQuartoId"/>
                    </div>
                    <div className="form-group col-md-2">
                      <label for="numSuite">Suite</label>
                      <input type="text" name='numSuite' value='' className='form-control' id='suiteId' />
                    </div>
                    <div className="form-group col-md-2">
                        <label for="numVaga">Num. vagas</label>
                        <input type="text" name='numVagas' value='' className='form-control' id="numVagasId"/>
                    </div>
                  </div>
                  <br />
                  <b>Itens do apartamento</b> 
                  <div className="row">
                    <div className="form-group col-md-3">
                      <div className="form-check form-check-inline">  
                        <label for="arCondicionado">Ar condicionado</label>                      
                        <input type="checkbox" name='numVagas' value='' className='form-check-input' id="arCondicionadoId"/>  
                      </div>
                    </div>
                 
                    <div className="form-group col-md-2">
                      <div className="form-check form-check-inline">  
                        <label for="piscina">Piscina</label>                      
                        <input type="checkbox" name='piscina' value='' className='form-check-input' id="piscinaId"/>  
                      </div>
                    </div>
                    <div className="form-group col-md-2">
                      <div className="form-check form-check-inline">  
                        <label for="churrasqueira">Churrasqueira</label>                      
                        <input type="checkbox" name='churrasqueira' value='' className='form-check-input' id="churrasqueiraId"/>  
                      </div>
                    </div>
                    <div className="form-group col-md-2">
                      <div className="form-check form-check-inline">  
                        <label for="mobiliado">Mobiliado</label>                      
                        <input type="checkbox" name='mobiliado' value='' className='form-check-input' id="mobiliadoId"/>  
                      </div>
                    </div>
                    <div className="form-group col-md-2">
                      <div className="form-check form-check-inline">  
                        <label for="academia">Academia</label>                      
                        <input type="checkbox" name='academia' value='' className='form-check-input' id="academiaId"/>  
                      </div>
                    </div>
                  </div> 
                  <br />
                  <hr />
                  <UploadImage />
                  <hr className='bg-dark'/>     
                  <h5>Meus interesses</h5> 
                  <div className="row">
                    <div className="form-group col-md-3 pt-4">
                      <select name="tipoImovel" className='form-select ' id="tipoImovelId">
                        <option selected>Tipo de imóvel</option>
                        <option value="apartamento">Apartamanento</option>
                        <option value="sobrado">Sobrado</option>
                        <option value="estudio">Estudio</option>
                        <option value="kitnet">Kitnet</option>
                        <option value="flat">Flat</option>
                      </select>
                    </div>  
                    <div className="form-group col-md-3 pt-4">
                      <select name="estado" className='form-select ' id="estadoId">
                        <option selected>Estado</option>
                        <option value="qualquer">Qualquer estado</option>
                        <option value="sp">SP</option>
                        <option value="rj">RJ</option>
                        <option value="mg">MG</option>
                        <option value="rn">RN</option>
                      </select>
                    </div>
                    <div className="form-group col-md-2">
                      <label for="numSuiteInteresse">Suite</label>
                      <input type="text" name='numSuiteInteresse' value='' className='form-control' id='numSuiteInteresseId' />
                    </div>
                    <div className="form-group col-md-2">
                        <label for="numQuartoInteresse">Num. Quarto</label>
                        <input type="text" name='numQuartoInteresse' value='' className='form-control' id="numQuartoInteresseId"/>
                    </div>
                    <div className="form-group col-md-2">
                        <label for="numVaga">Num. vagas</label>
                        <input type="text" name='numVagas' value='' className='form-control' id="numVagasId"/>
                    </div>
                   

                  </div>           
                  <br />
                  <div className="row">
                  <div className="form-group col-md-2">
                      <div className="form-check form-check-inline">  
                        <label for="piscinaInt">Piscina</label>                      
                        <input type="checkbox" name='piscinaInt' value='' className='form-check-input' id="piscinaIntId"/>  
                      </div>
                    </div>
                    <div className="form-group col-md-2">
                      <div className="form-check form-check-inline">  
                        <label for="churrasqueiraInt">Churrasqueira</label>                      
                        <input type="checkbox" name='churrasqueiraInt' value='' className='form-check-input' id="churrasqueiraIntId"/>  
                      </div>
                    </div>
                    <div className="form-group col-md-2">
                      <div className="form-check form-check-inline">  
                        <label for="mobiliadoInt">Mobiliado</label>                      
                        <input type="checkbox" name='mobiliado' value='' className='form-check-input' id="mobiliadoId"/>  
                      </div>
                    </div>
                    <div className="form-group col-md-2">
                      <div className="form-check form-check-inline">  
                        <label for="academiaInt">Academia</label>                      
                        <input type="checkbox" name='academiaInt' value='' className='form-check-input' id="academiaIntId"/>  
                      </div>
                    </div>
                    <div className="form-group col-md-3">
                      <div className="form-check form-check-inline">  
                        <label for="arCondicionadoInt">Ar condicionado</label>                      
                        <input type="checkbox" name='arCondicionadoInt' value='' className='form-check-input' id="arCondicionadoIntId"/>  
                      </div>
                    </div>


                  </div> 

                  <br />
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
