import React, { Component } from 'react';
import Container from './components/Container/Container';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import buttonList from './components/FeedbackOptions/options.json';
import Notification from './components/Notification/Notification';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = event => {
    switch (event.target.attributes.data_content.value) {
      case 'Good':
        const prevGood = this.state.good;
        this.setState({ good: prevGood + 1 });
        break;
      case 'Bad':
        const prevBad = this.state.bad;
        this.setState({ bad: prevBad + 1 });
        break;
      default:
        const prevNeutral = this.state.neutral;
        this.setState({ neutral: prevNeutral + 1 });
    }
  };
  countTotalFeedback() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  }
  countPositiveFeedbackPercentage() {
    return (
      Math.round(
        (this.state.good /
          (this.state.good + this.state.neutral + this.state.bad)) *
          10000,
      ) / 100
    ).toFixed(2);
  }
  render() {
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={buttonList}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </Container>
    );
  }
}
export default App;
