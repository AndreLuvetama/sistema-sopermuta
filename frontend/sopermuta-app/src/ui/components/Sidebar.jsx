import React, { useState } from 'react';


import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
    FaRegUser,
    FaHome,
    FaHeart,
    FaCheckCircle,
    FaHeadSideCough,
    FaOutdent,
    FaHouseUser 
}from "react-icons/fa";
import { FaHeartCircleCheck } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';



const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/admin",
            name:"Admin",
            icon:<FaTh/>,
        },
        {
            path:"/minhaarea",
            name:"Minha área",
            icon:<FaUserAlt/>
        },
        {
            path:"/meuimovel",
            name:"Cad/Edit imóvel",
            icon:<FaHouseUser/>
        },
        {
            path:"/imovel",
            name:"Visualizar im",
            icon:<FaHome/>
        },
        {
            path:"/meusinteresses",
            name:"Favoritos",
            icon:<FaHeartCircleCheck/>
        },
        {
            path:"/match",
            name:"Match",
            icon:<FaHeart/>
        },
        {
            path:"/notificacoes",
            name:"Notificacoes",
            icon:<FaCommentAlt/>
        },
        {
           
            path:"/sair",
            name:"Sair",
            icon:<FaOutdent/>
        }
    ]
    return (
       <>
      
       <div id='sidebar' style={{display:'flex'}}>
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
       
     
       </>
    );
};

export default Sidebar;