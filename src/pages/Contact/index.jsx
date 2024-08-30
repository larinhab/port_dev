import { Container } from './styles.js'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { useState, useContext } from 'react';

import { FaRegLightbulb } from "react-icons/fa";
import { ContactForm } from '../../components/ContactForm'

import Lottie3 from "react-lottie";
import animationData from "../../assets/animation_2.json";

export function Contact(){
  
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };


  return (
    <Container>
      <Header/>
      
      <main>
          <div className="box">
          <h2>Você tem alguma ideia de projeto ?</h2>
        
              <Lottie3 className={ 'lottie' } style={
                  { 
                    width: '800px',
                    position: "absolute", 
                    top: '200px', 
                    left: '100px',
                    zIndex: '-1',
                    overflow: "visible",
                  }}
                    options={ defaultOptions }/>
          <div className="form">
              <ContactForm/>
          </div>
          </div>
      </main>

      <Footer/>
    </Container>
    )
}