import { BoxFeedbackOptions, Title } from './App.styled';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Component } from 'react';
// import { Section } from './Section/Section';

export class App extends Component {
  static defaultProps = {};
  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // 
  // countTotalFeedback = () => {
  //     
      
  // }


  render() {
    const value = this.state;
    const total = value.good + value.neutral + value.bad;
    
    return ( 
      <BoxFeedbackOptions>
        
        {/* <Section title=> */}
          <Title>Please leave feedback</Title>
          <FeedbackOptions />
        {/* </Section> */}
                 
        {/* <Section title=> */}
          <Title>Statistics</Title>
          <Statistics
          good={value.good} neutral={value.neutral} bad={value.bad}
          total={total}
          // positivePercentage={ }
          />
        {/* </Section> */}
        
      </BoxFeedbackOptions>
    );
  }
}
