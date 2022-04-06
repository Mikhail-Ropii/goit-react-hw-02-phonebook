import { Component } from "react/cjs/react.development";
import { Statistics } from "./statistics/Statistics";
import { FeedbackOptions } from "./statistics/FeedbackOptions";
import { Container } from "./statistics/FeedbackStat.styled";
import { Section } from "./statistics/Section";
import { Notification } from "./statistics/Notification";

export class App extends Component {
      state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

  leaveFeedback = (name) => {
    this.setState(prevState => ({ [name]: (prevState[name] + 1) }))
  }
  
  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = Object.values(this.state).reduce((sum, current) => sum + current, 0);
    const countPositiveFeedbackPercentage = Math.round(good / countTotalFeedback * 100);
return (
    <Container>
      <Section title="Please leave feedback">
    <FeedbackOptions options={this.state} onLeaveFeedback={this.leaveFeedback}/>
      </Section>
      <Section title="Statistics">
      {countTotalFeedback ? <Statistics
        good={good} neutral={neutral} bad={bad} total={countTotalFeedback} positivePercentage={countPositiveFeedbackPercentage}
      />
        :  <Notification message="There is no feedback"/>
      }
    </Section>
      </Container>
  );
  }
  
};
