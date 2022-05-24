import CrissCross from './engine/CrissCross';
import Game from './components/Game';
import './App.css';
const data = {
  width: 300,
  height: 300,
  random: false,
  dataMatrix: [[
        "one",
        "one",
        "one",
        "one",
        "one"
    ],
    [
        "two",
        "two",
        "two",
        "two",
        "two"
    ],
    [
        "three",
        "three",
        "three",
        "three",
        "three"
    ],
    [
        "four",
        "four",
        "four",
        "four",
        "four"
    ],
    [
        "five",
        "five",
        "five",
        "five",
        "five"
    ]],
  swapping: false,
};
function App() {
  const cc = new CrissCross(data);
  return (
    <div className="App">
      <Game game={cc} />
    </div>
  );
}

export default App;
