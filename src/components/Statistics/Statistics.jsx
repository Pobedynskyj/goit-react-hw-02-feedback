import s from './Statistics.module.css';

function Statistics({ state }) {
  let countTotal = state.good + state.neutral + state.bad;
  let positiveFeedback = ((state.good / countTotal) * 100).toFixed(1);
  return (
    <>
      <h3>Statistics</h3>
      {!countTotal ? (
        <p>No feedback given</p>
      ) : (
        <ul>
          <li>Good: {state.good}</li>
          <li>Neutral: {state.neutral}</li>
          <li>Bad: {state.bad}</li>
          <li>Total: {countTotal}</li>
          <li>Positive feedback: {positiveFeedback}</li>
        </ul>
      )}
    </>
  );
}

export default Statistics;
