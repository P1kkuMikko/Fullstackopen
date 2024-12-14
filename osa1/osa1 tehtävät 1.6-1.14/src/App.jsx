import { useState } from 'react';

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = good / all * 100;
  const StatitsicsLine = ({ text, value }) => (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );

  if (all === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <table>
      <tbody>
        <StatitsicsLine text="Good" value={good} />
        <StatitsicsLine text="Neutral" value={neutral} />
        <StatitsicsLine text="Bad" value={bad} />
        <StatitsicsLine text="All" value={all} />
        <StatitsicsLine text="Average" value={average} />
        <StatitsicsLine text="Positive" value={`${positive}%`} />
      </tbody>
    </table>
  );
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;

  return <div>
    <h1>Give feedback!</h1>
    <Button onClick={() => setGood(good + 1)} text="Good" />
    <Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
    <Button onClick={() => setBad(bad + 1)} text="Bad" />

    <h1>Statistics</h1>
    <Statistics good={good} neutral={neutral} bad={bad} />
  </div>;
};

export default App;
