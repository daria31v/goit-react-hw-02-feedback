import { BoxFeedbackOptions, Title } from './App.styled';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Component } from 'react';
// import { Section } from './Section/Section';

export class App extends Component {
  static defaultProps = {};
  static propTypes = {};

  state = {
    good: 5,
    neutral: 0,
    bad: 0,
  };
  

  leaveFeedback = ([good, neutral, bad]) => {
    return this.setState(prevState => ({ [good]: prevState.value + 1 }, 
      { [neutral]: prevState[neutral] + 1 },
      { [bad]: prevState[bad] + 1 }));
  };

  //
  countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (good, total) => {
    return (total / good) * 100;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    console.log(good, neutral, bad)
    // console.log(options);

    return (
      <BoxFeedbackOptions>
        {/* <Section title=> */}
        <Title>Please leave feedback</Title>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.leaveFeedback}
        />
        {/* </Section> */}

        {/* <Section title=> */}
        <Title>Statistics</Title>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}
        />
        {/* </Section> */}
      </BoxFeedbackOptions>
    );
  }
}



