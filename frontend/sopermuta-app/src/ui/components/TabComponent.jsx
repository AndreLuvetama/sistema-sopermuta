import React, { useState } from 'react'
import HeaderComponent from './HeaderComponent'
import { BarraComponent } from './BarraComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPen, faHeart, faMessage, faThumbsUp, faHouseUser, faRightFromBracket, faGauge } from '@fortawesome/free-solid-svg-icons';


 function TabComponent ()  {
  const [bgcolor, setBgcolor] = useState('');
  const [textcolor, setTextcolor] = useState('white'); 
  const [activeLink, setActiveLink] = useState("");
  const[toggle, setToggle] = useState(1);

    function handleClick(num){
      console.log(num) 
          setToggle(num)         
    }


    const toggleTab = (index) =>{
      setToggle(index)  
    }

  return (
    <>
        <HeaderComponent  />
        <BarraComponent name="Dashboard" />
        <div  id='sidebar'>
          <div className='row'>
            <div className="col-md-2">
                <ul className='nav flex-column tab'  >
                <li className='nav-item'  > 
                    <a href='' className='nav-link'> <FontAwesomeIcon icon={faGauge}/> Dashboard</a>
                </li>
                <hr/>
                  <li className='nav-item' > 
                    <a href="" className={toggle === 1 ? 'show-content nav-link' : 'content nav-link'}   onClick = {() => toggleTab(1)}  style={{backgroundColor: `${bgcolor}` ,color: `${textcolor}` }}    
                                   ><FontAwesomeIcon icon={faUserPen}/> Meus dados</a>
                  </li>
                <li className='nav-item' > 
                  <a href="" className={toggle === 2 ? 'show-content nav-link' : 'content nav-link'} onClick = {() => handleClick(2) } style={{backgroundColor: `${bgcolor}` ,color: `${textcolor}` }} 
                   ><FontAwesomeIcon icon={faHouseUser}/> Meu imóvel</a>
                </li>
                <li className='nav-item'> 
                  <a href="" className={toggle === 3 ? 'show-content nav-link' : 'content nav-link'} onClick = {() => handleClick(3) }><FontAwesomeIcon icon={faThumbsUp}/> Meus interesses</a>
                </li>
                <li className='nav-item'> 
                  <a href="" className={toggle === 4 ? 'show-content nav-link' : 'content nav-link'} onClick = {() => handleClick(4)} style={{backgroundColor: `${bgcolor}` ,color: `${textcolor}` }} ><FontAwesomeIcon icon={faHeart}/> Match</a>
                </li>
                <li className='nav-item'>
                  <a href="" className={toggle === 5 ? 'show-content nav-link' : 'content nav-link'} onClick = { () => handleClick(5)} style={{backgroundColor: `${bgcolor}` ,color: `${textcolor}` }} ><FontAwesomeIcon icon={faMessage}/> Mensagem</a>
                </li>
               
                  <li className='nav-item divisoria-tab'>
                  <hr />
                      <a href="" className='nav-link bt-sair'> <FontAwesomeIcon icon={faRightFromBracket}/> sair</a>
                  </li>
              </ul>
            </div>

      
            
            <div className='col-md-10 bg-secondary'  >
              
              <div className={toggle === 1 ? 'show-content' : 'content'} >Meus dados</div>
              <div className={toggle === 2 ? 'show-content' : 'content'} >Meu imóvels</div>
              <div className={toggle === 3 ? 'show-content' : 'content'} >Meus interesses</div>
              <div className={toggle === 4 ? 'show-content' : 'content'} >Meus Match</div>
              <div className={toggle === 5 ? 'show-content' : 'content'} >Notificações</div>
 
            </div>
          </div>
        </div>
    
    </>
  )
}
export default TabComponent;