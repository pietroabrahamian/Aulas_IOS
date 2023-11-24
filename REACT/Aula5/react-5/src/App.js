import './App.css';
import Eventos from './Components/Eventos';
import PrimeiroComponente from './Components/PrimeiroComponente';
import Propriedades from './Components/Propriedades';
// import Rodrygo from '../src/Assets/rodrygo.png';

function App() {
  return (
    <div className="App">
      <h1>Esse é o App.js</h1>
      <PrimeiroComponente/>
      <h2>H2 do App.js</h2>
      <Eventos/>
      {/* <img src="./vinijr.jpg" alt="" />
      <img src={Rodrygo} alt="" /> */}
      <Propriedades nome='Lucas' />
    </div>
  );
}

export default App;
