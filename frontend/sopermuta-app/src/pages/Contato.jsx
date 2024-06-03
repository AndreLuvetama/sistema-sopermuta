import React from 'react'
import HeaderComponent from '../ui/components/HeaderComponent'
import { BarraComponent } from '../ui/components/BarraComponent'
import FooterComponent from '../ui/components/FooterComponent'

export const Contato = () => {
  return (
    <>
        <HeaderComponent />
        <BarraComponent name="Contato"/>
      <section>
          <div className="container pt-5 ">
            <div className="row pb-5">
              <div className="col-md-7 boxshadow">
                <div className="row p-5">
                <div className=" divisor">
                      <span>Envia a sua mensagem</span>
                    </div>
                </div>

                
                  <form action="">
                  <div className="row">
                    <div className="col">
                       <input type="text" className='form-control' placeholder='Inorme nome' aria-label='name' aria-describedby="nome-id" />
                    </div>
                    <div className="col">
                      <input type="email" className='form-control' placeholder='Inorme Email' aria-label='email' aria-describedby="email-id" />
                    </div>
                    <div className="col">
                      <input type="text" className='form-control' placeholder='Assunto' aria-label='assunto' aria-describedby="assunto-id" />
                    </div>                  
                  </div>

                  <div className="col pt-2 pb-2">
                      <textarea name="mensagem"  className='form-control' id="" rows={5}>Mensagem</textarea>
                    </div>
                    
               
                  <div className='col-md-6 pt-2 pb-5'>
                  <button className='btn-laranja p-2' >Enviar mensagem</button>
                  </div>

                  </form>

              </div>
              <div className="col-md-5 login ml-3 " >
                <h4 className='pt-5'>Informações de contato</h4>
                <hr />
                  <p><b>Endereço:</b> 9870 St Vincent Place, Glasgow, DC 45 Fr 45</p>
                  <p><b>Email:</b> comunicacao@sopermutaimoveis.com.br </p>
                  <p><b>Whatsapp:</b> +55 11 900927262</p>
              </div>

            </div>
          </div>
      </section>
      <FooterComponent />
    </>
  )
}
