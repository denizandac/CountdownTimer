import Player from "./components/Player.jsx";
import TimerChallange from "./components/TimerChallange.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallange title="Challenge 1" targetTime={1} />
        <TimerChallange title="Challenge 2" targetTime={5} />
        <TimerChallange title="Challenge 3" targetTime={10} />
        <TimerChallange title="Challenge 4" targetTime={15} />
      </div>
    </>
  );
}

export default App;
