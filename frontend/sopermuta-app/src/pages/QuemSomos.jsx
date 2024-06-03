import React from 'react'
import HeaderComponent from '../ui/components/HeaderComponent'
import FooterComponent from '../ui/components/FooterComponent'
import img from '../assets/img/quemsomos/quemsomos.jpg'
import { BarraComponent } from '../ui/components/BarraComponent'


export const QuemSomos = () => {
  return (
        <>
        <HeaderComponent id='quemsomos'/>
        <BarraComponent name="Quem Somos"/>
        <section id='quemsomos' className='pt-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h4 className='text-center titulo'>What is Lorem Ipsum</h4>
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                             industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                              and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                               the leap into electronic typesetting, remaining essentially unchanged. </span>
                               <br />
                               <br />
                               <p>
                                It was popularised in the
                                1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                             desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <h4 className='text-center titulo pt-5'>Where can I get some</h4>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a 
                        page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less 
                        normal distribution of letters, 
                        as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>
                    
                    <div className="col-md-6">
                        <img src={img} className='img-fluid img-quemsomos' alt="Quem somos" />
                    </div>
                </div>
            </div>
        </section>
        <FooterComponent  />
        </>
  )
}
