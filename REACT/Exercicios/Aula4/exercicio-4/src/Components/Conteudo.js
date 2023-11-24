import { useState } from 'react';

const Conteudo = () => {
    const [contador, setContador] = useState(0);
    const [lido, setLido] = useState(0);
    return (
      <div>
        <article>
          <h2>Biblia</h2>
          <p>As profecias estão se cumprindo e Jesus está voltando!</p>
          <div>
            <p>{lido}{contador}</p>
            <button onClick={() => setLido('Read:')}>
              Read
            </button>
            <button onClick={() => setContador('Like')}>
              Lindo
            </button>

            <button onClick={() => setContador('Like')}>
              Gostei
            </button>

            <button onClick={() => setContador('Deslike')}>
              Não Gostei
            </button>
          </div>


        </article>
      </div>
    )
  }


export default Conteudo;
