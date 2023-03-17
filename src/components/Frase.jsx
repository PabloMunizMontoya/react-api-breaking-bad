import React from 'react'

//4.3 extraemos la prop desde app
const Frase = ({frase}) => {
    return ( 

        <div>
            <h1>{frase.quote}</h1>
            <p>{frase.author}</p>
        </div>
        
    );
}

export default Frase;