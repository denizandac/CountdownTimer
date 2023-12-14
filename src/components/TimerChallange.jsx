import { useRef, useState } from "react";

const TimerChallange = ({ title, targetTime }) => {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const timer = useRef();

  function startTimer() {
    setTimerStarted(true);
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      setTimerStarted(false);
      stopTimer();
    }, targetTime * 1000);
  }
  function stopTimer() {
    clearTimeout(timer.current);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>Time Expired!</p>}
      <p className="challange-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStarted ? stopTimer : startTimer}>
          {timerStarted ? "Stop" : "Start"} Challange
        </button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Time is running..." : "Timer inactive"}
      </p>
    </section>
  );
};

export default TimerChallange;
