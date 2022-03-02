import './App.css'
import Title from './components/Information/Title'
import Game from './components/Game/Game'

const App = () => {

  return (
    <div>
      <Title styling="segment__container title"/>
      <Game styling="segment__container game__area"/>
    </div>
  );
}

export default App;
