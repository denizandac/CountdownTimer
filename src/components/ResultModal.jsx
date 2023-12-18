import { forwardRef, useRef, useImperativeHandle } from "react";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onClose },
  ref
) {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    },
  }));

  const loseCondition = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  return (
    <dialog ref={dialog} className="result-modal" onClose={onClose}>
      {loseCondition && (
        <>
          <h2> You lost! </h2>
          <p>
            The target time was{" "}
            <strong>
              {targetTime} second{targetTime > 1 ? "s" : ""}.
            </strong>
          </p>
          <p>You couldn't stop the timer in time.</p>
        </>
      )}
      {!loseCondition && (
        <>
          <h2>Your score: {score} !</h2>
          <p>
            You stopped the timer with{" "}
            <strong>
              {formattedRemainingTime} second
              {formattedRemainingTime > 1 ? "s" : ""}
            </strong>{" "}
            left.
          </p>
        </>
      )}
      <form method="dialog" onSubmit={onClose}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
