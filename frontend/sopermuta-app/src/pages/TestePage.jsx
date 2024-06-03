import React, { useEffect, useState } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import NavItem from 'react-bootstrap/NavItem';

import HeaderComponent from '../ui/components/HeaderComponent';
import FooterComponent from '../ui/components/FooterComponent';
import { BarraComponent } from '../ui/components/BarraComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from "react-router-dom";
import { faUserPen, faHeart, faMessage, faThumbsUp, faHouseUser, faRightFromBracket, faGauge } from '@fortawesome/free-solid-svg-icons';

export const TestePage = () => {

  
  return (
    <>
    <HeaderComponent />
    <BarraComponent name="Minha area" />
        <section>
        <Tabs defaultActiveKey="yourclasses" id="uncontrolled-tab-example">
                        <Tab eventKey="yourclasses" className='active' title="Your Classes" tabClassName="profile-tabitem"> 
                            <div className="profile-tab-space">
                                    perfil
                            </div>
                        </Tab>
                        <Tab eventKey="joinedclasses" title="Joined Classes" tabClassName="profile-tabitem">
                        <div className="profile-tab-space">
                    
                        </div>
                        </Tab>
                        <Tab eventKey="bookmarks" title="Bookmarks" tabClassName="profile-tabitem">
                        <div className="profile-tab-space">
                     
                        </div>
                        </Tab>
                        <Tab eventKey="yourhosting" title="Your Hosting" tabClassName="profile-tabitem">
                        <div className="profile-tab-space">
                                teste
                        </div>
                        </Tab>
                    </Tabs>
        </section>
    <FooterComponent />
    </>
  )
}
