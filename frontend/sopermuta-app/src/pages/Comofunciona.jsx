import React from 'react'
import HeaderComponent from '../ui/components/HeaderComponent'
import { BarraComponent } from '../ui/components/BarraComponent'
import FooterComponent from '../ui/components/FooterComponent'
export const Comofunciona = () => {
  return (
    <>
        <HeaderComponent />
        <BarraComponent name="Como funciona"/>
        <section id='comofunciona'>
            <div className="container">
                <div className="row pt-5">
                    <div className="col">
                      <h4 className='titulo'>What is Lorem Ipsum</h4>
                      <span>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                         piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                          a Latin professor at Hampden-Sydney
                         College in Virginia, looked up one of the more obscure Latin words, consectetur,</span>
                    </div>
                    <div className="col">
                    <h4 className='titulo'>What is Lorem Ipsum</h4>
                    <span>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                         piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                          a Latin professor at Hampden-Sydney
                         College in Virginia, looked up one of the more obscure Latin words, consectetur,</span>
                    </div>
                    <div className="col">
                    <h4 className='titulo'>What is Lorem Ipsum</h4>
                    <span>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                         piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                          a Latin professor at Hampden-Sydney
                         College in Virginia, looked up one of the more obscure Latin words, consectetur,</span>
                    </div>
                    
                </div>
            </div>
        </section>    
        <FooterComponent />
    </>
  )
}
