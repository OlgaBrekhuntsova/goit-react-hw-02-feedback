import React, { Component } from 'react';
import Container from './components/Container/Container';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions options={0} onLeaveFeedback={0} />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.good + this.state.neutral + this.state.bad}
            positivePercentage={0}
          >
            <Notification message="No feedback given"></Notification>
          </Statistics>
        </Section>
      </Container>
    );
  }
}
export default App;
