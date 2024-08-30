import { Container } from './styles'
import { Input } from '../Input'

import { AiFillLinkedin } from "react-icons/ai"; //LD
import { AiOutlineLinkedin } from "react-icons/ai"; //LL

import { FaGithub } from "react-icons/fa"; //GD
import { VscGithub } from "react-icons/vsc"; //GL

import { FaFacebook } from "react-icons/fa"; //FD
import { LiaFacebook } from "react-icons/lia"; //FL

import { FaInstagramSquare } from "react-icons/fa"; //ID
import { FaInstagram } from "react-icons/fa"; //IL

import { FaHeart } from "react-icons/fa"; //HD
import { FaRegHeart } from "react-icons/fa"; //HL

export function Footer(){
    return (
    <Container>
        <footer>
                <div className="box-footer">
                    <ul className="links">
                        <li>
                            <a href="linkedin.com/in/lara-barbosa-viana-813428230/"> 
                                <AiFillLinkedin size={40} />
                            </a>
                        </li>
                        <li>
                             <a href="https://github.com/larinhab?tab=repositories"> 
                                <FaGithub />
                            </a> 
                        </li>           
                        <li>
                            <a href="https://www.facebook.com/larabviana/"> 
                                <FaFacebook />
                            </a>
                        
                        </li>              
                        <li>
                            <a href="https://www.instagram.com/larabviana/"> 
                            <FaInstagramSquare />
                            </a>
                        
                        </li>
                    </ul>
                    <p> Desenvolvido com  <FaHeart size={12}/> por Lara.</p>
        
                </div>
            </footer>

    </Container>
    )
  }
  