import React, { useState } from 'react';
import { Container } from './style'
import axios from 'axios';

import { FaRegUser } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";

export function ContactForm(){
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })

 if(!formData){
  return("Campos Obrigatorios")
 }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://port-dev-back.onrender.com/contact', formData)
      alert('Email enviado com sucesso!');
    } catch (error) {
      alert('Erro ao enviar email, tente novamente mais tarde.')
    }
  };

  return (
    <Container>
    
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'><FaRegUser/>Nome</label>
      <input 
            type="text" 
            name="name" 
            placeholder="Ex.: João" 
            value={ formData.name } 
            onChange={handleChange} />
      
      <label htmlFor='email'><MdAlternateEmail/> E-mail</label>
      <input 
            type="email" 
            name="email" 
            placeholder="Ex.: joão@email.com" 
            value={ formData.email } 
            onChange={handleChange} />
        
        <label htmlFor='phone'><FiPhoneCall /> Celular</label>
      <input 
            type="phone" 
            name="phone" 
            placeholder="Ex.: (DDD) 99610-0000" 
            value={ formData.phone } 
            onChange={handleChange} />
        
        <label htmlFor='textarea'><FaRegLightbulb />Compartilhe sua ideia</label>
      <textarea 
            name="message" 
            placeholder="Gostaria de fazer um site..." 
            value={ formData.message }
            onChange={handleChange}> </textarea>

        <button 
          type="submit">
            <IoIosSend /> 
            Enviar
        </button>
    </form>
    </Container>
  );
};