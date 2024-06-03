import React from 'react'




const FooterComponent = () => {
  return (
    <>
        <footer className='p-4 mt-5'>
            <div className="container">
            <div className="row">
                     <div className="col">
                        &copy; Copyright 2024-2025 Ramotetech
                     </div>
                     <div className="col">
                   
                        <ul className="navbar-nav list-group list-group-horizontal float-end">
                                <li className='list-group list-group-horizontal-xl mx-2'><a href="/">Home</a></li>
                                <li className='list-group list-group-horizontal-xl mx-2'><a href="quemsomos" >Quem Somos</a></li>
                                <li className='list-group list-group-horizontal-xl mx-2'><a href="comofunciona">Como funciona</a></li>
                                <li className='list-group list-group-horizontal-xl mx-2'><a href="contato">Contato</a></li>                    
                        </ul>
                 
                     </div>
            </div>
            </div>

        </footer>
    
    </>
  )
}

export default FooterComponent