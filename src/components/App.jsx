import { Component } from "react";
import { Section, Statistics, Notification, FeedbackOptions } from 'components';
import style from "./Feedback.module.scss"

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }


  countTotal() {
    const { good, neutral, bad } = this.state
    return good + neutral + bad
  }

  countPercentage(total) {
    const { good } = this.state;
    if (total === 0) {
      return 0;
    }
    const positivePercentage = (good / total) * 100;
    return Math.round(positivePercentage);

  }

  leaveVote = (props) => {
    this.setState(prevState => {
      const value = prevState[props]
      return {
        [props]: value + 1
      }
    })


  }
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotal();
    const positivePercentage = this.countPercentage(total);
    const options = Object.keys(this.state);


    return (
      <div className={ style.container }>
        <Section title="Please Leave FeedBack" >
          <FeedbackOptions
            leaveVote={ this.leaveVote }
            options={ options } />
        </Section>
        <Section title="Statistics">
          { total > 0 ? (
            <Statistics
              good={ good }
              neutral={ neutral }
              bad={ bad }
              total={ total }
              positivePercentage={ positivePercentage }
            />
          ) : (
            <Notification message="There is no feedback" />
          ) }
        </Section>
      </div>
    );
  }
}


