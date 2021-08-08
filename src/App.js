import React, { Component } from 'react';
import Container from './components/Container/Container';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import buttonList from './components/FeedbackOptions/options.json';
import Notification from './components/Notification/Notification';
class App extends Component {
  static defaultProps = {
    initialGood: 0,
    initialBad: 0,
    initialNeutral: 0,
  };

  // static propTypes = {
  //   good: PropTypes.number.isRequired,
  //   neutral: PropTypes.number.isRequired,
  //   bad: PropTypes.number.isRequired,
  //   };
  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };

  onLeaveFeedback = event => {
    switch (event.target.attributes.data_content.value) {
      case 'Good':
        this.setState(prevState => ({ good: prevState.good + 1 }));
        break;
      case 'Bad':
        this.setState(prevState => ({ bad: prevState.bad + 1 }));
        break;
      default:
        this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
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
