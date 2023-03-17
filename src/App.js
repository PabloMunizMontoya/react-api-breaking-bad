import React from 'react'
import styled from '@emotion/styled'

//1. creamos el styled component button, con un gradient  
const Boton = styled.button`
    background: linear-gradient(to top left, #007d35 0%, #007d35 40%, #0f574e 100%);
    color: white;
    background-size: 300px;
    font-family: Arial, Helvetica, sans-serif;
    color: #ffff;
    margin-top: 3rem;
    padding: 1rem 3rem;
    font-size: 2rem;
    border: 2px solid black;
`
//2. creamos el contenedor con styled components
const Contenedor = styled.div`
    display: flex;
    align-items: center;
    padding-top: 5rem;
    flex-direction: column;
`

function App() {

  //3. creamos function para qeu cuando el usuario de click a el boton se consuma una api. lo hacemos mediante a fetch
  const ConsultarApi = async () => {
    const api = await fetch('https://api.breakingbadquotes.xyz/v1/quotes')
    const frase = await api.json()
    console.log(frase[0])
    
  }


  return (
    /* 2.1 insertamos el Contenedor */
    <Contenedor>
        {/* 1.1 agregamos el componente Boton creado con styled components  */}
        <Boton
            /* 3.1 insertamos la function ConsultarApi en el boton con un onClick */
            onClick={ConsultarApi}
        >
            Obtener frase
        </Boton>
    </Contenedor>
  );
}

export default App;
