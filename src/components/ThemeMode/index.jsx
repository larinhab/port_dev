import React, { useEffect } from "react";
import Sun from "./Sun.svg";
import Moon from "./Moon.svg";
import { Container } from "./styles.js";

export function ThemeMode(){
    const setDarkMode = ()=> {
        document.querySelector('body').setAttribute('data-theme', 'dark')
    }

    const setLightMode = ()=> {
        document.querySelector('body').setAttribute('data-theme', 'light')
    }

    const toggleTheme = (e) => {
        if(e.target.checked) setDarkMode()
        else setLightMode()
    }

    useEffect(() => {
        setLightMode()
    }, [])

    return (

        <Container>
            <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={ toggleTheme }
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <img className="sun" src={Sun} style={{ }}alt="Sun Icon" />
                <img  className="moon"src={Moon} alt="Moon Icon" />
            </label>
        </div>
        </Container>
        
    );
};
