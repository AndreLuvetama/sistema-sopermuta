import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
export const Login = () => {
  return (
    <>
        <section>
            <div className="container pt-5">
                <div className="row boxshadow mx-auto pb-5">
                <div class="row p-5">
                    <div className="divisor">
                   <span>Faça Login</span>
                    </div>
                </div> 
                    <form action="">
                    <div className="col-md-8 mx-auto">
                         <div className="input-group mb-3">
                            <span className="input-group-text" id="email-id" >@</span>
                            <input type="text" className='form-control' placeholder='Email' aria-label='email' aria-describedby="email-id" />
                        </div>

                        <div className="input-group mb-3 pt-3">
                            <span className="input-group-text" id="password-id"><FontAwesomeIcon icon={faKey}/></span>
                            <input type="text" className='form-control' placeholder='Password' aria-label='password-id' aria-describedby="password" />
                        </div>                     
                    </div>
    
                    
                        <div className="col-md-8 mx-auto">
                                <button className='btn-login'><FontAwesomeIcon icon={faRightToBracket}/> Acessar </button>                                  
                        </div>
                        <div className='col-md-8 mx-auto d-flex justify-content-between pt-2'>

                        <span className='text-left'><a href="register" className='text-black' >Cadastra-se</a></span> 
                        <span className='text-center'><a href=""  className='text-black'>Recuperar senha</a></span>
                        </div>
                    </form>
                </div>    
            </div>    
        </section>   
    
    </>
  )
}
