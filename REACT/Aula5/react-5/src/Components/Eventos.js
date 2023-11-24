import React from 'react'

const Eventos = () => {
    const msg = () =>{
        console.log('Teste de evento');
    }
  return (
    <div>
        <button onClick={msg}>Clique</button>
        <button onClick={() => console.log('Segundo Evento')}>Clique Dnv</button>
    </div>
  )
}

export default Eventos