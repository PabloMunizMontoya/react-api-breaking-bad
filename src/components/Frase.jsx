import React from 'react'
import styled from '@emotion/styled';

//5. creamos el componente contendorFrase con styledComponents
const ContenedorFrase = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background-color: #ffff;
    max-width: 800px;
    margin-top: 10rem;

`
const FraseBr = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;
`
const Author = styled.p`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.4rem;
    text-align: right;
    color: #666;
    margin-top: 2rem;
`
//4.3 extraemos la prop desde app
const Frase = ({frase}) => {

    // generamos un condicional en donde vemos si el objeto esta vació
    if(Object.keys(frase).length === 0) return null

    return ( 

        /* 5.1 insertamos el styled component */
        <ContenedorFrase>
            {/* 4.4 renderizado los valores de frase */}
            <FraseBr>{frase.quote}</FraseBr>
            <Author>{frase.author}</Author>
        </ContenedorFrase>
        
    );
}

export default Frase;