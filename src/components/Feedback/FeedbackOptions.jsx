import PropTypes from "prop-types"
import style from "./Feedback.module.scss"

const FeedbackOptions = ({ leaveVote }) => {
  return (
    <div className={ style.btnDiv }>
      <button className={ style.btn } onClick={ () => leaveVote("good") }>Good</button>
      <button className={ style.btn } onClick={ () => leaveVote("neutral") }>Neutral</button>
      <button className={ style.btn } onClick={ () => leaveVote("bad") }>Bad</button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  leaveVote: PropTypes.func
}

export default FeedbackOptions;
