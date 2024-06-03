import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faUser, faEnvelope, faFloppyDisk } from '@fortawesome/free-solid-svg-icons'

export const Register = () => {
  return (
    <section>
    <div className="container pt-5">
        <div className="row boxshadow mx-auto pb-5">
        <div class="row p-5">
            <div className=" divisor">
           <span>Cadastrar Perfil</span>
            </div>
        </div> 
            <form action="">
            <div className="col-md-8 mx-auto">
            <div className="input-group mb-3">
                    <span className="input-group-text" id="name-id" ><FontAwesomeIcon icon={faUser}/></span>
                    <input type="text" className='form-control' placeholder='Nome de usuário' aria-label='name' aria-describedby="name-id" />
                </div>
                 <div className="input-group mb-3">
                    <span className="input-group-text" id="email-id" ><FontAwesomeIcon icon={faEnvelope}/></span>
                    <input type="text" className='form-control' placeholder='Email' aria-label='email' aria-describedby="email-id" />
                </div>
                <div className="input-group mb-3 pt-3">
                    <span className="input-group-text" id="password-id"><FontAwesomeIcon icon={faKey}/></span>
                    <input type="text" className='form-control' placeholder='Password' aria-label='passwordId' aria-describedby="password" />
                </div>       
                <div className="input-group mb-3 pt-3">
                    <span className="input-group-text" id="password-id"><FontAwesomeIcon icon={faKey}/></span>
                    <input type="text" className='form-control' placeholder='Repetir senha' aria-label='passwordId2' aria-describedby="password" />
                </div>                       
            </div>

            
                <div className="col-md-8 mx-auto">
                        <button className='btn-login'><FontAwesomeIcon icon={faFloppyDisk}/> Cadastrar </button>                                  
                </div>
                            
                <a href="login" className='text-black' ><center>Log In</center></a>
         
            </form>
        </div>    
    </div>    
</section> 
  )
}
