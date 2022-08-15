import { Component } from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Notification from "./Notification";
import style from "./Feedback.module.scss"

class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }


  countTotal() {
    const { good, neutral, bad } = this.state
    return good + neutral + bad
  }

  countPercentage(props) {
    const total = this.countTotal();
    if (!total) {
      return 0;
    }
    const value = this.state[props];
    const result = (value / total) * 100;
    return Number(result.toFixed(0))
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
    const percent = this.countPercentage("good");


    return (
      <div className={ style.container }>
        <Section title="Please Leave FeedBack" >
          <FeedbackOptions
            leaveVote={ this.leaveVote } />
        </Section>
        <Section title="Statistics">
          { total > 0 ? (
            <Statistics
              good={ this.state.good }
              neutral={ this.state.neutral }
              bad={ this.state.bad }
              total={ total }
              percent={ percent }
            />
          ) : (
            <Notification message="There is no feedback" />
          ) }
        </Section>
      </div>
    );
  }
}

export default FeedBack;
