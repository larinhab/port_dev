import React from 'react'
import { Container } from './style'
import { useNavigate } from 'react-router-dom'
import { useColorToggle } from '../../hooks/colorToggle'

export function Logo(){
      const navigate = useNavigate()
      const [color, toggleColor] = useColorToggle();
      
      function handleBack(){
        navigate('/')
      }
      
  return (
    <Container to="/" onClick={ handleBack }>
        <div className='logo-box'>            
            <p id='lara'  
                style={{color, transition: 'color 0.3s ease'}}
                onMouseOver={toggleColor}>Lara</p>
            <p id='dev' 
                style={{color, transition: 'color 0.3s ease'}} 
                onMouseOver={toggleColor}>.dev</p>
        </div>

    </Container>
  )
}
