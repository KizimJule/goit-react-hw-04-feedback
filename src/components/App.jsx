import { useState } from 'react';

import { FeedbackOptions } from './feedback/FeedbackOptions/FeedbackOptions';
import { Statistics } from './feedback/Statistics/Statistics';
import { Section } from './feedback/Section/Section';
import { Notification } from './feedback/Notification/Notification';
import { ContainerDiv } from './App.styled';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // const [total, setTotal] = useState(0);
  // const [positivePercentage, setPositivePercentage] = useState(0);

  const addGood = () => {
    setGood(prevState => prevState + 1);
  };
  const addNeutral = () => {
    setNeutral(prevState => prevState + 1);
  };
  const addBad = () => {
    setBad(prevState => prevState + 1);
  };
  const handleFeedback = evt => {
    switch (evt) {
      case 'good':
        addGood();
        break;
      case 'neutral':
        addNeutral();
        break;
      case 'bad':
        addBad();
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const result = good + neutral + bad;
    return result;
  };

  const countPositiveFeedbackPercentage = () => {
    const result = countTotalFeedback();
    const positiveFeedback = (good * 100) / result;
    return Math.round(positiveFeedback);
  };

  return (
    <ContainerDiv>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </ContainerDiv>
  );
}
