import React from 'react'

export const BarraComponent = (props) => {
    var nome = props.name;
  return (
    <div className='img-barra'>
        <div className="container">
            <h4 className='texto-barra'>{nome}</h4>
            <p><a href="/">home</a>/{nome}</p>
        </div>
    </div>
  )
}
