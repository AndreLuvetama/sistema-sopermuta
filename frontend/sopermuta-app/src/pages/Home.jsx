import React from "react";
import HeaderComponent from "../ui/components/HeaderComponent";
import SliderComponent from "../ui/components/SliderComponent";
import { MainCompnent } from "../ui/components/MainCompnent";
import FooterComponent from "../ui/components/FooterComponent";






export default function Home(){

    return(
        <>
          <HeaderComponent pathname='home' class='home' />
          <SliderComponent />
          <MainCompnent />
          <FooterComponent />
        
        </>
      
    )

}