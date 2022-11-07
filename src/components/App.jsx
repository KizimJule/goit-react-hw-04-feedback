import React, { Component } from 'react';

import { FeedbackOptions } from './feedback/FeedbackOptions/FeedbackOptions';
import { Statistics } from './feedback/Statistics/Statistics';
import { Section } from './feedback/Section/Section';
import { Notification } from './feedback/Notification/Notification';

export class App extends Component {
  static defaultProps = {
    total: 0,
    positivePercentage: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad;
    return result;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    // if (good === 0) {
    //   return 0;
    // }
    const result = this.countTotalFeedback();
    const positiveFeedback = (good * 100) / result;
    return Math.round(positiveFeedback);
  };

  handleFeedback = evt => {
    this.setState(prevState => ({ [evt]: prevState[evt] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          padding: 30,
          gap: 20,
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}
